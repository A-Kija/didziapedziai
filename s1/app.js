const express = require('express');
const app = express();
const port = 3003;

const menu = `
<a href="/">home</a>
<a href="/racoon">racoon</a>
<a href="/fox">fox</a>
`;

app.get('/', (req, res) => {
    res.send(`
    ${menu}
    <h1>Hello Forest!</h1>
    `);
});

app.get('/racoon', (req, res) => {
    res.send(`
    ${menu}
    <h1>Hello RACOON!</h1>
    `);
});

app.get('/fox', (req, res) => {
    res.send(`
    ${menu}
    <h1>Hello FOX!</h1>
    `);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});