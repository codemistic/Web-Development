import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import UserState from "./Context/UserState";

function App() {
  return (
    <>
      <UserState>
        <Router>
          
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>


        </Router>
      </UserState>
    </>
  );
}

export default App;
