// create your App component here
import React, {useState,useEffect} from "react";

function App() {
    const [dog, setDog,] = useState(null);
  
    useEffect(() => {
      fetch("https://images.dog.ceo/breeds/bulldog-english/mami.jpg")
        .then((response) => response.json())
        .then((data) => {
          setDog(data.response);
        });
    }, []);
    if(!dog) return <p>Loading...</p>;
        return <img src={dog} alt="A Random Dog"/>;}

export default App;