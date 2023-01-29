import React from "react";
import "./index.css";
import Nav from "./common/Nav";
import Featured from "./common/Featured";

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
