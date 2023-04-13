import React from 'react'
import { useNavigate } from 'react-router-dom'


const Product = ({pwc}) => {
  const navigate = useNavigate()

  console.log("single product:", pwc)
    return (
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-5 gap-0'>
          <p className='font-bold underline'>Id</p>
          <p className='font-bold underline'>Product Name</p>
          <p className='font-bold underline'>Price</p>
          <p className='font-bold underline'>Quantity</p>

        </div>
        <div className='grid grid-cols-5 gap-0'>
          <p>{pwc.id}</p>
          <p className=''>{pwc.name}</p>
          <p className=''>{pwc.price.toString()}</p>
          <p>{pwc.quantity}</p>
          <button className='hover:underline text-cyan-600' onClick={()=> navigate(`/products/${pwc.id}`)}>Edit Product</button>
        </div>
    </div>
  )
}

export default Product

//onClick={()=> navigate(`/shop/${customer.customerId}`)}