
const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control')


let ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.emit('start', {
        actual: ticketControl.getLastTicket(),
        lastFour : ticketControl.getLastFour()
    })

    client.on('nextTicket', (data, callback)=>{
        let next = ticketControl.next();
        callback(next);
    })


    client.on('takeTicket', (data, callback) => {

        if(!data.desk){
            return  callback({
                err: true,
                message: 'Desk is required'
            })
        }

        let atendTicket = ticketControl.takeTicket( data.desk );

        callback(atendTicket);

        client.broadcast.emit('lastFour', {
            lastFour: ticketControl.getLastFour()
        });
    });

})