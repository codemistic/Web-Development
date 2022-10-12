import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

const Header = styled.header`
  max-width: 90rem;
  margin: 2rem auto;
  display : flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 6px;
`;


const Heading = () => {
  return (
    <Header>
        <H1><Link to="/" style={{textDecoration : 'none', color : 'black'}}>Unsplash</Link></H1>
    <h3><Link to="/search" style={{textDecoration : 'none' , marginLeft : '2rem', color : 'black'}}>search photos <SearchOutlined /></Link></h3>
    </Header>
  )
}

export default Heading