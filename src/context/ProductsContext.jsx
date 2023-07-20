import axios from "axios";
// import jwtDecode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";


export let productsContext = createContext();
export function ProductsContextProvider(props) {


  const headers = {
    token: `Bearer ${localStorage.getItem("UserToken")}`,
  };


  async function handleLogin(values) {
    return await axios
      .post(
        `https://ali-service-ey1c.onrender.com/api/team2/auth/login`, values

      )
      .then(response => response)
      .catch((error) => error);
  }



  // const [products, setProducts] = useState([]);
  async function getProducts(uId) {
    console.log(uId)
    return await axios.get(
      `https://ali-service-ey1c.onrender.com/api/team2/products?seller=${uId}`,
      { headers: { 'Authorization': headers.token } }
    ).then(response => response).catch(err => err)

  }



  // Delete Seller Product

  async function deleteProduct(id) {
    return await axios.delete(
      `https://ali-service-ey1c.onrender.com/api/team2/products/${id}`,
      { headers: { 'Authorization': headers.token } }
    ).then(response => response).catch(err => err)

  }

  // update

  // const [pro, setpro] = useState(null);

  // async function updateProduct(productId) {
  //   const { data } = await axios.get(
  //     `https://ali-service-ey1c.onrender.com/api/team2/products/${productId}`,
  //     { headers }
  //   );
  //   setpro(data);
  // }
  // get categories

  const [categories, setCategories] = useState([]);

  async function getCate() {
    const { data } = await axios.get(
      `https://ali-service-ey1c.onrender.com/api/team2/categories?limit=100`,
      { headers: { 'Authorization': headers.token } }
    );
    setCategories(data.data);
  }

  // add pro

  const addNewProduct = async (values) => {

    return await axios.post(
      `https://ali-service-ey1c.onrender.com/api/team2/products`,
      values,
      { headers: { 'Authorization': headers.token } }
    ).then(res => res).catch(err => err)

  };

  return (
    <productsContext.Provider
      value={{
        handleLogin,
        getProducts,
        deleteProduct,
        addNewProduct,
        categories,
        getCate

      }}
    >
      {props.children}
    </productsContext.Provider>
  );
}
