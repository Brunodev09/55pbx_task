const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const favicon = require('serve-favicon')
const Images = require('./model/imageSchema')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const ext = require('./controller/extractor')

app.use(favicon(path.resolve(__dirname, './images/favicon.ico')))

mongoose.connect('mongodb://root:toor@localhost:27017/testePbx?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/images/', express.static(__dirname + '/images'))
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/view/index.html')
})

io.on('connection', function (socket) {
  socket.on('send url', async (data) => {
    const resp = await ext.extract(data)

    const found = new Images(resp)
    await found.save()
    io.emit('receive url', resp)
  })
})

server.listen(3000)
