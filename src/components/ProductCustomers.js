import React from 'react'

const ProductCustomers = ({pwc}) => {
  return (
    <div>
        {
            pwc.customers.length === 0 ? <p className="text text-rose-600">No one bought this product yet</p> :
            pwc.customers.map((customer)=> {
                return (
                    <div key={customer.customerId} className='grid grid-rows-1 grid-cols-2 border border-solid m-15px ' >
                        <p className='grid grid-cols-1'>id: {customer.customerId}</p>
                        <p className='grid grid-cols-1'>name: {customer.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductCustomers