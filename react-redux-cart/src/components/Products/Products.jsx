import React from "react";
import data from "../../data";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions";
const Products = () => {
  // const cart = useSelector((state) => state);
  // console.log(cart);
  const dispatch = useDispatch();
  const handleAddProduct = (item) => {
    dispatch(addItem({ payload: item }));
  };

  return (
    <div className="app__products text-xl bg-white p-8 w-auto space-y-3 m-2 md:w-[45rem] md:text-2xl">
      <h2 className="text-4xl md:text-6xl">Products</h2>
      <hr />
      {data.map((item) => {
        item.count = 1;
        return (
          <div className="product-item" key={item.id}>
            <div className="flex justify-between py-2 md:py-6">
              <p>{item.name} </p>
              <div className="app__products-qty space-x-2 flex flex-row justify-between">
                <p className="text-left w-16 ">
                  {" "}
                  <span className="text-gray-500 pr-1"> &#163;</span>
                  {item.price}
                </p>
                <button
                  className="btn"
                  onClick={() => {
                    handleAddProduct(item);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
