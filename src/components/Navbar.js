import React from 'react'
import { useLocation, Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className='flex border p-6 justify-items-start justify-center space-x-4'>
    <NavLink className="Link"  to="/home">Home</NavLink>
    <NavLink className="Link" to="/products">Products</NavLink>
    <NavLink className="Link" to="/customers">Customers</NavLink>
    <NavLink className="Link" to="/purchases">Purchases</NavLink> 
    </nav>
  )
}
export default Navbar


{/* <Link className={`Link ${location.pathname === '/home' ? 'bg-blue-500' : ''}`}  to="/home">Home</Link>
<Link className={`Link ${location.pathname === '/products' ? 'bg-blue-500' : ''}`} to="/products">Products</Link>
<Link className={`Link ${location.pathname === '/customers' ? 'bg-blue-500' : ''}`} to="/customers">Customers</Link>
<Link className={`Link ${location.pathname === '/purchases' ? 'bg-blue-500' : ''}`} to="/purchases">Purchases</Link>  */}
