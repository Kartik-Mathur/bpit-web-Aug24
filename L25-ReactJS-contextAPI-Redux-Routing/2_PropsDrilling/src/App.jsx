import React from "react";
import { useState } from "react";

const App = () => {
  const [dsa, setDsa] = useState("DSA is being taught at BPIT");
  const [web, setWeb] = useState("WEB is being taught at MAIT");

  return (
    <div>
      <CodingBlocks dsa={dsa} web={web} />
    </div>
  );
};

function CodingBlocks({ dsa, web }) {
  return (
    <>
      <BPIT data={dsa} />
      <MAIT data={web} />
    </>
  );
}

function BPIT({ data }) {
  return <div>{data}</div>;
}

function MAIT({ data }) {
  return <div>{data}</div>;
}

export default App;
