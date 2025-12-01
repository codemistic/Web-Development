import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
const cart_store = (set) => ({
  cart: [],
  totalPrice: 0,
  addItem: (d) => {
    set((state) => ({
      cart: [d, ...state.cart],
      totalPrice: Math.round(state.totalPrice + Number(d.price)),
    }));
    toast.success("Item added to cart");
  },
  removeItem: (d) => {
    set((state) => ({
      cart: state.cart.filter((e) => e.id != d.id),
      totalPrice: Math.round(state.totalPrice - Number(d.price)),
    }));
    toast.error("Item removed from cart");
  },
  emptyCart: () => {
    set((state) => ({
      cart: [],
      totalPrice: 0,
    }));
  },
});

const useCartStore = create(
  persist(cart_store, {
    name: "cart",
  })
);
export default useCartStore;
