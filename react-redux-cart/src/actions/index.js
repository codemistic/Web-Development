const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item.payload,
  };
};

const removeItem = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item.payload,
  };
};

const increaseItem = (item) => {
  return {
    type: "INCREASE_ITEM",
    payload: item.payload,
  };
};
const decreaseItem = (item) => {
  return {
    type: "DECREASE_ITEM",
    payload: item.payload,
  };
};

export { addItem, removeItem, increaseItem, decreaseItem };
