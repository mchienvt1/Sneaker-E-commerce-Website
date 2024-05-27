import React, { useEffect, useRef, useState } from 'react'
import style from './UpdateProduct.module.css'
import axios from 'axios';
import Header from '../component/Header';
import { useNavigate, useParams } from 'react-router-dom';
export default function UpdateProduct() {
  const navigate = useNavigate();
  const productID = useParams().productID;
  const [product, setProduct] = useState({});
  const productName = useRef('');
  const productPrice = useRef('');
  const productGender = useRef('');
  const productType = useRef('');
  const description = useRef('');
  const keyImage = useRef(0);
  const [images, setImages] = useState([]);
  const [indexDisplayImage, setindexDisplayImage] = useState(0);
  const productIndexMainImage = useRef(-1);
  const keySize = useRef(0);
  const [sizeInputs, setSizeInputs] = useState([{ size: '', soluong: '', key: 0 }]);
  const newSize = useRef({ size: '', soluong: ''});
  const newImage = useRef('');
  //get product
  useEffect(() => {
    
    if (localStorage.getItem('role') !== 'admin' || !localStorage.getItem('role')) {
      navigate('/account/login');
    } else {
      axios
        .get(`http://localhost/BE/?c=product&a=list&search=${productID}`)
        .then((result) => {
          productName.current = result.data[0].ptitle;
          productPrice.current = result.data[0].pprice.replace(/,/g, '');
          productGender.current = result.data[0].pgender;
          productType.current = result.data[0].pkind;
          keyImage.current++;
          setProduct(result.data[0]);
        })
    }
  }, [])
  //get sub images
  useEffect(() => {
    axios
      .get(`http://localhost/BE/?c=subImage&a=list&search=${productID}`)
      .then((result) => {
        const subImages = [];
        result.data.forEach((subImage, index) => {
          keyImage.current++;
          subImages.push({ id: subImage.id, productID: subImage.productID, link: subImage.img, key: keyImage.current });
          if (subImage.img === product.pimg) {
            productIndexMainImage.current = index;
            setindexDisplayImage(index);
          }
          
        })
        setImages(subImages)
      })
  }, [product])
  
  //get size of product
  useEffect(() => {
    axios
    .get(`http://localhost/BE/?c=size&a=list&search=${productID}`)
    .then((result) => {
      const productSizes = []
      result.data.forEach((size, index) => {
        productSizes.push({id: size.id, productID: size.productID, size: size.size, soluong: size.soluong, key: keySize.current});
        keySize.current++;
      })
      setSizeInputs(productSizes);
    })
  }, [product])
  //get description of product
  useEffect(() => {
    axios
      .get(`http://localhost/BE/?c=description&a=list&search=${productID}`)
      .then((result) => {
        if (result.data.length === 0 ) {
          return;
        } else {
          description.current = result.data[0];
        }
      })
  }, [product])
  
  const handleClickAddSize = () => {
    keySize.current++;
    setSizeInputs([...sizeInputs, {id: '', productID: '', size: '', soluong: '', key: keySize.current}]);
  }
  const handleClickDeleteSize = (index) => {
    // const newSizes = sizeInputs.filter((sizeInput, i) => i !== index);
    // setSizeInputs(newSizes);
    const sizeID = sizeInputs[index].id;
    if (window.confirm(`Xác nhận xóa size ${sizeInputs[index].size}`)) {
      axios
        .delete(`http://localhost/BE/?c=size&a=delete&id=${sizeID}`)
        .then((result) => {
          if (result.data) {
            if (window.confirm('Xóa size thành công. Bấm đồng ý để reload lại trang')) {
              window.location.reload();
            }
          } else {
            alert('Xóa size thất bại')  
          }
        })
    } else {
      return;
    }
  }
  const handleClickUpdateSize = (index) => {
    const size = sizeInputs[index];
    const sendData = size;
    axios
      .post("http://localhost/BE/?c=size&a=update", sendData)
      .then((result) => {
        if (result.data) {
          if (window.confirm('Cập nhất size thành công. Bấm đồng ý để reload lại trang')) {
            window.location.reload();
          }
        } else {
          alert('Cập nhật size thất bại')  
        }
      })
  }
  
  const categories = [
    'NAM:HUNTER',
    'NAM:SANDAL',
    'NAM:GIAY_THE_THAO',
    'NAM:GIAY_CHAY_BO',
    'NAM:GIAY_DA_BANH',
    'NAM:GIAY_TAY',
    'NAM:DEP',
    'NU:HUNTER',
    'NU:SANDAL',
    'NU:GIAY_BUP_BE',
    'NU:GIAY_THOI_TRANG',
    'NU:GIAY_CHAY_BO',
    'NU:GIAY_THE_THAO',
    'NU:DEP',
    'BE_TRAI:SANDAL',
    'BE_TRAI:GIAY_THE_THAO',
    'BE_TRAI:DEP',
    'BE_GAI:GIAY_BUP_BE',
    'BE_GAI:GIAY_THE_THAO',
    'BE_GAI:SANDAL',
    'BE_GAI:DEP',
    'BE_GAI:GIAY_TAP_DI',
];
  

  useEffect(() => {
    if (images.length !== 0) {
      const mainImage = document.querySelector(`.${style.mainImageContainer} img`);
      mainImage.src = images[indexDisplayImage].link;
    }
  }, [indexDisplayImage])
  
  const handleClickSubImage = (index) => {
    setindexDisplayImage(index);
  }

  //btn delete in image which is displayed
  const handleClickDeleteImage = (indexImage) => {
    //if the image which is displayed is mainImage -> not allow
    if (indexImage === productIndexMainImage.current) {
      alert('Không thể xóa ảnh chính');
      return;
    }
    
    //get image which will be deleted
    const image = images[indexImage];
    //call api to delete image
    const sendData = {
      id : image.id 
    }
    axios
      .post("http://localhost/BE/?c=subImage&a=delete", sendData)
      .then((result) => {
        if(result.data){
          if(window.confirm('Xóa ảnh thành công. Bấm đồng ý để reload lại trang')) {
            window.location.reload();
          }
        }
        else{
          alert('Xóa ảnh thất bại');
        }
    });
  }


  const [showInputAddImage, setShowInputAddImage] = useState(false);
  const handleClickAddImage = () => {
    setShowInputAddImage(true);
  }
  const handleClickCancelSubmitImage = () => {
    setImages((prevImages) => {
      prevImages = prevImages.filter(image => image.link !== '');
      return prevImages;
    });
    setShowInputAddImage(false);
  }
  const handleClickSubmitImage = () => {
    const sendData = {
      productID : productID,
      img : newImage.current
    }
    axios
      .post("http://localhost/BE/?c=subImage&a=save", sendData)
      .then((result) => {
        if (result.data) {
          if (window.confirm('Thêm ảnh thành công. Bấm đồng ý để reload lại trang')) {
            window.location.reload();
          }
        }
        else{
          alert('Thêm ảnh thất bại');
        }
    });
    // console.log(newImage.current);
  }
  const handleClickAddInputImage = () => {
    keyImage.current++;
    setImages([...images, {id: '', productID: '', link: '', key: keyImage.current}]);
  }
  
  //update general information
  const handleClickUpdateGeneralInfor = () => {
    //confirm from admin
    
    //call api to update general information
    const sendData = {
      id: productID,
      ptitle: productName.current,
      pimg: product.pimg,
      pprice: productPrice.current,
      pgender: productGender.current,
      pkind: productType.current,
    };
    console.log(sendData.pprice)
    if (!window.confirm('Xác nhận cập nhật thông tin sản phẩm')) {
      return;
    }
    axios
      .post("http://localhost/BE/?c=product&a=update", sendData)
      .then((result) => {
          if (result.data) {
            if(window.confirm('Cập nhật thông tin sản phẩm thành công. Bấm đồng ý để reload lại trang')) {
              window.location.reload();
            }
          } else {
            alert(result)
          }
      });
  }
  //update main image
  const handleUpdateMainImage = (index) => {
    if (!window.confirm('Xác nhận cập nhật ảnh chính')) {
      return;
    }
    //change value of productIndexMainImage
    productIndexMainImage.current = index;
    //call api to update main image
    const sendData = {
      id: productID,
      ptitle: productName.current,
      pimg: images[productIndexMainImage.current].link,
      pprice: productPrice.current,
      pgender: productGender.current,
      pkind: productType.current,
    };
    axios
      .post("http://localhost/BE/?c=product&a=update", sendData)
      .then((result) => {
          if (result.data) {
            if(window.confirm('Cập nhật thông tin sản phẩm thành công. Bấm đồng ý để reload lại trang')) {
              window.location.reload();
            }
          } else {
            alert(result)
          }
      });
  }

  //update sub image
  const handleClickUpdateImage = (index) => {
    if(index === productIndexMainImage.current){
      // call api update this image in product table
      // call api to update main image
      const sendData = {
        id: productID,
        ptitle: productName.current,
        pimg: images[index].link,
        pprice: productPrice.current,
        pgender: productGender.current,
        pkind: productType.current,
      };
      axios
        .post("http://localhost/BE/?c=product&a=update", sendData)
        .then((result) => {
          if (!result.data) {
            alert('Cập nhật ảnh chính thất bại');
            return
          } 
        });
    }
    // call api update this image in subImage table
    const sendData = {
      id: images[index].id,
      img: images[index].link
    };
    axios
      .post("http://localhost/BE/?c=subImage&a=update", sendData)
      .then((result) => {
        if(result.data){
          if(window.confirm('Cập nhật ảnh thành công. Bấm đồng ý để reload lại trang')) {
            window.location.reload();
          }
        }
        else{
          alert('Cập nhật ảnh thất bại');
        }
    });
  }
  //update description
  const handleClickUpdateDescription = () => {
    if (typeof description.current === 'string') {
      
      const sendData = {
        productID : productID ,
        description : description.current
      }
      axios
        .post("http://localhost/BE/?c=description&a=save", sendData)
        .then((result) => {
          if(result.data){
            if(window.confirm('Cập nhật thông tin mô tả sản phẩm thành công. Bấm đồng ý để reload lại trang')) {
              window.location.reload();
            }
          }
          else{
            alert('Cập nhật thông tin mô tả sản phẩm thất bại');
          }
        }); 
    } else {
      const sendData = {
        id: description.current.id, //id of description
        content: description.current.content
      }
      axios.post("http://localhost/BE/?c=description&a=update", sendData).then((result)=>{
        if(result.data){
          if(window.confirm('Cập nhật thông tin mô tả sản phẩm thành công. Bấm đồng ý để reload lại trang')) {
            window.location.reload();
          }
        }
        else{
          alert('Cập nhật thông tin mô tả sản phẩm thất bại');
        }
      });
    }
    
  }

  //create new size
  const handleClickSubmitSize = () => {
    const sendData = {
      productID: productID,
      soluong: newSize.current.soluong,
      size: newSize.current.size,
    };
    axios
      .post(" ", sendData)
      .then((result) => {
        if (result.data) {
          if(window.confirm('Thêm size mới thành công. Bấm đồng ý để reload lại trang')) {
            window.location.reload();
          }
        } else {
          alert('Thêm size mới thất bại');
        }
      });
  }
  return (
    <div className={style.container}>
      <Header route={'updateProduct'}/>
      {showInputAddImage && 
        <div className={style.inputAddImageContainer}>
          <div className={style.inputAddImageContent}>
            <label>Thêm ảnh</label>
            <div className={style.inputHeader}>
              <label>Ảnh chính</label>
              <label>Link ảnh</label>
              <label>Action</label>
            </div>
            <div className={style.inputRows}> 
              {images.map((image, index) => {
                return (
                  <div className={style.inputAddImageRow} key={image.key}>
                    <input
                      type='radio' name='indexNameImage'
                      onChange={() => { handleUpdateMainImage(index) }}
                      // defaultChecked={index === productIndexMainImage.current ? true : false}
                      checked={index === productIndexMainImage.current ? true : false}
                    />
                    <input
                      type='text' className={style.inputAddImage}
                      placeholder='Nhập Link ảnh vào đây'
                      onChange={(e) => { image.link = e.target.value}}
                      defaultValue={image.link}
                    />
                    <div className={style.imageAction}>
                      <button
                        className='btn'
                        onClick={() => {handleClickDeleteImage(index);}}
                      ><i className="bi bi-x-circle"></i></button>
                      <button
                        className='btn btn-success'
                        onClick={() => {handleClickUpdateImage(index);}}
                      >Cập nhật</button>
                    </div>
                    
                  </div>
                )
              })}
              <div className={style.inputAddImageRow}>
                <input
                  type='radio' 
                  // onChange={() => { handleUpdateMainImage(index) }}
                  // defaultChecked={index === productIndexMainImage.current ? true : false}
                  checked={false}
                  readOnly={true}
                />
                <input
                  type='text' className={style.inputAddImage}
                  placeholder='Nhập Link ảnh vào đây'
                  onChange={(e) => { newImage.current = e.target.value}}
                />
                <div className={style.imageAction}>
                  <button
                    className='btn btn-success'
                    onClick={() => {
                      handleClickSubmitImage()
                    }}

                  >Thêm ảnh</button>
                </div>
                
              </div>
            </div>

            <button
              className={`btn ${style.btnCancelAddImage}`}
              onClick={() => { handleClickCancelSubmitImage() }}><i className="bi bi-x-circle"></i></button>
            
          </div>
        </div>
      }
      <div className={style.middle}>
        
        <div className={style.title}>
          <h1>Chỉnh sửa sản phẩm</h1>
        </div>
        <div className={style.addProductContainer}>
          <div className={style.addProductImage}>
            <label>Thêm ảnh</label>
            <div className={style.mainImageContainer}>
              <button
                className={style.btnDeleteImage}
                onClick={() => {handleClickDeleteImage(indexDisplayImage)}}
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
                  onChange={(e) => { productName.current = e.target.value }}
                  defaultValue={ productName.current }
                />
              </div>
              
              <div className={style.textInputContainer}>
                <label for='productPrice'>Giá</label>
                <input
                  type='number' id='productPrice'
                  name='productPrice' className={style.textInput}
                  onChange={(e) => { productPrice.current = e.target.value }}
                  defaultValue={ productPrice.current }
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
                  <option value="">Loại sản phẩm</option>
                  {categories.map((category, index) => {
                    return (
                      <option
                        value={category} key={index}
                        selected={`${productGender.current}:${productType.current}` === category}
                      >{category}</option>
                    )
                  })}
                </select>
              </div>
              <button className='btn btn-success' onClick={()=>{handleClickUpdateGeneralInfor()}}>Cập nhật thông tin sản phẩm</button>
            </div>
            <div>
              <div className={style.textInputContainer}>
                <label for='productDescription'>Mô tả sản phẩm</label>
                <textarea
                  rows={5} id='productDescription' name='productDescription'
                  className={style.textInput}
                  onChange={(e) => {
                    if (typeof description.current === "string") description.current = e.target.value
                    else description.current.content = e.target.value
                  }}
                  defaultValue={
                    typeof description.current === "string" ?
                      description.current :
                      description.current.content
                  }
                />
              </div>
              <button
                className='btn btn-success mt-3'
                onClick={() => {handleClickUpdateDescription()}}
              >Cập nhật thông tin mô tả sản phẩm</button>
            </div>
            <div className={style.sizeContainer}>
              <table className={`table ${style.sizeTable}`} >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Size</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Xóa</th>
                    <th scope="col">Cập nhật</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeInputs.map((sizeInput, index) => {
                    return (
                      <tr key={sizeInput.key} className={style.sizeInput}>
                        <th scope="row">{index + 1}</th>
                        <td><input
                          type='number' className={style.size}
                          onChange={(e) => { sizeInput.size = e.target.value }}
                          defaultValue={sizeInput.size}
                        /></td>
                        <td>
                          <input
                            type='number' className={style.soluong}
                            onChange={(e) => { sizeInput.soluong = e.target.value }}
                            defaultValue={sizeInput.soluong}
                          /></td>
                        <td>
                          <button
                              className='btn'
                              onClick={() => handleClickDeleteSize(index)}
                            ><i className="bi bi-x-circle"></i></button>
                          
                        </td>
                        <td>
                          <button
                              className='btn btn-success'
                              onClick={() => handleClickUpdateSize(index)}
                            >Cập nhật</button>
                          
                        </td>
                      </tr>
                    )
                  })} 
                  <tr className={style.sizeInput}>
                    <th scope="row"></th>
                    <td><input
                      type='number' className={style.size}
                      onChange={(e) => { newSize.current.size = e.target.value }}
                      // defaultValue={sizeInput.size}
                    /></td>
                    <td>
                      <input
                        type='number' className={style.soluong}
                        onChange={(e) => { newSize.current.soluong = e.target.value }}
                        // defaultValue={sizeInput.soluong}
                      /></td>
                    <td>
                      <button
                          className='btn'
                          // onClick={() => handleClickDeleteSize(index)}
                        ><i className="bi bi-x-circle"></i></button>
                      
                    </td>
                    <td>
                      <button
                          className='btn btn-success'
                          onClick={() => handleClickSubmitSize()}
                        >Submit</button>
                      
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='d-flex justify-content-between col-12'>
                <button className='btn btn-success col-6' >Cập nhật thông tin size sản phẩm</button>
                <div className={style.btnAddSizeContainer}>
                  <button
                    className={`btn btn-success ${style.btnAddSize}`}
                    onClick={() => handleClickAddSize()}
                  >Thêm size</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
