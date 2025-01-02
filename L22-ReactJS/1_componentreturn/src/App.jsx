import React, { Fragment } from "react";

const App = () => {
  return (
    <MyFragment>
      <h1>Welcome to CB</h1>
      <h1>Welcome to CB</h1>
      <div>Hello World</div>
    </MyFragment>
  );
};

function MyFragment({ children }) {
  return children;
}

export default App;
