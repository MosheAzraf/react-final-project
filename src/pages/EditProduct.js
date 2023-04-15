import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { update_product, delete_product, delete_purchases_byProductId} from '../redux/actions/actionsIndex';
//useParams

const EditProduct = () => {
  const {id} = useParams();
  const products = useSelector(state => state.products.products);
  const [product, setProduct] = useState({id:"", name:"", price:"", quantity:""});
  const [updateProduct, setUpdateProduct] = useState({id:id, name:"", price:"", quantity:""})
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === id);
    if(foundProduct.id === id){
      console.log(foundProduct && foundProduct.id === id);
      setProduct({
        id: foundProduct.id,
        name: foundProduct.name,
        price: foundProduct.price,
        quantity: foundProduct.quantity
      })
    } 
    setUpdateProduct(foundProduct);
  }, [id, products])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUpdateProduct(prevProduct => ({...prevProduct, [name]:value}) )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("updated info:", updateProduct);
    const updatedFields = {};
    if (updateProduct.name !== "") {
      updatedFields.name = updateProduct.name;
    }

    if (updateProduct.price !== "") {
      updatedFields.price = +updateProduct.price;
    }

    if (updateProduct.quantity !== "") {
      updatedFields.quantity = +updateProduct.quantity;
    }

    const updatedProduct = { id: updateProduct.id, ...updatedFields };
    dispatch(update_product(updatedProduct));
    resetUpdateValues();
  }

  const resetUpdateValues = () => {
    setUpdateProduct({id:"", name:"", price:"", quantity:""});
  }

  const deleteProduct = () => {
    console.log(id);
    dispatch(delete_purchases_byProductId(id));
    dispatch(delete_product(id));
    //redirect("/purchases");
    navigate("/purchases");
  }




  return (
    <div className='container'>
      <div className='flex justify-center space-x-2'>
        <button className='hover:underline' onClick={()=> navigate("/products")}>Back to Products</button>
      </div>
      
      <div className='container mt-4 max-w-[20rem] grid grid-row justify-center border border-solid border-teal-600  rounded-lg'>
        <p className=' font-bold text-cyan-600 underline'>Product Info</p>
        <p className='mt-2'> <span className='font-bold'>Id:</span> {product.id} </p>
        <p className='mt-2'> <span className='font-bold'>Name:</span> {product.name} </p>
        <p className='mt-2'> <span className='font-bold'>Price:</span> {product.price} </p>
        <p className='mt-2'> <span className='font-bold'>Quantity:</span> {product.quantity} </p>
        <button className="mt-2 mb-2 text-rose-600 hover:underline" onClick={deleteProduct}>Delete Product</button>
      </div> 

      <form className="container mt-4 max-w-[20rem] grid grid-row justify-center border border-solid border-teal-600  rounded-lg" onSubmit={handleSubmit}>
        <p className=' font-bold text-cyan-600 underline'>Update Product</p>
        <p>Name:</p>
        <input className='mt-2 border border-gray-500 rounded-md' type="text" name="name" id="" onChange={handleChange}/>
        <p>Price:</p>
        <input className='mt-2 border border-gray-500 rounded-md' type="number" name="price" id="" onChange={handleChange}/>
        <p>Quantity</p>
        <input className='mt-2 mb-4 border border-gray-500 rounded-md' type="number" name="quantity" onChange={handleChange}id="" />
        <button type='submit' className='mb-4 hover:underline'>Update</button>
      </form>
        
    </div>
  )
}

export default EditProduct