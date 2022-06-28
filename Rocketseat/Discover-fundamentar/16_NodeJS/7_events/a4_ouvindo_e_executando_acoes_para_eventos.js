const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => {
  console.log(' Eu ouvi voce', message)
})

ev.emit('saySomething', 'Matheus')
ev.emit('saySomething', 'joao')
ev.emit('saySomething', 'gigi')