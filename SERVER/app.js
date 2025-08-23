const express = require('express')
const app = express()
const cors = require("cors")
const api_router = require("./api")

app.use(cors())
app.use(express.json())
app.use("/api",api_router);
app.get('/', (req, res) => res.send('Hello Dunia!'))

module.exports = app;