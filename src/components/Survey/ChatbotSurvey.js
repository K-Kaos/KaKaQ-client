import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom"

function ChatbotSurvey(props) {
  const location = useLocation();
  const [response, setResponse] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    if (location.state && location.state.response) {
      setResponse(location.state.response);
    }
  }, [location.state]);

  
  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answerIndex;
      return newAnswers;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // `selectedAnswers` 배열을 이용하여 선택된 답변을 저장하거나 처리하는 로직
  };

  if (response.length == 0) {
    return <div>Loading...</div>
  }

  const questionsAndAnswers = response[0].text.slice(2).split("\n\n").map((questionText, questionIndex) => {
    const options = questionText.split("\n").slice(1).map((optionText, optionIndex) => {
      return (
        <div key={optionIndex}>
          <input
            type="radio"
            id={`answer-${questionIndex}-${optionIndex}`}
            name={`answer-${questionIndex}`}
            value={optionIndex}
            checked={selectedAnswers[questionIndex] === optionIndex}
            onChange={() => handleAnswerSelect(questionIndex, optionIndex)}
          />
          <label htmlFor={`answer-${questionIndex}-${optionIndex}`}>{optionText}</label>
        </div>
      );
    });

    return (
      <div key={questionIndex}>
        <br/>
        <h4>{questionText.split("\n")[0]}</h4>
        <br />
        {options}
      </div>
    );
  });

  return (
    <Container fluid className="survey-header" >
      <Container class="flex items-center">
        <form onSubmit={(e) => {
          e.preventDefault();
          alert(`Chatbot based survey created! `);
          return true;
        }}>
          <h1 className="project-heading">
            Our <strong className="yellow">Chatbot-based </strong>Survey
          </h1>
          <p >
            Here is survey created by a chatbot
          </p><br />
          <br />
          <div>
            {questionsAndAnswers}
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Make Survey</button><br />
        </form>
      </Container>
    </Container>
  );
}

export default ChatbotSurvey;

