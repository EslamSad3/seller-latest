import React, { useContext, useEffect } from 'react'
import { productsContext } from '../../context/ProductsContext';
import { useParams } from 'react-router-dom';


function Update() {
  const { getOneProduct } = useContext(productsContext);
  const { id } = useParams()
  console.log(`params ${id}`)
  const getProduct = async () => {
    const res = await getOneProduct(id)
    console.log(res)
  }

  useEffect(() => {
    getProduct()

  }, [])


  return (
    <div>
      <h1>Welcome to update</h1>


    </div>
  )
}

export default Update
