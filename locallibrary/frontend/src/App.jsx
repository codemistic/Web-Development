import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import AllAuthors from "./pages/AllAuthors";
import Book from "./pages/Book";
import Author from "./pages/Author";

// Styling
import "./App.scss";
import Header from "./components/Header";

function App() {
  // Dark Mode (ContextAPI can also be used)
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App_${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/Books" element={<AllBooks theme={theme} />} />
        <Route path="/Authors" element={<AllAuthors theme={theme} />} />
        <Route path="/Book/:id" element={<Book theme={theme} />} />
        <Route path="/Author/:id" element={<Author />} />
      </Routes>
    </div>
  );
}

export default App;
