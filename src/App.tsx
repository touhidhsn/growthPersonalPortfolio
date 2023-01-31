import React from "react";
import "./index.css";
import Featured from "./common/Featured";
import Nav from "./common/Nav";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <body>
        <Featured />
      </body>
    </div>
  );
}

export default App;
