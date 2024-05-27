import React from 'react'
import style from './CartProduct.module.css';
import Cookies from 'js-cookie'

export default function CartProduct({ product, updateCartProducts }) {

  const size = product.product.size;
  const soLuong = product.product.soLuong;

  const handleClickNumberItem = (denta) => {
    if(soLuong + denta < 1) return;
    const jsonProduct = {
      size: size,
      soLuong: soLuong + denta,
      product: product.product.product
    }
    Cookies.set(`cart${product.sizeID}`, `${JSON.stringify(jsonProduct)}`);
    updateCartProducts();
    
  }
  const handleClickRemoveProduct = () => {
    if (window.confirm('Xóa sản phẩm khỏi giỏ hàng')) {
      Cookies.remove(`cart${product.sizeID}`);
      updateCartProducts();
    };
  }

  return (
      <div className = {style.item_form}>
        <div className = {style.item_image}>
          <a href = "">
            <img src={product.product.product.pimg} alt="mainImage"></img>
          </a>
        </div>

        <div className = {style.item_detail}>
          <div className = {style.item_info}>
            <h3>{product.product.product.ptitle}</h3>
          </div>

          <div className = {style.item_detail_bottom}>
            <div><span>{product.product.product.pprice} ₫</span></div>

            <div className = {style.item_variant}>
              <span>{ size }</span>
            </div>

            <div className = {style.item_total}>
              <div className={style.quantity_picker}>
                <button
                  className={`${style.quantity_modifier} ${style.modifier_left}`}
                  onClick={() => handleClickNumberItem(-1)}
                >
                  &ndash;
                </button>
                <input className= {style.quantity_display} type="text" value={product.product.soLuong} readOnly />
                <button
                  className={`${style.quantity_modifier} ${style.modifier_right}`}
                  onClick={() => handleClickNumberItem(1)}
                >
                  &#xff0b;
                </button>
              </div>
            </div>

            <div className= {style.total_money}>
              <span>{parseInt(product.product.soLuong * product.product.product.pprice)} ₫</span>
            </div>
          </div>
        </div>

        <div
          className={style.item_remove}
          onClick={() => {
            handleClickRemoveProduct();
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
        </div>

      </div>
  // </div>
  )
}
