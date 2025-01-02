import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";


const App = () => {
  return (
    <>
      <Navbar />
      <div className='content'>
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
};

export default App;
