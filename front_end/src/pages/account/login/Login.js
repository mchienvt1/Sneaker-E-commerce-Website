import React, { useEffect, useRef } from 'react'
import style from './Account.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('role') === 'user') {
      navigate('/')
    } else if(localStorage.getItem('role') === 'admin'){
      navigate('/account/userInfor') 
    }
  }, [])

  const username = useRef('')
  const password = useRef('')
  const handleClickLogin = (e) => {
    e.preventDefault();
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
  return (
    <div className={style.container}>
      <div className={style.title}>
        <Link
          to='/account/login'
          style={{textDecoration: 'none'}}
        >
          <h1
            className={style.titleLogin}
            style={{
              color: 'black'
            }}
          >ĐĂNG NHẬP</h1>
        </Link>
        <Link
          to='/account/register'
          style={{textDecoration: 'none'}}
        >
          <h1
            className={style.titleRegister}
            style={{
              color: '#cccccc'
          }}
          >ĐĂNG KÝ</h1>
        </Link>
      </div>
      <form className={style.form}>
        <div className={style.email}>
          <label>Tài khoản</label>
          <input type='text' placeholder='Vui lòng nhập tài khoản của bạn' name='email' onChange={ (e) => {username.current = e.target.value}} />
        </div>
        <div className={style.password}>
          <label>Mật khẩu</label>
          <input type='password' placeholder='Vui lòng nhập mật khẩu của bạn' name='password' onChange={(e) => {password.current = e.target.value}}/>
        </div>
        <div>
          <button onClick={(e) => {handleClickLogin(e)}}>
            ĐĂNG NHẬP
          </button>
          <div className={style.control}>
            <div>
              Bạn chưa có tài khoản? <Link to='/account/register'>Đăng ký ngay</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
