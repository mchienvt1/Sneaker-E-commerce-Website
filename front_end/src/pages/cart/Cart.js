import React, { useContext, useState } from 'react'
import Path from '../../components/path/Path'
import CartContainer from './CartContainer';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
  const { cartProducts, updateCartProducts, totalPrice, nItem } = useContext(CartContext);
  const paths = ['Trang Chủ', `Giỏ Hàng (${nItem})`];
  return (
    <>
      <Path paths={paths} />
      <CartContainer
        cartProducts={cartProducts}
        updateCartProducts={updateCartProducts}
        totalPrice={totalPrice}
        nItem={nItem}
      />
    </>
  )
}
