const express = require('express')
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const api_router = require("./api")
const path = require("path")

if (process.env.CORS_ENABLED === "true") {
    console.log("CORS ENABLED")
    app.use(cors())
}

app.use(express.json())
app.use("/api", api_router);

app.use(express.static(path.join(__dirname, "../CLIENT/dist")))
app.get("/{*any}", (req, res) => {
    return res.sendFile(path.join(__dirname, "../CLIENT/dist/index.html"))
})

module.exports = app;