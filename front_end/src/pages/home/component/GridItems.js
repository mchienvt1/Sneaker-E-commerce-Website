import React, { act, useEffect, useMemo, useRef, useState } from 'react'
import style from './GridItems.module.css'
import Product from '../../../components/product/Product'
import { Link } from 'react-router-dom'


export default function GridItems({ products }) {
  
  return (
    <>
      <div className={`flex-column justify-content-center align-items-center`}>
        
          <div className={style.gridContainer}>
            { products && 
              products.map((product, index) => {
                if (index >= 10) return null;
                return (
                  <Link to={`/products/${product.id}`} className={`${style.gridItem}`} key={product.id}>
                    <Product product={product} />
                  </Link>
                );
              })
            }
          </div>
        </div >
      
    </>
  );
}

