import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const API = "http://localhost:7000/";

const Seller = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async (url) => {
    const data = await axios.get(url);
    setProducts(data.data);
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  const deleteHandler = async (id) =>{
    try {
      await axios.delete("http://localhost:7000/delete/"+id)
      window.location.reload()
      
    } catch (error) {
      console.error(error)
      
    }

  }

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-75 bg-white rounded p-3">
          <Link to="/create" className="btn btn-success">Add Products +</Link>
          <table className="table">
            <thead>
              <tr>
                <th>Selling Price</th>
                <th>Product Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>{item.price}</td>
                  <td>{item.productName}</td>
                  <td>{item.category}</td>
                  <td>
                    <Link to={`edit/${item.id}`} className="btn btn-primary">Edit</Link>
                    <button onClick={e => deleteHandler(item.id)} className="btn btn-danger ms-3">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Seller;
