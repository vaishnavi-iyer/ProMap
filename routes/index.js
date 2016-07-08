var express = require('express');
var router = express.Router();
var path = require('path')
/* GET home page. */

var obj = { }

obj.title = 'ProMap'
obj.img1 = '/images/users.jpeg'
obj.img2 = '/images/projects.jpg'
 
router.get('/', function(req, res, next) {
	console.log(obj)
  res.render('index', obj);
});

module.exports = router;
