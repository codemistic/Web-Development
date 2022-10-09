import React from "react";

const Offers = () => {
  return (
    <div className="offers bg-white mt-10 p-5 space-y-3 flex flex-col items-center md:p-8">
      <h1 className="text-2xl font-medium md:text-4xl mb-2">OFFERS</h1>
      <h1 className="text-gray-800 text-center md:text-xl">
        {" "}
        Buy 1 cheese and get the second cheese FREE!
      </h1>
      <h1 className="text-gray-800 text-center md:text-xl">
        {" "}
        Buy a soup and you get a HALF price bread!
      </h1>
      <h1 className="text-gray-800 text-center md:text-xl">
        {" "}
        Get a third butter off free!
      </h1>
    </div>
  );
};

export default Offers;
