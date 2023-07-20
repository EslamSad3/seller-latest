import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export let productsContext = createContext();
export function ProductsContextProvider(props) {
  // Login Data

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("UserToken")}`,
  };

  //Login

  // async function handleLogin(values) {
  //   try {
  //     const response = await axios.post(
  //       `https://ali-service-ey1c.onrender.com/api/team2/auth/login`,
  //       values
  //     );
  //     if (response.status === 200) {
  //       localStorage.setItem("UserToken", response.data.data._id);

  //     }
  //   } catch (error) {
  //     if (error.response.status === 401) {
  //       console.log("Incorrect email or password");
  //     }
  //     if (error.response.status === 500) {
  //       console.log("server");
  //     }
  //   }
  // }


  async function handleLogin(values) {
    return await axios
      .post(
        `https://ali-service-ey1c.onrender.com/api/team2/auth/login`,values
        
      )
      .then(response => response)
      .catch((error) => {
        if (error.response.status === 401) {
          console.log("Incorrect email or password");
        }
        if (error.response.status === 500) {
          console.log("server Error");
        }
      });
  }

  const [userdata, setuserdata] = useState(null)

  // const userid = localStorage.setItem("UserID",userdata);
  // const auth = userData ? jwtDecode(userData).userId : null;
  // console.log(userData);

  // GET Seller Products

  const [products, setProducts] = useState([]);
  async function getData() {
    return await axios.get(
      `https://ali-service-ey1c.onrender.com/api/team2/products?seller=${userdata}`,
      { headers }
    ).then(response => setProducts(response.data.Products)).catch(err=>err)
  
  }



  // Delete Seller Product

  async function deleteProduct(id) {
    return await axios.delete(
      `https://ali-service-ey1c.onrender.com/api/team2/products/${id}`,
      { headers }
    ).then(response => response).catch(err=> err)
    
  }

  // update

  const [pro, setpro] = useState(null);

  async function updateProduct(productId) {
    const { data } = await axios.get(
      `https://ali-service-ey1c.onrender.com/api/team2/products/${productId}`,
      { headers }
    );
    setpro(data);
  }
  // get categories

  const [categories, setCategories] = useState([]);

  async function getCate() {
    const { data } = await axios.get(
      `https://ali-service-ey1c.onrender.com/api/team2/categories?limit=100`,
      { headers }
    );
    setCategories(data.data);
  }

  // add pro

  const AddPro = async (values) => {
    try {
      await axios.post(
        `https://ali-service-ey1c.onrender.com/api/team2/products`,
        values,
        { headers }
      );
      toast.success("Product Added Successfully ");
    } catch (error) {
      toast.error("Dupplicate Name");
    }
  };

  return (
    <productsContext.Provider
      value={{
        headers,
      categories,
        userdata,
        pro,
        products,
        getData,
        deleteProduct,
        updateProduct,
        getCate,
        AddPro,
        handleLogin,
        setuserdata
      }}
    >
      {props.children}
    </productsContext.Provider>
  );
}
