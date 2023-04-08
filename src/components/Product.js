import React from 'react'

const Product = ({product}) => {
    //console.log("from product component:", product.customers);
    console.log("in products:",product)
  
  
    return (
    <div className=' grid grid-flow-col border border-solid'>

        {
            product.customers.map((customer)=> {
                <p>id: {customer.id}</p>
            })
        }
        
    </div>
  )
}

export default Product