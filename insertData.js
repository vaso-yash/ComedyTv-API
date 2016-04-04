var db = require('./db.js');
var mysql = require("mysql");

module.exports = {
  insertUser: function (req, res) {
    console.log('Inserting user...');
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

    console.log(name+" "+email+" "+number+" "+seconds+" "+photo+" "+googleid);

    var user = { user_name: name, email: email, number: number, seconds: seconds, photo: photo, google_id: googleid};
    con.query('INSERT INTO users_info SET ?', user, function(err,result){
      if(err){
        res.json({result: false});
        throw err;
        console.log('Error inserting into database');
      }

      console.log('New Entry! Last insert ID:', result.insertId);
      console.log('User Inserted!');
      res.json({result: true, id: result.insertId});

      //db.disconnect;
      con.end(function(err) {
        console.log('Connection terminated');
      });
    });
  },



  insertVideo: function (req, res) {
    console.log('Inserting Video...');
    var name = req.body.name;
    var url = req.body.url;
    var duration = req.body.duration;
    var thumb = req.body.thumb;
    var comedian = req.body.comedian;
    var uploaded = req.body.uploaded;

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

    console.log(name+" "+url+" "+duration+" "+thumb+" "+comedian+" "+uploaded);

    var video = { video_name: name, url: url, duration: duration, video_thumb: thumb, comedian_name: comedian, upload_date: uploaded};
    con.query('INSERT INTO videos_info SET ?', video, function(err,result){
      if(err){
        res.json({result: false});
        throw err;
        console.log('Error inserting into database');
      }

      console.log('New Entry! Last insert ID:', result.insertId);
      console.log('Video Inserted!');
      res.json({result: true, id: result.insertId});

      //db.disconnect;
      con.end(function(err) {
        console.log('Connection terminated');
      });
    });
  },



  insertComedian: function (req, res) {
    console.log('Inserting Comedian...');
    var name = req.body.name;
    var photo = req.body.photo;
    var count = req.body.count;

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

    console.log(name+" "+photo+" "+count);

    var comedian = { comedian_name: name, photo: photo, video_count: count};
    con.query('INSERT INTO comedians_info SET ?', comedian, function(err,result){
      if(err){
        res.json({result: false});
        throw err;
        console.log('Error inserting into database');
      }

      console.log('New Entry! Last insert ID:', result.insertId);
      console.log('Comedian Inserted!');
      res.json({result: true, id: result.insertId});

      //db.disconnect;
      con.end(function(err) {
        console.log('Connection terminated');
      });
    });
  },
};
