import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const UnsplashImage = ({url, keys}) => {
  return (
    <>
    <a href={url} target="_blank" rel="noreferrer"> 
        <Img src={url} alt={keys}/>
    </a>
    </>
  )
}

export default UnsplashImage