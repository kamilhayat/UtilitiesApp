import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode enabled', "success")
    }
    else {

      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert(' Light mode enabled', "success")

    }
  }
  return (
    <>
    <BrowserRouter>
      
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

      <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/"element={ <TextForm showAlert={showAlert}heading="Enter Text to analyze " mode={mode} />}></Route>
          </Routes>
      </div>

      </BrowserRouter>
    </>
  );
}

export default App;
