import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Logo/logo.png";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { RiSurveyLine } from "react-icons/ri"
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      }
      else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, [])


  function handleDropdown() {
    const dropdownNavbar = document.getElementById("dropdownNavbar");
    dropdownNavbar.classList.toggle("hidden");
  }


  function NavButton({ to, text }) {
    return (
      <Link
        to={to}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {text}
      </Link>
    );
  }

  return (
    <nav class="bg-warning dark:bg-gray-900 ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center" style={{ textDecoration: "none" }}>
          <img src={logo} class="h-8 mr-3" alt="KaKaQ Logo" />
          <span class="text-black self-center text-4xl font-semibold whitespace-nowrap dark:text-white focus:outline-none" style={{ textDecoration: "none" }}>KaKaQ</span>
        </a>
        <div class="flex md:order-2 text-2xl">
          <Link to="/login" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ textDecoration: "none" }}>Login</Link>
          &nbsp;&nbsp;
          <Link to="/signup" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ textDecoration: "none" }}>Signup</Link>
        </div>
        <button type="button" class="bg-warning inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown"
          aria-expanded={expand}
          onClick={handleDropdown}  >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="bg-warning hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul class="bg-warning flex flex-col text-2xl font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-warning dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ textDecoration: "none" }}>
                <AiOutlineHome style={{ marginRight: "2px" }} />Home</a>
            </li>
            <li>
              <button id="dropdownNavbarLink" class="bg-warning flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" onClick={handleDropdown}>
                <AiOutlineUser style={{ marginRight: "2px" }} />Survey
                <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
              {/* <!-- Dropdown menu --> */}
              <div id="dropdownNavbar" class="hidden">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/survey" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" style={{ textDecoration: "none" }}>Basic</a>
                  </li>
                  <li>
                    <a href="/chatbot" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" style={{ textDecoration: "none" }}>ChatBot</a>
                  </li>
                  <li>
                    <a href="/opensurvey" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" style={{ textDecoration: "none" }}>List</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
                  <a href="/test" style={{ textDecoration: "none" }} class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <CgFileDocument style={{ marginRight: "2px" }} />Test</a>
                </li>
                <li>
                  <a href="/mypage" style={{ textDecoration: "none" }} class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <ImBlog style={{ marginRight: "2px" }} />MyPage</a>
                </li>
                <li>
                  <a href="/guide" style={{ textDecoration: "none" }} class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <RiSurveyLine style={{ marginRight: "2px" }} />Guide</a>
                </li>
          </ul>
          
        </div>
      </div>
    </nav>

  );
}

export default NavBar;