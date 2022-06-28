const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.emit('saySomething')
ev.emit('saySomething')