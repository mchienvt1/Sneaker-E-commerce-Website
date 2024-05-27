import React, { useEffect, useState } from 'react'

import Path from '../../components/path/Path';
import bannerRong from '../../assets/banner/banner_rong.webp';
import CategoryComponent from '../../components/category/Category';
import style from './Collection.module.css';
import GridItems from '../../components/gridItems/GridItems';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { filterProducts } from './FilterItems';


function ImageBanner({ path}) {
  return (
    <img src={path} alt='xxx' className={`${style.bannerImage}`} draggable="false"/>
  );
}



export default function Collection() {
  const { collectionName } = useParams();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);


  const fetchAllProducts = async (url) => {
    const result = await axios.get(url);
    // const newProducts = filterProducts(result.data, collectionName);
    setAllProducts(result.data);
  }


  
  useEffect(() => {
    if (collectionName === 'giam-gia') {
      console.log('giam-gia');
      fetchAllProducts(`http://localhost/BE/?c=discount&a=list&search`);
    } else if (collectionName === 'moi') {
      fetchAllProducts(`http://localhost/BE/?c=newProduct&a=list&search`);
    } else if (collectionName === 'noi-bat') {
      fetchAllProducts(`http://localhost/BE/?c=outStanding&a=list&search`);
    } else {
      fetchAllProducts(`http://localhost/BE/?c=product&a=list`);
    }
  }, [])

  useEffect(() => {
    if (collectionName === 'giam-gia' || collectionName === 'moi' || collectionName === 'noi-bat') {
      setProducts(allProducts);
      return;
    }
    const newProducts = filterProducts(allProducts, collectionName);
    // console.log(newProducts);
    setProducts(newProducts);
  }, [allProducts])

  useEffect(() => {
    if (collectionName === 'giam-gia' || collectionName === 'moi' || collectionName === 'noi-bat') {
      setProducts(allProducts);
      return;
    }
    const newProducts = filterProducts(allProducts, collectionName);
    // console.log(newProducts);
    setProducts(newProducts);
  }, [collectionName])

  return (
    <>
      <Path collectionName={collectionName} />
      <ImageBanner path={bannerRong} />
      <CategoryComponent name={collectionName} />
      
      <GridItems
        products={products}
      />

    </>
  )
  
}
