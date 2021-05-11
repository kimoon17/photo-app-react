const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {signUpValidator} = require('./validators');
const bcrypt = require("bcrypt");

//connecting to DB
const {Client} = require("pg");
const myClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'crud',
  password: 'blablabla5',
  port: 5432
});
myClient.connect();
//connecting to DB

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

const sqlInsertUser = {
  text: `INSERT INTO users (login, password) VALUES ($1, $2)
  RETURNING id, login`
}

const sqlUsers = {
  text: `SELECT * FROM users`,
  rowMode: 'array',
}

app.post('/signup', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3006")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Redirect");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

  const errors = signUpValidator(req.body)
  if(_.isEmpty(errors)){
    myClient.query(sqlUsers)
        .then((users) => {
          let doesExist = false;
          users.rows.find(user => req.body.username === user[1]) ? doesExist = true : doesExist = false;
          if (!doesExist) {
            myClient.query(sqlInsertUser, [req.body.username, bcrypt.hash(req.body.password, 10)])
                .then((data) => {
                  res.status(200).send(data.rows);
                })
          } else {
              const message = "Login already exists."
              res.status(401).send({message: message});
          }
        })

  } else {
    res.status(401).send(JSON.stringify(errors));
  }
})

app.post('/login', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3006");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Redirect");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

  myClient.query(sqlUsers)
      .then((data) => {
        data.rows.map((user) => {
          if (user[1] === req.body.username) {
            if (user[2] === req.body.password) {
              res.status(200).send(user);
            } else {
              res.status(401);
            }
          } else {
            res.status(401);
          }
        })
      })

  // if (_.isEmpty(errors)) {
  //   res.send(JSON.stringify(req.body));
  // } else {
  //   res.status(401).send(JSON.stringify(errors));
  // }
})

app.listen(port, () => {
  console.log('App is working!')
})