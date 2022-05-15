var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    crypto = require('crypto'),
    TITLE_REG = '註冊';

router.get('/', function(req, res) {
  res.render('reg',{title:TITLE_REG});
});

router.post('/', function(req, res) {

  console.log("post");
  var userName = req.body['txtUserName'],
      userPwd = req.body['txtUserPwd'],
      userRePwd = req.body['txtUserRePwd'],     
      md5 = crypto.createHash('md5');
 
      userPwd = md5.update(userPwd).digest('hex');

  // var newUser = new User({
  //     username: userName,
  //     userpass: userPwd
  // });
  var newUser = new User({
      username: userName,
      userpass: userPwd
  });

  User.addUser(userName, userPwd, function(err){
      if(!err){
          console.log("成功");
          res.render('reg',{title:'註冊成功'});
      }
      else{
          console.log("失敗");
          res.render('reg',{title:'註冊失敗'});
      }
  });

  // res.render('reg',{title:'完成'});
});


module.exports = router;
