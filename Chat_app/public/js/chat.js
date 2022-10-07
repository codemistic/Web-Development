const socket = io()

//elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
//element in which template is rendered
const $messages = document.querySelector('#messages')

//templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML

//Options (remove ? in url and get user data)
const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

const autoscroll = () => {
    // New message element
    const $newMessage = $messages.lastElementChild
    // Height of the new message
    const newMessageStyles = getComputedStyle($newMessage)
    const newMessageMargin = parseInt(newMessageStyles.marginBottom)
    const newMessageHeight = $newMessage.offsetHeight + newMessageMargin
    // Visible height
    const visibleHeight = $messages.offsetHeight
    // Height of messages container
    const containerHeight = $messages.scrollHeight
    // How far have I scrolled?
    const scrollOffset = $messages.scrollTop + visibleHeight
    if (containerHeight - newMessageHeight <= scrollOffset) {
        $messages.scrollTop = $messages.scrollHeight
    }
}

//getting data from server in text form
socket.on('message', (message) => {
    console.log(message)

    // Render the template with the message data
    const html = Mustache.render(messageTemplate, {
        username: message.username,
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    // Insert the template into the DOM
    $messages.insertAdjacentHTML('beforeend', html)
    autoscroll()
})

//getting location url data from server in hyperlink form
socket.on('locationMessage', (message) => {
    console.log(message)

    // Render the template with the url data
    const html = Mustache.render(locationMessageTemplate, {
        username: message.username,
        url: message.url,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    // Insert the template into the DOM
    $messages.insertAdjacentHTML('beforeend', html)
    autoscroll()
})

socket.on('roomData', ({ room, users }) => {
    const html = Mustache.render(sidebarTemplate, {
        room,
        users
    })
    document.querySelector('#sidebar').innerHTML = html
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // Disable button till processing is ongoing (till message delivered or an error occurs)
    //setAttribute(name, value)
    $messageFormButton.setAttribute('disabled', 'disabled')

    //getting the input given by user
    const message = e.target.elements.message.value

    //sending data to server and server confirms it with Acknowledgement
    socket.emit('sendMessage', message, (error) => {

        // Enable buttons after processing is done
        $messageFormButton.removeAttribute('disabled')
        // Clear the text from the input after msg is send
        $messageFormInput.value = ''
        // Shift focus back to the input, curssor will be back to text box
        $messageFormInput.focus()

        if (error) {
            return console.log(error)
        }
        console.log('Message delivered!')
    })
})

$sendLocationButton.addEventListener('click', () => {
    //checking wheather their browser is supporting "auto location detection" feature or not
    //if navigator.geolocation does not exist --> feature is not supported
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }

    // Disable button till processing is ongoing (till location delivered or an error occurs)
    //setAttribute(name, value)
    $sendLocationButton.setAttribute('disabled', 'disabled')

    //fetching current location
    navigator.geolocation.getCurrentPosition((position) => {
        //sending location to server and server confirms it with Acknowledgement
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            // Enable buttons after processing is done
            $sendLocationButton.removeAttribute('disabled')
            console.log('Location shared!')
        })
    })
})

//send user data to server with error acknowledgement
socket.emit('join', { username, room }, (error) => {
    if (error) {
        alert(error)
        location.href = '/'
    }
})
