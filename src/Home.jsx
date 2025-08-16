import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal"; // ✅ Added
import skills from "./skill";
import projects from "./projects";
import Htmlproject from "./Htmlproject";
import Olms from "./Olms";
import Register from "./Register";
import Contact from "./Contact";

// home images

import arrow from '../src/images/down-arrow.png'
import facebook from "../src/images/facebook.png"
import github from "../src/images/github.png"
import downloadimage from "../src/images/download.png"
import instagram from "../src/images/instagram.png"
import linkedin from "../src/images/linkedin.png" 
import homeimage from "../src/images/coder.png"
import resume from "../public/Resume.pdf"

// about images

import profileimages from "../src/images/profile.jpg" 


const ProfileCircle = () => {
  // ✅ ScrollReveal effect
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      duration: 2000,
      origin: "right",
      distance: "100px",
      reset: true,
    });
  }, []);
  useEffect(() => {
    ScrollReveal().reveal(".reveal2", {
      duration: 2000,
      origin: "left",
      distance: "100px",
      reset: true,
    });
  }, []);

  return (
    <div>
      <div className="hidden lg:block">
        {/* Main Section */}
        <section id="home" className="mt-[-20px] hidden lg:block reveal">
          <div>
            <p className="relative top-[130px] left-[200px] text-gray-600">
              Welcome to my world!
            </p>
            <h1 className="font-bold text-3xl relative top-[130px] left-[200px] pt-5">
              Hi I'm Selva Bharath
            </h1>
            <h1 className="font-bold text-xl relative top-[130px] left-[200px] pt-5">
              Full Stack Web Developer
            </h1>
            <p className="relative top-[130px] left-[200px] text-gray-600 pt-5">
              I design and develop complete web solutions — from responsive
              front-end interfaces to <br /> powerful back-end APIs. Passionate
              about creating clean UI/UX, writing scalable code, <br /> and
              solving real-world problems with technology. Skilled in{" "}
              <span className="font-bold text-lg">
                React, Node.js, <br /> Express, MongoDB, and Tailwind CSS
              </span>
              . Always learning, always building.
            </p>
            <div className="flex">
              <a href="#contact"
                to="/contact"
                className="w-50 h-15 bg-sky-200 border-1 relative top-[180px] left-[200px] p-4 rounded-md shadow-lg"
              >
                Hire Me Now !{" "}
                <img
                  src={arrow}
                  alt=""
                  className="w-10 relative top-[-30px] left-[120px]"
                />
              </a>
              <a
                href={resume}
                download
                className="w-50 h-15 bg-sky-200 border-1 relative top-[180px] left-[250px] p-4 rounded-md shadow-lg"
              >
                Download Resume{" "}
                <img
                  src={downloadimage}
                  alt=""
                  className="w-10 relative top-[-30px] left-[140px]"
                />
              </a>
            </div>
            <div className="flex gap-10 relative top-[220px] left-[230px]">
              <a
                href="https://www.facebook.com/"
                className="w-13 h-13 rounded-full border-1"
              >
                <img src={facebook} alt="" className="p-2" />
              </a>
              <a
                href="https://github.com/Selva-Bharath"
                className="w-13 h-13 rounded-full border-1"
              >
                <img src={github} alt="" className="p-2" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="w-13 h-13 rounded-full border-1"
              >
                <img src={instagram} alt="" className="p-2" />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="w-13 h-13 rounded-full border-1"
              >
                <img src={linkedin} alt="" className="p-2" />
              </a>
            </div>
          </div>
          <div className="flex relative top-[-150px] left-[900px]">
            <img src={homeimage} alt="" className="w-80 h-80" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="reveal2">
          {/* Your about section unchanged */}
          <div className="hidden lg:block mt-[-250px] lg:ml-1">
            <h1 className="font-bold text-xl text-blue-500 relative left-[600px] top-[10px] text-shadow mt-80">
              About Me
            </h1>
            <div className="flex">
              <div>
                <div className="relative w-[350px] h-[330px] rounded-full flex items-center justify-center bg-white ml-30 mt-1">
                  {/* Profile Image */}
                  <div className="w-[280px] h-[280px] rounded-full overflow-hidden border-[6px] border-blue-100 shadow-xl  bg-white">
                    <img
                      src={profileimages} // 🔄 Replace with your image path
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Rotating Text */}
                  <svg
                    viewBox="0 0 300 300"
                    className="absolute w-full h-full animate-spin-clockwise p-2"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 150,150 m -140,0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0"
                      />
                    </defs>
                    <text fill="#1e293b" fontSize="15" fontWeight="700">
                      <textPath
                        href="#circlePath"
                        startOffset="0%"
                        textLength="893"
                        lengthAdjust="spacingAndGlyphs"
                      >
                        • I am a Full Stack Developer • I am a Web Designer • I
                        am a Frontend Developer • I am a Web Designer
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div>
                  <h1 className="font-bold text-lg ml-30 mt-5">
                    Name{" "}
                    <span className="text-lg font-mono ml-9 text-gray-500">
                      : selva bharath .P
                    </span>
                  </h1>
                  <h1 className="font-bold text-lg ml-30 mt-1">
                    Role{" "}
                    <span className="text-lg font-mono ml-12 text-gray-500">
                      : Full Stack Web Developer{" "}
                    </span>
                  </h1>
                  <h1 className="font-bold text-lg ml-30 mt-1">
                    Location{" "}
                    <span className="text-lg font-mono ml-3 text-gray-500">
                      :Tuticorin,India
                    </span>
                  </h1>
                  <h1 className="font-bold text-lg ml-30 mt-1">
                    Age{" "}
                    <span className="text-lg font-mono ml-13 text-gray-500">
                      :21
                    </span>
                  </h1>
                  <h1 className="font-bold text-lg ml-30 mt-1">
                    Email{" "}
                    <span className="text-lg font-mono ml-9.5 text-gray-500">
                      : selvabharath.int@gmail.com
                    </span>
                  </h1>
                  <h1 className="font-bold text-lg ml-30 mt-1">
                    Phone{" "}
                    <span className="text-lg font-mono ml-7 text-gray-500">
                      : +91 7708830044
                    </span>
                  </h1>
                </div>
              </div>
              <div className="relative left-[130px] top-[100px]">
                <h1 className="font-bold text-3xl p-5 mt-[-50px]">
                  3 Year's Experience On Frontend <br />
                  Developer
                </h1>
                <div className="flex flex-col gap-4 text-gray-600">
                  <h1>
                    👨‍💻 Hi, I'm a passionate Frontend Developer with 3 years of
                    hands-on experience building <br /> responsive and
                    user-friendly web applications.
                    <br />
                  </h1>

                  <h1>
                    💻 I specialize in HTML, CSS, JavaScript, and modern
                    libraries like React.js, focusing on creating <br /> clean,
                    efficient, and accessible user interfaces.
                    <br />
                  </h1>

                  <h1>
                    🔧 Currently, I'm expanding my skill set into backend
                    development to become a Full Stack <br />
                    Developer. I'm actively learning technologies like:
                  </h1>
                  <ul className="list-disc pl-15 space-2">
                    <li className="mb-2">🟢 Node.js</li>
                    <li className="mb-2">⚙️ Express</li>
                    <li className="mb-2">🗄️ MongoDB</li>
                    <li className="mb-2">🌐 REST APIs</li>
                  </ul>
                  <a
                    href={resume}
                    download
                    className="w-50 h-12 bg-sky-200 border-1 relative  p-3 rounded-md shadow-lg"
                  >
                    Download Resume{" "}
                    <img
                      src="../src/images/download.png"
                      alt=""
                      className="w-10 relative top-[-30px] left-[140px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="reveal">
          {/* Skills content unchanged */}
          <div className="pt-[10px] px-4 lg:ml-14">
            <div className="text-center mb-5">
              <h2 className="text-2xl font-bold text-blue-500 mt-1 relative top-[60px] text-shadow">
                My Skills
              </h2>
              <p className="text-gray-600 relative top-[60px] ml-10 lg:ml-55">
                Let Me Help You{" "}
                <span className="ml-4 text-xs text-gray-500">
                  (Click the langugage code to know more about that)
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3  gap-10 ml-[-15px] mt-2 lg:ml-30 lg:mt-10">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 pt-15 pl-6 items-center justify-evenly "
                >
                  <div
                    className="w-42 h-42 rounded-full flex items-center justify-center relative"
                    style={{
                      background: `conic-gradient(#3b82f6 ${
                        skill.percent * 3.6
                      }deg, #e5e7eb 0deg)`,
                    }}
                  >
                    <div className="absolute w-34 h-34 bg-white rounded-full flex flex-col items-center justify-center text-center shadow-inner">
                      <span className="text-xl font-semibold text-blue-500">
                        {skill.percent}%
                      </span>
                      <a
                        href={skill.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 mt-1 hover:text-blue-600 hover:underline"
                      >
                        {skill.name}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="project" className="reveal2">
          {/* Projects content unchanged */}
          <div>
            <div>
              <div className="ml-38 mt-20 font-bold text-2xl text-blue-500 text-shadow lg:ml-160 mt-3">
                My Projects
              </div>

              <div className="grid lg:grid-cols-3 ml-3">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="w-90 h-100 border mt-15 ml-6 bg-white"
                  >
                    <div>
                      <img
                        src={project.images}
                        alt="no images"
                        className="w-85 h-50 pl-5 pt-5"
                      />
                      <h1 className="font-bold text-xl mt-2 ml-3">
                        {project.name}
                      </h1>
                      <h1 className="text-xs mt-1 ml-3 text-gray-500">
                        {project.Date}
                      </h1>
                      <p className="text-sm ml-3 mt-1">{project.content}</p>
                      <div className="mt-6 ml-20"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Htmlproject />
            <Olms />
            <Register />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="reveal">
          <Contact />
        </section>
      </div>




















      {/* Mobile Section */}
      <div className="block lg:hidden ml-[-180px]  mt-10 ">
        <section id="Home" className="reveal">
          <p className=" ml-50 relative top-[130px] text-gray-600">
            Welcome to my world!
          </p>
          <h1 className="font-bold text-3xl relative top-[130px] left-[200px] pt-5">
            Hi I'm Selva Bharath
          </h1>
          <h1 className="font-bold text-xl relative top-[130px] left-[200px] pt-5">
            Full Stack Web Developer
          </h1>
          <p className="relative top-[130px] left-[200px] text-gray-600 pt-7 leading-loose">
            I design and develop complete web solutions — from <br />
            responsive front-end interfaces to powerful back-end <br /> APIs.
            Passionate about creating clean UI/UX, writing <br /> scalable
            code,and solving real-world problems with <br /> technology. Skilled
            in{" "}
            <span className="font-bold text-lg leading-loose">
              React, Node.js,<br></br> Express, MongoDB, and Tailwind CSS
            </span>
            <br />. Always learning, always building.
          </p>
          <div className="flex">
            <a href="#Contact"
              className="w-45 h-15 bg-sky-200 border-1 relative top-[180px] left-[200px] p-4 rounded-md shadow-lg"
            >
              Hire Me Now !{" "}
              <img
                src={arrow}
                alt=""
                className="w-8 relative top-[-30px] left-[100px]"
              />
            </a>
            <a
              href={resume}
              download
              className="w-45 h-15 bg-sky-200 border-1 relative top-[180px] left-[210px] p-4 pl-2 rounded-md shadow-lg"
            >
              Download Resume
              <img
                src={downloadimage}
                alt=""
                className="w-7 relative top-[-25px] left-[135px]"
              />
            </a>
          </div>
          <div className="flex gap-10 relative top-[220px] left-[230px]">
            <a
              href="https://www.facebook.com/people/Selva/pfbid02SZUjXEeaLXSdUgyAhfB82wPu2NGiHyKmwStxA1jqyEa2skZJWcvvJ7RHs5VGjVhJl/?rdid=3Chcg8npFKKTnxKR&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F17W7gtyACz%252F"
              className="w-13 h-13 rounded-full border-1"
            >
              <img src={facebook} alt="" className="p-2" />
            </a>
            <a
              href="https://github.com/Selva-Bharath"
              className="w-13 h-13 rounded-full border-1"
            >
              <img src={github} alt="" className="p-2" />
            </a>
            <a
              href="https://www.instagram.com/mr_minion_boy_?igsh=MTdxZm5lYWIwZzFnYw%3D%3D"
              className="w-13 h-13 rounded-full border-1"
            >
              <img src={instagram} alt="" className="p-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/selva-bharath-p-953786353/?originalSubdomain=in"
              className="w-13 h-13 rounded-full border-1"
            >
              <img src="../src/images/linkedin.png" alt="" className="p-2" />
            </a>
          </div>
        </section>

        {/* About */}
        <section id="About" className="reveal2">
          {" "}
          <div className="block lg:hidden mt-[250px] mb-10 ml-50">
            <h1 className="font-bold text-xl text-blue-500 relative left-[170px] top-[-10px] text-shadow mt-80">
              About Me
            </h1>
            <div className="flex flex-col">
              <div>
                <div className="relative w-[350px] h-[330px] rounded-full flex items-center justify-center bg-white ml-10 mt-1">
                  {/* Profile Image */}
                  <div className="w-[280px] h-[280px] rounded-full overflow-hidden border-[6px] border-blue-100 shadow-xl  bg-white">
                    <img
                      src={profileimages}  // 🔄 Replace with your image path
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Rotating Text */}
                  <svg
                    viewBox="0 0 300 300"
                    className="absolute w-full h-full animate-spin-clockwise p-2"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 150,150 m -140,0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0"
                      />
                    </defs>
                    <text fill="#1e293b" fontSize="15" fontWeight="700">
                      <textPath
                        href="#circlePath"
                        startOffset="0%"
                        textLength="893"
                        lengthAdjust="spacingAndGlyphs"
                      >
                        • I am a Full Stack Developer • I am a Web Designer • I
                        am a Frontend Developer • I am a Web Designer
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="ml-[-120px]">
                  <h1 className="font-bold text-lg ml-30 mt-5">
                    Name{" "}
                    <span className="text-lg font-mono ml-9 text-gray-500">
                      : selva bharath .P
                    </span>
                  </h1>
                  <h1 className="font-bold text-lg ml-30 mt-1">
                    Role{" "}
                    <span className="text-lg font-mono ml-12 text-gray-500">
                      : Full Stack Web Developer{" "}
                    </span>
                  </h1>
                  <h1 className="font-bold text-lg ml-30 mt-1">
                    Location{" "}
                    <span className="text-lg font-mono ml-3 text-gray-500">
                      :Tuticorin,India
                    </span>
                  </h1>
                  <h1 className="font-bold text-lg ml-30 mt-1">
                    Age{" "}
                    <span className="text-lg font-mono ml-13 text-gray-500">
                      :21
                    </span>
                  </h1>
                  <h1 className="font-bold text-lg ml-30 mt-1">
                    Email{" "}
                    <span className="text-lg font-mono ml-9.5 text-gray-500">
                      : selvabharath.int@gmail.com
                    </span>
                  </h1>
                  <h1 className="font-bold text-lg ml-30 mt-1">
                    Phone{" "}
                    <span className="text-lg font-mono ml-7 text-gray-500">
                      : +91 7708830044
                    </span>
                  </h1>
                </div>
              </div>
              <div className="relative left-[50px] top-[100px]">
                <h1 className="font-bold text-3xl p-5 mt-[-50px] ml-[-55px]">
                  3 Year's Experience On Full Stack Web Developer
                </h1>
                <div className="flex flex-col gap-4 text-gray-600 ml-[-35px]">
                  <h1>
                    👨‍💻 Hi, I'm a passionate Frontend Developer with <br /> 3
                    years of hands-on experience building <br /> responsive and
                    user-friendly web applications.
                    <br />
                  </h1>

                  <h1>
                    💻 I specialize in HTML, CSS, JavaScript, and modern
                    <br />
                    libraries like React.js, focusing on creating <br /> clean,
                    efficient, and accessible user interfaces.
                    <br />
                  </h1>

                  <h1>
                    🔧 Currently, I'm expanding my skill set into backend
                    development to become a Full Stack <br />
                    Developer. I'm actively learning technologies like:
                  </h1>
                  <ul className="list-disc pl-15 space-2">
                    <li className="mb-2">🟢 Node.js</li>
                    <li className="mb-2">⚙️ Express</li>
                    <li className="mb-2">🗄️ MongoDB</li>
                    <li className="mb-2">🌐 REST APIs</li>
                  </ul>
                  <a
                    href={resume}
                    download
                    className="w-50 h-12 bg-sky-200 border-1 relative  p-3 rounded-md shadow-lg ml-18 mb-10"
                  >
                    Download Resume{" "}
                    <img
                      src={downloadimage}
                      alt=""
                      className="w-8 relative top-[-30px] left-[140px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Skills */}
        <section id="Skills" className="reveal">


          <div className="pt-[10px] px-4">
                <div className="text-center mb-5">
                  <h2 className="text-2xl font-bold text-blue-500 mt-1 relative top-[60px] text-shadow ml-50">
                    My Skills
                  </h2>
                  <p className="text-gray-600 relative top-[60px] ml-43 lg:ml-55">Let Me Help You <span className="ml-4 text-xs text-gray-500">(Click the langugage code to know more about that)</span></p>
                </div>
          
                <div className="grid grid-cols-2 lg:grid-cols-3  lg:gap-10 ml-[170px] mt-15 lg:ml-30 lg:mt-10">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-3 pt-15 pl-6 items-center justify-evenly "
                    >
                      <div
                        className="w-42 h-42 rounded-full flex items-center justify-center relative"
                        style={{
                          background: `conic-gradient(#3b82f6 ${
                            skill.percent * 3.6
                          }deg, #e5e7eb 0deg)`,
                        }}
                      >
                        <div className="absolute w-34 h-34 bg-white rounded-full flex flex-col items-center justify-center text-center shadow-inner">
                          <span className="text-xl font-semibold text-blue-500">
                            {skill.percent}%
                          </span>
                          <a
                            href={skill.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-700 mt-1 hover:text-blue-600 hover:underline"
                          >
                            {skill.name}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

        </section>


        {/* projects */}

        <section id="Project" className="reveal2">
        
            <div>
        <div>
            <div className='ml-80 mt-20 font-bold text-2xl text-blue-500 text-shadow lg:ml-160 mt-3'>My Projects</div>

            <div className='grid lg:grid-cols-3 ml-50'>
                {projects.map((project,index) => (
                    <div key={index} className='w-90 h-100 border mt-15 ml-6 bg-white'>
                        <div>
                        <img src={project.images} alt="no images" className='w-85 h-50 pl-5 pt-5'/>
                        <h1 className='font-bold text-xl mt-2 ml-3'>{project.name}</h1>
                        <h1 className='text-xs mt-1 ml-3 text-gray-500'>{project.Date}</h1>
                        <p className='text-sm ml-3 mt-1'>{project.content}</p>
                        <div className='mt-6 ml-20'>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      <Htmlproject />
      <Olms />
      <Register />
    </div>
        </section>

        <section id="Contact" className="reveal">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default ProfileCircle;
