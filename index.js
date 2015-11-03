var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/iot')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var iot = require('./models/iot/iot.route.js')
app.use('/', iot)

var member = require('./models/members/member.route.js')
app.use('/', member)


var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})
