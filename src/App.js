import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import Survey from "./components/Survey/Survey";
import TypeTest from "./components/Test/TypeTest";
import MyPage from "./components/MyPage/MyPage";
import Workspace from "./components/MyPage/Workspace";
import OpenSurvey from "./components/Survey/OpenSurvey"
import Login from "./components/Login/Login"
import Signup from "./components/Login/Signup"
import Logout from "./components/Login/Logout"
import TermofUse from "./components/Login/TermofUse"
import Chatbot from "./components/Survey/Chatbot"
import ChatbotSurvey from "./components/Survey/ChatbotSurvey"
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
import SurveyCompletion from "./components/Survey/SurveyCompletion";
import KAKAQ from "./components/Survey/KAKAQ";
import ParticipateSurvey from "./components/Survey/ParticipateSurvey";
import StartTest from "./components/Test/StartTest";
import SurveyTest from "./components/Survey/SurveyTest";
import ShowResult from "./components/Survey/ShowResult";
import TestResult from "./components/Test/TestResult";
import KakaoCallback from "./components/Login/KakaoCallback";

function App() {
  const [load, upadateLoad] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* <Navbar isLogin={isLogin} /> */}
        <ScrollToTop />
        <Routes>
        <Route /* 인가 코드 받기.. */
        path="/oauth"
        element={<KakaoCallback />}
      />
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/typetest" element={<TypeTest />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/opensurvey" element={<OpenSurvey />} />
          <Route path="/participate/:id" element={<ParticipateSurvey/>}/>
          <Route path="/survey/:id/result" element={<ShowResult/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/termofuse" element={<TermofUse />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/chatbotsurvey" element={<ChatbotSurvey />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/surveycompletion" element={<SurveyCompletion />} />
          <Route path="/kakaq" element={<KAKAQ />} />
          <Route path="/participateSurvey" element={<ParticipateSurvey />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/starttest" element={<StartTest />} />
          <Route path="/surveytest" element={<SurveyTest />} />
          <Route path="/testresult" element={<TestResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
