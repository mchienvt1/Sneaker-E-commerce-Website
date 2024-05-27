import React, { useEffect, useRef, useState } from 'react'
import style from './Header.module.css'
import Cart from './Cart';
import Search from './Search';
import axios from 'axios';
import { Navigate, redirect, useNavigate } from 'react-router-dom';


export default function RightSideHeader() {
  const [showLogin, setShowLogin] = useState(false);
  const username = useRef('')
  const password = useRef('')

  const handleClickLogin = (e) => {
    e.preventDefault();
    console.log(username.current, password.current)
    const sendData = {
      taiKhoan: username.current,
      matKhau: password.current
    }
    axios.post("http://localhost/BE/login.php", sendData).then((result) => {

      if (result.data.Status === '200') {
        localStorage.setItem("id", result.data.id);
        localStorage.setItem("username", result.data.username);
        localStorage.setItem("role", result.data.role);
        localStorage.setItem("fullname", result.data.fullname);
        localStorage.setItem("email", result.data.email);
        localStorage.setItem("phonenumber", result.data.phonenumber);
        setShowLogin(false)
        if (localStorage.getItem('role') === 'user') {
          navigate('/')
        } else if(localStorage.getItem('role') === 'admin'){
          navigate('/admin') 
        }
        
      } else {
        alert("Tên đăng nhập hoặc mật khẩu sai!");
      }

    });
  };

  useEffect(() => {
    const body = document.querySelector('body');
    const bodyWidth = body.clientWidth;
    if (showLogin && bodyWidth <= 760) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
    console.log(localStorage.getItem('role'));
  
  }, [showLogin])

  const navigate = useNavigate();
  return (
    <div
      className={`${style.rightSideHeader}`}>
      <div
        className={style.searchLargeScreen}
      >
        <Search />
      </div>

      
      <div
        className={`${style.user} `}
        onClick={() => {
          if (localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'user') {
            navigate('/account/userInfor');
            setShowLogin(false)
          } else {
            setShowLogin(!showLogin)
          }
        }}
      >
        <i className="bi bi-person"></i>
      </div>

      {
        showLogin && 
        <div
          className={`${style.login} flex-column`}
        >
          <h4 >ĐĂNG NHẬP TÀI KHOẢN</h4>
          <p >Nhập tài khoản và mật khẩu của bạn</p>
          <form className='mt-4'>
              <input
                type='text' className='col-12 form-control'
                placeholder='Tài khoản' name="username"
                onChange={ (e) => {username.current = e.target.value}}
              />
              <input
                type='password' className='col-12 form-control mt-3'
                placeholder='Mật khẩu' name="password"
                onChange={ (e) => {password.current = e.target.value}}
              />
            <button className='btn btn-primary col-12 mt-4' onClick={(e) => {handleClickLogin(e)}}>Đăng nhập</button>
          </form>
          <div className='mt-3'>
            Khách hàng mới?
            <a href='http://localhost:3000/account/register' style={{textDecoration: "none", marginLeft: 5}}>Tạo tài khoản</a>
          </div>
          <div className=''>
            Quên mật khẩu?
            <a href='http://localhost:3000/' style={{textDecoration: "none", marginLeft: 5}}>Khôi phục mật khẩu</a>
          </div>
        </div>
      }
      <Cart />
    </div>
  )
}