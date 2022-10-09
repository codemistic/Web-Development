const express  = require('express');
const app      = express();
const http     = require('http')
const socketio = require('socket.io')
const server   = http.createServer(app);
const io       = socketio(server)

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send("Welcome to Discuss");
});

io.on('connection',(socket)=>{
    console.log('A user connected');

    socket.emit('message','Welcome to Discuss')

    socket.on('chatMsg',msg =>{
        io.emit('message',msg)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected'); 
      });
})


const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Discuss is running at PORT:${PORT}`);
});