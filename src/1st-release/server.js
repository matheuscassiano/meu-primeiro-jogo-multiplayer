import express from 'express'
import http from 'http'
import createGame from './public/game.js'
import socketio from 'socket.io'

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

app.use(express.static('public'))

const game = createGame()
//game.addPlayer({playerId: socket.id, playerX:10, playerY:9})

console.log(game.state)

sockets.on('connection', (socket) => {
    const playerId = socket.id
    console.log(`> Player connected on Server with id: ${playerId}`)

    socket.emit('setup', game.state)
})

server.listen(3000, () => {
    console.log(`> Sever listening on port: 3000`)
})
