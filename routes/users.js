var express = require('express');
var router = express.Router();

var dbConfig = require('../database/db-config')
var db = require('../database/db-utils')(dbConfig.db);
/* GET users listing. */

router.get('/', function (req, res, next) {
  db.getAll('users', function (err, users) {
    if(err) console.log(err);
    res.json(users)
  })
})

router.get('/new', function(req, res){
	res.render('addUser')
})

router.get('/:id', function (req, res, next) {
  db.findOne('users', { id: req.params.id }, function (err, user) {
    if(err) console.log(err);
    res.send(user)
  })
})

router.delete('/:id', function (req, res) {
  db.delete('users', { id: req.params.id }, function (err, user) {
    if(err) console.log(err);
    res.json(user)
  })
})

router.post('/', function (req, res, next) {
  db.add('users', req.body, function (err, user) {
    if(err) console.log(err);
    res.json(user)
  })
})

// router.put
router.put('/:id', function (req, res) {
  db.update('users', { id: req.params.id }, req.body, function (err, user) {
    if(err) console.log(err)
    res.json(user)
  })
})




module.exports = router;