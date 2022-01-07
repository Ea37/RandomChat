window.addEventListener('load', ()=> {
    const socket = io();

    const form = document.getElementById('form');
    const chatBox = document.getElementById('message-box');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        if(chatBox.value){
            socket.emit('chat message', chatBox.value);
            chatBox.value = '';
        }
    });
});