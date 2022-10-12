import Home from './components/Home';
import {React, useState} from 'react'
import Search from './components/Search';
import {Routes, Route} from "react-router-dom";
import './App.css';

const App = () => {
  // eslint-disable-next-line
  const [search, setSearch] = useState(false);
    return (
      <div className="App">
      <Routes>
        <Route path="/search" element={ <Search/> } />
        <Route path="/" element={ <Home/> }/>
      </Routes>  
    </div>
  )
}

export default App