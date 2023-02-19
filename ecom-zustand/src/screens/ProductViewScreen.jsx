import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCartStore from "../store/cart_store";
const ProductViewScreen = () => {
  const [isAddedToCart, setisAddedToCart] = useState(false);
  const location = useLocation();
  const data = location.state.data;
  const cartData = useCartStore((s) => s.cart);
  const addItemToCart = useCartStore((s) => s.addItem);
  const nav = useNavigate();
  useEffect(() => {
    if (cartData.findIndex((e) => e.id == data.id) != -1) {
      setisAddedToCart(true);
    }
  }, []);

  return (
    <>
      <div className=" container mx-auto bg-gradient-to-r from-[#6f00e6] p-4 mt-1 text-white font-serif text-2xl md:mt-10">
        Product detail
      </div>
      <div className="flex items-center justify-between container mx-auto font-sans text-white transition-all ease-in-out delay-200 lg:flex-row flex-col duration-150  md:p-20 md:py-32 shadow-2xl border ">
        <div className="mx-auto border shadow-md md:min-w-[500px] md:min-h-[500px] flex items-center justify-center">
          <img
            src={data.image}
            alt=""
            className=" md:w-[400px] md:h-[400px]  bg-blue-700"
          />
        </div>
        <div
          className="flex items-start justify-center flex-col
      bg-[#6f00e6f1]  mx-auto sm:p-10 min-w-full sm:min-w-0 p-3 gap-3 mt-10 sm:mt-0
      shadow-2xl
      md:w-[500px] md:h-[500px]
      
      "
        >
          <h3 className="text-[#242B2E] font-semibold text-xl ">
            Category:{" "}
            <span className="text-white font-normal text-sm">
              {data.category}
            </span>{" "}
          </h3>
          <h3 className="text-[#242B2E] font-semibold text-xl">
            Product Name:{" "}
            <span className="text-white font-normal text-sm">{data.title}</span>{" "}
          </h3>
          <h3 className="text-[#242B2E] font-semibold text-xl">
            Description:{" "}
            <span className="text-white font-normal text-sm">
              {String(data.description).slice(0, 150)}
            </span>{" "}
          </h3>
          <h3 className="mt-2 text-[#242B2E] font-semibold text-xl">
            Rating:{" "}
            <span className="text-[#A77B06]  text-sm">{data.rating.rate}</span>
          </h3>
          <h3 className=" text-xl mt-2">₹{data.price}</h3>
          <button className="flex h-[60px] sm:p-2 min-w-full   items-center justify-center text-xl rounded-2xl bg-[#330076a4]  transition-all ease-in-out delay-300 hover:bg-[#330076] hover:rounded-full duration-300  ">
            Buy Now
          </button>

          {isAddedToCart ? (
            <>
              <button
                className="flex sm:p-2 h-[60px] min-w-full items-center justify-center text-xl rounded-2xl bg-[#6EC72D]  transition-all ease-in-out delay-300 hover:bg-[#6dc72d98] hover:rounded-full duration-300"
                onClick={() => {
                  nav("/cart");
                }}
              >
                Go To Cart
              </button>
            </>
          ) : (
            <>
              <button
                className="flex sm:p-2  h-[60px] min-w-full items-center justify-center text-xl rounded-2xl bg-[#C7C11A]  transition-all ease-in-out delay-300 hover:bg-[#c7c11aa1] hover:rounded-full duration-300"
                onClick={() => {
                  //Add To cart function
                  addItemToCart(data);
                  setisAddedToCart(!isAddedToCart);
                }}
              >
                Add To Cart
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductViewScreen;
