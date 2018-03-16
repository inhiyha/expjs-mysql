var express = require('express');
var router = express.Router();
var mysql = require('../app/db/mysql.js');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('add', { title: 'Express' });
});

router.get('/all', function (req, res, next) {
  var connection = mysql.getConnection();
  connection.connect();
  console.log("connection established");
  var query = "select * from book1";
  // var query = "select * from book1";
  connection.query(query, function (err, data) {
    console.log(data);
    
    res.render('books', { books: data });
  })
  connection.end();
});

router.post('/addBook', function (req, res, next) {
  var connection = mysql.getConnection();
  connection.connect();
  console.log("connection established");
  var query = "Insert into book1 values ('" + req.body.name + "','" + req.body.author + "')";
  // var query = "select * from book1";
  connection.query(query, function (err, rowadded) {
    
    res.send("Book added successfully - " + rowadded);
  })
  connection.end();

  // 
});

module.exports = router;
