const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');

const app = express();
const port = 3003;

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dp1'
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


// SELECT column1, column2, ...
// FROM table_name;

app.get('/trees', (req, res) => {
    const sql = `
        SELECT id, title, height, type
        FROM trees
        WHERE type <> 3
        ORDER BY type desc, title
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);

app.post('/trees', (req, res) => {
    const sql = `
        INSERT INTO trees (title, height, type)
        VALUES (?, ?, ?)
    `;
    con.query(sql, [req.body.title, req.body.height, req.body.type], (err) => {
        if (err) throw err;
        res.json({});
    });
});


// DELETE FROM table_name WHERE condition;

app.delete('/trees/:id', (req, res) => {
    const sql = `
        DELETE FROM trees
        WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.json({});
    });
});


// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

app.put('/trees/:id', (req, res) => {
    const sql = `
        UPDATE trees
        SET title = ?, height = ?, type = ?
        WHERE id = ?
    `;
    con.query(sql, [req.body.title, req.body.height, req.body.type, req.params.id], (err) => {
        if (err) throw err;
        res.json({});
    });
});


app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
});