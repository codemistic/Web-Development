import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './componenets/Home/Home'
import Header from './componenets/Header/Header';
import Footer from './componenets/Footer/Footer'
import PageNotFound from './componenets/PageNotFound/PageNotFound'
import MovieDetail from './componenets/MovieDetail/MovieDetail'
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/"  element={ <Home />} />
            <Route  path="/movie/:imdbID" element={<MovieDetail />} />
            <Route  element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
