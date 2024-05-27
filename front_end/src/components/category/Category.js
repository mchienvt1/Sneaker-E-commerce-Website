import React, { useEffect, useState } from 'react'
import style from './Category.module.css'
import { Link } from 'react-router-dom';

class CategoryChildren{
  constructor(name, image, link) {
    this.name = name;
    this.image = image;
    this.link = link;
  }
}

class Category{
  constructor(name, categoryChildrens, link) {
    this.name = name;
    this.categoryChildrens = categoryChildrens;
    this.link = link;
  }
}

export default function CategoryComponent({ name }) {
  const [indexActive, setIndexActive] = useState([0, -1]);

  const handleClickParent = (index) => {
    setIndexActive([index, -1]);
  }

  const menCategory = new Category(
    "NAM",
    [
      new CategoryChildren(
        "Hunter",
        "https://theme.hstatic.net/1000230642/1001205219/14/hunter-nam.svg?v=612",
        "/collections/nam-hunter"),
      new CategoryChildren(
        "Sandal",
        "https://theme.hstatic.net/1000230642/1001205219/14/sandal-nam.svg?v=612",
        "/collections/nam-sandal"),
      new CategoryChildren(
        "Giày Thể Thao",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-nam.svg?v=612",
        "/collections/nam-the-thao"),
      new CategoryChildren(
        "Giày Chạy Bộ",
        "https://theme.hstatic.net/1000230642/1001205219/14/hunter-running-nam.svg?v=612",
        "/collections/nam-chay-bo"),
      new CategoryChildren(
        "Giày Đá Banh",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-da-banh.svg?v=612",
        "/collections/nam-da-banh"),
      new CategoryChildren(
        "Giày Tây",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-tay-nam.svg?v=612",
        "/collections/nam-tay"),
      new CategoryChildren(
        "Dép",
        "https://theme.hstatic.net/1000230642/1001205219/14/dep-nam.svg?v=612",
        "/collections/nam-dep"),
    ],
    "/collections/nam"
  )

  const womenCategory = new Category(
    "NỮ",
    [
      new CategoryChildren(
        "Hunter",
        "https://theme.hstatic.net/1000230642/1001205219/14/hunter-nu.svg?v=612",
        "/collections/nu-hunter"),
      new CategoryChildren(
        "Sandal",
        "https://theme.hstatic.net/1000230642/1001205219/14/sandal-nu-1.svg?v=612",
        "/collections/nu-sandal"),
      new CategoryChildren(
        "Giày Búp Bê",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-bup-be-nu.svg?v=612",
        "/collections/nu-bup-be"),
      new CategoryChildren(
        "Giày Thời Trang",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-thoi-trang-nu-1.svg?v=612",
        "/collections/nu-thoi-trang"),
      
      new CategoryChildren(
        "Giày Chạy Bộ - Đi Bộ",
        "https://theme.hstatic.net/1000230642/1001205219/14/hunter-running-jogging.svg?v=612",
        "/collections/nu-chay-bo"),
      new CategoryChildren(
        "Giày Thể Thao",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-nu.svg?v=612",
        "/collections/nu-the-thao"),
      new CategoryChildren(
        "Dép",
        "https://theme.hstatic.net/1000230642/1001205219/14/dep-nu.svg?v=612",
        "/collections/nu-dep"),
    ],
    "/collections/nu"
  )

  const boyCategory = new Category(
    "BÉ TRAI",
    [
      new CategoryChildren(
        "Sandal",
        "https://theme.hstatic.net/1000230642/1001205219/14/sandal-be-trai.svg?v=612",
        "/collections/be-trai-sandal"),
      new CategoryChildren(
        "Giày Thể Thao",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-be-trai.svg?v=612",
        "/collections/be-trai-the-thao"),
      new CategoryChildren(
        "Dép",
        "https://theme.hstatic.net/1000230642/1001205219/14/dep-be-trai.svg?v=612",
        "/collections/be-trai-dep"),
    ],
    "/collections/be-trai"
  )
  
  const girlCategory = new Category(
    "BÉ GÁI",
    [
      new CategoryChildren(
        "Giày Búp Bê",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-bup-be-be-gai.svg?v=612",
        "/collections/be-gai-bup-be"),
      new CategoryChildren(
        "Giày Thể Thao",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-be-gai.svg?v=612",
        "/collections/be-gai-the-thao"),
      new CategoryChildren(
        "Sandal",
        "https://theme.hstatic.net/1000230642/1001205219/14/sandal-be-gai.svg?v=612",
        "/collections/be-gai-sandal"),
      new CategoryChildren(
        "Dép Bé Gái",
        "https://theme.hstatic.net/1000230642/1001205219/14/dep-be-gai.svg?v=612",
        "/collections/be-gai-dep"),
      new CategoryChildren(
        "Giày Tập Đi",
        "https://theme.hstatic.net/1000230642/1001205219/14/giay-tap-di.svg?v=612",
        "/collections/be-gai-tap-di"),
    ],
    "/collections/be-gai"
  )

  
  const [categories, setCategories] = useState([])

  useEffect(() => {
    switch (name) {
      case 'nam':
        setIndexActive([0, -1]);
        setCategories([menCategory]);
        break;
      case 'nam-hunter':
        setIndexActive([0, 0]);
        setCategories([menCategory]);
        break;
      case 'nam-sandal':
        setIndexActive([0, 1]);
        setCategories([menCategory]);
        break;
      case 'nam-the-thao':
        setIndexActive([0, 2]);
        setCategories([menCategory]);
        break;
      case 'nam-chay-bo':
        setIndexActive([0, 3]);
        setCategories([menCategory]);
        break;
      case 'nam-da-banh':
        setIndexActive([0, 4]);
        setCategories([menCategory]);
        break;
      case 'nam-tay':
        setIndexActive([0, 5]);
        setCategories([menCategory]);
        break;
      case 'nam-dep':
        setIndexActive([0, 6]);
        setCategories([menCategory]);
        break;
      case 'nu':
        setIndexActive([0, -1]);
        setCategories([womenCategory]);
        break;
      case 'nu-hunter':
        setIndexActive([0, 0]);
        setCategories([womenCategory]);
        break;
      case 'nu-sandal':
        setIndexActive([0, 1]);
        setCategories([womenCategory]);
        break;
      case 'nu-bup-be':
        setIndexActive([0, 2]);
        setCategories([womenCategory]);
        break;
      case 'nu-thoi-trang':
        setIndexActive([0, 3]);
        setCategories([womenCategory]);
        break;
      case 'nu-chay-bo':	
        setIndexActive([0, 4]);
        setCategories([womenCategory]);
        break;
      case 'nu-the-thao':
        setIndexActive([0, 5]);
        setCategories([womenCategory]);
        break;
      case 'nu-dep':
        setIndexActive([0, 6]);
        setCategories([womenCategory]);
        break;
      
      case 'be-trai':
        setIndexActive([0, -1]);
        setCategories([boyCategory]);
        break;
      case 'be-trai-sandal':
        setIndexActive([0, 0]);
        setCategories([boyCategory]);
        break;
      case 'be-trai-the-thao':
        setIndexActive([0, 1]);
        setCategories([boyCategory]);
        break;
      case 'be-trai-dep':
        setIndexActive([0, 2]);
        setCategories([boyCategory]);
        break;
      case 'be-gai':
        setIndexActive([0, -1]);
        setCategories([girlCategory]);
        break;
      case 'be-gai-bup-be':
        setIndexActive([0, 0]);
        setCategories([girlCategory]);
        break;
      case 'be-gai-the-thao':
        setIndexActive([0, 1]);
        setCategories([girlCategory]);
        break;
      case 'be-gai-sandal':
        setIndexActive([0, 2]);
        setCategories([girlCategory]);
        break;
      case 'be-gai-dep':
        setIndexActive([0, 3]);
        setCategories([girlCategory]);
        break;
      case 'be-gai-tap-di':
        setIndexActive([0, 4]);
        setCategories([girlCategory]);
        break;
      default:
        setCategories([menCategory,girlCategory,boyCategory,girlCategory]);
        setIndexActive([0, -1]);
        break;
    }
  },[name])
  
  return (
    categories.length === 0 ? <></> :
      <div className={`${style.container}`}>
        <div className={`${style.parent}`}>
          {categories.map((category, index) => {
            return (
              <div
                className={indexActive[0] === index && style.parentActive}
                onClick={() => { handleClickParent(index) }}
              >
                <Link to={category.link}>{category.name}</Link>
              </div>
            );
          })}
        </div>

        <div className={`${style.children}`}>
          <div className={`${style.childrenContent} `}>
            {
              categories[indexActive[0]] && 
              categories[indexActive[0]].categoryChildrens.map((categoryChildren, index) => {
                return (
                  <div>
                    <Link
                      to={categoryChildren.link}
                      style={indexActive[1] === index ? {backgroundColor: '#ffc107'}: {}}
                    >
                      
                      <img alt="anh" src={categoryChildren.image}/>
                    </Link>
                    
                    <Link
                      to={categoryChildren.link}
                    >
                      {categoryChildren.name}
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    
  )
}
