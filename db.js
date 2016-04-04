var mysql = require("mysql");

module.exports = {
  connect: function () {
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
    });

    con.connect(function(err){
      if(err){
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established');
    });

    return con;
  },

  disconnect: function () {
    con.end(function(err) {
      console.log('Connection terminated');
    });
  }
};