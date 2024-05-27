import React, { useEffect, useState } from 'react'
import style from './Path.module.css';



export default function Path({ collectionName }) {
  let namePath = "";
  switch (collectionName) { 
    case "nam":
      namePath = "Nam";
      break
    case 'nam-hunter':
      namePath = "Hunter Nam";
      break
    case 'nam-sandal':
      namePath = "Sandal Nam";
      break
    case 'nam-the-thao':
      namePath = "Giày Thể Thao Nam";
      break
    case 'nam-chay-bo':
      namePath = "Giày Chạy Bộ Nam";
      break
    case 'nam-da-banh':
      namePath = "Giày Đá Banh Nam";
      break
    case 'nam-tay':
      namePath = "Giày Tây Nam";
      break
    case 'nam-dep':
      namePath = "Dép Nam";
      break
    case "nu":
      namePath = "Nữ";
      break
    case 'nu-hunter':
      namePath = "Hunter Nữ";
      break
    case 'nu-sandal':
      namePath = "Sandal Nữ";
      break
    case 'nu-bup-be':
      namePath = "Giày Búp Bê Nữ";
      break
    case 'nu-thoi-trang':
      namePath = "Giày Thời Trang Nữ";
      break
    case 'nu-chay-bo':
      namePath = "Giày Chạy Bộ - Đi Bộ Nữ";
      break
    case 'nu-the-thao':
      namePath = "Giày Thể Thao Nữ";
      break
    case 'nu-dep':
      namePath = "Dép Nữ";
      break
    case "be-trai":
      namePath = "Bé Trai";
      break
    case "be-trai-sandal":
      namePath = "Sandal Bé Trai";
      break
    case "be-trai-the-thao":
      namePath = "Giày Thể Thao Bé Trai";
      break
    case "be-trai-dep":
      namePath = "Dép Bé Trai";
      break
    case "be-gai":
      namePath = "Bé Gái";
      break
    case "be-gai-bup-be":
      namePath = "Giày Búp Bê Bé Gái";
      break
    case "be-gai-the-thao":
      namePath = "Giày Thể Thao Bé Gái";
      break
    case "be-gai-sandal":
      namePath = "Sandal Bé Gái";
      break
    case "be-gai-dep":
      namePath = "Dép Bé Gái";
      break
    case "be-gai-tap-di":
      namePath = "Giày tập đi Bé Gái";
      break
    case 'moi':
      namePath = "Sản Phẩm Mới";
      break
    case 'giam-gia':
      namePath = "Sản Phẩm Giảm Giá";
      break
    case 'noi-bat':
      namePath = "Sản Phẩm Nổi Bật";
      break
    default:
      namePath = collectionName;
  }
  const [paths, setPaths] = useState(['Trang Chủ', 'Danh Mục', namePath])
  useEffect(() => {
    setPaths(['Trang Chủ', 'Danh Mục', namePath])
  }, [collectionName])

  return (
    <div className={`${style.container}`}>
      <div className={`${style.content}`}>
        {paths.map((path, index) => {

          return(
            <div
              key={index}
            >
              {path}
            </div>
          );
        })}
      </div>
      
    </div>
  )
}
