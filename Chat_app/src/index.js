const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage, generateLocationMessage } = require('./utils/messages')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/users')

// Create the Express application
const app = express()

// Create the HTTP server using the Express app
const server = http.createServer(app)

// Connect socket.io to the HTTP server
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// Listen for new connections to Socket.io
io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    //getting data from user
    socket.on('join', (options, callback) => {

        // Validate/track user
        const { error, user } = addUser({ id: socket.id, ...options })
        // If error, send message back to client
        if (error) {
            return callback(error)
        }

        // Join the room
        socket.join(user.room)
        // Welcome the user to the room
        socket.emit('message', generateMessage('Admin', 'Welcome!'))
        // Broadcast an event to everyone in the room
        socket.broadcast.to(user.room).emit('message', generateMessage(`${user.username} has joined!`))

        // After a user joins
        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        })

        callback()
    })

    //receving data from a user
    socket.on('sendMessage', (message, callback) => {
        //Get the username
        const user = getUser(socket.id)
        //check for bad words or profanity and sending Acknowledgement to user
        const filter = new Filter()
        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed!')
        }
        //sending data to all the users of that room (if valid) and sending Acknowledgement to user
        io.to(user.room).emit('message', generateMessage(user.username, message))
        callback()
    })

    //receving latitude longitude from user
    socket.on('sendLocation', (coords, callback) => {
        // Get the username and room for the user
        const user = getUser(socket.id)
        // Emit the message to just that room
        io.to(user.room).emit('locationMessage', generateLocationMessage(user.username, `https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        // Send an acknowledgement to the client
        callback()
    })

    //Listen for disconnected connections to Socket.io
    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if (user) {
            //sending message to all the user,  After a user leaves
            io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left!`))
            // After a user leaves
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: getUsersInRoom(user.room)
            })
        }
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})