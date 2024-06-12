import React, { useEffect, useState } from "react";
import useDataStore from "./store/data_store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import Header from "./screens/component/HomeScreenComponent/Header";
import ProductViewScreen from "./screens/ProductViewScreen";
import CartScreen from "./screens/CartScreen";
import data from "./fakeApiData/data";
import ShowByCatergoryScreen from "./screens/ShowByCatergoryScreen";
import { Toaster } from "react-hot-toast";
const App = () => {
  const setData = useDataStore((state) => state.setData);
  const [isDataAvail, setisDataAvail] = useState("");
  const data = useDataStore((s) => s.data);
  useEffect(() => {
    setData(data);
    setisDataAvail(true);
  }, []);

  if (data == []) {
    return (
      <div className="container mx-auto h-[500px] w-[500px] flex items-center justify-center flex-col p-20">
        <div id="ani" className="h-[500px]"></div>
        <h1 className="text-2xl text-[#242B2E] text-center">
          Please Refresh page <br />
          Api Taking too much time for response
        </h1>
      </div>
    );
  }

  return isDataAvail == "" ? (
    <LoadingScreen />
  ) : (
    <BrowserRouter>
      <Toaster />
      <Header />
      <Routes>
        <Route element={<HomeScreen />} path="/" />
        <Route element={<ProductViewScreen />} path="/product" />
        <Route element={<CartScreen />} path="/cart" />
        <Route element={<ShowByCatergoryScreen />} path="/category/:category" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
