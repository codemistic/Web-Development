import Basket from "./components/Basket/Basket";
import Offers from "./components/Offers/Offers";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Offers />
      <div className=" container  App flex-col w-auto p-6  pt-[3rem] mx-auto md:flex md:flex-row md:w-auto md:justify-between">
        <Products />
        <Basket />
      </div>
    </>
  );
}

export default App;
