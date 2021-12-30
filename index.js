var http = require("http");
var express = require("express");
var app = express();
// var data = [];
var bodyParser = require("body-parser");
// var persons = [];
var mysql = require("mysql");

/*app use*/
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
    // conn.query(
    //   "CREATE TABLE MyGuests (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(50), req_time TIMESTAMP)",
    //   (err, result) => {
    //     if (err) console.error("Error creating table " + err);
    //     else console.log("Table MyGuests created successfully");
    //   }
    // );
  }
});

// http
//   .createServer((req, res) => {
//     res.write("<p>Pengembangan Aplikasi Web dengan Nodejs</p>");
//     res.end();
//   })
//   .listen(8000, () => {
//     console.log("Server is running on port 8000");
//   });

// http
//   .createServer((req, res) => {
//     if (req.url == "/home") res.write("<p>Konten Home</p>");
//     else if (req.url == "/product") res.write("<p>Konten Product</p>");
//     else if (req.url == "/order") res.write("<p>Konten Order</p>");
//     else if (req.url == "/")
//       res.write("<p>Pengembangan Aplikasi Web dengan NodeJS</p>");
//     else res.write("<h1>404</h1>");
//     res.end();
//   })
//   .listen(8000, () => {
//     console.log("Server is running on port 8000");
//   });

/*app get*/

// app.get("/", (req, res) => {
//   res.end("Konten dari method GET");
// });
// app.get("/home", (req, res) => {
//   res.end("Home");
// });
// app.get("/about", (req, res) => {
//   res.end("About");
// });
// app.get(
//   "users/:userId/books/:bookId",
//   (req,
//   (res) => {
//     res.end(req.params);
//   })
// );
// app.get("/data", (req, res) => {
//   res.json(data);
// });
// app.get("/person", (req, res) => {
//   res.json(persons);
// });
app.get("/myguests", (req, res) => {
  var query = "SELECT * FROM MyGuests LIMIT 10";
  conn.query(query, (err, rows) => {
    res.json(rows);
  });
});

/*app post*/

// app.post("/", (req, res) => {
//   res.end("Konten dari method POST");
// });
// app.post("/data", (req, res) => {
//   data.push(Date.now());
//   res.json(data);
// });
// app.post("/person", (req, res) => {
//   persons.push(req.body);
//   res.json(req.body);
// });
// app.post("/myguests", (req, res) => {
//   var firstname = req.body.firstname;
//   var lastname = req.body.lastname;
//   var email = req.body.email;
//   var query =
//     "INSERT INTO MyGuests (firstname, lastname, email) VALUES('" +
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

/*app delete*/

// app.delete("/myguests/:id", (req, res) => {
//   var id = req.params.id;
//   var query = "DELETE FROM MyGuests WHERE id = " + id;
//   conn.query(query, (err, result) => {
//     if (err) res.json(err);
//     else res.json(result);
//   });
// });

/*app put*/

// app.put("/myguests/:id", (req, res) => {
//   var id = req.params.id;
//   var firstname = req.body.firstname;
//   var lastname = req.body.lastname;
//   var email = req.body.email;
//   var query =
//     "UPDATE MyGuests SET firstname = '" +
//     firstname +
//     "', lastname = '" +
//     lastname +
//     "', email = '" +
//     email +
//     "'WHERE id = " +
//     id;
//   conn.query(query, (err, result) => {
//     if (err) res.json(err);
//     else res.json(result);
//   });
// });

/*app listen*/

// app.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

http.createServer(app).listen(8000, () => {
  console.log("Server is running on port 8000");
});
