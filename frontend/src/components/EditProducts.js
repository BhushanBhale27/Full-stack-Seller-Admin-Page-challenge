import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddProducts = () => {
  const [price, setprice] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();
  

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:7000/edit/" + id, { price, productName, category })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-75 rounded p-3 bg-white">
          <form onSubmit={submitHandler}>
            <h2>Edit Your Selected Product</h2>
            <div className="mb-2">
              <label>Product Price</label>
              <input
                type="number"
                placeholder="Price"
                className="form-control"
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label>Product Name</label>
              <input
                type="text"
                placeholder="Product Name"
                className="form-control"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label>Product Category : </label>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option>Choose a Category..</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Food</option>
                <option>Skincare</option>
                <option>Other</option>
              </select>
            </div>
            <button className="btn btn-success">Edit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
