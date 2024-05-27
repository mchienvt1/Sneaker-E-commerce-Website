import React, { useEffect, useRef, useState } from 'react'
import style from './ManageProduct.module.css'
import axios from 'axios';
import Header from '../component/Header';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachSanPhamAction } from '../../../redux/actions/ManageProductAction';
import { Link, useNavigate } from 'react-router-dom';
export default function ManageProduct() {
  const navigate = useNavigate();
  const [arrProduct, setArrProduct] = useState([]);

  const fetchAllProducts = async () => {
    const result = await axios.get(`http://localhost/BE/?c=product&a=list`);
    // const newProducts = filterProducts(result.data, collectionName);
    setArrProduct(result.data);
  }

  useEffect(() => {
    fetchAllProducts();
  }, [])

  const handleClickDelete = (product) => {
    if(window.confirm(`Bạn có chắc chắn muốn xóa ${product.ptitle}`) === false) return;
    axios
      .delete(`http://localhost/BE/?c=product&a=delete&id=${product.id}`)
      .then((result) => {
        if (result.data === 'thanh cong') {
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
  const handleClickAddToNewProduct = async (product) => {
    await axios
      .post(`http://localhost/BE/?c=newProduct&a=save&productId=${product.id}`)
      .then((result) => {
        if (result.data) {
          alert(`Thêm ${product.ptitle} vào sản phẩm mới thành công.`)
        } else {
          alert(result.data);
        }
      })
  }
  const handleClickAddToDiscount = async (product) => {
    await axios
      .post(`http://localhost/BE/?c=discount&a=save&productId=${product.id}`)
      .then((result) => {
        if (result.data) {
          alert(`Thêm ${product.ptitle} vào sản phẩm giả giá thành công.`)
        } else {
          alert(result.data);
        }
      })
    
  }
  const handleClickAddToOutStanding = async (product) => {
    await axios
      .post(`http://localhost/BE/?c=outStanding&a=save&productId=${product.id}`)
      .then((result) => {
        if (result.data) {
          alert(`Thêm ${product.ptitle} vào sản phẩm nổi bật thành công.`)
        } else {
          alert(result.data);
        }
      })
  }
  return (
    <div className={style.container}>
      <Header route={'manageProduct'}/>
      <div className={style.middle}>
        <div className={style.title}>
          <h1>Quản lý sản phẩm</h1>
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
                    <button
                      className="btn btn-success mt-1"
                      onClick={() => {handleClickAddToNewProduct(product)}}
                    >New</button>
                    <button
                      className="btn btn-success mt-1"
                      onClick={() => {handleClickAddToDiscount(product)}}
                    >Discount</button>
                    <button
                      className="btn btn-success mt-1"
                      onClick={() => {handleClickAddToOutStanding(product)}}
                    >Out Standing</button>
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

