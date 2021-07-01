const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/key')
const cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT || 5000

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
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}