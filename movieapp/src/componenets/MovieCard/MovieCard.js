import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'


const MovieCard = ({data}) => {
  return (
    <div className='card-item'>
      <Link to={`/movie/${data.imdbID}`}>
      
      <div className='card-inner'>
        <div className='card-top'>
          <img src={data.Poster} alt="poster" />
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>{data.Title}</h4>
            <p>{data.year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard