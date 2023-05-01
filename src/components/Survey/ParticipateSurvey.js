import React, { useState } from "react";
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

function ParticipateSurvey() {
  const [message, setMessage] = useState("");
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage('설문조사가 제출되었습니다.');

    setTimeout(() => {
      setMessage('');
    }, 3000);
  }

  function handleQ1(event) {
    setQ1(event.target.value);
  }
  function handleQ2(event) {
    setQ2(event.target.value);
  }
  function handleQ3(event) {
    setQ3(event.target.value);
  }

  return (
    <Container >
      <Container>
        <form onSubmit={handleSubmit}>
          <h1 className="participate-heading">
            <strong> 설문조사 제목 </strong>
          </h1><br/>

          {/* 객관식일 때  */}
          {/* question.type === "객관식" */}
          <Card className="survey-card-view">
            <Card.Body>
              <Question question="질문1" />
              <input
                type='radio'
                id='q1_o1'
                name='q1'
                value='q1_o1'
                onChange={handleQ1}
                checked={q1 === 'q1_o1'} />
              <label for='q1_o1'>question1_option1</label><br />
              <input
                type='radio'
                id='q1_o2'
                name='q1'
                value='q1_o2'
                onChange={handleQ1}
                checked={q1 === 'q1_o2'} />
              <label for='q1_o2'>question1_option2</label><br />
              <input
                type='radio'
                id='q1_o3'
                name='q1'
                value='q1_o3'
                onChange={handleQ1}
                checked={q1 === 'q1_o3'} />
              <label for='q1_o3'>question1_option3</label><br />
              <input
                type='radio'
                id='q1_o4'
                name='q1'
                value='q1_o4'
                onChange={handleQ1}
                checked={q1 === 'q1_o4'} />
              <label for='q1_o4'>question1_option4</label><br />
              <input
                type='radio'
                id='q1_o5'
                name='q1'
                value='q1_o5'
                onChange={handleQ1}
                checked={q1 === 'q1_o5'} />
              <label for='q1_o5'>question1_option5</label><br />
            </Card.Body>
          </Card>

          {/* 찬반식일 때  */}
          {/* question.type === "찬반식" */}
          <Card className="survey-card-view">
            <Card.Body>
              <Question question="질문2" />
              <input
                type='radio'
                id='q2_true'
                name='q2'
                value='q2_true'
                onChange={handleQ2}
                checked={q2 === 'q2_true'} />
              <label for='q2_true'>question2_true</label><br />
              <input
                type='radio'
                id='q2_false'
                name='q2'
                value='q2_false'
                onChange={handleQ2}
                checked={q2 === 'q2_false'} />
              <label for='q2_false'>question2_true</label><br />
            </Card.Body>
          </Card>

          {/* 서술형일 때  */}
          {/* question.type === "서술형" */}
          <Card className="survey-card-view">
            <Card.Body>
              <Question question="질문3" />
              <input
                type='text'
                id='q3'
                name='q3'
                onChange={handleQ3} />
            </Card.Body>
          </Card>

          <button type="submit" class="btn btn-primary">Submit</button><br />
          <p>{message}</p>
        </form>
      </Container>
    </Container>
  );
}

export default ParticipateSurvey;
