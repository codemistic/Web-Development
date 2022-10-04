import React from 'react'
import logo from '../assets/images/logo.png'
import {CgSearch} from 'react-icons/cg';
import {FaChromecast} from 'react-icons/fa';
import {GoKebabVertical} from 'react-icons/go';
import Card from './Card';
import './Home.css'
import Sidebar from './Sidebar';
import Footer from './Footer';
const Home = () => {
  return (
    <div className='home'>
      <div className="navbar">
      <div className="logo">
      <img src={logo} alt="" />
      <h2>Music</h2>
      </div>
      <div className="links">
      <ul>
      <li>Home</li>
      <li>Explore</li>
      <li>Library</li>
      </ul>
      </div>
      <div className="search-bar">
      <CgSearch/>
      <p>Search</p>
      </div>
      <div className="cast">
      <FaChromecast/>
      <GoKebabVertical/>
      <strong>SIGN IN</strong>
      </div>
      </div>
      <div className="center">
      <Card/>
      <Sidebar/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
