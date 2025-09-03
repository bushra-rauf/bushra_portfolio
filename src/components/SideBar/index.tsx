// 'use client'
// import { useState } from "react";

export default function SocialSidebar() {
    // const [showForm, setShowForm] = useState(false)
  return (
    <div className="fixed top-1/3 left-0 z-50 flex flex-col space-y-4 p-2">
      <a
        href="https://github.com/bushra-rauf"
        target="_blank"
        className="bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/bushra-rauf-584020220/"
        target="_blank"
        className="bg-teal-500 text-white px-3 py-2 rounded hover:bg-teal-600"
      >
        LinkedIn
      </a>
        <button
          // onClick={() => setShowForm(!showForm)}
          
          className=" bg-black rounded px-3 py-2 text-white hover:bg-gray-700"
        > <a href='#contactform'>
          {/* {showForm ? "Hide Contact Form" : "Message Me"} */}
          Message Me
          </a>
        </button>
        {/* {showForm && (
          <div className="mt-4">
           <ContactForm />
          </div>
        )} */}
    </div>
    
  );
}
