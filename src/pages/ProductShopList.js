import { useState} from 'react'
import { useSelector } from 'react-redux'

const ProductShopList = () => {
    const products = useSelector(state => state.products.products)
    console.log(products);
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (productId, quantity) => {
        setQuantities({...quantities, [productId]: quantity})
    }

    const handlePurchase = (product) => {
        if(!quantities[product.id] || quantities[product.id] === 0){
            alert("cannot add product when quantity is 0")
        } else {
            console.log(quantities[product.id])
        }
    }




  return (
    <div className='container'>
            <table className='table-fixed w-full border border-cyan-600 rounded-lg shadow-xl mt-4'>
                <thead>
                    <tr className='underline'>
                        <th className=' text-left p-2'>Id</th>
                        <th className=' text-left p-2'>Name</th>
                        <th className=' text-left p-2'>Price</th>
                        <th className=' text-left p-2'>Quantity</th>
                        <th className=' text-left p-2'>Add Item</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product)=> (
                            <tr className=' p-2' key={product.id}>
                                <td className=' p-2'>{product.id}</td>
                                <td className=' p-2'>{product.name}</td>
                                <td className=' p-2'>{product.price}</td>
                                <td className=' p-2'><input type="number" min="0" max={product.quantity} value={quantities[product.id] || 0} onChange={(e) => handleQuantityChange(product.id, e.target.value)}/></td>
                                <td className=' p-2'><button onClick={()=> handlePurchase(product)}>save</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </div>
  )
}

export default ProductShopList