import React from 'react';
import style from './ImageComponent.module.css';
export default function ImageComponent({ product }) {
  const images = [
    product.pimg,
    'https://product.hstatic.net/1000230642/product/hsm006300nau__2__49db3ccdb8bc4c82a94402a944931e4d_1024x1024.jpg',
    'https://product.hstatic.net/1000230642/product/hsm006300nau__10__f3fb2850cdd545049a232d62dd50950b_large.jpg',
    'https://product.hstatic.net/1000230642/product/hsm006300nau__5__0796b1ba019443c28887441c3fc58c9e.jpg',
    'https://product.hstatic.net/1000230642/product/hsm006300nau__4__06e23d42a7084abe8248e3477b739c1c_large.jpg'
  ];
  
  const handleClickSubImage = (index) => {
    const mainImage = document.querySelector(`.${style.mainImageContainer} img`);
    mainImage.src = images[index];
  }
  return (
    { product } ?
      < div className={style.imageContainer} >
        <div className={style.mainImageContainer}>
            <img src={images[0]} alt='mainImage'/>
        </div>
        <div className={style.subImageContainer}>
          <div
            className={style.subMainImage}
            onClick={() => {
              handleClickSubImage(0);
            }}
          >
            <img src={images[0]} alt='mainImage'/>
          </div>
          {images.map((imgage, index) => {
            if (index > 0) {
              return (
                <div
                  className={style.subImage}
                  onClick={() => {
                    handleClickSubImage(index);
                  }}
                  key={index}
                >
                  <img src={imgage} alt='subImage'/>
                </div>
              )
            } else {
              return null;
            }
          })}
        </div>
      </div >
      :
      <h1>Product is empty</h1>
  );
}
