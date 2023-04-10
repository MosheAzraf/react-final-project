import React from 'react'
import Product from './Product'
import ProductCustomers from './ProductCustomers'

const ProductsWithCustomers = ({productsWithCustomers}) => {
console.log("pwc:",productsWithCustomers);

  return (
    <div className='container mt-4'>
      {
        productsWithCustomers.map((pwc) => {
          return (
            <div key={pwc.id} className='grid grid-cols-2 mt-4 '>
              <div className='border-2 border-solid border-teal-600 ' >
                <Product key={pwc.id} pwc={pwc}/>
              </div>
              <div className='border-2 border-solid  border-teal-600 m-15px'>
                <ProductCustomers key={pwc.id} pwc={pwc} />
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default ProductsWithCustomers
