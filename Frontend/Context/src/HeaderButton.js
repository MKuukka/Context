import React from 'react';
import ThemeContext from './ThemeContext';
import {blue} from './App';

export default function HeaderButton() {

  const themeContext = React.useContext(ThemeContext);

  return (
    <div>
      <button style ={themeContext.blue} >Press me</button>
    </div>
  );
}



