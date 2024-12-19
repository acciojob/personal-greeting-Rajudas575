import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {

  const [inputName, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  
  return (
    <div>
        {/* Do not remove the main div */}
      <label>Enter your name</label>
      <input type="text" value={inputName} onChange={handleChange} />
      {inputName && <p>Hello, {inputName}!</p>}
    </div>
  )
}

export default App
