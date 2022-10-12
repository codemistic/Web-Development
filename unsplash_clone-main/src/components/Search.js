import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchImages from "./SearchImages";
import UseAxios from "./hooks/UseAxios";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination/Pagination";
import axios from 'axios';
//import Home from "./Home";
import ReusableGrid from "./ReusableGrid";

const Header = styled.header`
  max-width: 90rem;
  margin: 0.5rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-family: "Oswald", sans-serif;
  margin-bottom: 1.5rem;
`;

const InputText = styled.input`
  height: 1.5rem;
  width: 200px;
  font-size: 1rem;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  margin-left: 2rem;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 8px 50px;
  border-radius: 5px;
  margin-bottom: 1rem;
  margin-left: 1rem;
  cursor: pointer;
  border: none;

  &:active {
    background-color: #666666;
    opacity: 0.6;
  }
`;

const SearchWrapper = styled.div`
  display: "flex";
  flex-direction: row;
  margin-top: 1rem;
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 350px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Search = () => {
  const [search, setSearch] = useState("");
  const [responseQuery, setResponseQuery] = useState([]);
  const {
    response,
    //isLoading,
    //error,
    fetchData,
    setCurrentPage,
    currentPage,
    totalPages,
  } = UseAxios(
    // `search/photos?page=1&query=cat&per_page=30&client_id=${process.env.REACT_APP_SEARCH_API_KEY}`
  );

  let responsePerPage = 20;
  const LastIndexResponse = currentPage * responsePerPage;
  const FirstIndexResponse = LastIndexResponse - responsePerPage;
  
  const currentResponse = response.slice(FirstIndexResponse, LastIndexResponse);
  console.log(response);
  console.log(totalPages);
  console.log(currentPage);
  
  // useEffect(()=>{
    
  // }, [search])

  const handleSubmit = () => {
    fetchData(
      `search/photos?page=${currentPage}&query=${search}&per_page=20&client_id=${process.env.REACT_APP_SEARCH_API_KEY}`
    );
    //setSearch("");
    // setCurrentPage(value);
  };
  // useEffect(() => {
  //   fetchData(`search/photos?page=${currentPage}&query=${search}&per_page=30&client_id=${process.env.REACT_APP_SEARCH_API_KEY}`)
  // }, [currentPage])
  axios.defaults.baseURL = 'https://api.unsplash.com';

  const loadData = async() => {
    const query = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${search}&per_page=20&client_id=${process.env.REACT_APP_SEARCH_API_KEY}`;
    const res =  await axios(query);
    setResponseQuery([...res.data.results]);
    window.scrollTo({ top: 20 , behavior: 'smooth' });
    //console.log(res.data.results);
  }
  useEffect(() =>{
    setResponseQuery([]);
    setCurrentPage(1);
    // eslint-disable-next-line
  },[search])



  const Paginate = (e, value) => {
    setCurrentPage(value); 
    loadData();
    //fetchData(`search/photos?page=${currentPage}&query=${search}&per_page=20&client_id=${process.env.REACT_APP_SEARCH_API_KEY}`);
    console.log(value);
  }

  return (
    <>
      <Header>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <H1>Unsplash</H1>
        </Link>

        <SearchWrapper>
          <InputText
            placeholder="Search Photos"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></InputText>
          <Button onClick={handleSubmit} disabled={!search}>
            Search
          </Button>
        </SearchWrapper>
      </Header>
      <WrapperImages>
         {search ?    
        <SearchImages response={currentResponse} res={responseQuery} /> : <ReusableGrid/>}
      </WrapperImages>
      { search && response.length >= 10 && (
        <PaginationWrapper>
          <Pagination
            defaultPage={1}
            count={Math.ceil(totalPages / responsePerPage)}
            page={currentPage}
            onChange={Paginate}
          />
        </PaginationWrapper>
      )}
    </>
  );
};

export default Search;
