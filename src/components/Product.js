import React from 'react'

const Product = ({pwc}) => {
  console.log("single product:", pwc)
    return (
      <div className='container'>
        <div className='grid grid-cols-3  m-15px'>
          <p className='font-bold underline'>Id</p>
          <p className='font-bold underline'>Product Name</p>
          <p className='font-bold underline'>Price</p>
        </div>
        <div className='grid grid-cols-3 m-15px'>
          <p>{pwc.id}</p>
          <p className=''>{pwc.name}</p>
          <p className=''>{pwc.price.toString()}</p>
        </div>
    </div>
  )
}

export default Product