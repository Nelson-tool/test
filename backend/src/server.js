
const express = require('express')
const apiroutes = require('./routes/networkRoutes').router
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 8080

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json({
  verify: (req, res, buf) => {
    req.rawBody = buf
  },
  limit: '50mb',
  extended: true
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', apiroutes)

app.listen(port, () => {
  console.log(`app listening on port ${port}!`)
})
