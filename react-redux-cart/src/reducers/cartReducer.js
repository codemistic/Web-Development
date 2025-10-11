const cartReducer = (cart = [], action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let tempCart = cart.filter((item) => item.id === action.payload.id);
      if (tempCart < 1) {
        let arrSent = [...cart, action.payload];
        return arrSent;
      } else {
        return cart;
      }
    }

    case "REMOVE_ITEM": {
      const tempCart = cart.filter((item) => item.id !== action.payload.id);
      return tempCart;
    }

    case "INCREASE_ITEM":
      let tempcart = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      return tempcart;

    case "DECREASE_ITEM":
      let tempcart2 = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      return tempcart2;

    case "OFFER":
      switch (action.payload.item.id) {
        case 4: {
          let item = action.payload.item;
          let cheeseSubAmt = item.price * Math.ceil(item.count / 2);
          let cheeseSavingAmt = item.count * item.price - cheeseSubAmt;

          action.payload.setItemSubtotal((prev) => ({
            ...prev,
            4: cheeseSubAmt,
          }));

          action.payload.setSavings((prev) => ({
            ...prev,
            4: cheeseSavingAmt,
          }));
          break;
        }

        case 2: {
          let item = action.payload.item;
          let free = Math.floor(item.count / 3);
          let butterSubAmt = item.count * item.price - free * item.price;
          let butterSavingAmt = item.count * item.price - butterSubAmt;
          action.payload.setItemSubtotal((prev) => ({
            ...prev,
            2: butterSubAmt,
          }));
          action.payload.setSavings((prev) => ({
            ...prev,
            2: butterSavingAmt,
          }));
          break;
        }

        case 1: {
          //   let booleanIsSoupInCart = false;
          let soupQty = 0;
          let cart = action.payload.cart;
          cart?.forEach((item) => {
            if (item.id === 5) soupQty = item.count;
          });

          let breadSubAmt;
          let breadSavingAmt = 0;
          let item = action.payload.item;
          if (soupQty >= 1) {
            if (soupQty >= Number(item.count)) {
              breadSubAmt = item.count * (item.price / 2);
              breadSavingAmt = item.price * item.count - breadSubAmt;
            } else if (soupQty < Number(item.count)) {
              breadSubAmt =
                (item.count - soupQty) * item.price +
                soupQty * (item.price / 2);
              breadSavingAmt = soupQty * (item.price / 2);
            }
          } else {
            breadSubAmt = item.price * item.count;
            breadSavingAmt = 0;
          }

          action.payload.setItemSubtotal((prev) => ({
            ...prev,
            1: breadSubAmt,
          }));
          action.payload.setSavings((prev) => ({
            ...prev,
            1: breadSavingAmt,
          }));

          break;
        }
        case 5: {
          let item = action.payload.item;
          let soupSubAmt = item.count * item.price;
          action.payload.setItemSubtotal((prev) => ({
            ...prev,
            5: soupSubAmt,
          }));
          action.payload.setSavings((prev) => ({
            ...prev,
            5: 0,
          }));
          break;
        }
        case 3: {
          let item = action.payload.item;
          let milkSubAmt = item.count * item.price;
          action.payload.setItemSubtotal((prev) => ({
            ...prev,
            3: milkSubAmt,
          }));
          action.payload.setSavings((prev) => ({
            ...prev,
            3: 0,
          }));
          break;
        }

        default:
          let item = action.payload.item;
          let defSubAmt = item.count * item.price;
          const id = Number(action.payload.item.id);

          action.payload.setItemSubtotal((prev) => ({
            ...prev,
            [id]: defSubAmt,
          }));
          action.payload.setSavings((prev) => ({
            ...prev,
            [id]: 0,
          }));

          break;
      }
      return cart;

    default:
      break;
  }
};

export default cartReducer;
