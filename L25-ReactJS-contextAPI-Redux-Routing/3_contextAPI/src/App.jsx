import React from "react";
import { createContext } from "react";
import { useState } from "react";
import CodingBlocks from "./components/CodingBlocks";
import context from "./context/dsa-web.context";
import cbContext from "./context/cb.context";

const App = () => {
  const [dsa, setDsa] = useState("DSA is being taught at BPIT");
  const [web, setWeb] = useState("WEB is being taught at MAIT");
  const [cnt, setCnt] = useState(0);

  return (
    <cbContext.Provider value={"Welcome to Coding Blocks"}>
      <context.Provider value={{ dsa, web }}>
        <div>
          <CodingBlocks />
          {cnt}
          <button onClick={() => setCnt(cnt + 1)}>Increase Count</button>
        </div>
      </context.Provider>
    </cbContext.Provider>
  );
};

export default App;
