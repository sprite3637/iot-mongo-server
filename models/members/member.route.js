 	(function () {
  'use strict'
  var express = require('express')
  var router = express.Router()
  var Model = require('./member.schema.js')

  router.get('/api/member', function (req, res, next) {
    Model.find({}).exec(function (err, results) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(results)
      }
    })
  })

  router.post('/api/member', function (req, res, next) {
    var obj = new Model(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
  })



  module.exports = router
})()
