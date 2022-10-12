// eslint-disable-next-line
import { Typography } from "@material-ui/core";
import React from "react";
import ImageView from "./ImageView";



const SearchImages = ({response, res}) => {
console.log(response);
console.log(res);
  return (
    <>
    {res && res.map((data, key) => (
      <ImageView data={data} key={key} />
    ))}
     {response.map((data, key)=>
        <ImageView data={data} key={key} />
     )}
    </>
  );
};

export default SearchImages;
