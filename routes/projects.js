var express = require('express');
var router = express.Router();

var dbConfig = require('../database/db-config')
var db = require('../database/db-utils')(dbConfig.db);
/* GET projects listing. */

router.get('/', function (req, res, next) {
  db.getAll('projects', function (err, projects) {
    if(err) console.log(err);
    console.log(projects,'projects')
    res.json(projects)
  })
})

router.get('/new', function (req, res, next) {
  res.render('addUser')
})


router.get('/:id', function (req, res, next) {
  db.findOne('projects', { id: req.params.id }, function (err, project) {
    if(err) console.log(err);
    res.send(project)
  })
})

router.delete('/:id', function (req, res) {
  db.delete('projects', { id: req.params.id }, function (err, project) {
    if(err) console.log(err);
    res.json(project)
  })
})

router.post('/', function (req, res, next) {
  db.add('projects', req.body, function (err, project) {
    if(err) console.log(err);
    res.json(project)
  })
})

// router.put
router.put('/:id', function (req, res) {
  db.update('projects', { id: req.params.id }, req.body, function (err, project) {
    if(err) console.log(err)
    res.json(project)
  })
})


module.exports = router;
