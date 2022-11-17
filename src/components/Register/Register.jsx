import "./Register.css";
import "../../assets/global.css";
import React, { useState } from "react";

const Register = () => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productImage, setProductImage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  function addProduct(e) {
    e.preventDefault();

    fetch("http://localhost:5000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productName,
        productDesc,
        productImage,
        price,
        quantity,
      }),
    });
    setProductName("");
    setProductDesc("");
    setProductImage("");
    setPrice("");
    setQuantity("");
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          addProduct(e);
        }}
        className="form"
      >
        <div className="form-item">
          <label for="productNameInput">Product</label>
          <input
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            required
            type="text"
            className="form-control"
            id="productNameInput"
            placeholder="Product Name"
          />
        </div>
        <div className="form-item">
          <label for="productDescInput">Description</label>
          <input
            onChange={(e) => setProductDesc(e.target.value)}
            value={productDesc}
            required
            type="text"
            className="form-control"
            id="productDescInput"
            placeholder="Product Description"
          />
        </div>
        <div className="form-item">
          <label for="productImageInput">Image</label>
          <input
            onChange={(e) => setProductImage(e.target.value)}
            value={productImage}
            required
            type="text"
            className="form-control"
            id="productImageInput"
            placeholder="Product Image URL"
          />
        </div>
        <div className="form-item">
          <label for="productPriceInput">Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
            type="text"
            className="form-control"
            id="productPriceInput"
            placeholder="Product Price"
          />
        </div>
        <div className="form-item">
          <label for="productQuantityInput">Quantity</label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            required
            type="text"
            className="form-control"
            id="productQuantityInput"
            placeholder="Product Quantity"
          />
        </div>
        <button value="Submit" type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
