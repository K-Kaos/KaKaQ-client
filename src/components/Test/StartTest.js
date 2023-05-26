import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom"

function StartTest(props) {
  let whoLoggedIn = null;
  useEffect(() => {
    whoLoggedIn = sessionStorage.getItem('whoLoggedIn');
    if (whoLoggedIn === null) {
      alert("로그인 후 이용해 주세요");
      window.location.href = "/login";
    }
  }, []);
  const [pages, setPages] = React.useState(["home"]);
  const [message, setMessage] = React.useState('');
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const answerOptions = ["매우 아니다", "약간 아니다", "보통", "조금 그렇다", "매우 그렇다"];
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.response) {

      setQuestions(location.state.response.split("\n\n").slice(1));

    }
  }
    , [location.state]);


  const handleAnswerChange = (e, index) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = e.target.value;
    setSelectedAnswers(newSelectedAnswers);
    console.log(newSelectedAnswers);
  };

  function handleSubmit() {
    alert("테스트가 완료되었습니다.");
  }

  return (
    <Container fluid className="survey-header" >
      <Container class="flex items-center">
        <div>
          {questions.map((question, index) => (
            <div key={index}>
              <br/>
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
                    <label htmlFor={`option${index}-${optionIndex}`}>{option}&nbsp;</label>
                  </React.Fragment>
                  
                ))}
                <br />
              </div>
            </div>
          ))}
        </div>
        <br/>
        <button onClick={handleSubmit} class="btn-primary">제출하기</button>
      </Container>
    </Container>
  );
}

export default StartTest;