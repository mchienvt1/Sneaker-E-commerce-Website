import React, { useEffect, useRef } from 'react'
import style from './Account.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('role') === 'user' || localStorage.getItem('role') === 'admin') {
      navigate('/account/userInfor')
    }
  }, [])

  const firstName = useRef('')
  const lastName = useRef('')
  const username = useRef('')
  const email = useRef('')
  const password = useRef('')
  const phonenumber = useRef('');
  const handleClickSubmitRegister = (e) => {
    e.preventDefault();
    // console.log(firstName.current, lastName.current, username.current, email.current, password.current)
    const sendData = {
      username: username.current,
      password: password.current,
      fullname: `${firstName.current} ${lastName.current}`,
      email: email.current,
      phonenumber: phonenumber.current
    }
    axios.post("http://localhost/BE/?c=user&a=register", sendData).then((result) => {
      // console.log(result)
      if (result.data === 'true') {
        navigate('/account/login');
      }
      else {    
        alert("Tài khoản đã tồn tại");
      }
    });
  }
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
              color: '#cccccc'
          }}
          >ĐĂNG NHẬP</h1>
        </Link>
        <Link
          to='/account/registor'
          style={{textDecoration: 'none'}}
        >
          <h1
            className={style.titleRegister}
            style={{
              color: 'black'
            }}
          >ĐĂNG KÝ</h1>
        </Link>
        </div>
        <form className={style.form}>
          <div className={style.email}>
            <label>Họ</label>
            <input type='text' placeholder='Họ' name='ho' onChange={(e)=>{firstName.current = e.target.value}}/>
          </div>
          <div className={style.email}>
            <label>Tên</label>
            <input type='text' placeholder='Tên' name='ten' onChange={(e)=>{lastName.current = e.target.value} } />
          </div>
          
          <div className={style.email}>
            <label>Email</label>
            <input type='email' placeholder='Vui lòng nhập email của bạn' name='email' onChange={(e)=>{email.current = e.target.value}}/>
          </div><div className={style.email}>
            <label>Số điện thoại</label>
            <input type='number' placeholder='Vui lòng nhập Số điện thoại của bạn' name='phonenumber' onChange={(e)=>{phonenumber.current = e.target.value}}/>
          </div>
          <div className={style.username}>
            <label>Tài khoản</label>
          <input type='text' placeholder='Vui lòng nhập tài khoản của bạn' name='username' onChange={(e)=>{username.current = e.target.value} } />
          </div>
          <div className={style.password}>
            <label>Mật khẩu</label>
            <input type='password' placeholder='Vui lòng nhập mật khẩu của bạn' name='password' onChange={(e)=>{
              password.current = e.target.value
            }}/>
          </div>
          <div>
            <button
              onClick={(e) => {handleClickSubmitRegister(e)}}
            >
              ĐĂNG KÝ
            </button>
            <div className={style.control}>
              <div>
                Bạn đã có tài khoản ? <Link to='/account/login'>Đăng nhập ngay</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
  )
}
