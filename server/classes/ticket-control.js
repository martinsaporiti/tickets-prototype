
const fs = require('fs');

// Internal class that represent a Ticket...
class Ticket {
    
    constructor(number, desk){
        this.number = number;
        this.desk = desk;
    }
}


// TicketControll class managed the Queues of Tickets
class TicketControl {

    constructor() {
        this.last = 0;
        this.today = new Date().getDate();
        this.tickets = [];
        this.lastFour = [];

        // load data...
        let data = require('../data/data.json');
        console.log(data);

        if(data.today === this.today){
            this.last = data.last;
            this.tickets = data.tickets;
            this.lastFour = data.lastFour
        } else {
            this.restart();
        }
    }

    // Save updated info in data.json.
    restart() {
        this.last = 0;
        this.tickets = [];
        this.lastFour = []
        this.saveFile();
    }


    // Increment and save data.
    next(){ 
        this.last++;
        var ticket = new Ticket(this.last, null);
        this.tickets.push(ticket);
        this.saveFile();
        return this.last;
    }

    getLastTicket(){
        return `${this.last}`;
    }

    getLastFour(){
        return this.lastFour;
    }


    takeTicket( desk ) {
        
        if(this.tickets.length === 0){
            return "No pending tickets"
        } 

        let pedingTicket = this.tickets[0];

        // Remove the ticket at the first.
        this.tickets.shift();

        let ticket = new Ticket(pedingTicket.number, desk);
        
        // Put the new ticket first.
        this.lastFour.unshift(ticket);

        // If the Queue is fully...remove last.
        if( this.lastFour.length > 4 ){
        
            // Remove the last ticket...
            this.lastFour.splice(-1, 1); 
        }
        
        // Save data...
        this.saveFile();
        
        return ticket;
    }   


    // save status on data.json.
    saveFile(){

        let jsonData = {
            last: this.last,
            today: this.today,
            tickets: this.tickets,
            lastFour : this.lastFour
        }
    
        // Update info in file.
        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataString);
    }

}



module.exports = {
    TicketControl
}