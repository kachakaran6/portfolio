// import React from 'react'
// import logo from "../assets/k.jpg"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="" className=" h-10 w-15" /> */}
        <p className="text-3xl">KK</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/kacha-karan-5337731b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="social-icon"
        >
          <FaLinkedin class="text-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-600" />
        </a>
        <a href="https://github.com/kachakaran6" className="social-icon">
          <FaGithub class="text-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:text-gray-800" />
        </a>
        <a
          href="https://www.instagram.com/kacha_karan_?igsh=MXEycHJucWpyZWg2Mg=="
          className="social-icon"
        >
          <FaInstagram class="text-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:text-pink-500" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
