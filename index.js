/*Latihan 7.15*/

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

// /*Latihan 7.14*/

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

// /*Latihan 7.13*/

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

// /*Latihan 7.12*/

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

// /*Latihan 7.11*/
// var mysql = require("mysql");

// var conn = mysql.createConnection({
//   host : "localhost",
//   user : "root",
//   password : "",
//   database : "myDB",
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

// /*Latihan 7.10*/
// var mysql = require("mysql");

// var conn = mysql.createConnection({
//   host : "localhost",
//   user : "root",
//   password : "",
// });

// conn.connect((err) => {
//   if (err) console.log("Problem with MySQL " + err);
//   else {
//     console.log("Connected with Database");
//     conn.query("CREATE DATABASE myDB", (err, result) => {
//       if (err) console.error("Error creating database" + err);
//       else {
//         console.log("Database created successfully");
//       }
//     });
//   }
// });

// /*Latihan MySQL*/
// const { appendFile } = require("fs");
// const { Http2ServerRequest } = require("http2");
// var http = require("http");
// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var mysql = require("mysql");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// var conn = mysql.createConnection({
//   host : "localhost",
//   user : "root",
//   password : "",
//   database : "myDB",
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

// app.get("/myguests", (req, res) => {
//   var query = "SELECT * FROM myguests LIMIT 2";
//   conn.query(query, (err, rows) => {
//     res.json(rows);
//   });
// });

// http.createServer(app).listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

// /*Latihan 7.9*/
// var http = require("http");
// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// var persons = [];
// app.post("/person", (req, res) => {
//   persons.push(req.body);
//   res.json(req.body);
// });
// app.get("/person", (req, res) => {
//   res.json(persons);
// });
// http.createServer(app).listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

// /*Latihan 7.8*/
// var data = [];
// app.get("/data", (req, res) => {
//   data.push(Date.now());
//   res.json(data);
// });

// /*Latihan 7.7*/
// app.get("/users/:userId/books/:bookId", (req, res) => {
//   res.end("req.params");
// });

// /*Latihan 7.6*/
// app.get("/home", (req, res) => {
//   res.end("Home");
// });

// app.get("/about", (req, res) => {
//   res.end("About");
// });

// /*Latihan 7.5*/
// var http = require("http");
// var express = require("express");
// var app = express();

// app.get("/", (req, res) => {
//   res.end("Konten dari method GET");
// });

// app.post("/", (req, res) => {
//   res.end("Konten dari method POST");
// });

// http.createServer(app).listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

// /*Latihan 7.4*/
// var http = require("http");
// var express = require("express");
// var app = express();

// app.get("/", (req, res) => {
//   res.end("Konten dari method GET");
// });

// http.createServer(app).listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

// /*Latihan 7.3*/
// var express = require("express");
// var app = express();

// app.get("/", (req, res) => {
//   res.end("Konten dari method GET");
// });

// app.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

// /*Latihan 7.2*/
// var http = require("http");

// http
//   .createServer((req, res) => {
//     if (req.url == "/home") {
//       res.write("<p>Konten Home</p>");
//     } else if (req.url == "/product") {
//       res.write("<p>Konten Product</p>");
//     } else if (req.url == "/order") {
//       res.write("<p>Konten Order</p>");
//     } else if (req.url == "/order") {
//       res.write("<p>Pengembangan Aplikasi Web dengan Nodejs</p>");
//     } else {
//       res.write("<h1>404</h1>");
//     }
//     res.end();
//   })
//   .listen(8000, () => {
//     console.log("Server is running on port 8000");
//   });

// /*Latihan 7.1*/
// var http = require("http");

// /*Create a server object*/
// http
//   .createServer((req, res) => {
//     res.write("<p>Pengembangan Aplikasi Web dengan NodeJS</p>");
//     /*write a response to the client*/
//     res.end();
//   })
//   .listen(8000, () => {
//     console.log("Server is running on port 8000");
//   });
