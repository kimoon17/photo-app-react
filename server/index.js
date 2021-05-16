const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {signUpValidator} = require('./validators')
const bcrypt = require("bcrypt")
const _ = require('lodash')
const crypto = require('crypto')
const {expressPort, frontOrigin, tokenKey} = require('./constants')
const moment = require('moment')

//connecting to DB
const connect = require('./database')
const myConnect = connect
//connecting to DB
const {sqlInsertUser, sqlUsers, sqlUpdateUserToken} = require('./dbQueryes')

const app = express()

app.use(cors({origin: frontOrigin}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", frontOrigin)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Redirect, Authorization")
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
  next()
})

app.use(async (req, res, next) => {
  if(req.headers.authorization) {
    let token = req.headers.authorization.split(' ')[1]
    let tokenParts = token.split('.')
    let signature = crypto.createHmac('SHA256', tokenKey).update(`${tokenParts[0]}.${tokenParts[1]}`).digest('base64')
    if(signature === tokenParts[2]){
      const data = await myConnect.query(sqlUsers)
      data.rows.map(async (user) => {
        if(user[3] === token) {
          next()
        }
      })
    } else {
      res.status(403).send('token is not valid')
    }
  } else if(req.url === '/login' || req.url === '/signup') {
    next()
  } else {
    res.status(401).send('You need authorization')
  }
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

app.post('/login',  async (req, res) => {

  const data = await myConnect.query(sqlUsers)
    data.rows.map(async (user) => {
      if (user[1] === req.body.username) {
        const isCorrectPassword = await bcrypt.compare(req.body.password, user[2])
        if (isCorrectPassword) {
          const head = Buffer.from(JSON.stringify({alg: 'HS256', typ: 'jwt'})).toString('base64')
          const body = Buffer.from(JSON.stringify(user)).toString('base64')
          const signature = crypto.createHmac('SHA256', tokenKey).update(`${head}.${body}`).digest('base64')
          const newToken = `${head}.${body}.${signature}`
          await myConnect.query(sqlUpdateUserToken, [newToken, new Date(), req.body.username])

          res.status(200).send({token: newToken})
        } else {
          res.status(403).send({error:'incorrect username or password'})
        }
      }
    })
})

app.listen(expressPort, () => {
  console.log('App is working!')
})