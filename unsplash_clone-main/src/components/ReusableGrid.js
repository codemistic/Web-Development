import React, { useState, useEffect } from "react";
import { Loader } from "./Loader";
import UnsplashImage from "./UnsplashImage";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";


const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
}
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 350px;
`;

const ReusableGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);

  const fetchImages = (count = 8) => {
    const rootApi = "https://api.unsplash.com";
    const accesskey = process.env.REACT_APP_RANDOM_API_KEY;

    axios
      .get(`${rootApi}/photos/random?client_id=${accesskey}&count=${count}`)
      .then((response) => setImages([...images, ...response.data]))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
    <GlobalStyles />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images.map((image) => (
            <UnsplashImage url={image.urls.small} key={image.id} />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
};

export default ReusableGrid;
