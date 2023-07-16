const mysql = require("mysql");


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bhushan123",
    database: "node-complete",
  });

exports.getProducts = (req, res, next) => {
    const sql = "SELECT * FROM seller";
  
    db.query(sql, (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
  }

  exports.addProduct = (req, res, next) => {
    const sql =
      "INSERT INTO seller (`price` , `productName` , `category`) VALUES (?)";
    const values = [req.body.price, req.body.productName, req.body.category];
  
    db.query(sql , [values] , (err,data)=>{
      if(err) return res.json("Error")
      return res.json(data)
    })
  }

  exports.editProduct =  (req, res, next) => {
    const sql =
      "UPDATE seller set `price`=? , `productName`=? , `category`=? where id=?";
    const values = [req.body.price, req.body.productName, req.body.category];
    const id = req.params.id;
  
    db.query(sql, [...values, id], (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
  }

  exports.deleteProduct = (req, res) => {
    const sql = "DELETE FROM seller WHERE id=?";
    const id = req.params.id;
  
    db.query(sql, [id], (err, data) => {
      if (err) return res.json("error");
      return res.json(data);
    });
  }
