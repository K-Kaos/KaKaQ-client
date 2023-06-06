import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SurveyCompletion from "./SurveyCompletion";

function Survey() {
  let whoLoggedIn = null;
  useEffect(() => {
    whoLoggedIn = sessionStorage.getItem("whoLoggedIn");
    if (whoLoggedIn === null) {
      alert("로그인 후 이용해 주세요");
      window.location.href = "/login";
    }
    setCreator(sessionStorage.getItem("whoLoggedIn"));
  }, []);
  const [pages, setPages] = React.useState(["home"]);
  const [visibility, setVisibility] = useState("");
  const [GPS, setGPS] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState("");
  const [showQuestionGenerator, setShowQuestionGenerator] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [city, setCity] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSurveyComplete, setSurveyComplete] = useState(false);
  const [surveyIndex, setSurveyIndex] = useState("");
  const [questionIndex, setQuestionIndex] = useState([]);

  const [creator, setCreator] = useState("");

  function handleCity(event) {
    setCity(event.target.value);
  }

  const handleShowQuestionGenerator = () => {
    setShowQuestionGenerator(true);
  };

  function handleVisibility(event) {
    setVisibility(event.target.value);
  }
  function handleGPS(event) {
    setGPS(event.target.value);
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);

    if (event.target.value === "찬반식") {
      setOptions(["True", "False"]);
    }

    if (event.target.value === "서술형") {
      setOptions([]);
    }
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "YesNo") {
      setOptions(["예", "아니오"]);
    } else if (selectedOption === "Agree") {
      setOptions(["찬성", "반대"]);
    } else if (selectedOption === "TrueFalse") {
      setOptions(["참", "거짓"]);
    }
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();

    if (question !== "") {
      const newQuestion = {
        id: questions.length + 1, // 새로운 질문의 id는 배열 길이 + 1
        text: question,
        type: type,
        options: options,
      };

      console.log({ newQuestion });

      setQuestions([...questions, newQuestion]);
      setQuestion("");
      setType("");
      setOptions([]);

      console.log(questions);
    }
  };

  const handleAddOption = () => {
    if (question !== "" && type === "객관식") {
      setOptions([...options, ""]);
    }
  };

  const handleOptionTextChange = (index, event) => {
    const updateOptions = [...options];
    updateOptions[index] = event.target.value;
    setOptions(updateOptions);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(creator);
    axios
      .post("/api/survey/create", {
        //survey db 데이터 보내기
        title: title,
        city: city,
        startDate: startDate,
        endDate: endDate,
        publicState: visibility,
        category: category,
        creator: {
          email: creator,
        },
      })
      .then(function (response) {
        console.log(creator);
        console.log(response.data);
        setSurveyIndex(response.data);

        setShowModal(true);
        // 설문조사 질문 생성
        const promises = questions.map((question) =>
          axios
            .post("/api/survey/question?surveyId=" + response.data, {
              text: question.text, //질문
              type: {
                name: question.type,
              },
              options: question.options,
              survey: {
                id: response.data,
              },
            })
            .then(function (response) {
              console.log("index" + response.data);
              setQuestionIndex([...questionIndex, response.data]);
              console.log(typeof response.data);
            })
            .catch(function (error) {
              console.log(error);
            })
        );
        Promise.all(promises).then(() => {
          console.log("newindex" + questionIndex);
          setMessage("설문조사가 제출되었습니다.");
          setTimeout(() => {
            setMessage("");
          }, 3000);


        });

      });
  }

  // function editQuestions(allQuestionIndex) {
  //     console.log(typeof allQuestionIndex);
  //     return axios.post("/api/survey/editquestions?surveyId=" + surveyIndex, {
  //       allQuestionIndex,
  //     }).then(function (response) {
  //       console.log("과연" + response.data);
  //     }).catch(function (error) {
  //       console.log(error);
  //     });
  //   }

  //function handleSubmit(e) {
  // e.preventDefault();
  //setShowModal(true);
  //}

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answerIndex;
      return newAnswers;
    });
  };

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
            disabled
          />
          <label htmlFor={`answer-${questionIndex}-${optionIndex}`}>
            {optionIndex + 1}. {option}
          </label>
        </div>
      );
    });

    const answerInput =
      question.type === "서술형" ? (
        <input
          type="text"
          value={selectedAnswers[questionIndex] || ""}
          onChange={(event) =>
            handleAnswerSelect(questionIndex, event.target.value)
          }
          class="m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-3/5 p-2.5 "
          disabled
        />
      ) : null;

    return (
      <div key={questionIndex}>
        <br />
        <h4>
          {questionIndex + 1}. {question.text}
        </h4>
        <div>
          {options}
          {answerInput}
        </div>
      </div>
    );
  });

  const handleShare = () => {
    const surveyId = surveyIndex;

    axios
      .get(`/api/surveys/${surveyId}`)
      .then((response) => {
        const surveyURL = response.data;

        console.log("설문 공유 URL: ", surveyURL);

        navigator.clipboard
          .writeText(surveyURL)
          .then(() => {
            console.log("URL이 클립보드에 복사되었습니다.");
          })
          .catch((error) => {
            console.error("URL 복사 실패: ", error);
          });
      })
      .catch((error) => {
        console.error("설문 URL 요청 실패: ", error);
      });
  };

  return (
    <Container fluid className="survey-header max-w-3xl mx-auto">
      <Container className="m-auto mx-10">
        {isSurveyComplete ? (
          <SurveyCompletion handleShare={handleShare} />
        ) : (
          <form onSubmit={handleSubmit} className="items-center">
            <h1 className="project-heading">
              설문조사 <strong className="yellow">생성하기 </strong>
            </h1>
            <p>편리하고 쉽게 제작자의 목적에 맞게 설문조사를 생성합니다.</p>
            <br />
            <Card className="survey-card-view ">
              <Card.Body>
                <Question question="설문조사 제목" />
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="설문조사 제목을 입력해주세요."
                  className="m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </Card.Body>
            </Card>

            <Card className="survey-card-view ">
              <Card.Body>
                <Question question="설문조사 카테고리" />
                <input
                  type="text"
                  value={category}
                  onChange={handleCategoryChange}
                  placeholder="설문조사 제목을 입력해주세요."
                  className="m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </Card.Body>
            </Card>

            <Card className="survey-card-view">
              <Card.Body>
                <Question question="설문조사 공개/비공개" />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="radio"
                        id="public"
                        name="visibility"
                        value="public"
                        onChange={handleVisibility}
                        checked={visibility === "public"}
                      />
                      <label htmlFor="public">공개 설문으로 생성할게요</label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="radio"
                        id="private"
                        name="visibility"
                        value="private"
                        onChange={handleVisibility}
                        checked={visibility === "private"}
                      />
                      <label htmlFor="private">
                        비공개 설문으로 생성할게요
                      </label>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {visibility === "public" && (
              <Card className="survey-card-view">
                <Card.Body>
                  <Question question="GPS 사용 여부" />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                          type="radio"
                          id="GPSO"
                          name="gps"
                          value="GPSO"
                          onChange={handleGPS}
                          checked={GPS === "GPSO"}
                        />
                        <label htmlFor="GPSO">GPS 정보를 사용할게요</label>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                          type="radio"
                          id="GPSX"
                          name="gps"
                          value="GPSX"
                          onChange={handleGPS}
                          checked={GPS === "GPSX"}
                        />
                        <label htmlFor="GPSX">
                          GPS 정보를 사용하지 않을게요
                        </label>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            )}

            {GPS === "GPSO" && (
              <Card className="survey-card-view">
                <Card.Body>
                  <Question question="설문 가능 지역" />
                  <div className="city-table">
                    {[
                      "서울",
                      "부산",
                      "대구",
                      "광주",
                      "인천",
                      "대전",
                      "울산",
                      "경기",
                      "강원",
                      "제주",
                    ].map((city, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          id={city.toLowerCase()}
                          name="city"
                          value={city.toLowerCase()}
                          onChange={handleCity}
                        />
                        <label htmlFor={city.toLowerCase()}>{city}</label>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            )}
            <CardGroup>
              <Card className="survey-card-view">
                <Card.Body>
                  <Question question="설문 시작일" />
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                  />
                </Card.Body>
              </Card>

              <Card className="survey-card-view">
                <Card.Body>
                  <Question question="설문 마감일" />
                  <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                </Card.Body>
              </Card>
            </CardGroup>

            {questions.map((question) => (
              <Card key={question.id} className="survey-card-view">
                <Card.Body>
                  <Question question={question.text} />
                  <p>{question.type} 질문</p>
                  {question.type !== "서술형" && (
                    <div className="items-center">
                      <hr />
                      <div className="flex justify-center">
                        <Question question="선택지" />
                      </div>
                      <div className="flex justify-center">
                        <ul className="text-left ml-0 pl-0">
                          {question.options.map((option, index) => (
                            <li key={index} className="block">
                              {index + 1}. {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            ))}

            <Card className="survey-card-view">
              <Card.Body>
                <Question question="질문 유형 선택" />
                <select value={type} onChange={handleTypeChange}>
                  <option value="">유형 선택</option>
                  <option value="객관식">객관식</option>
                  <option value="찬반식">찬반식</option>
                  <option value="서술형">서술형</option>
                </select>
              </Card.Body>
            </Card>

            {type && type == "서술형" && (
              <Card className="survey-card-view">
                <Card.Body>
                  <Question question="질문" />
                  <input
                    type="text"
                    value={question}
                    onChange={handleQuestionChange}
                    placeholder="질문을 입력해주세요."
                    class="m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/5 p-2.5 "
                  />
                  <br />
                  <button
                    type="button"
                    class="hover:bg-indigo-600 btn flex items-center justify-center bg-white-50 border border-gray-300 rounded-lg font-medium p-2.5 text-black bg-primary-600 ml-3 mr-3 mt-2"
                    onClick={handleAddQuestion}
                  >
                    질문 추가하기
                  </button>
                </Card.Body>
              </Card>
            )}

            {type === "찬반식" && (
              <CardGroup>
                <Card className="survey-card-view">
                  <Card.Body>
                    <Question question="질문" />
                    <input
                      type="text"
                      value={question}
                      onChange={handleQuestionChange}
                      placeholder="질문을 입력해주세요."
                      class="m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/5 p-2.5 "
                    />
                  </Card.Body>
                </Card>
                <Card className="survey-card-view">
                  <Card.Body>
                    <h3 for="optionsInput">
                      <b>선택지</b>
                    </h3>
                    <div>
                      <input
                        type="radio"
                        name="selectOptions"
                        value="YesNo"
                        onChange={handleOptionChange}
                      />
                      예/아니오
                      <br />
                      <input
                        type="radio"
                        name="selectOptions"
                        value="Agree"
                        onChange={handleOptionChange}
                      />
                      찬성/반대
                      <br />
                      <input
                        type="radio"
                        name="selectOptions"
                        value="TrueFalse"
                        onChange={handleOptionChange}
                      />
                      참/거짓
                      <br />
                    </div>
                    <button
                      type="button"
                      className="hover:bg-indigo-600 btn flex bg-white-50 border border-gray-300 rounded-lg font-medium p-2.5 text-black ml-3 mr-3 mt-2"
                      onClick={handleAddQuestion}
                    >
                      질문 추가하기
                    </button>
                  </Card.Body>
                </Card>
              </CardGroup>
            )}

            {type === "객관식" && (
              <CardGroup>
                <Card className="survey-card-view">
                  <Card.Body>
                    <Question question="질문 제목" />
                    <input
                      type="text"
                      value={question}
                      onChange={handleQuestionChange}
                      placeholder="질문 제목을 입력해주세요."
                      class="m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/5 p-2.5 "
                    />
                  </Card.Body>
                </Card>
                <Card className="survey-card-view">
                  <Card.Body>
                    <h3 for="optionsInput">
                      <b>선택지</b>
                    </h3>
                    {options.map((option, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          value={option}
                          onChange={(event) =>
                            handleOptionTextChange(index, event)
                          }
                          placeholder="선택지를 입력해주세요"
                          className="m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/5 p-2.5 "
                        />
                      </div>
                    ))}
                    <button
                      className="hover:bg-indigo-600 btn flex bg-white-50 border border-gray-300 rounded-lg font-medium p-2.5 text-black mt-2"
                      type="button"
                      onClick={handleAddOption}
                    >
                      선택지 추가하기
                    </button>
                    <button
                      type="button"
                      className="hover:bg-indigo-600 btn flex bg-white-50 border border-gray-300 rounded-lg font-medium p-2.5 text-black ml-3 mr-3 mt-2"
                      onClick={handleAddQuestion}
                    >
                      질문 추가하기
                    </button>
                  </Card.Body>
                </Card>
              </CardGroup>
            )}

            <div className="items-end flex justify-center">
              <button
                to="/completesurvey"
                type="submit"
                className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                설문 생성하기
              </button>
              <br />
            </div>
            <br />
          </form>
        )}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>설문 생성을 완료하시겠어요?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h3>{title}</h3>
              <div>{questionsAndAnswers}</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="hover:bg-indigo-600 btn flex bg-white-50 border border-gray-300 rounded-lg font-medium p-2.5 text-black ml-3 mr-3 mt-2"
              onClick={() => setShowModal(false)}
            >
              돌아가기
            </button>
            <button
              className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                setSurveyComplete(true);
                setShowModal(false);
              }}
            >
              설문 생성 완료
            </button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
  );
}

export default Survey;
