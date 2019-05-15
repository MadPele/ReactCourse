import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enetr the name:
      </label>
      <input id="name" />
      <button style={{ backgroundColor: "aqua", color: "black" }}>
        Submit
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
