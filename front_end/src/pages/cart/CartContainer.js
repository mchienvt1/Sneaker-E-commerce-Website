import React from 'react'
import style from './Cart.module.css';
import CartProduct from './CartProduct';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function CartContainer({ cartProducts, updateCartProducts, totalPrice, nItem }) {
  const updateSoLuongSize = async (sizeID, soluong) => {
    await axios
      .get(`http://localhost/BE/?c=size&a=minus&id=${sizeID}&sl=${soluong}`)
      .then((result) => { 
        if (result.data === 'true') {
          Cookies.remove(`cart${sizeID}`);
          return true;
        } else {
          return false;
        }
      })
  }

  const postCart = async (cartProduct) => {
    const sizeID = cartProduct.sizeID
    const product = cartProduct.product;
    const soluong = product.soLuong;
    const formData = {
      sl: product.soLuong,
      a_id: localStorage.getItem('id'),
      p_id: product.product.id,
      size: product.size
    }
    await axios
      .post(`http://localhost/BE/?c=cart&a=save`, formData)
      .then(async (result) => {
        if (result.data === 'true') {
          // call api decrease size      
          await updateSoLuongSize(sizeID, soluong);
          Cookies.remove(`cart${sizeID}`);
          return true;
        } else {
          return false;
        }
      })
  }

  
  const navigate = useNavigate();
  const handleClickSubmitBuy = async() => {
    if(window.confirm('Xác nhận mua hàng') === false) return;
    if (localStorage.getItem('role') === 'user') {
      for (let i = 0; i < cartProducts.length; i++) {
        const cartProduct = cartProducts[i];
        await postCart(cartProduct);
      }
      updateCartProducts([]);
      window.location.reload();
    } else {
      navigate('/account/login')
    }
  };

  
  return (
    <div className={`${style.container}`}>
      <div className={style.wrapContent}>
        <div className={`${style.yourCart}`}>
          <h4>GIỎ HÀNG CỦA BẠN</h4>
          
          {cartProducts.length > 0 ?
            <>
              <div>Bạn đang có <b>{nItem} sản phẩm</b> trong giỏ hàng</div>
              <div className={style.products}>
              {
                cartProducts.map((product, index) => {
                  return (
                    <CartProduct product={product} updateCartProducts = {updateCartProducts} />
                  );
                })
              }
              </div>
            </>
            :
            <p
              style={{
                fontSize: 17,
                padding: '20px 15px',
                fontWeight: 500
              }}
            >Giỏ hàng của bạn đang trống</p>
          }
          
        </div>
        <div className={style.orderInfor}>
          <p>THÔNG TIN ĐƠN HÀNG</p>
          <div className={style.price}>
            <div>Tổng tiền</div>
            <div>{totalPrice} ₫</div>
          </div>
          <button
            className='btn btn-danger col-12 mt-4'
            onClick={() => {
              handleClickSubmitBuy();
            }}
          >Xác nhận mua hàng</button>
        </div>
      </div>
    </div>
  )
}
