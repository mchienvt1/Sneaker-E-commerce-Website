import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'


export default function NavRow() {
  return (
    <nav>
      <div className={`${style.navContent}`}>

        <div className={style.hasSubmenu}>
          <Link to="/collections/nam">NAM</Link>
          <i className={`${style.iconDown} bi bi-chevron-down`}></i>
          <div className={style.menuListSubmain}>
            <div>
              <Link to={'/collections/nam-hunter'}>Hunter</Link>
            </div>
            <div>
              <Link to={'/collections/nam-sandal'}>Sandal</Link>
            </div>
            <div>
              <Link to={'/collections/nam-the-thao'}>Giày thể thao</Link>
            </div>
            <div>
              <Link to={'/collections/nam-chay-bo'}>Giày chạy bộ</Link>
            </div>
            <div>
              <Link to={'/collections/nam-da-banh'}>Giày đá banh</Link>
            </div>
            <div>
              <Link to={'/collections/nam-tay'}>Giày tây</Link>
            </div>
            <div>
              <Link to={'/collections/nam-dep'}>Dép</Link>
            </div>
          </div>
        </div>

        <div className={style.hasSubmenu}>
          <Link to={'/collections/nu'}>NỮ</Link>
          <i className={`${style.iconDown} bi bi-chevron-down`}></i>
          <div className={`${style.menuListSubmain} shadow flex-column`}>
            <div>
              <Link to={'/collections/nu-hunter'}>Hunter</Link>
            </div>
            <div>
              <Link to={'/collections/nu-sandal'}>Sandal</Link>
            </div>
            <div>
              <Link to={'/collections/nu-bup-be'}>Giày búp bê</Link>
            </div>
            <div>
              <Link to={'/collections/nu-thoi-trang'}>Giày thời trang</Link>
            </div>
            <div>
              <Link to={'/collections/nu-chay-bo'}>Giày chạy bộ - đi bộ</Link>
            </div>
            <div>
              <Link to={'/collections/nu-the-thao'}>Giày thể thao</Link>
            </div>
            <div>
              <Link to={'/collections/nu-dep'}>Dép</Link>
            </div>
          </div>
        </div>
        <div className={style.hasSubmenu}>
          <Link to={'/collections/be-trai'}>BÉ TRAI</Link>
          <i className={`${style.iconDown} bi bi-chevron-down`}></i>
          <div className={`${style.menuListSubmain} shadow flex-column`}>
            <div>
              <Link to={'/collections/be-trai-sandal'}>Sandal</Link>
            </div>
            <div>
              <Link to={'/collections/be-trai-the-thao'}>Giày thể thao</Link>
            </div>
            <div>
              <Link to={'/collections/be-trai-dep'}>Dép</Link>
            </div>
          </div>
        </div>
        <div className={style.hasSubmenu}>
        <Link to={'/collections/be-gai'}>BÉ GÁI</Link>
          <i className={`${style.iconDown} bi bi-chevron-down`}></i>
          <div className={`${style.menuListSubmain} shadow flex-column`}>
            <div>
              <Link to={'/collections/be-gai-bup-be'}>Giày búp bê</Link>
            </div>
            <div>
              <Link to={'/collections/be-gai-the-thao'}>Giày thể thao</Link>
            </div>
            <div>
              <Link to={'/collections/be-gai-sandal'}>Sandal</Link>
            </div>
            <div>
              <Link to={'/collections/be-gai-dep'}>Dép</Link>
            </div>
            <div>
              <Link to={'/collections/be-gai-tap-di'}>Giày tập đi</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

