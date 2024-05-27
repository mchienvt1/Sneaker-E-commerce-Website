import React, {useEffect, useRef, useState} from 'react'
import style from './Home.module.css';
import bannerBitis from '../../../assets/banner/banner_bitis.webp';
import bannerDiscount from '../../../assets/banner/banner_discount.webp';
import bannerDocQuyen from '../../../assets/banner/banner_docquyen.webp';
import bannerRong from '../../../assets/banner/banner_rong.webp';

function Button({isActive, onDotClick}) {
  return (
    <button
      className={`${style.dot} ${isActive && style.active}`}
      onClick={onDotClick}
      ></button>
  );
}

function ImageBanner({ path}) {
  return (
    <img src={path} alt='xxx' className={`${style.bannerImage}`} draggable="false"/>
  );
}

export default function BannerImage() {
  const [currentActive, setCurrentActive] = useState(0);
  const bannerRef = useRef(null);
  const handleClick = (index) => {
    setCurrentActive(index);
  }
  let isDragging = false;
  let startX = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextActive = (currentActive + 1) % 4; 
      setCurrentActive(nextActive);
    }, 4000); 

    const bannerImageElement = bannerRef.current.querySelector(`.${style.bannerImages}`);
    if (bannerImageElement) {
      bannerImageElement.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.clientX;
      })
      bannerImageElement.addEventListener('mousemove', (event) => {
        if (isDragging) {
          const currentX = event.clientX;
          const deltaX = currentX - startX;

          if (deltaX > 100) {
            setCurrentActive(currentActive === 0 ? 3 : currentActive - 1);
          } else if (deltaX < -100) {
            setCurrentActive(currentActive === 3 ? 0 : currentActive + 1);
          }
        }
      })
      bannerImageElement.addEventListener('mouseup', () => {
        isDragging = false;
      })
    }

    return () => {
      clearInterval(interval);
    }
  }, [currentActive]); 

  return (
    <div>
      <div
        ref={bannerRef}
        className={style.banner}>
        <div
          className={`${style.bannerImages} d-flex`}
          style={{ transform: `translateX(-${currentActive * 100}%)` }}  
        >
          <ImageBanner path={bannerBitis}></ImageBanner>
          <ImageBanner path={bannerDiscount}></ImageBanner>
          <ImageBanner path={bannerDocQuyen}></ImageBanner>
          <ImageBanner path={bannerRong}></ImageBanner>
        </div>

        <div className={`${style.bannerControl}`}>
          <Button isActive={currentActive === 0} onDotClick={() => handleClick(0)}></Button>
          <Button isActive={currentActive === 1} onDotClick={() => handleClick(1)}></Button>
          <Button isActive={currentActive === 2} onDotClick={() => handleClick(2)}></Button>
          <Button isActive={currentActive === 3} onDotClick={() => handleClick(3)}></Button>
        </div>
      </div>
    </div>
  )
}

