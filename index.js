//LIMITING DATA TO SHOW IN MYSQL
var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "myDB",
});

conn.connect((err) => {
  if (err) console.log("Problem with MySQL " + err);
  else {
    console.log("Connected with Database");
  }
});

app.post("/myguests", (req, res) => {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var query =
    "INSERT INTO myguests (firstname, lastname, email) VALUES('" +
    firstname +
    "','" +
    lastname +
    "','" +
    email +
    "')";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.delete("/myguests/:id", (req, res) => {
  var id = req.params.id;
  var query = "DELETE FROM myguests WHERE id = " + id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.put("/myguests/:id", (req, res) => {
  var id = req.params.id;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var query =
    "UPDATE myguests SET firstname= '" +
    firstname +
    "', lastname = '" +
    lastname +
    "', email = '" +
    email +
    "' WHERE id = " +
    id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.get("/myguests", (req, res) => {
  var query = "SELECT * FROM myguests LIMIT 2";
  conn.query(query, (err, rows) => {
    res.json(rows);
  });
});

http.createServer(app).listen(8000, () => {
  console.log("Server is running on port 8000");
});

// UPDATE DATA IN MYSQL
// var http = require("http");
// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var mysql = require("mysql");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// var conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "myDB",
// });

// conn.connect((err) => {
//   if (err) console.log("Problem with MySQL " + err);
//   else {
//     console.log("Connected with Database");
//   }
// });

// app.post("/myguests", (req, res) => {
//   var firstname = req.body.firstname;
//   var lastname = req.body.lastname;
//   var email = req.body.email;
//   var query =
//     "INSERT INTO myguests (firstname, lastname, email) VALUES('" +
//     firstname +
//     "','" +
//     lastname +
//     "','" +
//     email +
//     "')";
//   conn.query(query, (err, result) => {
//     if (err) res.json(err);
//     else res.json(result);
//   });
// });

// app.delete("/myguests/:id", (req, res) => {
//   var id = req.params.id;
//   var query = "DELETE FROM myguests WHERE id = " + id;
//   conn.query(query, (err, result) => {
//     if (err) res.json(err);
//     else res.json(result);
//   });
// });

// app.put("/myguests/:id", (req, res) => {
//   var id = req.params.id;
//   var firstname = req.body.firstname;
//   var lastname = req.body.lastname;
//   var email = req.body.email;
//   var query =
//     "UPDATE myguests SET firstname= '" +
//     firstname +
//     "', lastname = '" +
//     lastname +
//     "', email = '" +
//     email +
//     "' WHERE id = " +
//     id;
//   conn.query(query, (err, result) => {
//     if (err) res.json(err);
//     else res.json(result);
//   });
// });

// http.createServer(app).listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

// DELETING DATA FROM MYSQL
// var http = require("http");
// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var mysql = require("mysql");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// var conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "myDB",
// });

// conn.connect((err) => {
//   if (err) console.log("Problem with MySQL " + err);
//   else {
//     console.log("Connected with Database");
//   }
// });

// app.post("/myguests", (req, res) => {
//   var firstname = req.body.firstname;
//   var lastname = req.body.lastname;
//   var email = req.body.email;
//   var query =
//     "INSERT INTO myguests (firstname, lastname, email) VALUES('" +
//     firstname +
//     "','" +
//     lastname +
//     "','" +
//     email +
//     "')";
//   conn.query(query, (err, result) => {
//     if (err) res.json(err);
//     else res.json(result);
//   });
// });

// app.delete("/myguests/:id", (req, res) => {
//   var id = req.params.id;
//   var query = "DELETE FROM myguests WHERE id = " + id;
//   conn.query(query, (err, result) => {
//     if (err) res.json(err);
//     else res.json(result);
//   });
// });

// http.createServer(app).listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

// //INPUT OR ADDING NEW RECORDS TO TABLE

// var http = require("http");
// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var mysql = require("mysql");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// var conn = mysql.createConnection({
//   host: "localhost",
//   password: "",
//   database: "myDB",
// });

// conn.connect((err) => {
//   if (err) console.log("Problem with MySQL " + err);
//   else {
//     console.log("Connected with Database");
//   }
// });

// app.post("/myguests", (req, res) => {
//   var firstname = req.body.firstname;
//   var lastname = req.body.lastname;
//   var email = req.body.email;
//   var query =
//     "INSERT INTO myguests (firstname, lastname, email) VALUES('" +
//     firstname +
//     "','" +
//     lastname +
//     "','" +
//     email +
//     "')";
//   conn.query(query, (err, result) => {
//     if (err) res.json(err);
//     else res.json(result);
//   });
// });

// app.delete("/myguests/:id", (req, res) => {
//   var id = req.params.id;
//   var query = "DELETE FROM myguests WHERE id = " + id;
//   conn.query(query, (err, result) => {
//     if (err) res.json(err);
//     else res.json(result);
//   });
// });

// http.createServer(app).listen(8000, ()=>{
//     console.log('Server is running on port 8000')
// });

// //CREATE TABLE
// var mysql = require("mysql");

// var conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "myDB",
// });

// conn.connect((err) => {
//   if (err) console.log("Problem with MySQL " + err);
//   else {
//     console.log("Connected with Database");
//     conn.query(
//       "CREATE TABLE MyGuests (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(50), reg_time TIMESTAMP)",
//       (err, result) => {
//         if (err) console.error("Error creating table " + err);
//         else console.log("Table MyGuests created successfully");
//       }
//     );
//   }
// });

// CREATE DATABASE
// var mysql = require("mysql");

// var conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "pengembangan_web",
// });

// conn.connect((err) => {
//   if (err) console.log("Problem with MySQL " + err);
//   else {
//     console.log("Connected with Database");
//     conn.query("CREATE DATABASE myDB", (err, result) => {
//       if (err) console.error("Error creating database " + err);
//       else console.log("Database created successfully");
//     });
//   }
// });
