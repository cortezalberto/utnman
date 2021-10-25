const express = require('express')


const app = express()

const port = 3000



app.get('/', (req, res) => res.send('Hello World!'))
app.get('/producto', (req, res) => res.send('Hola producto'))


app.listen(port, () => console.log(`Mi ejemplo app listening on port port!`))