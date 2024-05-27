import React, { useEffect, useRef, useState } from 'react'
import style from './CreateProduct.module.css'
import axios from 'axios';
import Header from '../component/Header';
import { useNavigate } from 'react-router-dom';
export default function CreateProduct() {

  const navigate = useNavigate();

  const keySize = useRef(0);
  const [sizeInputs, setSizeInputs] = useState([{ size: '', soluong: '', key: 0 }]);
  const handleClickAddSize = () => {
    keySize.current++;
    setSizeInputs([...sizeInputs, {size: '', soluong: '', key: keySize.current}]);
  }
  const handleClickDeleteSize = (index) => {
    const newSizes = sizeInputs.filter((sizeInput, i) => i !== index);
    setSizeInputs(newSizes);
  }
  
  const categories = [
    'NAM:HUNTER',
    'NAM:SANDAL',
    'NAM:THE_THAO',
    'NAM:CHAY_BO',
    'NAM:DA_BANH',
    'NAM:TAY',
    'NAM:DEP',
    'NU:HUNTER',
    'NU:SANDAL',
    'NU:BUP_BE',
    'NU:THOI_TRANG',
    'NU:CHAY_BO',
    'NU:THE_THAO',
    'NU:DEP',
    'NU:TUI_XACH',
    'BE_TRAI:SANDAL',
    'BE_TRAI:THE_THAO',
    'BE_TRAI:DEP',
    'BE_GAI:BUP_BE',
    'BE_GAI:THE_THAO',
    'BE_GAI:SANDAL',
    'BE_GAI:DEP',
    'BE_GAI:TAP_DI',
];
  const keyImage = useRef(0);
  const [images, setImages] = useState([]);
  const [indexDisplayImage, setindexDisplayImage] = useState(0);
  const productIndexMainImage = useRef(-1);

  useEffect(() => {
    if (images.length !== 0) {
      const mainImage = document.querySelector(`.${style.mainImageContainer} img`);
      mainImage.src = images[indexDisplayImage].link;
    }
  }, [indexDisplayImage])
  useEffect(() => {
    if (localStorage.getItem('role') !== 'admin' || !localStorage.getItem('role')) {
      navigate('/account/login');
      
    }
  }, [])
  const handleClickSubImage = (index) => {
    setindexDisplayImage(index);
  }

  //btn delete in image which is displayed
  const handleClickDeleteImage = () => {
    //if the image which is displayed is mainImage -> not allow
    if (indexDisplayImage === productIndexMainImage.current) {
      alert('Không thể xóa ảnh chính');
      return;
    }
    //remove image which is displayed from images
    const newImages = images.filter((image, index) => index !== indexDisplayImage);
    setImages(newImages);
    setindexDisplayImage(0);
  }

  const [showInputAddImage, setShowInputAddImage] = useState(false);
  const handleClickAddImage = () => {
    // display pop up to add image
    setShowInputAddImage(true);
  }

  const handleClickCancelSubmitImage = () => {
    // remove input image which is empty
    setImages((prevImages) => {
      prevImages = prevImages.filter(image => image.link !== '');
      return prevImages;
    });
    // close pop up
    setShowInputAddImage(false);
  }


  const handleClickSubmitImage = () => {
    // remove input image which is empty
    setImages((prevImages) => {
      prevImages = prevImages.filter(image => image.link !== '');
      return prevImages;
    });
    // close pop up
    setShowInputAddImage(false);
  }

  // create new input image
  const handleClickAddInputImage = () => {
    keyImage.current++;
    setImages([...images, {link: '', key: keyImage.current}]);
  }

  const productName = useRef('');
  const productPrice = useRef('');
  const productGender = useRef('');
  const productType = useRef('');
  const description = useRef('');
  //remove size input which is empty
  const sizes = sizeInputs.filter(sizeInput => sizeInput.size !== '' && sizeInput.soluong !== '');
  
  // submit create product
  const btnSubmitAddProduct = () => {
    //check input empty
    if (productName.current === ''
      || productIndexMainImage.current === -1
      || productPrice.current === ''
      || productGender.current === ''
      || productType.current === ''
      || sizes.length === 0
      || images.length === 0
      || description.current === '') {
      alert("Vui lòng điền đầy đủ thông tin sản phẩm");
      return;
    }
    
    //check size equal
    for (let i = 0; i < sizes.length; i++) {
      for (let j = i + 1; j < sizes.length; j++) {
        if (sizes[i].size === sizes[j].size) {
          alert('Size không được trùng nhau');
          return;
        }
      }
    }


    const sendData = {
      product:{
        ptitle: productName.current,
        pimg: images[productIndexMainImage.current].link, //mainImage
        pprice: productPrice.current,
        pgender: productGender.current,
        pkind: productType.current,
      },
      sizes: sizes,
      subImages: images.map(image => image.link),
      description: description.current
    };
    console.log(sendData);
    axios
    .post("http://localhost/BE/?c=product&a=save", sendData)
    .then((result) => {
      if (result.data.Status === "Invalid") {
        alert('Tạo mới sản phẩm thất bại')  
      } else {
        if (window.confirm('Tạo mới sản phẩm thành công. Bấm đồng ý để reload lại trang')) {
          window.location.reload();
        }
      }
    });
  }
  
  return (
    <div className={style.container}>
      <Header route={'createProduct'}/>
      {showInputAddImage && 
        <div className={style.inputAddImageContainer}>
          <div className={style.inputAddImageContent}>
            <label>Thêm ảnh</label>
            <div className={style.inputHeader}>
              <label>Ảnh chính</label>
              <label>Link ảnh</label>
              <label>Xóa ảnh</label>
            </div>
            <div className={style.inputRows}> 
              {images.map((image, index) => {
                return (
                  <div className={style.inputAddImageRow} key={image.key}>
                    <input
                      type='radio' name='indexNameImage'
                      onChange={() => { productIndexMainImage.current = index; }}
                      defaultChecked={index === productIndexMainImage.current ? true : false}
                    />
                    <input
                      type='text' className={style.inputAddImage}
                      placeholder='Nhập Link ảnh vào đây'
                      onChange={(e) => { image.link = e.target.value}}
                      defaultValue={image.link}
                    />
                    <button
                      className='btn'
                      onClick={() => {
                        const newImages = images.filter((img, i) => i !== index);
                        setImages(newImages);
                      }}
                    ><i className="bi bi-x-circle"></i></button>
                  </div>
                )
              })}
            </div>

            <button
              className={`btn ${style.btnCancelAddImage}`}
              onClick={() => { handleClickCancelSubmitImage() }}><i className="bi bi-x-circle"></i></button>
            <div className='d-flex col-12 justify-content-between'>
              <button className='btn btn-success' onClick={() => { handleClickSubmitImage() }}>Đồng ý</button>
              <button className='btn btn-success' onClick={() => { handleClickAddInputImage() }}>Thêm ảnh</button>
            </div>
            
          </div>
        </div>
      }
      <div className={style.middle}>
        
        <div className={style.title}>
          <h1>Thêm sản phẩm</h1>
          <button className='btn btn-primary' onClick={() => {btnSubmitAddProduct()}}>Submit</button>
        </div>
        <div className={style.addProductContainer}>
          <div className={style.addProductImage}>
            <label>Thêm ảnh</label>
            <div className={style.mainImageContainer}>
              <button
                className={style.btnDeleteImage}
                onClick={() => {handleClickDeleteImage()}}
              ><i className="bi bi-x-circle"></i></button>
              {images.length === 0 ?
                <h1>Chưa có ảnh</h1>
                :
                <img src={ images[0].link } alt='mainImage' />
              }
            </div>
            <div className={style.subImageContainer}>
              <button
                className={style.btnAddImage}
                onClick={() => { handleClickAddImage() }}
              ><i className="bi bi-plus-circle"></i></button>
              {images.map((image, index) => {
                return (
                  <div
                    className={style.subImage}
                    onClick={() => {
                      handleClickSubImage(index);
                    }}
                    key={index}
                  >
                    
                    <img src={image.link} alt='subImage'/>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={style.addProductInfo}>
            <div className={style.generalInfo}>
              <div className={style.textInputContainer}>
                <label for='productName'>Tên sản phẩm</label>
                <textarea
                  rows={2} id='productName'
                  name='productName' className={style.textInput}
                  onChange={(e) => {productName.current = e.target.value}}
                />
              </div>
              <div className={style.textInputContainer}>
                <label for='productPrice'>Giá</label>
                <input
                  type='number' id='productPrice'
                  name='productPrice' className={style.textInput}
                  onChange={(e) => {productPrice.current = e.target.value}}
                />
              </div>
              <div className={style.textInputContainer}>
                <label for='productCategory'>Phân loại</label>
                <select
                  id="inputState" className={style.textInput}
                  onChange={(e) => {
                    productGender.current = e.target.value.split(':')[0];
                    productType.current = e.target.value.split(':')[1];
                  }}
                >
                  <option selected value="">Loại sản phẩm</option>
                  {categories.map((category, index) => {
                    return (
                      <option value={category} key={index}>{category}</option>
                    )
                  })}
                </select>
              </div>
            </div>

            <div>
              <div className={style.textInputContainer}>
                <label for='productDescription'>Mô tả sản phẩm</label>
                <textarea
                  rows={5} id='productDescription' name='productDescription'
                  className={style.textInput}
                  onChange={(e) => {description.current = e.target.value}}
                />
              </div>
            </div>
            <div className={style.sizeContainer}>
              <table className={`table ${style.sizeTable}`} >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Size</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeInputs.map((sizeInput, index) => {
                    return (
                      <tr key={sizeInput.key} className={style.sizeInput}>
                        <th scope="row">{index + 1}</th>
                        <td><input
                          type='number' className={style.size}
                          onChange={ (e) => {sizeInput.size = e.target.value} } /></td>
                        <td>
                          <input
                            type='number' className={style.soluong}
                            onChange={ (e) => {sizeInput.soluong = e.target.value} }
                          /></td>
                        <td>
                          <button
                            className={`btn btn-danger ${style.btnDeleteSize}`}
                            onClick={() => handleClickDeleteSize(index)}
                          >Xóa</button>
                        </td>
                      </tr>
                    )
                  })} 
                </tbody>
              </table>
              <div className={style.btnAddSizeContainer}>
                <button
                  className={`btn btn-primary ${style.btnAddSize}`}
                  onClick={() => handleClickAddSize()}
                >Thêm size</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
