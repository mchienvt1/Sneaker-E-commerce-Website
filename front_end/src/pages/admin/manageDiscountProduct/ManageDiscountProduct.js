import React, { useEffect, useRef, useState } from 'react'
import style from './ManageProduct.module.css'
import axios from 'axios';
import Header from '../component/Header';
import { Link, useNavigate } from 'react-router-dom';
export default function ManageDiscountProduct() {
  const navigate = useNavigate();
  const [arrProduct, setArrProduct] = useState([]);

  const fetchAllProducts = async () => {
    const result = await axios.get(`http://localhost/BE/?c=discount&a=list&search`);
    // const newProducts = filterProducts(result.data, collectionName);
    setArrProduct(result.data);
  }

  useEffect(() => {
    fetchAllProducts();
  }, [])

  const handleClickDelete = (product) => {
    console.log(product);
    if(window.confirm(`Bạn có chắc chắn muốn xóa ${product.ptitle}`) === false) return;
    axios
      .delete(`http://localhost/BE/?c=discount&a=delete&productId=${product.id}`)
      .then((result) => {
        if (result.data === '1') {
          if (window.confirm(`Xóa ${product.ptitle} thành công. \nNhấn đồng ý để reload lại trang`)) {
            window.location.reload();
          }
        }else {
          alert(result.data);
        }
      });
  }
  useEffect(() => {
    if (localStorage.getItem('role') !== 'admin' || !localStorage.getItem('role')) {
      navigate('/account/login');
    }
  }, [])

  return (
    <div className={style.container}>
      <Header route={'manageDiscountProduct'}/>
      <div className={style.middle}>
        <div className={style.title}>
          <h1>Quản lý sản phẩm giảm giá</h1>
        </div>
        <div className={style.productContainer}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Gender</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {arrProduct && arrProduct.map((product, index) => {
                return <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td><img src={product.pimg} alt={product.pimg} style={{width: '100px'}}/></td>
                  <td>{product.ptitle}</td>
                  <td>{product.pprice}</td>
                  <td>{product.pgender}</td>
                  <td>{product.pkind}</td>
                  <td>
                  <Link
                    to={`/admin/updateProduct/${product.id}`}
                  >
                    <button className="btn btn-primary">
                      Edit
                    </button>
                  </Link>
                    
                    <button className="btn btn-danger" onClick={() => { handleClickDelete(product) }}>Delete</button><br/>
                    
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

