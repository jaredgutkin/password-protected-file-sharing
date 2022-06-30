require('dotenv').config()
const multer = require('multer')
const mongoose = require('mongoose')
const express = require('express')
const PORT = process.env.PORT || 3000
const upload = multer({ dest: 'uploads'})

const app = express()

mongoose.connect(process.env.DATABASE_URL)

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('hi')
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})