import React, { useState } from "react";
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
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  function handleDropdown() {
    const dropdown = document.getElementById("navbar-dropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  window.addEventListener("scroll", scrollHandler);
  return (

    <nav class="bg-warning dark:bg-gray-900 ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center" style={{ textDecoration: "none" }}>
          <img src={logo} class="h-8 mr-3" alt="KaKaQ Logo" />
          <span class="text-black self-center text-4xl font-semibold whitespace-nowrap dark:text-white focus:outline-none" style={{ textDecoration: "none" }}>KaKaQ</span>
        </a>
        <div class="flex md:order-2 text-2xl">
          <button type="button" onclick="location.href='../src/components/Login/Login.js'" href="/login" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
          &nbsp;&nbsp;
          <button type="button" onclick="location.href='../src/components/Login/Signup.js'" href="/signup" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button>
          
        </div>
        <button data-collapse-toggle="navbar-dropdown" type="button" class="bg-warning inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={handleDropdown}  >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="bg-warning hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul class="bg-warning flex flex-col text-2xl font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-warning dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ textDecoration: "none" }}>
              <AiOutlineHome style={{marginRight: "2px"}} />Home</a>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="bg-warning flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              <AiOutlineUser style={{marginRight: "2px"}}/>Survey 
                <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
              {/* <!-- Dropdown menu --> */}
              <div id="dropdownNavbar" class="z-10 hidden text-2xl font-normal bg-warning divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
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
            {/* <li>
              <a href="/login" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
            </li>
            <li>
              <a href="/signup" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Signup</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    // <Navbar
    //   expanded={expand}
    //   fixed="top"
    //   expand="md"
    //   className={navColour ? "sticky" : "navbar"}
    // >
    //   <Container>
    //     <Navbar.Brand href="/" className="d-flex">
    //       <img src={logo} className="img-fluid logo" alt="brand" />
    //       <span style={{color:"black"}}><b>KaKaQ</b></span>
    //     </Navbar.Brand>
    //     <Navbar.Toggle
    //       aria-controls="responsive-navbar-nav"
    //       onClick={() => {
    //         updateExpanded(expand ? false : "expanded");
    //       }}
    //     >
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="ms-auto" defaultActiveKey="#home">
    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/"
    //             onClick={() => updateExpanded(false)}>
    //             <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/survey"
    //             data-bs-toggle="dropdown" aria-expanded="false"
    //             onClick={() => updateExpanded(false)}>
    //             <AiOutlineUser style={{ marginBottom: "2px" }} /> Survey
    //           </Nav.Link>
    //             <li><a class="dropdown-item" href="/survey">Basic</a></li>
    //             <li><a class="dropdown-item" href="/chatbot">ChatBot</a></li>
    //             <li><a class="dropdown-item" href="/opensurvey">List</a></li>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/test"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <CgFileDocument style={{ marginBottom: "2px" }} /> Test
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/mypage"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <ImBlog style={{ marginBottom: "2px" }} /> MyPage
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/guide"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <RiSurveyLine style={{ marginBottom: "2px" }} /> Guide
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/login"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <RiSurveyLine style={{ marginBottom: "2px" }} /> Login
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/signup"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <RiSurveyLine style={{ marginBottom: "2px" }} /> Signup
    //           </Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default NavBar;
