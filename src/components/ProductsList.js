import React from 'react'
import { useSelector } from 'react-redux'

const ProductsList = () => {
    const products = useSelector(state => state.products);
    console.log(products);

  return (
    <div className="container">
    </div>
  )
}

export default ProductsList