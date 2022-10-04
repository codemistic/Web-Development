import React from 'react'
import thumbnail from '../assets/images/thumbnail.jpg'
import './Card.css'
const Card = () => {
  return (
    <div className='card'>
      <div className="thumbnail">
      <img src={thumbnail} alt="" />
      </div>
    </div>
  )
}

export default Card
