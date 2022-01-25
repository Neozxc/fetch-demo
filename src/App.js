import './index.css';

// URL: https://cat-fact.herokuapp.com

const App = () => {

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
  };

  return (
    <div>
      <h1>Hello API's!</h1>
      <button onClick={handleFetch}>FETCH ME</button>
    </div>
  );
}

export default App;
