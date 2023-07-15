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
app.put("/edit/:id", (req, res, next) => {
  const sql =
    "UPDATE seller set `price`=? , `productName`=? , `category`=? where id=?";
  const values = [req.body.price, req.body.productName, req.body.category];
  const id = req.params.id

  db.query(sql , [...values , id] , (err,data)=>{
    if(err) return res.json("Error")
    return res.json(data)
  })
});

app.delete("/delete/:id" , (req,res)=>{
  const sql = "DELETE FROM seller WHERE id=?";
  const id = req.params.id

  db.query(sql , [id] , (err,data)=>{
    if(err) return res.json("error")
    return res.json(data)
  })
})

app.listen(7000, () => {
  console.log("listening");
});
