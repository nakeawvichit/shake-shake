const express = require('express')
const app = express()
const port = 5555

app.use('/libs', express.static(__dirname + '/node_modules/'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(port, () => console.log(`listening on port ${port}!`))