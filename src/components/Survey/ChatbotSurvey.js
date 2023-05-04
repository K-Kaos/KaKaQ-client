import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom"
import axios from "axios";
// import { error } from "console";

function ChatbotSurvey(props) {
  const location = useLocation();
  const [response, setResponse] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [title, setTitle] = useState('');
  const [GPS, setGPS] = useState(false);
  const [visibility, setVisibility] = useState('');
  const [city, setCity] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [creator, setCreator] = useState("");

  useEffect(() => {//페이지에서 설정한 데이터들 가져오기
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
    if (location.state && location.state.survey_title) {
      setTitle(location.state.survey_title);
    }
    if (location.state && location.state.survey_GPS) {
      setGPS(location.state.survey_GPS);
    }
    if (location.state && location.state.survey_city) {
      setCity(location.state.survey_city);
    }
    if (location.state && location.state.survey_start) {
      setStartDate(location.state.survey_start);
    }
    if (location.state && location.state.survey_end) {
      setEndDate(location.state.survey_end);
    }
    if (location.state && location.state.survey_visibility) {
      setVisibility(location.state.survey_visibility);
    }
    setCreator(sessionStorage.getItem("WhoLoggedIn"));
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

    const surveyData = {
      questions: response[0].text.slice(2).split("\n\n"),
      answers: selectedAnswers,
    };

    return (
      <div key={questionIndex}>
        <br />
        <h4>{questionIndex + 1}. {question.text}</h4>
        <br />
        {options}
      </div>
    );
  });

  // console.log(questionsAndAnswers);

  function handleSubmit(event) {
    console.log(questionsAndAnswers[0]);
    axios.post("/api/survey/create", {//survey db 데이터 보내기
      title: title,
      // GPS: GPS,
      city: city,
      startDate: startDate,
      endDate: endDate,
      public_state: visibility,
      user: {
        "email": creator
      },
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });

    // axios.post("/api/survey/question", {//question db 데이터 보내기
    // }).then(function(response){
    // }).catch(function(error){
    //   console.log(error);
    // });
  }

  return (
    <Container fluid className="survey-header" >
      <Container className="flex items-center">
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
          <br />
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Make Survey</button><br />
          {/* <h2 style={{ color: "white" }}>{message}</h2> */}
        </form>
      </Container>
    </Container>
  );
}

export default ChatbotSurvey;

