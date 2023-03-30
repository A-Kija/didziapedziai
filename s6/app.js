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