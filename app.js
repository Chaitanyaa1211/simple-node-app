const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello from Dockerized Node.js App 🚀 also, Hi my name is chaitanya and this is updated version O_O ')
})

app.get('/about', (req, res) => {
    res.send('This is a simple Node.js application running inside Docker.')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
