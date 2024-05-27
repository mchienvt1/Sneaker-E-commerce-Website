import React, { useEffect, useState } from 'react'
import Path from '../../components/path/Path';
import style from './Product.module.css';
import ImageComponent from './components/ImageComponent';
import InfoComponent from './components/InfoComponent';
import { useParams } from 'react-router-dom';
import Comment from './components/Commemt';

export default function Product() {
  const { productID } = useParams();
  const [product, setProduct] = useState(undefined);
  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost/BE/?c=product&a=list&search=${productID}`, {
        method: 'GET',
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchData().then((data) => {
      setProduct(data[0]);
    });
  }, []);
  return (
    <>
      <Path collectionName={product ? product.ptitle : 'Product'}/>
      {product ? 
        <>
          <div className={style.container}>
            <ImageComponent product={ product } />
            <InfoComponent product={product} />
          </div>
          <div className={style.containerComment}>
            <Comment product={product}/>
          </div>
        </>
        :
        <div className={style.loading}>
          <div className="spinner-border mx-auto" role="status"></div>
        </div>
      }
      
    </>
  )
}
