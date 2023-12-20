const express = require('express')
const app = express()
const port = 3000
// create a todo app that lets users store their todos on the server
// try to create an http server from scratch in c
// create an http server in Rust using antix-web
// create an http server in golang using the gurrila framework
// springboot java
app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port)