const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

const app = express()
const server = http.createServer(app)

const io = new Server(server,{
cors:{origin:"*"}
})

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

let players = {}

io.on("connection",(socket)=>{

console.log("Player connected",socket.id)

players[socket.id]={x:200,y:200}

socket.emit("players",players)

socket.on("move",(data)=>{
players[socket.id]=data
io.emit("players",players)
})

socket.on("disconnect",()=>{
delete players[socket.id]
})

})

server.listen(3000,()=>{
console.log("Server running on port 3000")
})


const db = require("../database/db")

app.post("/score",async(req,res)=>{

const {player,score}=req.body

await db.query(
"INSERT INTO scores(player,score) VALUES($1,$2)",
[player,score]
)

res.send("Score saved")

})