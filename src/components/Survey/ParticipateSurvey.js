import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import NavbarProfile from "../../NavbarProfile";

function ParticipateSurvey(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const [username, setUsername] = useState(null);
  const [siData, setsiData] = useState();

  const questionsAndAnswers = questions.map((question, questionIndex) => {
    const options = question.options.map((option, optionIndex) => {
      return (
        <div key={optionIndex}>
          <input
            type="radio"
            id={`answer-${questionIndex}-${optionIndex}`}
            name={`answer-${questionIndex}`}
            value={option}
            onChange={() => handleAnswerSelect(questionIndex, option)}
          />
          <label htmlFor={`answer-${questionIndex}-${optionIndex}`}>
            {optionIndex + 1}. {option}
          </label>
        </div>
      );
    });

    const answerInput =
      question.type.name === "서술형" ? (
        <input
          type="text"
          value={selectedAnswers[questionIndex] || ""}
          onChange={(event) =>
            handleAnswerSelect(questionIndex, event.target.value)
          }
          placeholder="서술형 답안을 입력해주세요."
          class="css-4m3kxx MuiFilledInput-input m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-3/5 p-2.5 "
          style={{ padding: "8px", width: "350px" }}
        />
      ) : null;

    return (
      <div key={questionIndex}>
        <br />
        <div class="MuiGrid-root" style={{ textAlign: "-webkit-center" }}>
          <div
            className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-8 mb-2 MuiGrid-grid-lg-12 css-1iqtsvr"
            style={{
              maxWidth: "100%",
              textAlign: "-webkit-center",
            }}
          >
            <div
              className="MuiBox-root css-bdnmmq css-10oer18"
              style={{
                placeContent: "center",
                display: "block",
                textAlign: "start",
                padding: "30px",
              }}
            >
              <div>
                <p>Question {questionIndex + 1}</p>
                <h4>{question.text}</h4>
                <div style={{ textAlign: "center" }}>
                  <div class="mb-2">
                    {options}
                    {answerInput}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answerIndex;
      return newAnswers;
    });
  };

  const { id } = useParams();
  const [whoLoggedIn, setWhoLeggedIn] = useState(null); // 사용자 이메일(아이디) 저장
  useEffect(() => {
    const LoggedInUser = sessionStorage.getItem("whoLoggedIn");
    if (LoggedInUser === null) {
      alert("로그인 후 이용해 주세요");
      window.location.href = "/login";
    } else {
      setWhoLeggedIn(LoggedInUser);

      // 서버로 LoggedInUser 보내기
      fetch("/api/surveys/get/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log("서버 응답:", data);
          setTitle(data.title);
          setCategory(data.category);
          setQuestions(data.questions);
        })
        .catch((error) => console.error("오류 발생:", error));
    }
  }, []);

  function handleSubmit(event) {
    // 설문조사 제출
    event.preventDefault();
    console.log("선택한 답변:", selectedAnswers);
    axios
      .get(`/api/survey/participant?surveyId=${id}&userEmail=${whoLoggedIn}`)
      .then((response) => {
        const isParticipant = response.data;
        if (isParticipant.includes("duplicate")) {
          alert("이미 참여한 설문입니다.");
          window.location.href = "/workspace";
        } else if (isParticipant.includes("ok")) {
          console.log("참가자 정보 저장 완료");
          // 각 질문에 대한 응답 저장 요청
          questions.forEach((question, questionIndex) => {
            const questionId = question.question_id;
            const answer = selectedAnswers[questionIndex];

            if (answer !== undefined) {
              axios
                .post(
                  `/api/survey/participate?surveyId=${id}&questionId=${questionId}`,
                  {
                    user: { email: whoLoggedIn },
                    text: answer,
                  }
                )
                .then((response) => {
                  console.log("답변이 성공적으로 저장되었습니다.");
                  window.location.href = "/workspace";
                })
                .catch((error) => {
                  console.error("답변 저장 중 오류가 발생했습니다:", error);
                });
            }
          });
        } else {
          console.log("참가자 정보 처리 오류");
        }
      });
  }

  return (
    <Container fluid className="survey-header max-w-3xl mx-auto">
      <Container className="m-auto mx-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`소중한 의견이 제출되었어요.`);
            return true;
          }}
        >
          <div class="MuiContainer-root MuiContainer-maxWidthLg css-okglv3">
            <div tabindex="-1" style={{ outline: "none" }}>
              {/* 상단 navbar */}
          <NavbarProfile
            username={username}
            whoLoggedIn={whoLoggedIn}
            siData={siData}
          />
              <div class="MuiContainer-root MuiContainer-maxWidthLg css-1qtp0is">
                <div
                  class="MuiBox-root css-ip3vow mb-4"
                  style={{ display: "block", textAlign: "-webkit-center" }}
                >
                  <div className="MuiBox-root css-0 ">
                    <div
                      className="MuiGrid-root MuiGrid-container css-sow6z2 mb-4"
                      style={{ display: "block", textAlign: "-webkit-center" }}
                    >
                      <div>
                        <h1 className="project-heading mb-4">
                          <strong>{title} </strong>
                        </h1>
                      </div>
                      <div
                        className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-8 mb-2 MuiGrid-grid-lg-12 css-1iqtsvr"
                        style={{
                          maxWidth: "100%",
                          textAlign: "-webkit-center",
                        }}
                      >
                        <div
                          className="MuiBox-root css-bdnmmq css-10oer18"
                          style={{
                            placeContent: "center",
                            display: "block",
                            textAlign: "start",
                            padding: "30px",
                          }}
                        >
                          <div>
                            <p
                              class="text-gray-500 font-normal"
                              style={{ marginBlockEnd: "0em" }}
                            >
                              카테고리: {category}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>{questionsAndAnswers}</div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn block w-1/3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                  onClick={handleSubmit}
                  style={{ backgroundColor: "rgb(250, 220, 95)" }}
                >
                  설문조사 완료
                </button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </Container>
  );
}

export default ParticipateSurvey;
