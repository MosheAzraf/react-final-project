import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//useParams

const EditProduct = () => {
  const {id} = useParams();
  const products = useSelector(state => state.products.products);
  const [product, setProduct] = useState({id:"", name:"", price:"", quantity:""});
  const [activeEdit, setActiveEdit] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === id);
    if(foundProduct.id === id){
      console.log(foundProduct);
      setProduct({
        id: foundProduct.id,
        name: foundProduct.name,
        price: foundProduct.price,
        quantity: foundProduct.quantity
      })
    } 
  }, [id])




  return (
    <div className='container'>
      <div className='flex justify-center space-x-2'>
        <button className='text-cyan-600 hover:underline' onClick={()=> setActiveEdit(!activeEdit)}>Edit Data</button>
        <button className='hover:underline' onClick={()=> navigate("/products")}>Back to Products</button>
      </div>
      { !activeEdit ?
      <div className='container mt-4 max-w-[20rem] grid grid-rows-6 justify-center border border-solid border-lime-600 rounded-lg'>
        <p className=' font-bold text-cyan-600 underline'>Product Info</p>
        <p className='mt-2'>Id: {product.id}</p>
        <p className='mt-2'>Name: {product.name}</p>
        <p className='mt-2'>Pric: {product.price}</p>
        <p className='mt-2'>Quantity: {product.quantity}</p>
      </div> : 
      <div>
        <p>edit</p>
      </div>
        
      }
    </div>
  )
}

export default EditProduct