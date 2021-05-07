const express = require('express');
const cors = require('cors')
bodyParser = require('body-parser')
const {signUpValidator} = require('./validators')

const _ = require('lodash')
const app = express()
const port = 8000

app.use(cors({origin: 'http://localhost:3006'}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/userData', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3006")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Redirect");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.send(JSON.stringify({name: 'Kimon', token: 'abs'}))
})

app.post('/signup', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3006")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Redirect");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

  const errors = signUpValidator(req.body)
  if(_.isEmpty(errors)){
    res.send(JSON.stringify(req.body))
  } else {
    res.status(401).send(JSON.stringify(errors))
  }
})

app.listen(port, () => {
  console.log('App is working!')
})