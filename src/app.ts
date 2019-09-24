import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import socketIo from 'socket.io'

import routes from './routes'
import { Server, createServer } from 'http'

class App {
    public express: express.Application
    public io: SocketIO.Server
    public server: Server;

    constructor () {
      this.express = express()
      this.middlewares()
      this.database()
      this.routes()
      this.socket()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      mongoose.connect('mongodb://root:toor@localhost:27017/testePbx?authSource=admin', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    }

    private routes (): void {
      this.express.use(routes)
    }

    private socket (): void {
      this.server = createServer(this.express)
      this.io = socketIo(this.server)
    }

    private listen (): void{
     this.io.on('connection', (socket: any) => {
       socket.on('new_url', async (url) => {
         let msg = await
       })
     })
    }
}

export default new App().express
