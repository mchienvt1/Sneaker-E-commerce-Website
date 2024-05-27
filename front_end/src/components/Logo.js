import React from 'react'
import bitis_logo from '../assets/bitis_logo.svg'
import { Link } from "react-router-dom";


export default function Logo({ childClass }) {
  return (
    <Link to="/" className={`${childClass}`}>
      <img src={bitis_logo} alt="Logo"/>
    </Link>
  )
}
