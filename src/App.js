import './index.css';
import React, { useState } from 'react';

// URL: https://cat-fact.herokuapp.com

const App = () => {

  // State Hook
  const [fact, setFact] = useState({});


  // Method & aSync Await
  const handleFetch = async () => {

    // Request Method
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
    // console.log(response);

    // JSON Method
    const data = await response.json();
    // console.log(data);
    
    // Display only text 
    console.log(data.text);

    // Use Hook Method
    setFact(data);
  };

  return (
    <div className='container'>
      <h1>Hello API's!</h1>
      <button onClick={handleFetch}>FETCH ME</button>
      
      {/* Display the facts with dot notation {fact.text} */}
      <p>{fact.text}</p>
    </div>
  );
}

export default App;
