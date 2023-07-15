const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bhushan123",
  database: "node-complete",
});

app.get("/", (req, res, next) => {
  const sql = "SELECT * FROM seller";

  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.post("/create", (req, res, next) => {
  const sql =
    "INSERT INTO seller (`price` , `productName` , `category`) VALUES (?)";
  const values = [req.body.price, req.body.productName, req.body.category];

  db.query(sql , [values] , (err,data)=>{
    if(err) return res.json("Error")
    return res.json(data)
  })
});

app.listen(7000, () => {
  console.log("listening");
});
