const express = require("express")
const app = express()
const port = process.env.PORT || 5000

//allow cors
var cors = require('cors')
app.use(cors())

// parse application/x-www-form-encoded and application/json
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
})); app.use(bodyParser.json())

//routes
const user = require('./routes/user')

//connect to mongoose
const mongoose = require('mongoose')
mongoose.connect(
    "mongodb+srv://testuser:testuser@cluster0.7t5ar.mongodb.net/iprofile?retryWrites=true&w=majority",
    { useNewUrlParser: true }
)

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("connected to db")
})

app.get('/', (req, res) => {
    res.send("hello")
})

// app.use('/user', user)

app.listen(port, () => console.log("listening at port", port))
