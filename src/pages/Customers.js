import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Customers = () => {
  const customers = useSelector(state => state.customers.customers)
  const products = useSelector(state => state.products.products);
  const purchases = useSelector(state => state.purchases.purchases);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    const combinedData = customers.map((customer)=> {
      const customerPurchases = purchases.filter((purchase)=> purchase.customerId === customer.id);
      const customerProductIds = customerPurchases.map((purchase)=> purchase.productId);
      const customerProducts = products.filter((product)=> customerProductIds.includes(product.id));
      return {customer, customerPurchases, customerProducts }
     })
     setData(combinedData);
     console.log(combinedData)
    },[customers, purchases, products])

  const navigateToProduct = (product) => {
    navigate(`/editproduct/${product.id}`)
  }

  const navigateToShop = (customer) => {
    navigate(`/shop/${customer.id}`)
  }


//navigate(`/editproduct/${pwc.id}`)}

  return (
    <div className='container'>
      <div className='overflow-x-auto '>
        <table className='min-w-full text-left'>
          
          <thead className='border border-cyan-600 font-medium'>
            <tr>
              <th className='px-6 py-4 underline'>Id</th>
              <th className='px-6 py-4 underline'>Name</th>
              <th className='px-6 py-4 underline'>Products</th>
              <th className='px-6 py-4 underline'>Purchases Dates</th>
              <th className='px-6 py-4 underline'>Add Products</th>
            </tr>
          </thead>
          <tbody className='mt-3'>
            {
              data.map((data)=> (
                <tr key={data.customer.id} className='border border-cyan-600 mt-2'>
                  <td className='whitespace-nowrap px-6 py-4 font-medium'>{data.customer.id}</td>
                  <td className='whitespace-nowrap px-6 py-4'>{`${data.customer.firstName} ${data.customer.lastName}`}</td>
                  <td className='whitespace-nowrap px-6 py-4'>{data.customerProducts.map((product)=> (<ul key={product.id}><li onClick={()=>navigateToProduct(product)} className=' text-cyan-600 hover:underline cursor-pointer'>{product.name}</li></ul>))}</td>
                  <td className='whitespace-nowrap px-6 py-4'>{data.customerPurchases.map((purchase)=> (<ul key={purchase.id}><li>{purchase.date}</li> </ul>))}</td>
                  <td className='whitespace-nowrap px-6 py-4'><button onClick={()=> navigateToShop(data.customer)} className=' text-cyan-700 hover:underline'>Add Products</button></td>
                </tr>
              ))
            }
          </tbody>


        </table>
      </div>
    </div>
  )
}

export default Customers