import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spiner from "./Spiner";
import useLocation from "./useLocation";

const App = () => {
  const [lat, error] = useLocation();

  let content;
  if (error) {
    content = <div>Error: {error}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spiner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
