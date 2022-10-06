import './App.css';
import Reat from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import Alert from './Components/Alert';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
<>
<NoteState>
    <BrowserRouter >
    <Navbar />
    {/* <Alert message="this is taskinglyPro"/> */}

    <div className='container'>
    <Routes>

    <Route path = '/' element={<Home/>}></Route>
    <Route path = '/about' element = {<About/>}></Route>
    <Route path = '/login' element = {<Login/>}></Route>
    <Route path = '/signup' element = {<Signup/>}></Route>
    
    </Routes>
    </div>
  
    </BrowserRouter>

  </NoteState>

</>
  );
}

export default App;
