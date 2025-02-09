import lottie from "lottie-web";
import React, { useEffect } from "react";
import loadingAnimation from "../assets/loading.json";
const LoadingScreen = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#ani"),
      loop: true,
      animationData: loadingAnimation,
    });
  }, []);

  return (
    <div className="backdrop-opacity-10 bg-black min-h-screen min-w-full flex items-center justify-center ">
      <div id="ani"></div>
    </div>
  );
};

export default LoadingScreen;
