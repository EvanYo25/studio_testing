var mysql = require('mysql');

function User(user){
    this.username = user.username;
    this.userpass = user.userpass;

};

User.addUser = function addUser(a, b, callback) {
    const conn = mysql.createConnection({
        host: '127.0.0.1',
        user: 'xxxxxxx',
        password: 'xxxxxxxx',
        database:'xxxxxxxxxxx',
        port: 3306
    });

    conn.connect();
    const memberData = {
        acc: a,
        pwd: b
    };
    conn.query('INSERT INTO usrs SET ?', memberData, function(err){
        if (err) {
            console.log(err);
        }
        else {
            console.log("success");
        }
        callback(err);
    });

    conn.end();
    
};

User.getUserNumByName = function getUserNumByName(username, callback) {
    const conn = mysql.createConnection({
        host: '127.0.0.1',
        user: 'xxxxxxx',
        password: 'xxxxxxxx',
        database:'xxxxxxxxxxx',
        port: 3306
    });

    // conn.connect();
   //使用username 來檢查是否有資料
    var cmd = "select COUNT(1) AS num from usrs where acc = ?";
    conn.query(cmd, [username], function (err, result) {
        if (err) {
            return;
        }
        // conn.release();
        //查詢結果使用 callback 呼叫，並將 err, result 參數帶入
        callback(err,result);                    
    });       
};

User.getUserByUserName = function getUserNumByName(username, callback) {
    const conn = mysql.createConnection({
        host: '127.0.0.1',
        user: 'xxxxxxx',
        password: 'xxxxxxxx',
        database:'xxxxxxxxxxx',
        port: 3306
    });

    // conn.connect();
    var cmd = "select * from usrs where acc = ?";
    console.log("there2");

    conn.query(cmd, username, function (err, result) {  
        if (err) {  
            return;
        }
        callback(err,result);                    
    });  
    console.log("there3");     
};



module.exports = User;