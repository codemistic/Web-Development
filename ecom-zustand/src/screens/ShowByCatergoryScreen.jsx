import React, { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  electronics,
  jewelery,
  mens_clothing,
  womens_clothing,
} from "../fakeApiData/categoryData";
import data from "../fakeApiData/data";
const ShowByCatergoryScreen = () => {
  const param = useParams();
  const category = param["category"];
  const nav = useNavigate();

  useEffect(() => {
    console.log(param["category"]);
  }, []);

  if (category == "electronics") {
    return (
      <>
        <div className="container mx-auto flex items-center justify-start bg-gradient-to-r from-[#350078] text-white p-5 mt-5 text-xl">
          {String(category).toUpperCase()}
        </div>
        <div className="container mx-auto flex flex-row flex-wrap items-center justify-center sm:justify-between gap-5 sm:p-10">
          {electronics.map((e, i) => (
            <div
              className=" w-[370px] h-[400px] flex items-start justify-center px-3 flex-col shadow-sm transition ease-in-out delay-150 hover:shadow-2xl duration-200 border"
              key={i}
              onClick={() => {
                nav("/product", { state: { data: e } });
              }}
            >
              <img src={e.image} alt="" className="h-52 px-10  self-center" />

              <h3 className="text-[#758283] mt-2">
                {String(e.category).toUpperCase()}
              </h3>
              <h3 className="text-[#6A1B4D] text-md">{e.title}</h3>
              <h3 className="mt-2">
                Rating:{" "}
                <span className="text-[#A77B06] font-semibold text-md">
                  {e.rating.rate}
                </span>
              </h3>
              <h3 className="text-[#2e0066] text-2xl mt-2">₹{e.price}</h3>
            </div>
          ))}
        </div>
      </>
    );
  }
  if (category == "jewelery") {
    return (
      <>
        <div className="container mx-auto flex items-center justify-start bg-gradient-to-r from-[#350078] text-white p-5 mt-5 text-xl">
          {String(category).toUpperCase()}
        </div>
        <div className="container mx-auto flex flex-row flex-wrap items-center justify-center sm:justify-between gap-5 sm:p-10">
          {jewelery.map((e, i) => (
            <div
              className=" w-[370px] h-[400px] flex items-start justify-center px-3 flex-col shadow-sm transition ease-in-out delay-150 hover:shadow-2xl duration-200 border"
              key={i}
              onClick={() => {
                nav("/product", { state: { data: e } });
              }}
            >
              <img src={e.image} alt="" className="h-52 px-10  self-center" />

              <h3 className="text-[#758283] mt-2">
                {String(e.category).toUpperCase()}
              </h3>
              <h3 className="text-[#6A1B4D] text-md">{e.title}</h3>
              <h3 className="mt-2">
                Rating:{" "}
                <span className="text-[#A77B06] font-semibold text-md">
                  {e.rating.rate}
                </span>
              </h3>
              <h3 className="text-[#2e0066] text-2xl mt-2">₹{e.price}</h3>
            </div>
          ))}
        </div>
      </>
    );
  }
  if (category == "mens_clothing") {
    return (
      <>
        <div className="container mx-auto flex items-center justify-start bg-gradient-to-r from-[#350078] text-white p-5 mt-5 text-xl">
          {String(category).toUpperCase()}
        </div>
        <div className="container mx-auto flex flex-row flex-wrap items-center justify-center sm:justify-between gap-5 sm:p-10">
          {mens_clothing.map((e, i) => (
            <div
              className=" w-[370px] h-[400px] flex items-start justify-center px-3 flex-col shadow-sm transition ease-in-out delay-150 hover:shadow-2xl duration-200 border"
              key={i}
              onClick={() => {
                nav("/product", { state: { data: e } });
              }}
            >
              <img src={e.image} alt="" className="h-52 px-10  self-center" />

              <h3 className="text-[#758283] mt-2">
                {String(e.category).toUpperCase()}
              </h3>
              <h3 className="text-[#6A1B4D] text-md">{e.title}</h3>
              <h3 className="mt-2">
                Rating:{" "}
                <span className="text-[#A77B06] font-semibold text-md">
                  {e.rating.rate}
                </span>
              </h3>
              <h3 className="text-[#2e0066] text-2xl mt-2">₹{e.price}</h3>
            </div>
          ))}
        </div>
      </>
    );
  }
  if (category == "womens_clothing") {
    return (
      <>
        <div className="container mx-auto flex items-center justify-start bg-gradient-to-r from-[#350078] text-white p-5 mt-5 text-xl">
          {String(category).toUpperCase()}
        </div>
        <div className="container mx-auto flex flex-row flex-wrap items-center justify-center sm:justify-between gap-5 sm:p-10">
          {jewelery.map((e, i) => (
            <div
              className=" w-[370px] h-[400px] flex items-start justify-center px-3 flex-col shadow-sm transition ease-in-out delay-150 hover:shadow-2xl duration-200 border"
              key={i}
              onClick={() => {
                nav("/product", { state: { data: e } });
              }}
            >
              <img src={e.image} alt="" className="h-52 px-10  self-center" />

              <h3 className="text-[#758283] mt-2">
                {String(e.category).toUpperCase()}
              </h3>
              <h3 className="text-[#6A1B4D] text-md">{e.title}</h3>
              <h3 className="mt-2">
                Rating:{" "}
                <span className="text-[#A77B06] font-semibold text-md">
                  {e.rating.rate}
                </span>
              </h3>
              <h3 className="text-[#2e0066] text-2xl mt-2">₹{e.price}</h3>
            </div>
          ))}
        </div>
      </>
    );
  }
  if (category == "womens_clothing") {
    return (
      <>
        <div className="container mx-auto flex items-center justify-start bg-gradient-to-r from-[#350078] text-white p-5 mt-5 text-xl">
          {String(category).toUpperCase()}
        </div>
        <div className="container mx-auto flex flex-row flex-wrap items-center justify-center sm:justify-between gap-5 sm:p-10">
          {womens_clothing.map((e, i) => (
            <div
              className=" w-[370px] h-[400px] flex items-start justify-center px-3 flex-col shadow-sm transition ease-in-out delay-150 hover:shadow-2xl duration-200 border"
              key={i}
              onClick={() => {
                nav("/product", { state: { data: e } });
              }}
            >
              <img src={e.image} alt="" className="h-52 px-10  self-center" />

              <h3 className="text-[#758283] mt-2">
                {String(e.category).toUpperCase()}
              </h3>
              <h3 className="text-[#6A1B4D] text-md">{e.title}</h3>
              <h3 className="mt-2">
                Rating:{" "}
                <span className="text-[#A77B06] font-semibold text-md">
                  {e.rating.rate}
                </span>
              </h3>
              <h3 className="text-[#2e0066] text-2xl mt-2">₹{e.price}</h3>
            </div>
          ))}
        </div>
      </>
    );
  }
  if (category == "all") {
    return (
      <>
        <div className="container mx-auto flex items-center justify-start bg-gradient-to-r from-[#350078] text-white p-5 mt-5 text-xl">
          {String(category).toUpperCase()}
        </div>
        <div className="container mx-auto flex flex-row flex-wrap items-center justify-center sm:justify-between gap-5 sm:p-10">
          {data.map((e, i) => (
            <div
              className=" w-[370px] h-[400px] flex items-start justify-center px-3 flex-col shadow-sm transition ease-in-out delay-150 hover:shadow-2xl duration-200 border"
              key={i}
              onClick={() => {
                nav("/product", { state: { data: e } });
              }}
            >
              <img src={e.image} alt="" className="h-52 px-10  self-center" />

              <h3 className="text-[#758283] mt-2">
                {String(e.category).toUpperCase()}
              </h3>
              <h3 className="text-[#6A1B4D] text-md">{e.title}</h3>
              <h3 className="mt-2">
                Rating:{" "}
                <span className="text-[#A77B06] font-semibold text-md">
                  {e.rating.rate}
                </span>
              </h3>
              <h3 className="text-[#2e0066] text-2xl mt-2">₹{e.price}</h3>
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="container mx-auto  flex items-center justify-center  min-h-screen">
      <h1>Invalid category</h1>
    </div>
  );
};

export default ShowByCatergoryScreen;
