const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.once('saySomething', (message) => {
  console.log(' Eu ouvi voce', message)
})

ev.emit('saySomething', 'joao')
ev.emit('saySomething', 'gigi')