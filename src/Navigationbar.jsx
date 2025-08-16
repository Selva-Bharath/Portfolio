import React, { useState } from "react";
import Home from "../src/Home";


const Navigationbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-10 ">
  
      <div className="min-w-screen h-15 bg-white shadow-bottom shadow-xl hidden lg:block">
        <div className="relative flex flex-col mr-30 top-[-25px]">
                    <div className="relative top-[35px] left-[35px]">
            <img src="../src/images/OIP.webp" alt="" className="w-10 rounded-full"/>
          </div>
          <div className="relative font-bold text-black text-xl top-[2px] ml-20">
            <span className="text-blue-500">S</span>elva
          </div>
          <div className="flex gap-8 justify-end font-bold text-lg relative top-[-25px] mr-11">
            <a href="#home" className="cursor-pointer hover:text-blue-300 hover:underline">Home</a>
            <a href="#about" className="cursor-pointer hover:text-blue-300 hover:underline">About</a>
            <a href="#skills" className="cursor-pointer hover:text-blue-300 hover:underline">Skills</a>
            <a href="#project" className="cursor-pointer hover:text-blue-300 hover:underline">Project</a>
            <a href="#contact" className="cursor-pointer hover:text-blue-300 hover:underline">Contact</a>
          </div>
        </div>
      </div>


      {/* mobile response */}


      <div className="min-w-screen h-12 bg-white shadow-xl block lg:hidden absolute flex justify-between items-center">
        <div className="relative top-[23px] left-[60px] font-bold">
          <span className="text-blue-500">S</span>elva
          <div>         <div className="relative top-[-33px] left-[-45px]">
            <img src="../src/images/OIP.webp" alt="" className="w-10 rounded-full shadow-2xl"/>
          </div></div>
        </div>


  
        {!isMenu ? (
          <img
            src="../src/images/menu.png"
            alt="menu"
            className="w-5 absolute right-8 top-3 z-10 cursor-pointer"
            onClick={() => setIsMenu(true)}
          />
        ) : (
          <div className="fixed w-[160px] h-[280px] bg-white right-7 top-0 z-20 shadow-2xl border border-2 mt-2"
          onClick={() => setIsMenu(false)}>
            <img
              src="../src/images/close.png"
              alt="close"
              className="w-5 absolute right-1 top-3 cursor-pointer"
              
            />
            <div className="flex flex-col text-lg p-5 gap-5 mt-5">
              <a href="#Home"  className="cursor-pointer hover:text-blue-300 hover:underline">Home</a>
              <a href="#About" className="cursor-pointer hover:text-blue-300 hover:underline">About</a>
              <a href="#Skills" className="cursor-pointer hover:text-blue-300 hover:underline">skills</a>
              <a href="#Project" className="cursor-pointer hover:text-blue-300 hover:underline">Project</a>
              <a href="#Contact" className="cursor-pointer hover:text-blue-300 hover:underline">Contact</a> 
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Navigationbar;
