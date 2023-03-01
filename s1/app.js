const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3003;

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());



// API
app.get('/dices', (req, res) => {
    let allData = fs.readFileSync('./data.json', 'utf8');
    allData = JSON.parse(allData);
    res.json(allData);
});

app.post('/dices', (req, res) => {
    let allData = fs.readFileSync('./data.json', 'utf8');
    allData = JSON.parse(allData);
    const data = {...req.body };
    data.id = uuidv4();
    allData.push(data);
    allData = JSON.stringify(allData);
    fs.writeFileSync('./data.json', allData, 'utf8');

    res.json({ message: 'OK' });
});






app.listen(port, () => {
    console.log(`Dices is on port number: ${port}`);
});