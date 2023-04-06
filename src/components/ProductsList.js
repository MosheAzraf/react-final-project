import React from 'react'
import { useSelector } from 'react-redux'

const ProductsList = () => {
    const products = useSelector(state => state.products);
    console.log(products);

    const filterProductsByCustomers = () => {
      
    }

  return (
    <div className="container">
      <div>total amount of purchased products: {}</div>
      <div className=' grid grid-rows-2  border border-solid'>
        <div className=' grid grid-flow-col border border-solid'>
          <div className=' col-span-1 border border-solid'>products</div>
          <div className=' col-span-1 border border-solid'>customers</div>
        </div>
        <div>combobox</div>
      </div>
    </div>
  )
}

export default ProductsList