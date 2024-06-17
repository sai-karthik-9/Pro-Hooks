import React, { useEffect, useMemo, useState, useCallback } from 'react';
import './App.css';

// Do not change this
const LARGE_NUMBER = 1000000000;

function App() {


  const [value, setValue] = useState(0);
  const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("dark");
  const [currentList, setList] = useState([]);


  // should not change the LOGIC inside this function - you can make changes to the function but logic should NOT change
  const delayFunction = useCallback(()=> {
    console.log("Delay Function Ran")
    for(let index=0; index<LARGE_NUMBER; index++){};
    return value+2;
  },[value])

  // should not change the LOGIC inside this function - you can make changes to the function but logic should NOT change
  const testFunction = useMemo(()=>{
    return [value*3 ,value*4]
  },[value]);

  

  // should not change this
  useEffect(()=>{
    console.log("Callback Function was called")
  },[testFunction])



  useEffect(() => {
    setThemeName(dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const incrementValue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const updateList = () => {
    setList(testFunction);
  };

  const themeStyles = {
    backgroundColor: dark ? "black" : "#ccc7c7",
  };

  return (
    <div className="page" style={themeStyles}>
      <button onClick={toggleTheme}>{themeName}</button>
      <h1>{value}</h1>
      <button onClick={incrementValue}>Change Value</button>
      <button onClick={updateList}>Show List</button>
      <h2>{delayFunction()}</h2>
      <div>
        {currentList.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </div>
  );
}

export default App;