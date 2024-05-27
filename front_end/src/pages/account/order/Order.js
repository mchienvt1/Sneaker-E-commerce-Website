import React, { useEffect, useState } from 'react'
import style from './Order.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Order() {
  const [cartProducts, setCartProducts] = useState([]);
  const fetchProduct = async (productID) => {
    const res = await axios
      .get(`http://localhost/BE/?c=product&a=list&search=${productID}`)
    return res.data[0];
  };
  let formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  

  useEffect(() => {  
    // fetch cart product
    axios
    .get(`http://localhost/BE/?c=cart&a=list&search=${localStorage.getItem('id')}`)
    .then((result) => {
      const cartProductPromises = result.data.map((cartProduct) => {
        return fetchProduct(cartProduct.p_id)
          .then((data) => {
            cartProduct['pprice'] = data.pprice;
            cartProduct['ptitle'] = data.ptitle;
            return cartProduct;
          });
      });

      Promise.all(cartProductPromises)
        .then((cartProductsWithData) => {
          setCartProducts(cartProductsWithData);
        });
    });

  }, [])

  const navigate = useNavigate();
  if (localStorage.getItem('role') !== 'user' && localStorage.getItem('role') !== 'admin') {
    navigate('/account/userInfor');
  }
  const handleClickLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('fullname');
    localStorage.removeItem('email');
    localStorage.removeItem('phonenumber');
    navigate('/');
  }
  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <i className="bi bi-person-circle"></i>
        <div>Xin Chào <span>{localStorage.getItem('fullname')}</span></div>
        <ul>
          <li>
            <Link to='/account/order'>

              <i className="bi bi-person-circle"></i>Thông tin tài khoản
            </Link>
          </li>
          <li>
            <Link to='/account/order'>
              <i className="bi bi-kanban"></i>Quản lý đơn hàng
            </Link>
          </li>
          <li
            onClick={() =>{handleClickLogout()}}
          >
            <Link to='/account/order'>
              <i className="bi bi-box-arrow-right"></i>Đăng xuất
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.rightSide}>
        <h4>Đơn hàng của bạn</h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Mã đơn</th>
              <th scope="col" className={style.productName}>Tên sản phẩm</th>
              <th scope="col">Size</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((cartProduct, index) => {
              return (
                <tr>
                  <th scope="row"><Link to={`/products/${cartProduct.p_id}`}> {cartProduct.id}</Link></th>
                  <td className={style.productName}><Link to={`/products/${cartProduct.p_id}`}> {cartProduct.ptitle}</Link></td>
                  <td>{cartProduct.size}</td>
                  <td>{cartProduct.sl}</td>
                  <td>{formatter.format(cartProduct.sl * cartProduct.pprice)}</td>
                  <td>{cartProduct.status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

