// Stablish connection with server
var socket = io();


var searchParams = new URLSearchParams(window.location.search);

if(! searchParams.has('escritorio') ){
    window.location = 'index.html';
    throw new Error('Desk is required')
} else {
    var desk = searchParams.get('escritorio')
    console.log(desk);
}

var label = $('small');

$('h1').text('Desk: ' + desk)


$('button').on('click', function(){

    socket.emit('takeTicket', {
        desk: desk
    }, function(resp){
        
        
        if(resp === 'No pending tickets') {
            label.text(resp);
            // alert(resp);
            return 
        }

        label.text(resp.number);

    });
})