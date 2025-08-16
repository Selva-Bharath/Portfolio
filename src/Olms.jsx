import React, { useState } from "react";
import close from "../src/images/close.png"
import video from "../src/videos/olmsvideo.mp4"
import github from "../src/images/github.png"
import olms from "../src/images/olmsproject.png"

const Olms = () => {
  const [project, setProject] = useState(false);

  return (
    <div>
      <div className="hidden lg:block">
      {project ? (
        <div className="w-250 h-110 border bg-white ml-40 relative top-[-400px] shadow-2xl">
          <h1 className="text-xl font-bold ml-100 mt-5 text-shadow text-blue-500">
            IT'S MY OLMS PROJECT
          </h1>
          <img
              src={close}
              alt="close"
              className="w-5 absolute right-4 top-5 cursor-pointer"
              onClick={() => setProject(false)}
            />
            <div className="flex">
              <div className="w-100 h-90 border ml-8 mt-5 bg-blue-100">
                <img src="../src/images/olmsproject.png" alt="" className="w-90 ml-5 mt-5"/>
                <h1 className="font-bold text-md mt-2 ml-3">OLMS</h1>
                <h1 className="text-blue-500 ml-2 text-sm ">12 July 2025</h1>
                <p className="text-sm ml-3 mt-3">Welcome to my first project using backend likes : Express, node.js, MongoDB create a project</p>
                <div>
                  <h1 className="text-md ml-3">Live At:  <span className="text-gray-500 text-md">Loading...</span></h1>
                </div>
                      <div className=" w-40 h-6 border rounded-xl mt-2 ml-20">
                    <a><img src={github} alt="" className="w-4 mt-1 ml-3"/>
                    <p className="mt-[-20px] ml-10">Github Repo</p></a>
                    </div>
              </div>

              <div>
                <video autoPlay className="w-125 h-80  ml-13 mt-10">
                  <source src={video} type="video/mp4"/>
                </video>
              </div>
            </div>
        </div>
      ) : (
        <div className="mt-[-30px] ml-138">
          <button
            className="w-50 h-7 bg-sky-200 border-1 cursor-pointer shadow-lg rounded-lg fixed"
            onClick={() => setProject(true)}
          >
            View More <span className="relative top-[-4px]">👉</span>
          </button>
        </div>
      )}
      </div>


      {/* mobile response */}
      <div className="block lg:hidden">
      {project ? (
        <div className="w-100 h-210 border bg-white ml-50 relative top-[-900px] shadow-2xl">
          <h1 className="text-xl font-bold ml-20 mt-5 text-shadow text-blue-500">
            IT'S MY OLMS PROJECT
          </h1>
          <img
              src={close}
              alt="close"
              className="w-5 absolute right-4 top-5 cursor-pointer"
              onClick={() => setProject(false)}
            />
            <div className="flex flex-col">
              <div className="w-90 h-90 border ml-5 mt-5 bg-blue-100">
                <img src={olms} alt="" className="w-80 ml-5 mt-5"/>
                <h1 className="font-bold text-md mt-2 ml-3">OLMS</h1>
                <h1 className="text-blue-500 ml-2 text-sm ">12 July 2025</h1>
                <p className="text-sm ml-3 mt-3">Welcome to my first project using backend likes : Express, node.js, MongoDB create a project</p>
                <div>
                  <h1 className="text-md ml-3">Live At:  <span className="text-gray-500 text-md">Loading...</span></h1>
                </div>
                      <div className=" w-40 h-6 border rounded-xl mt-2 ml-20">
                    <a><img src="../src/images/github.png" alt="" className="w-4 mt-1 ml-3"/>
                    <p className="mt-[-20px] ml-10">Github Repo</p></a>
                    </div>
              </div>

              <div>
                <video autoPlay className="w-95 h-80 ml-2 mt-10">
                  <source src={video} type="video/mp4" className="border"/>
                </video>
              </div>
            </div>
        </div>
      ) : (
        <div className="mt-[-530px] ml-75">
          <button
            className="w-50 h-7 bg-sky-200 border-1 cursor-pointer shadow-lg rounded-lg"
            onClick={() => setProject(true)}
          >
            View More <span className="relative top-[-4px]">👉</span>
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Olms;
