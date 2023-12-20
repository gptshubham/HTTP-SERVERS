const express = require("express")
const app = express()
const port = 3001

app.get("/",function(req,res){
    res.send("I'm Hacking your system. Switch off your divice within 1 minute to escape.")
})

app.listen(port)