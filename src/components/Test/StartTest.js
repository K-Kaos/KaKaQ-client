import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import { LazyResult } from "postcss";

function StartTest(props) {
  let whoLoggedIn = null;

  const [pages, setPages] = React.useState(["home"]);
  const [message, setMessage] = React.useState("");
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const answerOptions = [
    "매우 아니다",
    "약간 아니다",
    "보통",
    "조금 그렇다",
    "매우 그렇다",
  ];
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.response) {
      setQuestions(location.state.response.split("\n\n").slice(1));
    }
  }, [location.state]);

  const handleAnswerChange = (e, index) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = e.target.value;
    setSelectedAnswers(newSelectedAnswers);
    console.log(newSelectedAnswers);
    console.log(selectedAnswers);
  };

  function handleSubmit() {
    alert("테스트가 완료되었습니다.");
    console.log(selectedAnswers);
    var sum =0;
    for(var i=0; i<6; i++){
      if(selectedAnswers[i]=="매우 아니다") sum+=1;
      else if(selectedAnswers[i] == "약간 아니다") sum+=2;
      else if(selectedAnswers[i] == "보통") sum+=3;
      else if(selectedAnswers[i] == "조금 그렇다") sum+=4;
      else if(selectedAnswers[i] == "매우 그렇다") sum+=5;
    }
    var result="";
    if(sum>=6&&sum<=10) result = "라이언"
    else if(sum>10&&sum<=15) result = "어피치"
    else if(sum>15&&sum<=20) result = "콘"
    else if(sum>20&&sum<=25)  result = "춘식이"
    else if(sum>25&&sum<=30) result = "무지"
    else result="제이지"
    axios.post("/api/user/register", {
      username: location.state.username,
      email: location.state.email,
      password: location.state.password,
      role : result,
    }).then(function (response) {
      console.log(response);
      const url = response.data;
      if (url.includes("/login")) {
        navigate("/testresult", {state: {value: result}});
        console.log("result" + result);
      } else if (url.includes("/duplicate")) {
          alert("이미 가입된 메일입니다.");
          navigate("/signup");
      }
    }).catch(function (error) {
      console.log(error);
      alert("회원가입 오류");
    });
  }

  return (
    <Container
      fluid
      className="flex flex-col items-center justify-center px-2 py-2 "
    >
      <Container class="flex items-center justify-center px-2 py-2">
        <div
          className="p-20 px-10 space-y-4 md:space-y-6 sm:p-8"
          style={{ alignItems: "center" }}
        >
          <div className="w-auto md:w-auto isolate px-36 py-2 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                유형 테스트
              </h2>
              <p className="mt-2 mb-4text-lg leading-8 text-gray-600">
                KaKaQ에 가입하여 캐릭터를 얻어보세요.
              </p>
            </div>
            {questions.map((question, index) => (
              <div
                class="RESPONDER_TARGETING MuiBox-root css-1i4hy4j flex flex-col sm:flex-row items-center"
                style={{ marginBottom: "16px" }}
              >
                <div class="MuiGrid-root MuiGrid-container css-1r5l695">
                  <div
                    className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAccordion-root Mui-expanded MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-8v46es"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      width: "100%",
                      gap: "32px",
                    }}
                  >
                    <div
                      class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr"
                      style={{ minHeight: "0px" }}
                    >
                      <div key={index}>
                        <br />
                        <h5>{question}</h5>
                        <div>
                          {answerOptions.map((option, optionIndex) => (
                            <React.Fragment key={optionIndex}>
                              <input
                                type="radio"
                                id={`option${index}-${optionIndex}`}
                                name={`answer${index}`}
                                value={option}
                                onChange={(e) => handleAnswerChange(e, index)}
                                checked={selectedAnswers[index] === option}
                              />
                              <label htmlFor={`option${index}-${optionIndex}`}>
                                {option}&nbsp;
                              </label>
                            </React.Fragment>
                          ))}
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div class="px-8">
            <button
              onClick={handleSubmit}
              class="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: "rgb(250, 220, 95)",
                justifyContent: "center",
                display: "flex",
              }}
            >
              제출하기
            </button>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default StartTest;
