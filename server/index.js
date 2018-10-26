const express = require('express')
const bodyParser = require('body-parser')
const controllers = require('./controllers/controllers')
const app = express()
const port = 3001

app.use(bodyParser.json())

app.get('/api/coins', controllers.getCoins)
app.post('/api/coins', controllers.createCoins)
app.put('/api/coins/:id', controllers.updateCoins)
app.delete('/api/coins/:id', controllers.deleteCoins)



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})