import React from 'react'
import ReactSwitch from "react-switch";
import {BsMoonFill, BsFillSunFill} from "react-icons/bs"
import "../styles/Header.scss"

const Header = ({toggleTheme,theme}) => {
  return (
    <div className='Header_container'>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} checkedIcon={<BsMoonFill/>} uncheckedIcon={<BsFillSunFill className='sun_svg'/>}/>
    </div>
  )
}

export default Header