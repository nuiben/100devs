// server.js
// import {getConnectionString} from "./connection-string.js"

const user = ""
const password = ""
const connectionString = `mongodb+srv://${user}:${password}@cluster0.rr9uhhk.mongodb.net/?retryWrites=true&w=majority`

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

MongoClient.connect(connectionString)
  .then(client => {
    console.log('Connected to Database')
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))

    app.listen(3000, () => {
        console.log('listening on 3000')
    })

    app.get('/', (req, res) => {
        db.collection('quotes')
        .find()
        .toArray()
        .then(results => {
            console.log(results)
        })
        .catch(error => console.error(error))
        res.sendFile(__dirname + '/index.html')
    })

    app.post('/quotes', (req, res) => {
        quotesCollection
          .insertOne(req.body)
          .then(result => {
            res.redirect('/')
          })
          .catch(error => console.error(error))
    })
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
  })
  .catch(error => console.error(error))
