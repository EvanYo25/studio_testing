var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("index page");
  console.log(req.session);
  console.log(req.session.username);
  console.log(res.session);
  // console.log(locals);
  // console.log(res);
  res.render('index', { title: 'Express', req: req});
});

module.exports = router;
