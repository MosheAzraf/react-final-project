import React from 'react'
import { useSelector } from 'react-redux'

const Purchases = () => {
  const purchases = useSelector(state => state.purchases.purchases);
  console.log(purchases)

  return (
    <div className='container'>Purchases</div>
  )
}

export default Purchases