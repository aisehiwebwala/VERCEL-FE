const express = require('express')
const app = express()
const cors = require("cors")
const api_router = require("./api")
const path = require("path")

app.use(cors())
app.use(express.json())
app.use("/api",api_router);

app.use(express.static(path.join(__dirname,"../CLIENT/dist")))
app.get("/{*any}",(req,res)=>{
    return res.sendFile(path.join(__dirname,"../CLIENT/dist/index.html"))
})

module.exports = app;