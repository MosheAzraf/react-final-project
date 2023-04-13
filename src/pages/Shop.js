import React from 'react'
import { useParams } from 'react-router-dom'

const Shop = () => {
    const {id} = useParams();

  return (
    <div>Shop with customer id: {id}
    
    </div>
  )
}

export default Shop