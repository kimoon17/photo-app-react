const express = require('express');
const cors = require('cors')

const app = express()
const port = 8000
app.use(cors({origin: 'http://localhost:3006'}))

app.get('/userData', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3006")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Redirect");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.send(JSON.stringify({name: 'Kimon', token: 'abs'}))
})

app.post('/signup', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3006");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Redirect");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  console.log(req.body);
})

app.listen(port, () => {
  console.log('App is working!')
})