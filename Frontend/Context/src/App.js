import React from 'react';
import { useState, useEffect } from "react";
import Header from './Header';
import ThemeContext from './ThemeContext';




function App() {

  const [blue, setTheme] = useState({blue:{}});

useEffect(() => {
  setTheme({blue:{color: 'white', background: 'blue'}});

}, []);





  return (
    <ThemeContext.Provider value ={blue}>
      <Header />
    </ThemeContext.Provider>
    
  );
}

export default App;
