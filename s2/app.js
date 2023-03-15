const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');

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

const doAuth = function(req, res, next) {

    if (req.url.indexOf('/numbers') === 0) {
        const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
        const user = req.cookies.magicNumberSession ?
            users.find(u => u.session === req.cookies.magicNumberSession) :
            null;
        console.log(req.cookies)
        if (user) {
            next();
        } else {
            res.status(401).json({});
        }
    } else {
        next();
    }


}

app.use(doAuth);

app.post('/cookie', (req, res) => {

    if (req.body.delete) {
        res.cookie('cookieMonster', '', { maxAge: -3600 });
    } else {
        res.cookie('cookieMonster', req.body.text, { maxAge: 3600 });
    }

    res.json({ msg: 'OK' });
});


app.post('/login', (req, res) => {
    const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
    const name = req.body.name;
    const psw = md5(req.body.psw);

    const user = users.find(u => u.name === name && u.psw === psw);
    if (user) {
        const sessionId = md5(uuidv4()); // Turi buti normali kroptografija!!!
        user.session = sessionId;

        fs.writeFileSync('./data/users.json', JSON.stringify(users), 'utf8');
        res.cookie('magicNumberSession', sessionId);
        res.json({
            status: 'ok',
            name: user.name
        });
    } else {
        res.json({
            status: 'error',
        });
    }
});

app.post('/logout', (req, res) => {
    res.cookie('magicNumberSession', '***');
    res.json({
        status: 'logout',
    });
});

app.get('/login', (req, res) => {
    const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
    const user = req.cookies.magicNumberSession ?
        users.find(u => u.session === req.cookies.magicNumberSession) :
        null;

    if (user) {
        res.json({
            status: 'ok',
            name: user.name,
            role: user.role
        });
    } else {
        res.json({
            status: 'error',
        });
    }


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


// users
app.get('/users', (req, res) => {
    let allData = fs.readFileSync('./data/users.json', 'utf8');
    allData = JSON.parse(allData);
    res.json(allData);
});

app.post('/register', (req, res) => {
    let allData = fs.readFileSync('./data/users.json', 'utf8');
    allData = JSON.parse(allData);
    const id = uuidv4();
    const data = {
        role: 'manager',
        name: req.body.name,
        psw: md5(req.body.psw),
        id
    };
    allData.push(data);
    allData = JSON.stringify(allData);
    fs.writeFileSync('./data/users.json', allData, 'utf8');
    res.json({
        status: 'ok'
    });
});

app.delete('/users/:id', (req, res) => {
    let allData = fs.readFileSync('./data/users.json', 'utf8');
    allData = JSON.parse(allData);
    const userToDelete = allData.find(d => req.params.id === d.id);
    if (userToDelete.role === 'admin') {
        res.status(400).json({});
    } else {
        let deletedData = allData.filter(d => req.params.id !== d.id);
        deletedData = JSON.stringify(deletedData);
        fs.writeFileSync('./data/users.json', deletedData, 'utf8');
        res.json({ message: { text: 'The User was deleted', 'type': 'info' } });
    }
});

app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
});