
//event-driven architecture 
//Observer pattern
//Node js Events


const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
  console.log(`data recieved  user: ${name} with id: ${id}`)
})

customEmitter.on('response', ()=>{
  console.log(`some other logic here`)
})

customEmitter.emit('response', 'Harry', 35)
customEmitter.emit('response', 'John', 115)