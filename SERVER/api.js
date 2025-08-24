const express = require("express")
const router = express.Router()

let ans_list = ["willaim", "adam"]

router.get("/list", (req, res) => {
    try {
        const response = ans_list;
        res.json(response.map((v) => { return `List Names : ${v}` }))
    } catch (error) {
        res.send({ "error": error.message })
    }
})

router.post("/list", (req, res) => {
    try {
        ans_list.push(req.body.name);
        res.send("OK")
    } catch (error) {
        res.send(error.message)
    }
})

router.use("/{*any}",(req,res)=>{
    res.status(404).send("NOT FOUND")
})

module.exports = router