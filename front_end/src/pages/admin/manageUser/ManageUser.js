import React, { useEffect, useRef, useState } from 'react'
import style from './ManageUser.module.css'
import axios from 'axios';
import Header from '../component/Header';
import { Link, useNavigate } from 'react-router-dom';
export default function ManageUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('role') !== 'admin' || !localStorage.getItem('role')) {
      navigate('/account/login');
    }
    else {
      axios
        .get(`http://localhost/BE/?c=user&a=list`)
        .then((result) => {
          setUsers(result.data);
        })
    }
  }, [])

  const handleClickDelete = (user) => {
    console.log(user.username);
    if (user.id === '1') {
      alert('Không thể xóa user này');
      return;
    }
    if (window.confirm(`Bạn có chắc chắn muốn xóa ${user.username}`) === false) return;
    
    axios
      .delete(`http://localhost/BE/?c=user&a=delete&id=${user.username}`)
      .then((result) => {
        if (result.data === 'thanh cong') {
          if (window.confirm(`Xóa ${user.username} thành công. \nNhấn đồng ý để reload lại trang`)) {
            window.location.reload();
          }
        }else {
          alert(result.data);
        }
      });
  }

  const handleUpdateRole = (e, index) => {
    const sendData = {
      username: users[index].username,
      role: e.target.value
    };
    console.log(sendData);
    if (window.confirm(`Bạn có chắc chắn muốn cập nhật role của ${users[index].username} thành ${e.target.value}`)) {
      //call api update role
      
      axios.post("http://localhost/BE/?c=user&a=updateRole", sendData)
        .then((result) => {
          if (result.data) {
            if(window.confirm(`Cập nhật role của ${users[index].username} thành ${sendData.role} thành công. \nNhấn đồng ý để reload lại trang`)){
              window.location.reload();
            }
          }
          else {    
            alert("Cập nhật role thất bại");
          }
      });
    } 
  }
  return (
    <div className={style.container}>
      <Header route={'manageUser'}/>
      <div className={style.middle}>
        <div className={style.title}>
          <h1>Quản lý người dùng</h1>
        </div>
        <div className={style.productContainer}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Full name</th>
                <th scope="col">Phone number</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user, index) => {
                return <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.fullname}</td>
                  <td>{user.phonenumber}</td>
                  <td>
                    <select
                      className="form-select"
                      onChange={(e) => { handleUpdateRole(e, index) }}
                      disabled={user.id === '1'}
                      value={user.role}
                    >
                      <option value="user" selected={user.role === 'user'}>user</option>
                      <option value="admin" selected={user.role === 'admin'}>admin</option>
                    </select>
                  </td>
                  <td className='d-flex justify-content-center gap-4'>
                    <button className="btn btn-danger" onClick={() => { handleClickDelete(user) }}>Delete</button>
                    {/* <button className="btn btn-success ml-2" onClick={() => {handleClickDelete(user)}}>Update</button> */}
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

