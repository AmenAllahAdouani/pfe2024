const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsersModel = require("./model/Users")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Users");

app.post("/Preferences", (req, res) => {
    UsersModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})