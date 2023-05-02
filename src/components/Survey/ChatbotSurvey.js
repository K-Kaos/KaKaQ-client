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
  
      const newQuestions = location.state.response[0].text
        .split("\n\n")
        .slice(1)
        .map((questionText, questionIndex) => {
          const options = questionText
            .split("\n")
            .slice(1)
            .map((optionText, optionIndex) => {
              return {
                text: optionText.slice(5),
                value: optionIndex,
              };
            });
  
          return {
            id: questionIndex + 1,
            text: questionText.split("\n")[0].slice(3),
            type: "객관식",
            options: options,
          };
        });
  
      setQuestions(newQuestions);
    }
  }, [location.state]);
  
  useEffect(() => {
    console.log(questions);
  }, [questions]);
  
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

  const questionsAndAnswers = questions.map((question, questionIndex) => {
    const options = question.options.map((option, optionIndex) => {
      return (
        <div key={optionIndex}>
          <input
            type="radio"
            id={`answer-${questionIndex}-${optionIndex}`}
            name={`answer-${questionIndex}`}
            value={option.value}
            checked={selectedAnswers[questionIndex] === option.value}
            onChange={() => handleAnswerSelect(questionIndex, option.value)}
          />
          <label htmlFor={`answer-${questionIndex}-${optionIndex}`}>{optionIndex + 1}. {option.text}</label>
        </div>
      );
    });
  
    return (
      <div key={questionIndex}>
        <br/>
        <h4>{questionIndex + 1}. {question.text}</h4>
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
          <br/>
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Make Survey</button><br />
        </form>
      </Container>
    </Container>
  );
}

export default ChatbotSurvey;

