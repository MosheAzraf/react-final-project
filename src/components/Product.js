import React from 'react'

const Product = ({pwc}) => {
  console.log("single product:", pwc)
    return (
    <div className='grid grid-rows-1 grid-cols-3 border border-solid m-15px'>
      {/* <p className='grid-cols-1'>id:{pwc.id}</p> */}
      <p className='grid-cols-1'>Product Name:{pwc.name}</p>
      <p className='grid-cols-1'>Product Price: {pwc.price.toString()}</p>
    </div>
  )
}

export default Product