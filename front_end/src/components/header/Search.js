import React, { useRef, useState } from 'react'
import style from './Header.module.css'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <form className={style.search}>
      <button
        className={style.searchButton}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/search/${searchTerm}`; 
        }}
      >  
        <i className="bi bi-search"></i>
      </button>
      <input
        type="text" placeholder="Bạn cần tìm gì ..." className={style.input}
        onChange={(e) => { setSearchTerm(e.target.value) }}
      />
    </form>
  )
}
