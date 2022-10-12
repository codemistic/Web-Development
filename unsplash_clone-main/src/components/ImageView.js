import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageView = ({data}) => {
    //console.log(data);
  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <Img loading = "lazy" src={data.urls.thumb} alt={data.urls.description} />
    </a>
  )
}

export default ImageView;