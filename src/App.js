import "./styles.css";

// var headingText = "inside out";
// var color = "blue";

var username = prompt("Give me your name");

export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue" }}>welcome {username} </h1>
    </div>
  );
}

//things to notice
//  class --->  classname
// style ---> takes an object instead of***
