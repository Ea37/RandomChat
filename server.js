const express = require('express')
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')

const PORT = process.env.PORT || 3773
const localhost = "127.0.0.1"

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.sendFile("public/index.html");
});

io.on('connection', (socket)=> {
    console.log('User connected..');
    socket.on('chat message', (msg)=>{
        console.log(`Message: ${msg}`);
    });
});

server.listen(PORT, ()=>{
    console.log(`Server started running at http://${localhost}:${PORT}`);
});