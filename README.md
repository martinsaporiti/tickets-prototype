# Queue of Tickets Prototype.

## Intro
This prototype was developed with nodejs and sockets. It shows how to resolve the typical problem of queues of tickets.

You can think in the case of one bank. When one user comes, he takes a ticket with a number and waits for a free desk to make an operation. 

After a time, one employee of the bank can take a ticket with a number from the queue. Now, the user that has that number and was waiting is notified (views his ticket number and the assigned desk on a screen).

Watch [Demo](https://youtu.be/oLjeVvUVuyo).

## Dependencies Installation.

```bash
npm install
```

## Run!

```bash
node server/server.js
```

## Libs
* socket.io
* express







