import { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import {update_quantity, add_purchase} from '../redux/actions/actionsIndex'



const ProductShopList = ({customerId}) => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (productId, quantity) => {
        setQuantities({...quantities, [productId]: quantity})
    }

    const handlePurchase = (product) => {
        if(!quantities[product.id] || quantities[product.id] === 0){
            alert("cannot add product when quantity is 0")
        } 

        const date = new Date();
        const isoString = date.toISOString();
        const formattedDate = isoString.substring(0, 10);

        const price =  product.price *  quantities[product.id];
        const convertedPrice = parseInt(price);

        const newPurchase = {id: uuidv4(), customerId: customerId, productId:product.id,quantity:quantities[product.id], date: formattedDate, price: convertedPrice}
        //console.log("new purchase:", newPurchase);
        dispatch(update_quantity({
            ...product, quantity: quantities[product.id]
          }));
        dispatch(add_purchase(newPurchase));
        setQuantities({ ...quantities, [product.id]: 0 });
        navigate('/purchases')
    }




  return (
    <div className='container'>
        <div className='overflow-x-auto'>
            <table className='min-w-full text-left'>
                <thead className='border border-cyan-600 font-medium'>
                    <tr >
                        <th className='px-6 py-4 underline font-bold'>Id</th>
                        <th className='px-6 py-4 underline font-bold'>Name</th>
                        <th className='px-6 py-4 underline font-bold'>Price</th>
                        <th className='px-6 py-4 underline font-bold'>Quantity in stock</th>
                        <th className='px-6 py-4 underline font-bold'>Quantity</th>
                        <th className='px-6 py-4 underline font-bold'>Add Item</th>
                    </tr>
                </thead>
                <tbody className='mt-3'>
                    {
                        products.map((product)=> (
                            <tr className='border border-cyan-600 mt-2 hover:bg-cyan-200' key={product.id}>
                                <td className='whitespace-nowrap px-6 py-4 font-medium'>{product.id}</td>
                                <td className='whitespace-nowrap px-6 py-4'>{product.name}</td>
                                <td className='whitespace-nowrap px-6 py-4'>{`${product.price}$`}</td>
                                <td className='whitespace-nowrap px-6 py-4'>{product.quantity === 0 ? <p className='text-rose-600'> out of stock</p> : product.quantity}</td>
                                <td className='whitespace-nowrap px-6 py-4'><input className='border border-black rounded-lg' type="number" min="0" max={product.quantity} value={quantities[product.id] || 0} onChange={(e) => handleQuantityChange(product.id, e.target.value)}/></td>
                                <td className='whitespace-nowrap px-6 py-4'><button className='text-cyan-600 hover:underline' onClick={()=> handlePurchase(product)}>save</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductShopList