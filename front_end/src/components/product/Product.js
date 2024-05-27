import React from 'react'
import style from './Product.module.css'

export default function Product({ product }) {
    
    //id, ptitle, pprice, pimg, rating
    let formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    return (
        <div className={`${style.box_product}`} >

            <div className={style.container_image_product} >
                <img loading='lazy' src={product.pimg} alt={product.ptitle} />
                <span className={style.status_product}>Mới</span>
            </div>


            <div className={style.container_info_product}>
                <div className = {style.name_product} >
                    <h5>{product.ptitle}</h5>
                </div>
                <div className={style.price_product}>
                    <p>{formatter.format(product.pprice)}</p>
                </div>
            </div>

        </div>
    )
}

