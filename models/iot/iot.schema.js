;(function () {
  'use strict'
  var modelName = 'iot'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    timestamp:  { type: Date, default: Date.now },
     iot_id: Number, 
     temperature: Number, 
     relative_humidity: Number
   
  })

  module.exports = mongoose.model(modelName, schema)
})()
