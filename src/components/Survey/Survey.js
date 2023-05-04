import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";
import Checkbox from "./CheckBox";
import CheckboxGroup from "./CheckboxGroup";
import InputBox from "./InputBox";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import TypeQuestion from "./TypeQuestion";
import QuestionGenerator from "./QuestionGenerator";
import { RiQuestionAnswerFill } from "react-icons/ri";
import SurveyPreview from "./SurveyCompletion";
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
    console.log(sessionStorage.getItem("whoLoggedIn"));
    setCreator(sessionStorage.getItem("whoLoggedIn"));
  }, []);

  const [pages, setPages] = React.useState(["home"]);
  const [visibility, setVisibility] = useState('');
  const [GPS, setGPS] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  // const [optionArr, setOptionsArr] = useState([]);
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


  const [creator, setCreator] = useState("");
  const [questionIndex, setQuestionIndex]= useState("");
  
  function handleCity(event) {
    setCity(event.target.value);
  }
  // useEffect(() => {
  //   setCreator(sessionStorage.getItem("WhoLoggedIn"));
  //   // console.log(sessionStorage.getItem("IdLoggedIn"));
  // }, []);
  const handleShowQuestionGenerator = () => {
    setShowQuestionGenerator(true);
  }

  function handleVisibility(event) {
    setVisibility(event.target.value);
  }
  function handleGPS(event) {
    setGPS(event.target.value);
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleTypeChange = (event) => {
    setType(event.target.value);

    if (event.target.value === "찬반식") {
      setOptions(["True", "False"]);
    }

    if (event.target.value === "서술형") {
      setOptions([]);
    }
  }

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setOptions((prevOptions) => [...prevOptions, value]);
  }

  const handleAddQuestion = (e) => {
    e.preventDefault();
    console.log(options.join(","));
    console.log(questions);

    if (question !== "") {
      const newQuestion = {
        id: questions.length + 1, // 새로운 질문의 id는 배열 길이 + 1
        text: question,
        type: type,
        options: options,
      };

      console.log({ newQuestion });
      setQuestions([...questions, newQuestion]);
      setQuestion('');
      setType('');
      setOptions([]);

      console.log(questions);
    }

  }

  const handleAddOption = () => {
    if (question !== "" && type === "객관식") {
      setOptions([...options, ""]);
    }
  };

  const handleOptionTextChange = (index, event) => {
    const updateOptions = [...options];
    updateOptions[index] = event.target.value;
    setOptions(updateOptions);
  }

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(creator);
    axios.post("/api/survey/create", {//survey db 데이터 보내기
      title: title,
      city: city,
      startDate: startDate,
      endDate: endDate,
      publicState: visibility,
      creator: {
        "email": creator
      },
    }).then(function(response){
      console.log(creator);
      console.log(response.data);
      setQuestionIndex(response.data);
  

    setShowModal(true);
      
      // 설문조사 질문 생성
      const promises = questions.map((question) => (
        axios.post("/api/survey/question?surveyId="+response.data,{
          text: question.text,//질문
          type:{
            name: question.type
          },
          options: question.options,
          survey: {
            "id": response.data,
          },
        })
      ));
  
      Promise.all(promises).then((results) => {
        console.log(results);
        setMessage('설문조사가 제출되었습니다.');
        setTimeout(() => {
          setMessage('');
        }, 3000);
      }).catch(function(error){
        console.log(error);
      });
    }).catch(function(error){
      console.log(error);
    });
  }
  


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
            checked={selectedAnswers[questionIndex] === option.value}
            onChange={() => handleAnswerSelect(questionIndex, option)}
          />
          <label htmlFor={`answer-${questionIndex}-${optionIndex}`}>{optionIndex + 1}. {option}</label>
        </div>
      );
    });

    const answerInput = question.type === "서술형" ? (
      <input
        type="text"
        value={selectedAnswers[questionIndex] || ""}
        onChange={(event) => handleAnswerSelect(questionIndex, event.target.value)} />
    ) : null;


    return (
      <div key={questionIndex}>
        <br />
        <h3>{questionIndex + 1}. {question.text}</h3>
        <div>{options}
          {answerInput}</div>
      </div>
    );
  });

  const handleShare = () => {
    const surveyId = 1;
  
    axios.get(`/api/surveys/${surveyId}`).then(response => {
      const surveyURL = response.data;
  
      console.log("설문 공유 URL: ", surveyURL);
  
      navigator.clipboard.writeText(surveyURL).then(() => {
        console.log("URL이 클립보드에 복사되었습니다.");
      }).catch(error => {
        console.error("URL 복사 실패: ", error);
      });
    })
    .catch(error => {
      console.error("설문 URL 요청 실패: ", error);
    });
  }
  

  return (
    <Container fluid className="survey-header" >
      <Container>
        {isSurveyComplete ? (
          <SurveyCompletion handleShare={handleShare} />
        ) : (
          <form onSubmit={handleSubmit}>
            <h1 className="project-heading">
              Our <strong className="yellow">Survey </strong>
            </h1>
            <p>
              Here is a survey we're working on recently.
            </p><br />
            <Card className="survey-card-view ">
              <Card.Body>
                <Question question="Survey Title" />
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Survey title" />
              </Card.Body>
            </Card>

            <Card className="survey-card-view">
              <Card.Body>
                <Question question="설문조사 공개/비공개" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type='radio'
                        id='public'
                        name='visibility'
                        value='public'
                        onChange={handleVisibility}
                        checked={visibility === 'public'}
                      />
                      <label htmlFor='public'>공개 설문으로 생성할게요</label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type='radio'
                        id='private'
                        name='visibility'
                        value='private'
                        onChange={handleVisibility}
                        checked={visibility === 'private'}
                      />
                      <label htmlFor='private'>비공개 설문으로 생성할게요</label>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {(visibility === 'public') && <Card className="survey-card-view">
              <Card.Body>
                <Question question="GPS 사용 여부" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type='radio'
                        id='GPSO'
                        name='gps'
                        value='GPSO'
                        onChange={handleGPS}
                        checked={GPS === 'GPSO'}
                      />
                      <label htmlFor='GPSO'>GPS 정보를 사용할게요</label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type='radio'
                        id='GPSX'
                        name='gps'
                        value='GPSX'
                        onChange={handleGPS}
                        checked={GPS === 'GPSX'}
                      />
                      <label htmlFor='GPSX'>GPS 정보를 사용하지 않을게요</label>
                    </div>
                  </div>
                </div>

              </Card.Body>
            </Card>}

            {(GPS === 'GPSO') && <Card className="survey-card-view">
              <Card.Body>
                <Question question="설문 가능 지역" />
                <div className="city-table">
                  {["서울", "부산", "대구", "광주", "인천", "대전", "울산", "경기", "강원", "제주"].map((city, index) => (
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

              </Card.Body></Card>
            }

            <Card className="survey-card-view">
              <Card.Body>
                <Question question="Survey Start Date" />
                <input
                  type="date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </Card.Body>
            </Card>

            <Card className="survey-card-view">
              <Card.Body>
                <Question question="Survey End Date" />
                <input
                  type="date"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </Card.Body>
            </Card>

            {questions.map((question) => (
              <Card key={question.id} className="survey-card-view">
                <Card.Body>
                  <p>Question: {question.text}</p>
                  <p>Type: {question.type}</p>
                  {question.type !== "서술형" && (
                    <div>
                      <p>Options:</p>
                      <ul>
                        {question.options.map((option, index) => (
                          <li key={index}>{index + 1}. {option}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card.Body>
              </Card>
            ))}

            <Card className="survey-card-view">
              <Card.Body>
                <Question question="Question Type" />
                <select value={type} onChange={handleTypeChange}>
                  <option value="">Select type</option>
                  <option value="객관식">객관식</option>
                  <option value="찬반식">찬반식</option>
                  <option value="서술형">서술형</option>
                </select>
              </Card.Body>
            </Card>

            {type && (
              <Card className="survey-card-view">
                <Card.Body>
                  <Question question="Question" />
                  <input
                    type="text"
                    value={question}
                    onChange={handleQuestionChange}
                    placeholder="Enter the question"
                  />
                </Card.Body>
              </Card>
            )}

            {type === "객관식" && (
              <Card className="survey-card-view">
                <Card.Body>
                  <h3 for="optionsInput"><b>Options</b></h3>
                  {options.map((option, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={option}
                        onChange={(event) => handleOptionTextChange(index, event)}
                        placeholder="Enter an option"
                      />
                    </div>
                  ))}
                  <br />
                  <button class="btn btn-primary" type="button" onClick={handleAddOption}>
                    Add Option
                  </button>
                </Card.Body>
              </Card>
            )}

            <button type="button" class="btn btn-primary" onClick={handleAddQuestion}>Add Question</button>

            <br /> <br /> <br />

            <button to="/completesurvey" type="submit" class="btn btn-primary">Submit</button><br />
            <p>{message}</p>
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
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              돌아가기
            </Button>
            <Button variant="primary" onClick={() => {
              setSurveyComplete(true);
              setShowModal(false)
            }}>
              설문 생성 완료
            </Button>
          </Modal.Footer>
        </Modal>


      </Container>
    </Container >
  );
}

export default Survey;