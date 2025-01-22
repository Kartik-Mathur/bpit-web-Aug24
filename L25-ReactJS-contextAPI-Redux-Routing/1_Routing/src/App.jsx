import React from "react";
import "./App.css";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
};

function NavBar() {
  let navigate = useNavigate();
  
  function goToCourses() {
    // console.log(window.location);
    // window.location.href = "courses";
    navigate('/courses');
  }

  function goToHome() {
    // window.location.href = "home";
    navigate('/home');
  }

  return (
    <>
      <button
        onClick={() => {
          goToHome();
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          goToCourses();
        }}
      >
        Courses
      </button>

      {/* <NavLink to='/home'>Home</NavLink>
       <NavLink to='/courses'>Courses</NavLink> */}
    </>
  );
}

function Home() {
  return <div>Home</div>;
}

function Courses() {
  return <div>My Courses</div>;
}

export default App;
