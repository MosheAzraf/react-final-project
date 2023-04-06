import React from 'react'
import ProductsList from '../components/ProductsList';

const Products = () => {
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

export default Products