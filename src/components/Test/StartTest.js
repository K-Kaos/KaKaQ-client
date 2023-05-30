import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";

function StartTest(props) {
  let whoLoggedIn = null;
  
  const [pages, setPages] = React.useState(["home"]);
  const [message, setMessage] = React.useState('');
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const answerOptions = ["매우 아니다", "약간 아니다", "보통", "조금 그렇다", "매우 그렇다"];
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

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
    console.log(selectedAnswers);
  };

  function handleSubmit() {
    alert("테스트가 완료되었습니다.");
    console.log(selectedAnswers);
    var sum =0;
    for(var i=0; i<6; i++){
      if(selectedAnswers[i]=="매우 아니다") sum+=1;
      else if(selectedAnswers[i] == "약간 아니다") sum+=2;
      else if(selectedAnswers[i] == "보통") sum+=3;
      else if(selectedAnswers[i] == "조금 그렇다") sum+=4;
      else if(selectedAnswers[i] == "매우 그렇다") sum+=5;
    }
    var result="";
    if(sum>=6&&sum<=10) result = "라이언"
    else if(sum>10&&sum<=15) result = "어피치"
    else if(sum>15&&sum<=20) result = "콘"
    else if(sum>20&&sum<=25)  result = "춘식이"
    else if(sum>25&&sum<=30) result = "무지"
    axios.post("/api/user/register", {
      username: location.state.username,
      email: location.state.email,
      password: location.state.password,
      role : result,
    }).then(function (response) {
      console.log(response);
      const url = response.data;
      if (url.includes("/login")) {
        navigate("/login");
      } else if (url.includes("/duplicate")) {
          alert("이미 가입된 메일입니다.");
          navigate("/signup");
      }
    }).catch(function (error) {
      console.log(error);
      alert("회원가입 오류");
    });
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