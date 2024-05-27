import React, { useContext } from 'react'
import style from './Header.module.css'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


function CartProduct({size, soLuong, product}) {
  return (
    <div
      
      style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'start', marginBottom: '10px',
        padding: '5px 10px', gap: '30px',
        borderTop: '1px dotted #d5d5d5',
        
      }}
    >
      <img
        src={product.pimg}
        alt="productMainImg"
        style={{
          margin: 'auto 0px',
          width: '60px', height: '60px',
        }}
      />
      <div
        style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'start', alignItems: 'start',
        }}
      >
        <a
          href={`/products/${product.id}`}  
          style={{fontSize: 14, fontWeight: 500, color: 'black', textDecoration: 'none',}}
        >{product.ptitle}</a>
        <div
          style={{ marginTop: 5, fontSize: 14, }}
        >Size: {size}</div>
        <div
          style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 2}}
        >
          <div
            style={{
              width: '20px', height: '20px',
              backgroundColor: '#f6f6f6',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              fontSize: 14, fontWeight: 500,
            }}
          >{soLuong}</div>
          <div
            style={{
              fontSize: 14, fontWeight: 500,
            }}
          >{product.pprice} ₫</div>
        </div>
      </div>
    </div>
  )
}


export default function Cart() {
  const { cartProducts, totalPrice, nItem } = useContext(CartContext);
  return (
    <Link
      to='/cart'
      className={`${style.bag}`}
    >
        <i className="bi bi-bag-dash"></i>
        <div className={`${style.number}`}>
          {nItem}
        </div>
        <div className={`${style.cartContainer} shadow`}>
          <span>GIỎ HÀNG</span>
          <div className={style.cartProducts}>
            {cartProducts.length === 0 ?
              <div className={style.cartIcon}>
                <i className="bi bi-cart"></i>
                <span>Hiện chưa có sản phẩm</span>
              </div>
              :
                cartProducts.map((cartProduct, index) => {
                  return <CartProduct
                    key={cartProduct.sizeID}
                    size={cartProduct.product.size}
                    soLuong={cartProduct.product.soLuong}
                    product={cartProduct.product.product} />
                })
            }
          </div>
          <div className={style.cartCost}>
            <span>TỔNG TIỀN</span>
            <span>{ totalPrice }₫</span>
          </div>
          <button>
            <Link
              to='/cart'
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              XEM GIỎ HÀNG
            </Link>
          </button>
        </div>
    </Link>
    
  )
}
