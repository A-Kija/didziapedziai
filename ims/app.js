const express = require('express');
const app = express();
const cors = require('cors');
const port = 3003;
app.use(cors());
app.use(express.static('public'));

app.post('/post', (req, res) => {
    res.json({ message: 'Hello from server' });
});

app.delete('/delete', (req, res) => {
    res.json({ message: 'Hello from server' });
});

app.put('/put', (req, res) => {
    res.json({ message: 'Hello from server' });
});

app.listen(port, () => {
    console.log(`SERVER is on port number: ${port}`);
});