import React, { useEffect } from "react";
import useCartStore from "../store/cart_store";
import animationData from "../assets/empty.json";
import lottie from "lottie-web";
import { AiFillDelete } from "react-icons/ai";
import { FaCcVisa, FaCcMastercard, FaRegCreditCard } from "react-icons/fa";
const CartScreen = () => {
  const data = useCartStore((s) => s.cart);
  const totalPrice = useCartStore((s) => s.totalPrice);
  const removeItemFromCart = useCartStore((s) => s.removeItem);
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#ani"),
      loop: true,
      animationData: animationData,
    });
  }, []);

  if (data.length === 0) {
    return (
      <div className="container mx-auto flex items-center justify-center flex-col ">
        <div id="ani" className="h-[500px]"></div>
        <h1 className="text-2xl text-[#242B2E]">No item is present in cart</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto flex items-center justify-start bg-gradient-to-r from-[#350078] text-white p-5  text-xl">
        Cart
      </div>
      <div className="container mx-auto flex items-center justify-between lg:flex-row flex-col lg:p-20">
        {/* Left-Start */}
        <div className="p-5 flex justify-start lg:items-start items-center flex-col gap-4 shadow h-[500px] overflow-scroll  lg:w-[600px] container">
          {/* Cart-Start */}
          {data.map((e) => (
            <div
              className="w-[100%] lg:w-[550px] h-32 flex flex-row items-start lg:justify-start justify-center shadow-2xl rounded-md bg-gradient-to-r from-[#6f00e6] text-white"
              key={e.id}
            >
              <img
                src={e.image}
                alt=""
                className="h-24 w-24 sm:h-32 sm:w-32 p-3"
              />
              <div className="self-center px-0 sm:px-4 gap-3 w-[500px] ">
                <h3>
                  Catergory:{" "}
                  <span className="text-[#333333]">
                    {String(e.category).toUpperCase()}
                  </span>{" "}
                </h3>
                <h3>
                  Title:{" "}
                  <span className="text-[#333333] text-sm">
                    {String(e.title).slice(0, 50)}..
                  </span>{" "}
                </h3>
                <h3>
                  Price:{" "}
                  <span className="text-[#333333] text-xl">₹{e.price}</span>{" "}
                </h3>
              </div>
              <div className="self-center h-[50px] w-[50px]  flex items-center justify-center rounded-full">
                <AiFillDelete
                  color="red"
                  size={30}
                  onClick={() => {
                    removeItemFromCart(e);
                  }}
                />
              </div>
            </div>
          ))}
          {/* Cart-End */}
        </div>
        {/* Left-End */}
        {/* Right-Start */}
        <div className="lg:p-5 flex justify-start  items-center lg:items-start flex-col gap-4 shadow h-[500px] w-[100vw] lg:w-auto">
          <div className=" w-[100vw] lg:w-[500px]  p-10 text-[#1c1c1cbb] flex flex-col gap-5 ">
            <div className="flex justify-between items-center border-b-2 border-[#1c1c1c2a]">
              <h4>Subtotal</h4>
              <h4>₹{totalPrice}</h4>
            </div>
            <div className="flex justify-between items-center border-b-2 border-[#1c1c1c2a]">
              <h4>Estimated shipping</h4>
              <h4>₹0</h4>
            </div>
            <div className="flex justify-between items-center border-b-2 border-[#1c1c1c2a]">
              <h4 className="text-3xl">Total</h4>
              <h4>₹{totalPrice}</h4>
            </div>
            <div className="flex justify-center items-center border-2 border-[#1c1c1c2a]  rounded-lg flex-col">
              <div className="">
                <h4>Accepted payment method</h4>
              </div>
              <div className="flex flex-row gap-5">
                <FaCcMastercard size={45} />
                <FaCcVisa size={45} />
                <FaRegCreditCard size={45} />
                <FaCcVisa size={45} />
                <FaCcMastercard size={45} />
              </div>
            </div>
            <button className="bg-[#6f00e6] text-white p-3 rounded shadow">
              Proceed
            </button>
          </div>
        </div>
        {/* Right-End */}
      </div>
    </>
  );
};

export default CartScreen;
