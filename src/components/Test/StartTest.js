import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

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
  const [options, setOptions] = useState(['예', '아니오']);

  function startTest() {
    axios.get("api/user/pt")
    .then(function (response) {
        console.log(response.data.choices[0].text);
        setData(response.data.choices[0].text);
        }
    )
  }

function slicingData() {
    const questionText = data.split('\n').slice(1);
    const questionOptions = questionText.map( () => options);
    setQuestions(questionText);
    setOptions(questionOptions);
}

function handleSubmit() {
    alert("테스트가 완료되었습니다.");
}

  return (
    <Container fluid className="survey-header" >
      <Container class="flex items-center">
        <button onClick={startTest}>유형테스트 시작</button>
        <br/>
        <button onClick={slicingData}>유형테스트 슬라이싱</button>
        <br />
        
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            {options[index].map((option, optionIndex) => (
              <button key={optionIndex}>{option}</button>
            ))}
          </div>
        ))}

        <button onClick={handleSubmit}>제출하기</button>s

      </Container>
    </Container>
  );
}

export default StartTest;