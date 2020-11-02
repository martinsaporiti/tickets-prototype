
// Stablish connection with server
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log("Connection Stablished");
})

socket.on('disconnect', () => {
    console.log("Connection lost!");
})


socket.on('start', (ticketNumber) => {
    label.text(ticketNumber.actual);
})

$('button').on('click', () => {
    socket.emit('nextTicket', null, (nextTicket)=>{
        label.text(nextTicket);
    });
})