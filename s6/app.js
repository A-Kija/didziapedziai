const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');

const app = express();
const port = 3003;
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dp2'
});

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const doAuth = function(req, res, next) {

    if (req.url.indexOf('/numbers') === 0) {
        const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
        const user = req.cookies.magicNumberSession ?
            users.find(u => u.session === req.cookies.magicNumberSession) :
            null;
        if (user && (user.role === 'admin' || user.role === 'manager')) {
            next();
        } else {
            res.status(401).json({});
        }
    } else if (req.url.indexOf('/users') === 0) {
        const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
        const user = req.cookies.magicNumberSession ?
            users.find(u => u.session === req.cookies.magicNumberSession) :
            null;
        if (user && (user.role === 'admin')) {
            next();
        } else {
            res.status(401).json({});
        }
    } else {
        next();
    }


}

// app.use(doAuth);

const convertPhoto = (photo) => {
    let type = 'unknown';
    let file = null;
    if (photo === null) {
        return [type, file];
    }
    if (photo.indexOf('data:image/png;base64,') === 0) {
        type = 'png';
        file = Buffer.from(photo.replace('data:image/png;base64,', ''), 'base64');
    } else if (photo.indexOf('data:image/jpeg;base64,') === 0) {
        type = 'jpg';
        file = Buffer.from(photo.replace('data:image/jpeg;base64,', ''), 'base64');
    } else {
        file = Buffer.from(photo, 'base64');
    }
    return [type, file];
}

const createPhoto = (photo) => {
    const [type, file] = convertPhoto(photo);
    if (file === null) {
        return null
    }
    const fileName = uuidv4() + '.' + type;
    fs.writeFileSync('./public/img/' + fileName, file);
    return fileName
}

const deletePhoto = (id) => {
    const sql = `
        SELECT photo
        FROM districts
        WHERE id = ?
    `;
    con.query(sql, [id], (err, result) => {
        if (err) throw err;
        if (result[0].photo) {
            fs.unlinkSync('./public/img/' + result[0].photo);
        }
    });
}

//*************** FRONT OFFICE ********************/

// SELECT column_name(s) FROM table1
// UNION ALL
// SELECT column_name(s) FROM table2;

app.get('/common-list', (req, res) => {
    const sql = `
        SELECT 'section' AS type, '' AS photo, id, title
        FROM sections
        UNION
        SELECT 'district', photo, id, title
        FROM districts
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ data: result });
    });
});

app.get('/comments/:did/:sid', (req, res) => {
    const sql = `
        SELECT id, 'district' AS type, title AS data
        FROM districts
        WHERE id = ?
        UNION
        SELECT id, 'section', title
        FROM sections
        WHERE id = ?
        UNION
        SELECT id, 'comment', comment
        FROM comments
        WHERE section_id = ? AND district_id = ? AND show_it = 1
    `;
    con.query(sql, [req.params.did, req.params.sid, req.params.sid, req.params.did], (err, result) => {
        if (err) throw err;
        res.json({ data: result });
    });
});

app.post('/comments/:did/:sid', (req, res) => {
    const sql = `
        INSERT INTO comments (comment, district_id, section_id)
        VALUES (?, ?, ?)
    `;
    con.query(sql, [req.body.text, req.params.did, req.params.sid], (err, result) => {
        if (err) throw err;
        res.json({
            msg: { text: 'Jūsų pasiūlymas priimtas', type: 'info' }
        });
    });
});

//*************** COMMENTS ********************/

app.get('/admin/comments', (req, res) => {
    const sql = `
        SELECT c.id, comment, show_it, d.title AS district, s.title AS section
        FROM comments AS c
        INNER JOIN districts AS d
        ON c.district_id = d.id
        INNER JOIN sections AS s
        ON c.section_id = s.id
        ORDER BY c.id DESC
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ data: result });
    });
});

app.put('/admin/comments-edit/:id', (req, res) => {

    const sql = `
        UPDATE comments
        SET show_it = IF(show_it = 1, 0, 1)
        WHERE id = ?
    `;
    params = [req.params.id];

    con.query(sql, params, (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'Pasiūlymo statusas pakeistas', type: 'info' }
        });
    });
});

