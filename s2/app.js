const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3003;

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



app.post('/cookie', (req, res) => {

    if (req.body.delete) {
        res.cookie('cookieMonster', '', { maxAge: -3600 });
    } else {
        res.cookie('cookieMonster', req.body.text, { maxAge: 3600 });
    }

    res.json({ msg: 'OK' });
});



// API
app.get('/numbers', (req, res) => {
    let allData = fs.readFileSync('./data/numbers.json', 'utf8');
    allData = JSON.parse(allData);
    res.json(allData);
});

app.post('/numbers', (req, res) => {
    let allData = fs.readFileSync('./data/numbers.json', 'utf8');
    allData = JSON.parse(allData);
    const id = uuidv4();
    const data = {
        number: req.body.number,
        id
    };
    allData.push(data);
    allData = JSON.stringify(allData);
    fs.writeFileSync('./data/numbers.json', allData, 'utf8');
    res.json({
        message: { text: 'New number is saved', 'type': 'success' }
    });
});


app.delete('/numbers/:id', (req, res) => {
    let allData = fs.readFileSync('./data/numbers.json', 'utf8');
    allData = JSON.parse(allData);
    let deletedData = allData.filter(d => req.params.id !== d.id);
    deletedData = JSON.stringify(deletedData);
    fs.writeFileSync('./data/numbers.json', deletedData, 'utf8');
    res.json({ message: { text: 'The Number was deleted', 'type': 'danger' } });
});


app.put('/numbers/:action/:id', (req, res) => {
    let allData = fs.readFileSync('./data/numbers.json', 'utf8');
    allData = JSON.parse(allData);
    let editedData;
    if (req.params.action == 'add') {
        editedData = allData
            .map(d => req.params.id === d.id ? {...d, number: d.number + req.body.number } : {...d });
    } else if (req.params.action == 'rem') {
        editedData = allData
            .map(d => req.params.id === d.id ? {...d, number: d.number - req.body.number } : {...d });
    }
    editedData = JSON.stringify(editedData);
    fs.writeFileSync('./data/numbers.json', editedData, 'utf8');

    res.json({ message: { text: 'Number was edited', 'type': 'info' } });
});

app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
});