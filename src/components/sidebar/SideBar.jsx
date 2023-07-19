import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
function SideBar() {

  
  return (
    <>
      <header className="d-flex  align-items-center justify-content-around my-5">
        <i className="fa fa-home d-inline-block"></i>
        <h6 className="h4">Seller DashBoard</h6>
      </header>

      <section>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          {" "}
          <div className="fix-display active">
            <i className="fa-brands fa-get-pocket"></i>
            <h6 className="h6">Get All Products</h6>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/add">
          <div className="fix-display">
            <i class="fa-solid fa-circle-plus"></i>
            <h6 className="h6">ADD New Product</h6>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/update">
          {" "}
          <div className="fix-display">
            <i className="fa-solid fa-pen-nib"></i>
            <h6 className="h6">Update Product</h6>
          </div>
        </Link>
      </section>

      <section className="text-center my-5">
        <button className="btn btn-dark">
          <h2>sign out</h2>
        </button>
      </section>
    </>
  );
}

export default SideBar;
