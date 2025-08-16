import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'service_88kf3aq',      
    'template_epy49qi',     
    form.current,           
    'freR8qgXi-T-HL04j')
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
              setName("");
              setLastName("");
              setEmail("");
              setSubject("");
              setMessage("");
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div>
    <div className="pb-5 hidden lg:block mt-[-50px]">
      <div className="w-115 h-130 bg-white ml-115 mt-37 shadow-2xl ">
        <h1 className="text-2xl font-bold text-blue-500 relative top-[15px] ml-35 text-shadow">
          Contact Me
        </h1>
        <h1 className="text-gray-500 text-md mt-3 ml-32">
          Get In Touch With Me
        </h1>

        <form ref={form} onSubmit={sendEmail}>
          <div className="flex gap-5 ml-3 mt-5">
            <input
              type="text"
              className="border-2 border-green-200 pl-2 w-90 h-10 bg-gray-200 rounded-lg"
              placeholder="First Name"
              required
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="border-2 border-green-200 pl-2 w-90 h-10 mr-2 bg-gray-200 rounded-lg"
              placeholder="Second Name"
              required
              value={lastname}
              onChange={(e) =>setLastName(e.target.value)}
              name="user_lastname"
            />
          </div>

          <input
            type="email"
            name="user_email"
            className="border-2 border-green-200 pl-2 w-110 h-10 ml-3 mt-7 bg-gray-200 rounded-lg"
            placeholder="Enter Your Gmail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="border-2 border-green-200 pl-2 w-110 h-10 ml-3 mt-6 bg-gray-200 rounded-lg"
            placeholder="Subject"
            required
            name="user_subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="border-2 border-green-200 pl-2 w-110 h-40 ml-3 mt-6 bg-gray-200 rounded-lg pb-27"
            placeholder="Description"
            required
            name="user_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="w-40 h-10 border mt-7 ml-3 rounded-2xl bg-sky-200 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>






        <div className="pb-5 block lg:hidden mt-150 mb-20 ml-45">
      <div className="w-100 h-130 bg-white ml-5 mt-37 shadow-2xl ">
        <h1 className="text-2xl font-bold text-blue-500 relative top-[15px] ml-35 text-shadow">
          Contact Me
        </h1>
        <h1 className="text-gray-500 text-md mt-3 ml-32">
          Get In Touch With Me
        </h1>

        <form ref={form} onSubmit={sendEmail}>
          <div className="flex gap-5 ml-3 mt-5">
            <input
              type="text"
              className="border-2 border-green-200 pl-2 w-40 h-10 bg-gray-200 rounded-lg"
              placeholder="First Name"
              required
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="border-2 border-green-200 pl-2 w-50 h-10 mr-2 bg-gray-200 rounded-lg"
              placeholder="Second Name"
              required
              value={lastname}
              onChange={(e) =>setLastName(e.target.value)}
              name="user_lastname"
            />
          </div>

          <input
            type="email"
            name="user_email"
            className="border-2 border-green-200 pl-2 w-95 h-10 ml-3 mt-7 bg-gray-200 rounded-lg"
            placeholder="Enter Your Gmail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="border-2 border-green-200 pl-2 w-95 h-10 ml-3 mt-6 bg-gray-200 rounded-lg"
            placeholder="Subject"
            required
            name="user_subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="border-2 border-green-200 pl-2 w-95 h-40 ml-3 mt-6 bg-gray-200 rounded-lg pb-27"
            placeholder="Description"
            required
            name="user_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="w-40 h-10 border mt-5 ml-30 rounded-2xl bg-sky-200 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
