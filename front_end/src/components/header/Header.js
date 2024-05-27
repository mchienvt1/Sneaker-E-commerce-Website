import React from 'react';
import Logo from '../Logo';
import Nav from './Nav';
import RightSideHeader from './RightSideHeader';
import style from './Header.module.css';
import Search from './Search';

export default function Header() {
  return (
    <>
      <div
        className={`row justify-content-between align-items-center m-auto ${style.header}`}
      >
        <Logo childClass={style.logo} />   
        <Nav />
        <RightSideHeader /> 
      </div>
      
      <div
        style={{width: '100%', backgroundColor: '#efefef'}}
      >
        <div
          className={style.searchSmallScreen}
        >
          <Search />
        </div>
      </div>
    </>
  )
}
