import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
import axios from "axios";

function Survey() {
  let whoLoggedIn = null;
  useEffect(() => {
    whoLoggedIn = sessionStorage.getItem('whoLoggedIn');
    if (whoLoggedIn === null) {
      alert("로그인 후 이용해 주세요");
      window.location.href = "/login";
    }
  }, []);

  const [pages, setPages] = React.useState(["home"]);
  const [visibility, setVisibility] = useState('');
  const [GPS, setGPS] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [optionArr, setOptionsArr] = useState([]);
  const [message, setMessage] = useState("");
  const [showQuestionGenerator, setShowQuestionGenerator] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [city, setCity] = useState(false);
  const [creator, setCreator] = useState("");
  const [questionIndex, setQuestionIndex]= useState("");
  
  function handleCity(event) {
    setCity(event.target.value);
  }
  useEffect(() => {
    setCreator(sessionStorage.getItem("IdLoggedIn"));
    console.log(sessionStorage.getItem("IdLoggedIn"));
  }, []);
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
      setOptions(null);
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
    // setOptionsArr([...options, options.join(",")]);
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
  
    axios.post("/api/survey/create", {//survey db 데이터 보내기
      title: title,
      // GPS: GPS,
      city: city,
      startDate: startDate,
      endDate: endDate,
      public_state: visibility,
      creator: {
        "id": creator
      },
    }).then(function(response){
      console.log(creator);
      console.log(response.data);
      setQuestionIndex(response.data);
  
      // 설문조사 질문 생성
      const promises = questions.map((question) => (
        axios.post("/api/survey/question",{
          text: question.text,//질문
          type:{
            name: question.type
          },
          option: question.option ? question.option.join(",") : undefined,//답변들이 ,를 기준으로 string으로 들어감
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
  


  return (
    <Container fluid className="survey-header" >
      <Container>
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
              <input
                type='radio'
                id='public'
                name='visibility'
                value='public'
                onChange={handleVisibility}
                checked={visibility === 'public'} />
              <label for='public'>public</label><br />
              <input
                type='radio'
                id='private'
                name='visibility'
                value='private'
                onChange={handleVisibility}
                checked={visibility === 'private'} />
              <label for='private'>private</label>
              <br />
            </Card.Body>
          </Card>

          {(visibility === 'public') && <Card className="survey-card-view">
            <Card.Body>
              <Question question="GPS 사용 여부" />
              <input
                type='radio'
                id='GPSO'
                name='gps'
                value='GPSO'
                onChange={handleGPS}
                checked={GPS === 'GPSO'} />
              <label for='GPSO'>YES!</label><br />
              <input
                type='radio'
                id='GPSX'
                name='gps'
                value='GPSX'
                onChange={handleGPS}
                checked={GPS === 'GPSX'} />
              <label for='GPSX'>NO!</label>
              <br />
            </Card.Body>
          </Card>}

          {(GPS === 'GPSO') && <Card className="survey-card-view">
            <Card.Body>
              <Question question="설문 가능 지역" />
              <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input
                  type='checkbox'
                  id='seoul'
                  name='city'
                  value='seoul'
                  onChange={handleCity} />
                <label for='seoul'>Seoul </label><br />
                <input
                  type='checkbox'
                  id='busan'
                  name='city'
                  value='busan'
                  onChange={handleCity} />
                <label for='busan'>Busan </label><br />
                <input
                  type='checkbox'
                  id='daegu'
                  name='city'
                  value='daegu'
                  onChange={handleCity} />
                <label for='daegu'>Daegu </label><br />
                <input
                  type='checkbox'
                  id='gwangju'
                  name='city'
                  value='gwangju'
                  onChange={handleCity} />
                <label for='gwangju'>Gwangju </label><br />
                <input
                  type='checkbox'
                  id='incheon'
                  name='city'
                  value='incheon'
                  onChange={handleCity} />
                <label for='incheon'>Incheon </label><br />
                <input
                  type='checkbox'
                  id='daejeon'
                  name='city'
                  value='daejeon'
                  onChange={handleCity} />
                <label for='daejeon'>Daejeon </label><br />
                <input
                  type='checkbox'
                  id='ulsan'
                  name='city'
                  value='ulsan'
                  onChange={handleCity} />
                <label for='ulsan'>Ulsan </label><br />
                <input
                  type='checkbox'
                  id='gyeonggi'
                  name='city'
                  value='gyeonggi'
                  onChange={handleCity} />
                <label for='gyeonggi'>Gyeonggi </label><br />
                <input
                  type='checkbox'
                  id='gangwon'
                  name='city'
                  value='gangwon'
                  onChange={handleCity} />
                <label for='gangwon'>Gangwon </label><br />
                <input
                  type='checkbox'
                  id='jeju'
                  name='city'
                  value='jeju'
                  onChange={handleCity} />
                <label for='jeju'>Jeju </label><br />
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
                        <li key={index}>{option}</li>
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

          <button type="submit" class="btn btn-primary">Submit</button><br />
          <p>{message}</p>
        </form>
      </Container>
    </Container>
  );
}

export default Survey;