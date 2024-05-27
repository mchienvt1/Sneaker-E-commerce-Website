import React from 'react'
import style from './Header.module.css'
import NavRow from './NavRow'
import NavMobile from './NavMobile'

export default function Nav() {
  
  return (
    <div className={`${style.nav}`}>
      <NavRow/>
      <NavMobile/>
    </div>
  )
}
