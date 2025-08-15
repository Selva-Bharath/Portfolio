import React from "react";
import Navigationbar from "./Navigationbar";
import Home from "./Home";
import Footer from "./Footer";
// import About from "./About";
// import Skills from "./Skills";
// import Contact from "./Contact";
// import Project from "./Project";
// import "./index.css"; // for smooth scrolling CSS

const App = () => {
  return (
    <div className="bg-sky-100 min-h-screen min-w-screen overflow-x-hidden">
      <Navigationbar />
      <section id="home">
        <Home />
      </section>
      <Footer />

    </div>
  );
};

export default App;
