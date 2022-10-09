const chat = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
var socket = io();

socket.on('message',msg=>{
    //console.log(message)
    outPutMessage(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
})

chat.addEventListener('submit',data=>{
    data.preventDefault();
    const msg = data.target.elements.msg.value;
    socket.emit('chatMsg',msg);
    data.target.elements.msg.value = '';
    data.target.elements.msg.focus();
})

function outPutMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="text">${message}</p>`
    document.querySelector('.chat-messages').appendChild(div);
}




