import React, { useState } from "react";
import htmlprojects from "./htmlsprojects";

const Htmlproject = () => {
  const [project, setProject] = useState(false);

  return (
    <div>
      <div className="hidden lg:block">
      {project ? (
        <div className="w-317 h-115 border bg-white ml-6 relative top-[-420px] shadow-2xl">
          <h1 className="text-xl font-bold ml-130 mt-5 text-shadow text-blue-500">
            IT'S MY HTML PROJECT
          </h1>
          <img
              src="../src/images/close.png"
              alt="close"
              className="w-5 absolute right-4 top-5 cursor-pointer"
              onClick={() => setProject(false)}
            />

            <div className="grid lg:grid-cols-4"> {htmlprojects.map((htmlproject,index) =>(
                <div key={index} className="w-70 h-94 border ml-3 mt-3 bg-sky-100">
                    <img src={htmlproject.picture} alt="no images" className="w-50 h-50 ml-10 mt-2"/>
                    <h1 className="font-bold text-md ml-2 mt-1">{htmlproject.name}</h1>
                    <h1 className="text-blue-500 ml-2 text-sm mt-1">{htmlproject.time}</h1>
                    <p className="text-sm ml-2 mt-1">{htmlproject.subject}</p>
                    <p className="text-md mt-1 ml-1">Live At :
                    <a href={htmlproject.web} className="text-xs text-blue-600">{htmlproject.web}</a></p>
                    <div className=" w-40 h-6 border rounded-xl mt-3 ml-15">
                    <a href={htmlproject.git} ><img src="../src/images/github.png" alt="" className="w-4 mt-1 ml-3"/>
                    <p className="mt-[-20px] ml-10">Github Repo</p></a>
                    </div>
                </div>
            ))}</div>
        </div>
      ) : (
        <div className="mt-[-40px] ml-25">
          <button
            className="w-50 h-7 bg-sky-200 border-1 cursor-pointer shadow-lg rounded-lg fixed"
            onClick={() => setProject(true)}
          >
            View More <span className="relative top-[-4px]">👉</span>
          </button>
        </div>
      )}
      </div>


      {/* mobile Response */}
      <div className="block lg:hidden">
        {project ? (
        <div className="w-100 h-410 border bg-white ml-50 relative mt-[-1350px] shadow-2xl mb-20">
          <h1 className="text-xl font-bold ml-20 mt-10 text-shadow text-blue-500">
            IT'S MY HTML PROJECT
          </h1>
          <img
              src="../src/images/close.png"
              alt="close"
              className="w-5 absolute right-4 top-5 cursor-pointer"
              onClick={() => setProject(false)}
            />

            <div className="grid"> {htmlprojects.map((htmlproject,index) =>(
                <div key={index} className="w-80 h-94 border ml-10 mt-3 bg-sky-100">
                    <img src={htmlproject.picture} alt="no images" className="w-50 h-50 ml-10 mt-2"/>
                    <h1 className="font-bold text-md ml-2 mt-1">{htmlproject.name}</h1>
                    <h1 className="text-blue-500 ml-2 text-sm mt-1">{htmlproject.time}</h1>
                    <p className="text-sm ml-2 mt-1">{htmlproject.subject}</p>
                    <p className="text-md mt-1 ml-1">Live At :
                    <a href={htmlproject.web} className="text-xs text-blue-600">{htmlproject.web}</a></p>
                    <div className=" w-40 h-6 border rounded-xl mt-3 ml-15">
                    <a href={htmlproject.git} ><img src="../src/images/github.png" alt="" className="w-4 mt-1 ml-3"/>
                    <p className="mt-[-20px] ml-10">Github Repo</p></a>
                    </div>
                </div>
            ))}</div>
        </div>
      ) : (
        <div className="relative top-[-960px] ml-75">
          <button
            className="w-50 h-7 bg-sky-200 border-1 cursor-pointer shadow-lg rounded-lg "
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

export default Htmlproject;
