var db = require('./db.js');
var mysql = require("mysql");

module.exports = {
  register: function (req, res) {
    console.log('Registering...');
    var name = req.body.name;
    var email = req.body.email;
    var number = req.body.number;
    var seconds = req.body.seconds;
    var photo = req.body.photo;
    var googleid = req.body.googleid;

    //con = db.connect;

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd",
    database: "comedytv"
    });

    con.connect(function(err){
      if(err){
        console.log('Error connecting to Db');
        throw err;
        return;
      }
      console.log('Connection established');
    });

    console.log("Request parameters are: "+name+"\n"+email+"\n"+number+"\n"+seconds+"\n"+photo+"\n"+googleid);

    var user = { user_name: name, email: email, number: number, seconds: seconds, photo: photo, google_id: googleid};
    con.query('INSERT INTO users_info SET ?', user, function(err,result){
      if(err){
        res.json({result: false});
        throw err;
        console.log('Error inserting into database');
      }

      console.log('New Entry! Last insert ID:', result.insertId);
      console.log('Registered!');
      res.json({result: true, id: result.insertId});

      //db.disconnect;
      con.end(function(err) {
        console.log('Connection terminated');
      });
    });
  },


  getUser: function (req, res) {
    console.log('Getting User Info...');

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd",
    database: "comedytv"
    });

    con.connect(function(err){
      if(err){
        console.log('Error connecting to Db');
        throw err;
        return;
      }
      console.log('Connection established');
    });

    var email = req.body.email;

    console.log('Request is: '+email);

    con.query('SELECT * from users_info Where email = ?', email, function(err,result){
      if(err){
        res.json({result: false});
        throw err;
        console.log('Error fetching user info from database');
      }

      res.json({url: result});
      console.log('User info sent!');

      //db.disconnect;
      con.end(function(err) {
        console.log('Connection terminated');
      });
    });
  },


  getVideos: function (req, res) {
    console.log('Getting videos...');

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd",
    database: "comedytv"
    });

    con.connect(function(err){
      if(err){
        console.log('Error connecting to Db');
        throw err;
        return;
      }
      console.log('Connection established');
    });

    con.query('SELECT * from videos_info', function(err,result){
      if(err){
        res.json({result: false});
        throw err;
        console.log('Error fetching videos from database!');
      }

      res.json({result: true, videos: result});
      console.log('Videos sent!');

      //db.disconnect;
      con.end(function(err) {
        console.log('Connection terminated');
      });
    });
  },


  getComedians: function (req, res) {
    console.log('Getting comedians...');

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd",
    database: "comedytv"
    });

    con.connect(function(err){
      if(err){
        console.log('Error connecting to Db');
        throw err;
        return;
      }
      console.log('Connection established');
    });

    console.log('Requesting list of comedians');

    con.query('SELECT * from comedians_info', function(err,result){
      if(err){
        res.json({result: false});
        throw err;
        console.log('Error fetching videos from database!');
      }

      res.json({result: true, comedians: result});
      console.log('Comedians sent!');

      //db.disconnect;
      con.end(function(err) {
        console.log('Connection terminated');
      });
    });
  },


  getComedian: function (req, res) {
    console.log('Getting comedian...');

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd",
    database: "comedytv"
    });

    con.connect(function(err){
      if(err){
        console.log('Error connecting to Db');
        throw err;
        return;
      }
      console.log('Connection established');
    });

    var name = req.body.name;

    console.log('Request is: '+name);

    con.query('SELECT * from comedians_info Where comedian_name = ?', name, function(err,result){
      if(err){
        res.json({result: false});
        throw err;
        console.log('Error fetching videos from database!');
      }

      res.json({result: true, comedian: result});
      console.log('Comedian sent!');

      //db.disconnect;
      con.end(function(err) {
        console.log('Connection terminated');
      });
    });
  },


  getComedianVideos: function (req, res) {
    console.log('Getting comedian...');

    var name = req.body.name;

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd",
    database: "comedytv"
    });

    con.connect(function(err){
      if(err){
        console.log('Error connecting to Db');
        throw err;
        return;
      }
      console.log('Connection established');
    });

    console.log('Request is: '+name);

    con.query('SELECT * from videos_info Where comedian_name = ?', name, function(err,result){
      if(err){
        res.json({result: false});
        throw err;
        console.log('Error fetching videos from database!');
      }

      res.json({result: true, videos: result});
      console.log('Comedian sent!');

      //db.disconnect;
      con.end(function(err) {
        console.log('Connection terminated');
      });
    });
  },

  getSeconds: function (req, res) {
    console.log('Getting users seconds...');

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd",
    database: "comedytv"
    });

    con.connect(function(err){
      if(err){
        console.log('Error connecting to Db');
        throw err;
        return;
      }
      console.log('Connection established');
    });

    var id = req.body.id;

    console.log('Request is: '+id);

    con.query('SELECT seconds from users_info Where user_id = ?', id, function(err,result){
      if(err){
        res.json({result: false});
        throw err;
        console.log('Error fetching videos from database!');
      }

      res.json({result: true, seconds: result});
      console.log('Users seconds sent!');

      //db.disconnect;
      con.end(function(err) {
        console.log('Connection terminated');
      });
    });
  },


  updateSeconds: function (req, res) {
    console.log('Updating Seconds...');
    
    var id = req.body.id;
    var seconds = req.body.seconds;

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd",
    database: "comedytv"
    });

    con.connect(function(err){
      if(err){
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established');
    });

    console.log('Request is: '+id+' '+seconds);

    con.query('UPDATE users_info SET seconds = ? Where user_id = ?', [seconds, id], function (err, result) {
      if(err){
        res.json({result: false});
        throw err;
        console.log('Error inserting into database');
      }

      console.log('Seconds Updated! Updated Rows:', result.changedRows);
      res.json({result: true});

      con.end(function(err) {
        console.log('Connection terminated');
      });
    });
  }
};
