import {useState, useEffect} from 'react'
import { useParams, useNavigate, redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { update_customer,delete_customer, delete_purchases_byCustomerId } from '../redux/actions/actionsIndex';

const EditCustomer = () => {
  const {id} = useParams();
  const purchases = useSelector(state => state.purchases.purchases);
  const customers = useSelector(state => state.customers.customers);
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const [customerData, setCustomerData] = useState({});
  const [customerProducts, setCustomerProducts] = useState([]);
  const [showEditData, setShowEditData] = useState(false);
  const [updateCustomerInfo, setUpdateCustomerInfo] = useState({id:"", firstName:"", lastName:"", city:""});
  const navigate = useNavigate();

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
    // delete_customer, delete_purchases_byCustomerId 
    dispatch(delete_purchases_byCustomerId(id));
    dispatch(delete_customer(id));
    navigate("/products");
    


  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUpdateCustomerInfo(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFields = {};

    if(updateCustomerInfo.firstName !== ""){
      updatedFields.firstName = updateCustomerInfo.firstName;
    }

    if(updateCustomerInfo.lastName !== ""){
      updatedFields.lastName = updateCustomerInfo.lastName;
    }

    if(updateCustomerInfo.city !== ""){
      updatedFields.city = updateCustomerInfo.city;
    }

    const updateCustomer = {id:id, ...updatedFields}
    dispatch(update_customer(updateCustomer));

    console.log(updateCustomer);
  }





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
      <form className='container mt-4 max-w-[20rem] grid grid-row justify-center border border-solid border-teal-600  rounded-lg' onSubmit={handleSubmit}>
        <p>Update Customer</p>
        <p>First Name:</p>
        <input className='mt-2 border border-gray-500 rounded-md' onChange={handleChange} type="text" name="firstName" id=""/>
        <p>Last Name:</p>
        <input className='mt-2 border border-gray-500 rounded-md' onChange={handleChange} type="text" name="lastName" id=""/>
        <p>City:</p>
        <input className='mt-2 border border-gray-500 rounded-md' onChange={handleChange} type="text" name="city" id=''/>
        <button type='submit' className='mt-2 mb-4 hover:underline'>Update</button>
      </form>
      }

    </div>
  )
}

export default EditCustomer
