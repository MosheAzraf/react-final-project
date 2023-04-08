import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ProductsCombobox from '../components/ProductsCombobox';
import ProductsList from '../components/ProductsList';

const Products = () => {
  const purchases = useSelector(state => state.purchases.purchases);
  const customers = useSelector(state => state.customers.customers);
  const products = useSelector(state => state.products.products);
  const [productsWithCustomers, setProductsWithCustomers] = useState([]);
  console.log("customers reducers:",customers)

  //' grid grid-rows-2  border border-solid'

  useEffect(() => {
    const productCustomerMap = products.map(product => {
      const customersWhoBoughtProduct = purchases
        .filter(purchase => purchase.productId === product.id)
        .map(purchase => {
          const customer = customers.filter(c => c.id === purchase.customerId)[0]
          return { customerId: customer.id, name: `${customer.firstName} ${customer.lastName}` };
        });
      
      return { product: product.name, customers: customersWhoBoughtProduct };
    });
    setProductsWithCustomers(productCustomerMap);
    console.log("in useEffect:", productCustomerMap)

  }, [customers, products, purchases])
  
  return (
    <div className="container">
      <div>total amount of purchased products: {purchases.length}</div>
      <div >
        {
          <ProductsList productsWithCustomers={productsWithCustomers} />
        }
        
        <div><ProductsCombobox/></div>
      </div>
    </div>
  )
}

export default Products



{/* <div key={purchase.id}  className=' grid grid-flow-col border border-solid'>
                <div className='col-span-1 border border-solid'>
                  <ProductsList productId={purchase.productId}/>
                  product
                </div>
                <div className='col-span-1 border border-solid'>
                  customers
                  <CustomersList  customerId={purchase.customerId}/>
                </div>
              </div> */}

{/* <div className=' col-span-1 border border-solid'>
          
          </div>
          <div className=' col-span-1 border border-solid'>customers</div> */}