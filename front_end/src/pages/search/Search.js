import React, { useEffect, useState } from 'react'
import style from './Search.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Product from '../../components/product/Product';
import GridItems from '../../components/gridItems/GridItems';

export default function Search() {
  const searchTerm = useParams().searchTerm;
  const [arrProduct, setArrProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost/BE/?c=product&a=list&filter=${searchTerm}`)
      .then((res) => {
        setArrProduct(res.data);
      })
  }, [])
  // console.log(arrProduct);
  return (
    <>
      <div className={style.titleContainer}>
        <h3>Tìm kiếm</h3>
        <h4>Có <strong>{arrProduct.length} sản phẩm</strong>  cho "{searchTerm}"</h4>
      </div>
      {/* <div className={`flex-column justify-content-center align-items-center`}>
        <div className={`${style.gridContainer} mx-auto`}>
          {arrProduct.map((product) => {
            return (
              <Link to={`/products/${product.id}`} className={`${style.gridItem}`}>
                  <Product product={product} key={product.id}/>
              </Link>
            );
          })}
        </div>
      </div > */}
      <GridItems
        // collectionName={collectionName}
        products={arrProduct}
      />
    </>
  )
}
