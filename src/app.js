import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./components/SearchParams";

function App() {
  return (
    <div>
      <SearchParams />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
