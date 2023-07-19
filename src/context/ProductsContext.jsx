import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export let productsContext = createContext();
export function ProductsContextProvider(props) {
  // Login Data
  const userData = localStorage.getItem("UserToken");
  const auth = userData ? jwtDecode(userData).userId : null;
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("UserToken")}`,
  };

  // GET Seller Products

  const [products, setProducts] = useState([]);
  async function getData() {
    const { data } = await axios.get(
      `https://ali-service-ey1c.onrender.com/api/team2/products?seller=${auth}`,
      { headers }
    );
    setProducts(data.Products);
  }

  // Delete Seller Product

  async function deleteProduct(id) {
    await axios.delete(
      `https://ali-service-ey1c.onrender.com/api/team2/products/${id}`,
      { headers }
    );
    getData();
  }

  // update

  async function updateProduct(productId) {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("UserToken")}`,
    };
    const { data } = await axios.get(
      `https://ali-service-ey1c.onrender.com/api/team2/products/${productId}`,
      { headers }
    );
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
        products,
        categories,
        setProducts,
        getData,
        deleteProduct,
        updateProduct,
        getCate,
        AddPro,
      }}
    >
      {props.children}
    </productsContext.Provider>
  );
}
