import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom"
import axios from "axios";
// import { error } from "console";

function ParticipateSurvey(props) {

  // const questionsAndAnswers = questions.map((question, questionIndex) => {
  //   const options = question.options.map((option, optionIndex) => {
  //     return (
  //       <div key={optionIndex}>
  //         <input
  //           type="radio"
  //           id={`answer-${questionIndex}-${optionIndex}`}
  //           name={`answer-${questionIndex}`}
  //           value={option.value}
  //           checked={selectedAnswers[questionIndex] === option.value}
  //           onChange={() => handleAnswerSelect(questionIndex, option.value)}
  //         />
  //         <label htmlFor={`answer-${questionIndex}-${optionIndex}`}>{optionIndex + 1}. {option.text}</label>
  //       </div>
  //     );
  //   });



  //   return (
  //     <div key={questionIndex}>
  //       <br />
  //       <h4>{questionIndex + 1}. {question.text}</h4>
  //       <br />
  //       {options}
  //     </div>
  //   );
  // });

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
          <p >
            
          </p><br />
          <br />
          <div>
            {/* {questionsAndAnswers} */}
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
