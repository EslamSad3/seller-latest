import React, { useContext, useState } from 'react'
import { productsContext } from '../../context/ProductsContext';


function Update() {

  const {products  } = useContext(productsContext);

console.log(products);
  return (
    <div>
     {/* {products.map((item)=>{
        return <h1>{item.name}</h1>
     })} */}
    </div>
  )
}

export default Update