app.delete('/admin/comments/:id', (req, res) => {

    const sql = `
        DELETE FROM comments
        WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'Komentaras panaikintas. Nebėra.', type: 'info' }
        });
    });
});


//*************** SECTIONS ********************/

app.get('/admin/sections', (req, res) => {
    const sql = `
        SELECT id, title
        FROM sections
        ORDER BY title
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ data: result });
    });
});

app.get('/admin/sections/:id', (req, res) => {
    const sql = `
        SELECT id, title
        FROM sections
        WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ data: result[0] });
    });
});


app.post('/admin/sections', (req, res) => {
    const sql = `
        INSERT INTO sections (title)
        VALUES (?)
    `;
    con.query(sql, [req.body.title], (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'Nauja sritis pridėta', type: 'success' }
        });
    });
});

app.delete('/admin/sections/:id', (req, res) => {

    const sql = `
        DELETE FROM sections
        WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'Sritis ištrinta', type: 'info' }
        });
    });
});




app.put('/admin/sections/:id', (req, res) => {

    const sql = `
        UPDATE sections
        SET title = ? 
        WHERE id = ?
    `;
    params = [req.body.title, req.params.id];

    con.query(sql, params, (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'Sritis pakeista', type: 'info' }
        });
    });
});


//*************** DISTRICTS ********************/

app.get('/admin/districts', (req, res) => {
    const sql = `
        SELECT id, title, photo
        FROM districts
        ORDER BY title
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ data: result });
    });
});

app.get('/admin/districts/:id', (req, res) => {
    const sql = `
        SELECT id, title, photo
        FROM districts
        WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ data: result[0] });
    });
});

app.post('/admin/districts', (req, res) => {
    const sql = `
        INSERT INTO districts (title, photo)
        VALUES (?, ?)
    `;
    con.query(sql, [req.body.title, createPhoto(req.body.file)], (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'Naujas rajonas pridėtas', type: 'success' }
        });
    });
});

app.delete('/admin/districts/:id', (req, res) => {

    deletePhoto(req.params.id);

    sql = `
        DELETE FROM districts
        WHERE id = ?
    `;

    con.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'Rajonas ištrintas', type: 'info' }
        });
    });
});


app.put('/admin/districts/:id', (req, res) => {

    let sql;
    fileName = createPhoto(req.body.file);

    if (fileName || req.body.delImg) {
        deletePhoto(req.params.id);
        sql = `
            UPDATE districts
            SET title = ?, photo = ?
            WHERE id = ?
        `;
        params = [req.body.title, fileName, req.params.id];
    } else {
        sql = `
            UPDATE districts
            SET title = ?
            WHERE id = ?
        `;
        params = [req.body.title, req.params.id];
    }

    con.query(sql, params, (err) => {
        if (err) throw err;
        res.json({
            msg: { text: 'Rajonas pakeistas', type: 'info' }
        });
    });
});


//*************** LOGIN ********************/

app.post('/login', (req, res) => {
    const sessionId = uuidv4();

    const sql = `
        UPDATE users
        SET session = ?
        WHERE name = ? AND psw = ?
    `;

    con.query(sql, [sessionId, req.body.name, md5(req.body.psw)], (err, result) => {
        if (err) throw err;
        if (result.affectedRows) {
            res.cookie('treesSession', sessionId);
            res.json({
                status: 'ok',
                name: req.body.name
            });
        } else {
            res.json({
                status: 'error',
            });
        }
    });

});

app.post('/logout', (req, res) => {
    res.cookie('treesSession', '');
    res.json({
        status: 'logout',
    });
});



app.get('/login', (req, res) => {

    const sql = `
        SELECT name
        FROM users
        WHERE session = ?
    `;
    con.query(sql, [req.cookies.treesSession || ''], (err, result) => {
        if (err) throw err;

        if (result.length) {
            res.json({
                status: 'ok',
                name: result[0].name,
            });
        } else {
            res.json({
                status: 'error',
            });
        }

    });

});



app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
});