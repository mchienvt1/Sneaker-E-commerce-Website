import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
export default function Header({route}) {
  return (
    <div className={style.leftSide}>
      <h4>Quản lý sản phẩm</h4>
      <ul>
        <li className={route === 'createProduct' && style.isActive}>
          <Link to='/admin/createProduct'>
            Thêm sản phẩm
          </Link>
        </li>
        <li className={route === 'updateProduct' && style.isActive}>
          <Link to='/admin/manageProduct'>
            Cập nhật sản phẩm
          </Link>
        </li>
        <li className={route === 'manageProduct' && style.isActive}>
          <Link to='/admin/manageProduct'>
            Quản lý sản phẩm
          </Link>
        </li>
        <li className={route === 'manageDiscountProduct' && style.isActive}>
          <Link to='/admin/manageDiscountProduct'>
            Quản lý sản phẩm giảm giá
          </Link>
        </li>
        <li className={route === 'manageNewProduct' && style.isActive}>
          <Link to='/admin/manageNewProduct'>
            Quản lý sản phẩm mới
          </Link>
        </li>
        <li className={route === 'manageOutStandingProduct' && style.isActive}>
          <Link to='/admin/manageOutStandingProduct'>
            Quản lý sản phẩm nổi bật
          </Link>
        </li>
        <li className={route === 'manageUser' && style.isActive}>
          <Link to='/admin/manageUser'>
            Quản lý người dùng
          </Link>
        </li>
        <li className={route === 'manageOrder' && style.isActive}>
          <Link to='/admin/manageOrder'>
            Quản lý đơn hàng
          </Link>
        </li>
      </ul>
    </div>
  )
}
