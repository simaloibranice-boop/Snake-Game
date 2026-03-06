const express = require("express")
const http = require("http")
const { Server } = require("socket.io")

const app = express()
const server = http.createServer(app)

const io = new Server(server,{
cors:{origin:"*"}
})

app.use(express.static("../public"))

let players = {}

io.on("connection",(socket)=>{

players[socket.id]={
x:200,
y:200,
score:0
}

io.emit("players",players)

socket.on("move",(data)=>{
players[socket.id].x=data.x
players[socket.id].y=data.y
io.emit("players",players)
})

socket.on("disconnect",()=>{
delete players[socket.id]
})

})

server.listen(3000,()=>{
console.log("Multiplayer server running")
})
