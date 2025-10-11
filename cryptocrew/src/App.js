import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from './Pages/CoinPage'
import Alert from "./Components/Alert";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-light-dark text-white min-h-screen">
        <Header />
        {/* <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact /> */}
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
