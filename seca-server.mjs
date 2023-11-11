import express from 'express'
import * as api from './seca-web-api.mjs'
import cors from 'cors'

const PORT = 3000

console.log("Start setting up server")
let app = express() // http server

app.use(cors())
app.use(express.json())


// EVENTS
app.get(`/events`, api.getEvents) // chama TM para buscar todos os eventos
app.get(`/eventsFromMem`, api.getEventsFromMem) 
app.get('/events/:id', api.getEvent) // chama TM para buscar detalhe de evento

// GROUPS
app.post('/groups', api.createGroup) // é local apenas e cria novo grupo
app.get('/groups', api.getGroups) // é local apenas e retorna todos os grupos
app.get('/groups/:id', api.getGroup) // é local apenas e retorna detalhe de grupo por id
app.delete('/groups/:id', api.deleteGroup) // é local apenas e apaga um grupo
/* app.post('/groups/:idGroup/events/:id', api.addEventToGroup) // é local apenas
app.delete('/groups/:idGroup/events/:id', api.deleteEventFromGroup) // é local apenas
  */

// USER
app.post('/users', api.createUser) // é local apenas 

app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`))

console.log("End setting up server")