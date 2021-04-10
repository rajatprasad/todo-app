import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = (event) => {
    event.preventDefault();

    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  return (
    <div className="App">
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo App</h1>
          <br />
          <form>
            <input
              type="text"
              placeholder="Add your Items"
              onChange={itemEvent}
            />
            <button onClick={listofItems} type="submit" disabled={!inputList}>
              {" "}
              +{" "}
            </button>
          </form>

          <ol>
            {Items.map((itemval) => {
              return <li>{itemval}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
