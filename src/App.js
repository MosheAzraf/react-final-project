import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Purchases from './pages/Purchases';
import NoMatch from './pages/NoMatch';
import EditProduct from './pages/EditProduct';
import EditCustomer from './pages/EditCustomer';
import Shop from './pages/Shop';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/purchases" element={<Purchases/>}/>
        <Route path="/products/:id" element={<EditProduct/>}/>
        <Route path="/customers/:id" element={<EditCustomer/>}/>
        <Route path="/shop/:id" element={<Shop/>} />
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </>
  );
}

export default App;
