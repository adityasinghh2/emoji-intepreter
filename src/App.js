import React, { useState } from "react";
import "./styles.css";

// var headingText = "inside out";
// var color = "blue";

// var username = prompt("Give me your name");

// var username = "Aditya";

// var likeCounter = 0;
export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newLikeCountervalue = likeCounter + 1;
    // likeCounter = likeCounter + 1; //processing
    // console.log("clicked!", likeCounter); //output
    setLikeCounter(newLikeCountervalue);
  }

  return (
    <div className="App">
      <h1>inside out!</h1>
      <button onClick={likeClickHandler}> Like Me! </button> {likeCounter}
    </div>
  );
}
