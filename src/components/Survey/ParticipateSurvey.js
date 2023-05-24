import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom"
import axios from "axios";
// import { error } from "console";

function ParticipateSurvey(props) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

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
          <label htmlFor={`answer-${questionIndex}-${optionIndex}`}>{optionIndex + 1}. {option}</label>
        </div>
      );
    });

    const answerInput = question.type.name === "서술형" ? (
      <input
        type="text"
        value={selectedAnswers[questionIndex] || ""}
        onChange={(event) => handleAnswerSelect(questionIndex, event.target.value)}
        class="m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-3/5 p-2.5 " />
    ) : null;


    return (
      <div key={questionIndex}>
        <br />
        <h4>{questionIndex + 1}. {question.text}</h4>
        <div>{options}
          {answerInput}</div>
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
    const LoggedInUser = sessionStorage.getItem('whoLoggedIn');
    if (LoggedInUser === null) {
      alert("로그인 후 이용해 주세요");
      window.location.href = "/login";
    } else {
      setWhoLeggedIn(LoggedInUser);

      // 서버로 LoggedInUser 보내기
      fetch('/api/surveys/get/' + id)
        .then(response => response.json())
        .then(data => {
          console.log('서버 응답:', data);
          setTitle(data.title);
          setCategory(data.category);
          setQuestions(data.questions);
        })
        .catch(error => console.error('오류 발생:', error));
    }
  }, []);

  function handleSubmit(event) {
    console.log("소중한 의견이 제출되었어요.")
  }

  return (
    <Container fluid className="survey-header max-w-3xl mx-auto" >
      <Container className="m-auto mx-10">
        <form onSubmit={(e) => {
          e.preventDefault();
          alert(`소중한 의견이 제출되었어요.`);
          return true;
        }}>
          <h1 className="project-heading">
            설문조사 <strong className="yellow">참여하기 </strong>
          </h1>
          <br />
          <p >
            <h5>제목: {title}</h5>
          </p><br />
          <p>카테고리: {category}</p>
          <br />
          <div>
            {questionsAndAnswers}
          </div>
          <br />
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>설문조사 완료</button><br />
          {/* <h2 style={{ color: "white" }}>{message}</h2> */}
        </form>
      </Container>
    </Container>
  );
}

export default ParticipateSurvey;

