import React, { useEffect } from "react";
import useDataStore from "../store/data_store";
import heroImage from "../assets/buy.svg";
import { useNavigate } from "react-router-dom";
import { GiJewelCrown } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { FaMale, FaFemale } from "react-icons/fa";
import { BsFillWalletFill } from "react-icons/bs";
import { category } from "../fakeApiData/category";
const HomeScreen = () => {
  const data = useDataStore((state) => state.data);
  const nav = useNavigate();

  if (data == []) {
    return (
      <div className="container mx-auto h-[500px] w-[500px] flex items-center justify-center flex-col p-20">
        <div id="ani" className="h-[500px]"></div>
        <h1 className="text-2xl text-[#242B2E]">No data found</h1>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section start */}
      <div
        className="min-h-[60vh] container mx-auto bg-gradient-to-r
    from-[#330075] to-[#5c00ba]
    flex items-center justify-between flex-row
    
    "
      >
        <div
          className=" flex min-w-[50%] min-h-full flex-col  gap-8 text-white md:pl-36
        px-4 md:px-0
      items-start justify-start
      "
        >
          <h1 className=" text-5xl font-bold">
            All you need in <br /> the closet
          </h1>
          <h3 className="w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, rem
            maxime! Odit quasi eos sint nemo, ex illum vel doloremque?
          </h3>
          <button
            className="bg-gradient-to-r from-[#00eacb]
        to-[#00e06a]
        w-[200px] p-3 rounded-md transition-all ease-in-out delay-200 text-white hover:invert duration-200
        "
            onClick={() => {
              nav("/category/all");
            }}
          >
            Browse Products
          </button>
        </div>
        <div className="hidden md:flex min-w-[50%] items-center justify-center ">
          <img src={heroImage} alt="" className="h-[300px] w-[400px]" />
        </div>
      </div>
      {/* Hero Section end  */}

      {/* Heading-Start */}
      <div className="container mx-auto flex items-center justify-start bg-gradient-to-r from-[#350078] text-white p-5 mt-5 text-xl">
        Categories
      </div>
      {/* Heading-ENd */}
      {/* Product Section Start */}
      <div className=" container mx-auto flex justify-center items-center  font-serif flex-wrap  gap-4 bg-[#ffffff]">
        {/* Category Data-start */}
        <div className="container mx-auto flex flex-row justify-center sm:justify-between items-center  mt-5 sm:p-5 flex-wrap gap-10 font-sans py-5">
          <div
            className=" shadow-2xl w-[300px] h-[100px] rounded-full p-5 flex flex-row items-center justify-center gap-4 text-white bg-gradient-to-r from-[#FF9F4A] to-[#FF3C83]"
            onClick={() => {
              nav("/category/jewelery");
            }}
          >
            {/* Card Start */}
            <GiJewelCrown size={60} />
            <h1 className="text-xl sm:text-4xl">Jewelery</h1>
          </div>
          {/* Card End */}
          {/* Card Start */}

          <div
            className=" shadow-2xl w-[300px] h-[100px] rounded-full p-5 flex flex-row items-center justify-center gap-4 text-white bg-gradient-to-r from-[#00BC40] to-[#4C3AE3]"
            onClick={() => {
              nav("/category/electronics");
            }}
          >
            <FcElectronics size={60} />
            <h1 className="text-xl sm:text-4xl">Electronics</h1>
          </div>
          {/* Card End */}
          {/* Card Start */}

          <div
            className=" shadow-2xl w-[300px] h-[100px] rounded-full p-5 flex flex-row items-center justify-center gap-4 text-white bg-gradient-to-r from-[#FF4331] to-[#D31A50] min-w-fit"
            onClick={() => {
              nav("/category/mens_clothing");
            }}
          >
            <FaMale size={60} />
            <h1 className="text-xl sm:text-4xl">Men's Clothing</h1>
          </div>
          {/* Card End */}
          {/* Card Start */}

          <div
            className=" shadow-2xl w-[300px] h-[100px] rounded-full p-5 flex flex-row items-center justify-center gap-4 text-white bg-gradient-to-r from-[#E1A2B8] to-[#9F2BC1] min-w-fit"
            onClick={() => {
              nav("/category/womens_clothing");
            }}
          >
            <FaFemale size={60} />
            <h1 className="text-xl sm:text-4xl">Women's clothing</h1>
          </div>
          {/* Card End */}
          {/* Card Start */}

          <div
            className=" shadow-2xl w-[300px] h-[100px] rounded-full p-5 flex flex-row items-center justify-center gap-4 text-white bg-gradient-to-r from-[#253898] to-[#5737D6] min-w-fit"
            onClick={() => {
              nav("/category/all");
            }}
          >
            <BsFillWalletFill size={60} />
            <h1 className="text-xl sm:text-4xl">All products</h1>
          </div>
          {/* Card End */}
        </div>
        {/* Category Data-end */}
      </div>
      {/* Product Section End */}
    </>
  );
};

export default HomeScreen;
