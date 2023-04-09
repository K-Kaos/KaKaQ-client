import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Survey from "./components/Survey/Survey";
import Test from "./components/Test/Test";
import MyPage from "./components/MyPage/MyPage";
import Guide from "./components/Guide/Guide";
import OpenSurvey from "./components/Survey/OpenSurvey"
import Login from "./components/Login/Login"
import SignupPage from "./components/MyPage/SignupPage"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/test" element={<Test />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/opensurvey" element={<OpenSurvey />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signuppage" element={<SignupPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
