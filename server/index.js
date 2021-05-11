const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {signUpValidator} = require('./validators')
const bcrypt = require("bcrypt")
const _ = require('lodash')
const {expressPort, frontOrigin} = require('./constants')

//connecting to DB
const connect = require('./database')
const myConnect = connect
//connecting to DB
const {sqlInsertUser, sqlUsers} = require('./dbQueryes')

const app = express()

app.use(cors({origin: frontOrigin}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", frontOrigin)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Redirect")
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
  next()
})

app.get('/userData', (req, res) => {
  res.send(JSON.stringify({name: 'Kimon', token: 'abs'}))
})

app.post('/signup', async (req, res) => {
  const errors = await signUpValidator(req.body)
  if (_.isEmpty(errors)) {
    const users = await myConnect.query(sqlUsers)
    let doesExist
    await users.rows.find(user => req.body.username === user[1]) ? doesExist = true : doesExist = false
    if (!doesExist) {
      const hashPassword = await bcrypt.hash(req.body.password, 10)
      const data = await myConnect.query(sqlInsertUser, [req.body.username, hashPassword])
      await res.status(200).send(data.rows)
    } else {
      await res.status(401).send({message: "Login already exists."})
    }

  } else {
    await res.status(401).send(JSON.stringify(errors))
  }
})

app.post('/login',  (req, res) => {

  myConnect.query(sqlUsers)
    .then((data) => {
      data.rows.map((user) => {
        console.log(user)
        if (user[1] === req.body.username) {
          if (user[2] === bcrypt.hash(req.body.password, 10)) {

            res.status(200).send(user)
          } else {
            res.status(401)
          }
        } else {
          res.status(401)
        }
      })
    })
    .catch(err => res.status(500).send(err))
})

app.listen(expressPort, () => {
  console.log('App is working!')
})