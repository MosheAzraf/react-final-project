import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Purchases = () => {
  const purchases = useSelector(state => state.purchases.purchases);
  const customers = useSelector(state => state.customers.customers);
  const products = useSelector(state => state.products.products);

  const [selectedCustomer, setSelectedCustomer] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSearch = () => {
    const filteredPurchases = purchases.filter(purchase => {
      const isCustomerMatch = selectedCustomer === 'All' || purchase.customerId === selectedCustomer;
      const isProductMatch = selectedProduct === 'All' || purchase.productId === selectedProduct;
      const isDateMatch = selectedDate === '' || purchase.date === selectedDate;
      return isCustomerMatch && isProductMatch && isDateMatch;
    });
    setFilteredPurchases(filteredPurchases);
  };

  const [filteredPurchases, setFilteredPurchases] = useState([]);

  return (
    <div className='container'>Purchases
      <div>
          <div className='min-w-full border border-cyan-600 flex items-center justify-center space-x-6 font-bold text-cyan-600 px-4 py-4'>
            <select value={selectedCustomer} onChange={e => setSelectedCustomer(e.target.value)}>
              <option value='All'>All customers</option>
              {customers.map(customer => (
                <option key={customer.id} value={customer.id}>{customer.firstName} {customer.lastName}</option>
              ))}
            </select>
            <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
              <option value='All'>All products</option>
              {products.map(product => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </select>
            <input type='date' value={selectedDate} onChange={e => setSelectedDate(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
          </div>

        <div className='overflow-x-auto"'>
          <table className='min-w-full text-left'>
            <thead className='border border-cyan-600 font-medium'>
              <tr>
                <th className='px-6 py-4 underline font-bold'>Customer</th>
                <th className='px-6 py-4 underline font-bold'>Product</th>
                <th className='px-6 py-4 underline font-bold'>Quantity</th>
                <td className='px-6 py-4 underline font-bold'>Total Price</td>
                <th className='px-6 py-4 underline font-bold'>Date</th>
              </tr>
            </thead>
            <tbody className='mt-3'>
              {filteredPurchases.map(purchase => {
                const customer = customers.find(c => c.id === purchase.customerId);
                const product = products.find(p => p.id === purchase.productId);
                return (
                  <tr className='border border-cyan-600 hover:bg-cyan-200' key={purchase.id}>
                    <td className='whitespace-nowrap px-6 py-4'>{customer ? `${customer.firstName} ${customer.lastName}` : 'Unknown'}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{product ? product.name : 'Unknown'}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{purchase.quantity}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{`${purchase.price}$`}</td>
                    <td className='whitespace-nowrap px-6 py-4'>{purchase.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        
      </div>

    </div>
  )
}

export default Purchases


