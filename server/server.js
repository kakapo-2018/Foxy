const path = require('path')
const express = require('express')
const request = require('superagent')
const db = require('../db/db')
// const auth = require('./routes/auth')
const server = express()
const {userExists, createUser}  = require('../db/db')



server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// server.use('/auth', auth)


server.get('/register', (req, res) => {
  res.send('we are going somewhere')
})


server.post('/register', (req, res)=> {
  console.log('Hi');
  console.log(req.body)
  userExists(req.body.users)
  .then(exists => {
    if (exists) {
      return res.status(400).send({ message: 'User exists' })
    }
    createUser(req.body.users, req.body.password)
    .then(() => res.status(201).end())
  })
  .catch(err => {
    res.status(500).send({ message: err.message })
  })
})


server.get('/fox', (req, res) => {
  request.get('https://randomfox.ca/floof/')
  .then(ApiRes => { 
     res.json(ApiRes.body.image)
  })
  .catch(err => {
    console.log(err)
  })
})

server.get('/comics/', (req, res) => {
  db.getComics()
  .then(comics => { 
     res.json(comics)
  })
  .catch(err => {
    console.log(err)
  })
})

server.get('/articles/', (req, res) => {
  db.getArticles()
  .then(articles => { 
     res.json(articles[Math.floor(Math.random()*23)].article)
  })
  })   
server.get('/quote', (req, res) => {
  request.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
  .then(ApiRes => { 
     res.json(ApiRes.body.message)
  })
  .catch(err => {
    console.log(err)
  })
})

server.get('/quotenames/', (req, res) => {
  db.getQuoteNames()
  .then(names => { 
     res.json(names[Math.floor(Math.random()*21)].trumps)
  })
})


server.get('/add/', (req, res) => {
  request.get('http://itsthisforthat.com/api.php?json')
  .then(ApiRes => { 
    let response = JSON.parse(ApiRes.text)
    console.log(response)
    let randomThis = response.this
    let randomThat = response.that
    console.log(randomThat, randomThat)
    const addText = 'Looking for '+ randomThis+ ' for ' + randomThat+ '. Please.'
     res.json(addText)
  })
  .catch(err => {
    console.log(err)
  })
})

// let io = require ('socket.io')(http);

// io.on('connection', function(socket){
//   socket.on('new-message', function(msg){
//     io.emit('receive-message', msg);
//   })
// })



module.exports = server
