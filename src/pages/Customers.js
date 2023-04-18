import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';

const Customers = () => {
  const customers = useSelector(state => state.customers.customers)
  const products = useSelector(state => state.products.products);
  const purchases = useSelector(state => state.purchases.purchases);
  const [data, setData] = useState([]);
  //console.log("customers:", customers, "products:", products, "purchases:", purchases);

  useEffect(()=> {
   const combinedData = customers.map((customer)=> {
    const customerPurchases = purchases.filter((purchase)=> purchase.customerId === customer.id);
    const customerProducts = customerPurchases.map((purchase)=> {
      const productInfo = products.filter((product)=> product.id === purchase.productId);
      return {...productInfo}
    } )
    return {customer, customerPurchases,customerProducts }
   })
   setData(combinedData);
   console.log(combinedData)
  },[])



  return (
    <div className='container'>Customers</div>
  )
}

export default Customers