// create your App component here

import React, { useState, useEffect } from "react";
import "../";

function App() {
  const [IsLoading, setIsLoading] = useState(true);
  const [dogImage, setDogImage] = useState(null);

  const getData = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogImage(data.message);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Random dog image</h1>
      {IsLoading ? (
        <p>Loading ...</p>
      ) : (
        <img src={dogImage} width={"300px"} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
