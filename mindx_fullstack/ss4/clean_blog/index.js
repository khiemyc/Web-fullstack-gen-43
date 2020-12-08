const express = require('express')
const app = express();
const path = require('path')
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve, 'public/index.html')
// })
app.get('/', (req, res) => {
    res.render('index')
})
app.listen(3001, () => {
    console.log('listen on port 3001')
})
