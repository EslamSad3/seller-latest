import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../context/ProductsContext";
import SideBar from "../sidebar/SideBar";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";


function AllProducts() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([])

  const { getProducts, deleteProduct } = useContext(productsContext);

  const gellAllProducts = async () => {
    const userId = saveUserData()
    const res = await getProducts(userId)
    // console.log(res)
    setProducts(res.data.Products)
  }

  const handleDetails = (id) => {
    navigate(`/update/${id}`);
  };

  const deleteSelectedItem = async (id) => {

    await deleteProduct(id)
    gellAllProducts()
  }

  function saveUserData() {
    let userlogintoken = localStorage.getItem("UserToken");
    if (userlogintoken) {
      let decodedToken = jwtDecode(userlogintoken);
      // console.log(decodedToken.userId);
      return decodedToken.userId;
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("UserToken")) navigate("/login")
    else {
      gellAllProducts()
    }

  }, []);



  return (
    <>
      <div className="container">
        <div className="row m-0 d-flex justify-content-between">
          <div
            className="col-3 rounded-2 my-2"
            style={{ backgroundColor: "#E6E6E6" }}
          >
            <SideBar />
          </div>
          <div className="col-8 rounded-2 my-2">
            <div className="table-responsive text-center">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Pro. Name</th>
                    <th scope="col">Pro. Image</th>
                    <th scope="col">Pro. price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={item.imageCover}
                            style={{ width: "100px" }}
                            alt=""
                          />
                        </td>
                        <td>{item.price}</td>
                        <td className="text-center">
                          <div className="d-flex justify-content-around ">

                            <button
                              onClick={() => handleDetails(item._id)}
                              className="btn border border-5 rounded-5"
                            >
                              <i className="fa-solid fa-pen-nib"></i>
                            </button>

                            <button
                              onClick={() => deleteSelectedItem(item._id)}
                              className="btn border border-5 rounded-5"
                            >
                              <i className="fa-solid fa-trash-can"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
