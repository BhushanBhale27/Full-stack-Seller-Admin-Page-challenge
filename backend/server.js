const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const getRoute = require("./routes/seller");
const postRoute = require("./routes/seller");
const putRoute = require("./routes/seller");
const deleteRoute = require("./routes/seller");

app.use(getRoute);

app.post(postRoute);

app.put(putRoute);

app.delete(deleteRoute);

app.listen(7000, () => {
  console.log("listening");
});
