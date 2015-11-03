(function () {
  'use strict'
  var modelName = 'member'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
     username: String,
     password: String,  
     name: String,
     lastname: String 
   
  })

  module.exports = mongoose.model(modelName, schema)
})()
