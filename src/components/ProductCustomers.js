import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCustomers = ({pwc}) => {
    const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 gap-0">
        <div className='grid grid-cols-4 underline'>
            <p className='font-bold'>id</p>
            <p className='font-bold'>name</p>
            <p className='font-bold'>purchased at</p>
            <p className='font-bold'></p>
        </div>
        {
            pwc.customers.length === 0 ? <p className="text text-rose-600">No one bought this product yet</p> :
            pwc.customers.map((customer) => {
                return (
                    <div key={customer.customerId} className="grid grid-cols-4 mt-2">
                        <p className=''>{customer.customerId}</p>
                        <p className=''>{customer.name}</p>
                        <p className=''>{customer.purchaseDate}</p>
                        <button className='hover:underline text-cyan-600' onClick={()=> navigate(`/customers/${customer.customerId}`)}>Edit Customer</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductCustomers

// pwc.customers.length === 0 ? <p className="text text-rose-600">No one bought this product yet</p> :
//             pwc.customers.map((customer)=> {
//                 return (
//                     <div>
//                         <div className='grid grid-rows-1  grid-flow-col'>
//                             <p>id</p>
//                             <p>name</p>
//                             <p>purchased at</p>
//                             <p></p>
//                         </div>
//                         <div key={customer.customerId} className='grid grid-rows-1  grid-flow-col gap-4 border border-solid m-15px ' >
//                             <p className='grid grid-cols-1'>{customer.customerId}</p>
//                             <p className='grid grid-cols-1'>{customer.name}</p>
//                             <p className='grid grid-cols-1'>{customer.purchaseDate}</p>
//                             <button className='grid grid-cols-1'>Edit Customer</button>
//                         </div>
                        
//                     </div>
//                 )
//             })