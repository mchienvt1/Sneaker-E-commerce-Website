import React, { act, useEffect, useMemo, useRef, useState } from 'react'
import style from './GridItems.module.css'
import Product from '../product/Product'
import { Link } from 'react-router-dom'
import Filter from '../filter/Filter';


export default function GridItems({ products }) {
  const [priceConstraint, setPriceConstraint] = useState([0, 2000000])
  const [indexSortOption, setIndexSortOption] = useState(-1);
  const [displayProducts, setDisplayProducts] = useState([]);
  // console.log(products);
  useEffect(() => {
    setDisplayProducts(products);
  }, [])
  useEffect(() => {
    setIndexSortOption(-1);
    setDisplayProducts(products);
  }, [products])

  useEffect(() => {
    if (priceConstraint[0] !== 0 || priceConstraint[1] !== 2000000) {
      const filteredProducts = products.filter((product) => {
        return Number(product.pprice) >= Number(priceConstraint[0]) &&
          Number(product.pprice) <= Number(priceConstraint[1]);
      });
      setDisplayProducts(filteredProducts);  
    } else {
      setDisplayProducts(products); 
    }
  }, [priceConstraint])

  const sortedProducts = useMemo(() => {
    let sortedProducts = [...products]; // Tạo một bản sao của products
  
    switch (indexSortOption) {
      case 0: // Sắp xếp tăng dần theo giá
        sortedProducts.sort((a, b) => a.pprice - b.pprice);
        break;
      case 1: // Sắp xếp giảm dần theo giá
        sortedProducts.sort((a, b) => b.pprice - a.pprice);
        break;
      case 2: // Sắp xếp theo tên từ A-Z
        sortedProducts.sort((a, b) => a.ptitle.localeCompare(b.ptitle));
        break;
      case 3: // Sắp xếp theo tên từ Z-A
        sortedProducts.sort((a, b) => b.ptitle.localeCompare(a.ptitle));
        break;
      default:
        break;
    }
  
    return sortedProducts;
  }, [indexSortOption]);
  console.log('displayProducts', displayProducts);
  return (
    <>
      <Filter
        priceConstraint={priceConstraint}
        setPriceConstraint={setPriceConstraint}
        indexSortOption={indexSortOption}
        setIndexSortOption={setIndexSortOption}
      />
      
        <div className={`flex-column justify-content-center align-items-center`}>
          <div className={`${style.gridContainer} mx-auto`}>
            {indexSortOption >= 0 && indexSortOption <= 3 ?
              sortedProducts.map((product) => {
                return (
                  <Link to={`/products/${product.id}`} className={`${style.gridItem}`} key={product.id}>
                    <Product product={product} />
                  </Link>
                );
              })
              :
              displayProducts.map((product) => {
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

