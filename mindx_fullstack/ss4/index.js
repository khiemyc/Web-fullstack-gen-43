const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.get('/', (req, res) => {
    res.json({
        name: 'bui thanh khiem',
        age: 34,
        address: 'Hai duong'
    })
})
app.use(express.static('css'))

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'home.html'))
})

app.get('/content', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'html/content.html'))
})