import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'

export const CartContext = createContext();

const sortBySizeID = (a, b) => {
  if (a.sizeID < b.sizeID) return -1;
  if (a.sizeID > b.sizeID) return 1;
  return 0;
};

export function CartProvider({children}) {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nItem, setNItem] = useState(0);
  const updateCartProducts = () => {
    let temProducts = [];
    const cookies = Cookies.get();
    for (const key in cookies) {
      if(key.includes('cart')) {
        const sizeID = key.slice(4);
        const product = JSON.parse(cookies[key]);   
        temProducts.push({sizeID, product});
      }
    }
    temProducts.sort(sortBySizeID);
    setCartProducts(temProducts);
    
  }

  useEffect(() => {
    updateCartProducts();
  }, []);
  useEffect(() => {
    let tongTien = 0;
    cartProducts.forEach((cartProduct) => {
      tongTien += cartProduct.product.soLuong * cartProduct.product.product.pprice;
    });
    setTotalPrice(tongTien);
  }, [cartProducts]);
  
  useEffect(() => {
    let tongSoLuong = 0;
    cartProducts.forEach((cartProduct) => {
      tongSoLuong += cartProduct.product.soLuong;
    });
    setNItem(tongSoLuong);
  }, [cartProducts]);

  return (
    <CartContext.Provider value={{ cartProducts, updateCartProducts, totalPrice, nItem }}>
      {children}
    </CartContext.Provider>
  );
}

