# Queue of Tickets Prototype.

## Intro
This prototype was written in nodejs and sockets intents to resolve the typical problem of queues of tickets.

You can think in the case of one bank. When one user comes, he takes a ticket with a number and waits for a free desk to make an operation. 

After a time, one employee of the bank can take a ticket with a number from the queue. Now, the user that has that number and was waiting is notified (views his ticket number and desk in a tv).

Watch [Demo](https://youtu.be/oLjeVvUVuyo).

## Installation & Start.

```bash
npm install
```

```bash
node server/server.js
```


## Libs
* socket.io
* express







