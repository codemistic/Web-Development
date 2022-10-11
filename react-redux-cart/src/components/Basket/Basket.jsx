import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseItem, decreaseItem, removeItem } from "../../actions";
import data from "../../data";

const Basket = () => {
  // console.log(cart);
  const cart = useSelector((state) => state);

  const dispatch = useDispatch();
  const [itemSubtotal, setItemSubtotal] = useState({});
  const [savings, setSavings] = useState({});
  const [savingsArr, setSavingsArr] = useState([]);
  const [itemSubtotalArr, setItemSubTotalArr] = useState([]);

  useEffect(() => {
    cart?.forEach((item) => {
      // dispatch(offer({ payload: { cart, item, setSavings, setItemSubtotal } }));
      dispatch({
        type: "OFFER",
        payload: {
          cart,
          item,
          setSavings,
          setItemSubtotal,
        },
      });
    });
    itemsNotInCart.forEach((item) => {
      defaults(item);
    });
    // eslint-disable-next-line
  }, [cart]);
  let itemNameInCart = [];
  cart?.forEach((item) => {
    if (!itemNameInCart.includes(item.id)) {
      itemNameInCart.push(item.id);
    }
  });
  let itemsNotInCart = [];

  data.forEach((item) => {
    if (!itemNameInCart.includes(item.id)) {
      itemsNotInCart.push(item);
    }
  });
  const defaults = (item) => {
    setSavings((prev) => ({
      ...prev,
      [item.id]: 0,
    }));
    setItemSubtotal((prev) => ({
      ...prev,
      [item.id]: 0,
    }));
  };

  useEffect(() => {
    setSavingsArr(Object.values(savings));
    setItemSubTotalArr(Object.values(itemSubtotal));
  }, [savings, itemSubtotal]);

  let total = 0;
  let totalSavings = 0;

  itemSubtotalArr.forEach((item) => {
    total = total + item;
  });

  savingsArr.forEach((item) => {
    totalSavings = totalSavings + item;
  });
  const handleIncrease = (item) => {
    dispatch(increaseItem({ payload: item }));
  };
  const handleDecrease = (item) => {
    dispatch(decreaseItem({ payload: item }));
  };

  return (
    <div className="app__basket bg-white p-8  mt-9 w-auto space-y-3 m-2 md:w-[45rem] text-xl md:text-2xl md:mt-2">
      <h2 className="text-4xl md:text-6xl">Basket</h2>
      <hr />
      {cart?.map((item) => {
        return (
          <div className="cartItem flex flex-col pt-2 space-y-2" key={item.id}>
            <div className="cartItem__count flex flex-row justify-between">
              <p className="font-medium text-1xl md:text-2xl">{item.name}</p>
              <p className="text-left   ">
                <span className="text-gray-500   pr-1"> &#163;</span>
                {item.price}
              </p>
              <div className="count-btns flex flex-row justify-between">
                <button
                  className="text-lg px-3 w-fit bg-blue-400 text-white rounded-md hover:bg-blue-500"
                  onClick={() => handleIncrease(item)}
                >
                  +
                </button>
                <p className="mx-3 md:mx-4">{item.count}</p>
                <button
                  className="text-lg px-3 w-fit bg-white text-black rounded-md border-2 border-blue-400  hover:bg-blue-50"
                  onClick={() => {
                    if (item.count > 1) {
                      handleDecrease(item);
                    } else {
                      dispatch(removeItem({ payload: item }));
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <p className="text-right text-sm text-gray-500">
              Item price: <span className=" pr-1"> &#163;</span>
              {item.price} * {item.count} ={" "}
              <span className="text-gray-500 pr-1"> &#163;</span>
              {item.price * item.count}
            </p>
            <hr />
            <p className="text-right text-lg text-red-500">
              Savings: {savings[item.id]}
            </p>
            <hr />
            <p className="text-right text-lg text-gray-800">
              Item cost <span className="text-gray-500   pr-1"> &#163;</span>
              {itemSubtotal[item.id]}
            </p>
            <hr className="border-gray-400" />
          </div>
        );
      })}

      <div className="app__basket-total flex-col ">
        <div className="subTotal flex flex-row justify-between my-4 ">
          <p className="font-semibold">Sub Total : </p>
          <p className="text-left">
            <span className="text-gray-500   pr-1"> &#163;</span>
            {total + totalSavings ? total + totalSavings : 0}
          </p>
        </div>
        <div className="subTotal  flex flex-row justify-between my-4">
          <p className="font-semibold">Savings : </p>
          <p className="text-left   ">
            <span className="text-gray-500   pr-1"> &#163;</span>
            {totalSavings}
          </p>
        </div>
        <div className="subTotal flex flex-row justify-between my-4 ">
          <p className="font-semibold">Total : </p>
          <p className="text-left   ">
            <span className="text-gray-500   pr-1"> &#163;</span>
            {total ? total : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Basket;
