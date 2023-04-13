import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


const EditCustomer = () => {
  const {id} = useParams();

  const purchases = useSelector(state => state.purchases.purchases);
  const customers = useSelector(state => state.customers.customers);
  const products = useSelector(state => state.products.products);
  const [customerData, setCustomerData] = useState({});
  const [customerProducts, setCustomerProducts] = useState([]);
  const [showEditData, setShowEditData] = useState(false);

  useEffect(() => {
    const customer = customers.find((customer) => customer.id === id);
    const customerPurchases = purchases.filter((purchase) => purchase.customerId === customer.id);
    const purchasedProducts = customerPurchases.map((purchase)=> {
      const product = products.find((product)=> product.id === purchase.productId);
      return {...product, purchaseDate: purchase.date }
    })
    console.log("customer info:",customer)
    console.log("his products:",purchasedProducts)
    setCustomerData(customer);
    setCustomerProducts(purchasedProducts)

  }, [id,purchases, customers, products])
  
  const handleDelete = () => {
    console.log(customerData.id);
  }

  const navigate = useNavigate();



  return (
    <div className='container'>
      <div className="grid grid-cols-2 mt-4 border border-teal-600">
        <div className="border border-x-stone-700">
          <p className="text-teal-600 font-bold mb-4 mr-4">Customer Details</p>
          <div className="grid grid-cols-3">
            <p className="font-bold underline">id</p>
            <p className="font-bold underline">Name</p>
            <p className="font-bold underline">City</p>
          </div>
          <div className="grid grid-cols-3">
            <p>{customerData.id}</p>
            <p>{customerData.firstName} {customerData.lastName}</p>
            <p>{customerData.city}</p>
          </div>

          <button className="text-blue-600 mr-2 hover:underline" onClick={()=> setShowEditData(!showEditData)}>Update Customer</button>
          <button className=" text-red-600 hover:underline" onClick={handleDelete}>Delete Customer</button>
        </div>

        <div className="border border-x-stone-700">
          <p className="text-teal-600 font-bold mb-4">Customer Products</p>
          <div className="grid grid-cols-4">
            <p className="font-bold underline">Id</p>
            <p className="font-bold underline">Name</p>
            <p className="font-bold underline">Purchased At</p>
          </div>
          {
            customerProducts.length === 0 ? <p>This cusomer didn't purchased yet</p> :
            customerProducts.map((purchasedProduct)=> {
              return (
                <div key={purchasedProduct.id} className="container grid grid-cols-4">
                  <p>{purchasedProduct.id}</p>
                  <p>{purchasedProduct.name}</p>
                  <p>{purchasedProduct.purchaseDate}</p>
                  <button className="text-blue-600 hover:underline" onClick={()=> navigate(`/editproduct/${purchasedProduct.id}`)}>Edit Product</button>
                </div>
              )
            })
          }
        </div>
      </div>

      {showEditData && 
      <div>
        edit
      </div>
      }

    </div>
  )
}

export default EditCustomer
