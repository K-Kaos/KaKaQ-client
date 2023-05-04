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

function NavBar(props) {
  const [expand, setExpand] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const isLogin = props.isLogin;
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

  function handleHamburger() {
    const dropdownHamburger = document.getElementById("navbar-dropdown");
    dropdownHamburger.classList.toggle("hidden");
  }

  function handleLogout() {
    sessionStorage.setItem("isLoggedIn", 'false');
    sessionStorage.removeItem("whoLoggedIn");
    alert("로그아웃 되었습니다.");
    window.location.href = "/";
  }

  function NavButton({ to, text }) {
    return (
      <Link
        to={to}
        className="text-black text-lg px-4 py-2 items-center"
        style={{ textDecoration: "none", fontSize: "18px" }}>
        {text}
      </Link>
    );
  }

  return (
    <nav class="bg-transparent dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 container-fluid">
        <a href="/" class="flex items-center" style={{ textDecoration: "none" }}>
          <img src={logo} class="h-8 mr-3" alt="KaKaQ Logo" />
          <span class="text-black self-center text-4xl font-semibold whitespace-nowrap dark:text-white focus:outline-none" style={{ textDecoration: "none" }}>KaKaQ</span>
        </a>
        <button type="button" id="hamburger" class="bg-transparent inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false" onClick={handleHamburger}  >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="justify-between ml-4 mr-4 items-center bg-transparent hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul class="mr-6 bg-transparent flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button id="dropdownNavbarLink" class="bg-transparent flex items-center w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-purple-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" onClick={handleDropdown}>
                설문 생성
                <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
              {/* <!-- Dropdown menu --> */}
              <div id="dropdownNavbar" class="hidden">
                <ul class="absolute py-2 text-sm text-gray-700 dark:text-gray-400 position:absolute" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/survey" class="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ textDecoration: "none" }}>기본</a>
                  </li>
                  <li>
                    <a href="/chatbot" class="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ textDecoration: "none" }}>챗봇</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/opensurvey" style={{ textDecoration: "none" }} class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                설문 참여</a>
            </li>
            <li>
              <a href="/guide" style={{ textDecoration: "none" }} class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-4">
                가이드</a>
            </li>

            <li>
            <a style={{ textDecoration: "none" }} class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-4">
                |</a>
            </li>
            {isLogin ?
              <li>
                <a href="/mypage" style={{ textDecoration: "none" }} class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-4">
                  마이페이지</a>
              </li> :
              <></>}
            {/* isLogin 값이 참이면 Logout 버튼만 / 거짓이면 Login, Signup */}
            {isLogin ?
<li>
                <a onClick={handleLogout} style={{ textDecoration: "none", cursor: "pointer" }} class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  로그아웃</a>
              </li>
              :
              <>
<li>
                <a href="/login" style={{ textDecoration: "none" }} class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  로그인</a>
              </li>
              <li>
                <a href="/signin" style={{ textDecoration: "none" }} class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  회원가입</a>
              </li>
              </>
            }
          </ul>

        </div>
      </div>
    </nav>

  );
}

export default NavBar;