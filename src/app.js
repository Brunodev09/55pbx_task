const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')

const routes = require('./routes')
const extrator = require('./controllers/extractor')

app.use('/', routes)

app.use(express.static(path.resolve(__dirname, 'app/public')))

io.on('connection', (socket) => {
  socket.on('new_url', async (url) => {
    const msg = await extrator.extract(url)
    io.emit('return_url', msg)
  })
})

module.exports = { http }
