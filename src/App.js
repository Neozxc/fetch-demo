import './index.css';

// URL: https://cat-fact.herokuapp.com

const App = () => {

  // Method & aSync Await
  const handleFetch = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
    console.log(response);
  };

  return (
    <div>
      <h1>Hello API's!</h1>
      <button onClick={handleFetch}>FETCH ME</button>
    </div>
  );
}

export default App;
