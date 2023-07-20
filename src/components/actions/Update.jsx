import React, { useContext, useState } from 'react'
import { productsContext } from '../../context/ProductsContext';
import { useNavigate } from 'react-router-dom';


 function Update() {

const {updateProduct,pro}   = useContext(productsContext);
console.log(pro);
  return (
    <div>
     
        {/* <h1>{pro.name}</h1> */}
     
    </div>
  )
}

export default Update
