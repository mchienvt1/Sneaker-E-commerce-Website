import React, { useEffect, useState } from 'react'
import BannerImage from './component/BannerImage'
import GridItems from './component/GridItems'
import axios from 'axios';
import style from './Home.module.css'
import CategoryComponent from '../../components/category/Category'
import { Link } from 'react-router-dom';


export default function Home() {
  const [newProducts, setNewProducts] = useState([])
  const [discountProducts, setDiscountProducts] = useState([])
  const [outStandingProducts, setOutStandingProducts] = useState([])

  const fetchProducts = async (setProducts, api) => {
    const result = await axios.get(api);
    setProducts(result.data);
  }

  useEffect(() => {
    fetchProducts(setDiscountProducts, `http://localhost/BE/?c=discount&a=list&search`)
    fetchProducts(setNewProducts, `http://localhost/BE/?c=newProduct&a=list&search`)
    fetchProducts(setOutStandingProducts, `http://localhost/BE/?c=outStanding&a=list&search`)
  }, [])

  
  return (
    <>
      <BannerImage />
      <CategoryComponent name="all" />

      <div className={style.gridContainer}>
        <h1>Sản phẩm giảm giá</h1>
        <GridItems products={discountProducts} />
        <Link to='collections/giam-gia'><h2>Xem thêm sản phẩm giảm giá</h2></Link>
      </div>

      <div className={style.gridContainer}>
        <h1>Sản phảm mới</h1>
        <GridItems products={newProducts} />
        <Link to='collections/moi'><h2>Xem thêm sản phẩm mới</h2></Link>
      </div>

      <div className={style.gridContainer}>
        <h1>Sản phảm nổi bật</h1>
        <GridItems products={outStandingProducts} />
        <Link to='collections/noi-bat'><h2>Xem thêm sản phẩm nổi bật</h2></Link>
      </div>
    </>
  )
}
