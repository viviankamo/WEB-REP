const { static } = require('express')
const express = require('express')
const dbModule = require('./dBModule')
const MessageModel = require('./MessageModel')
const app = express()
const port = 3000

const staticDir = __dirname + '\\client\\'

app.use(express.static(staticDir))

app.use(express.json())
app.use(express.urlencoded())

app.post('/', function (req, res) {

    const message = MessageModel.createMessage(req.body.message, req.body.message)
    dbModule.storeElement = message
    
    res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))