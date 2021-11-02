const express = require('express')
const cors = require('cors')
const app = express()

const ctrl = require('./controller')

app.use(express.json())  // When we want to be able to accept JSON.
app.use(cors())


app.get('/api/houses', ctrl.getAllHouses) 
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

let port= 4004
app.listen(port, () => console.log('Server running on 4004'))