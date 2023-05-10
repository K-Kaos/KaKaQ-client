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
  const [message, setMessage] = useState("");

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
      city: city,
      startDate: startDate,
      endDate: endDate,
      publicState: visibility,
      user: {
        "email": creator
      },
    }).then(function (response) {
      console.log(creator);
      console.log(response.data);




      // 설문조사 질문 생성
      const promises = questions.map((question) => (
        axios.post("/api/survey/question?surveyId=" + response.data, {
          text: question.text,//질문
          type: {
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
      }).catch(function (error) {
        console.log(error);
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <Container fluid className="survey-header max-w-3xl mx-auto" >
      <Container className="m-auto mx-10">
        <form onSubmit={(e) => {
          e.preventDefault();
          alert(`Chatbot based survey created! `);
          return true;
        }}>
          <h1 className="project-heading">
            챗봇 설문조사 <strong className="yellow">생성하기 </strong>
          </h1>
          <p >
          챗봇을 이용하여 보다 편리하고 간단하게 설문조사를 생성합니다.
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

