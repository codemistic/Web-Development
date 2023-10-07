import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState("Enable Dark Mode")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'DarkSlateGrey';
      setText("Enable Light Mode")
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setText("Enable Dark Mode")
      showAlert("Light Mode Enabled", "success")
    }
  }
  return (
    <>
      
        <Navbar title="TextUtility" about="About Us" mode={mode} text={text} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
             {/* <About mode={mode}/> */}
            <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />
        </div>
    </>

  );
}

export default App;
