import {Routes, Route, Navigate, Router } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
import Collection from './pages/collections/Collection';
import { CartProvider } from './context/CartContext';
import Login from './pages/account/login/Login';
import Register from './pages/account/register/Register';
import Layout from './pages/layout/Layout';
import ManageProduct from './pages/admin/manageProduct/ManageProduct';
import CreateProduct from './pages/admin/createProduct/CreateProduct';
import UpdateProduct from './pages/admin/updateProduct/UpdateProduct';
import Search from './pages/search/Search';
import UserInfor from './pages/account/user/UserInfor';
import Order from './pages/account/order/Order';
import ManageUser from './pages/admin/manageUser/ManageUser';
import ManageOrder from './pages/admin/manageOrder/ManageOrder';
import ManageDiscountProduct from './pages/admin/manageDiscountProduct/ManageDiscountProduct';
import ManageNewProduct from './pages/admin/manageNewProduct/ManageNewProduct';
import ManageOutStandingProduct from './pages/admin/manageOutStandingProduct/ManageOutStandingProduct';


function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/admin">
            <Route path="" element={<Navigate to="/admin/manageProduct" />} />
            <Route path="createProduct" element={<CreateProduct />} />
            <Route path="manageProduct" element={<ManageProduct />} />
            <Route path="updateProduct/:productID" element={<UpdateProduct />} />
            <Route path="manageUser" element={<ManageUser />} />
            <Route path='manageOrder' element={<ManageOrder />} />
            <Route path='manageDiscountProduct' element={<ManageDiscountProduct />} />
            <Route path='manageNewProduct' element={<ManageNewProduct />} />
            <Route path='manageOutStandingProduct' element={<ManageOutStandingProduct />} />
          </Route>

          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/search/:searchTerm' element={<Search />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product' element={<Product />} />
            <Route
              path='/collections/:collectionName'
              element={<Collection API_URL={'http://localhost/BE/?c=product&a=list'}/>}
            />
            <Route
              path='/products/:productID'
              element={<Product/>}
            />
            <Route
              path='/account/login'
              element={<Login/>}
            />
            <Route
            path='/account/userInfor'
              element={<UserInfor />}
              
            />
            <Route
              path='/account/register'
              element={<Register/>}
            />
            <Route
              path='/account/order'
              element={<Order/>}
            />
          </Route>
        
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
