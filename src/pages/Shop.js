import React from 'react'
import { useParams } from 'react-router-dom'
import ProductShopList from './ProductShopList';

const Shop = () => {
    const {id} = useParams();

  return (
    <div className='container'>Shop with customer id: {id}
      <ProductShopList customerId={id}/>
    </div>
  )
}

export default Shop