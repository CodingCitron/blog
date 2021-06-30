const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/key')
const cookieParser = require('cookie-parser')

const app = express()
const port = 5000

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/api/user', require('./routes/user'));
app.use('/api/list', require('./routes/list'));
