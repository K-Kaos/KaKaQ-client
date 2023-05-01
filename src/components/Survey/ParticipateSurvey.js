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

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage('설문조사가 제출되었습니다.');

    setTimeout(() => {
      setMessage('');
    }, 3000);
  }

  return (
    <Container >
      <Container>
        <form onSubmit={handleSubmit}>
          <h1 className="participate-heading">
            <strong> 설문조사 제목 </strong>
          </h1>
          {/* <Card className="survey-card-view">
            <Card.Body>
              <Question question="질문 제목 1" />
              <input
                type='radio'
                id='q1_o1'
                name='q1_o'
                value='public'
                onChange={handleVisibility}
                checked={visibility === 'public'} />
              <label for='public'>public</label><br />
              <input
                type='radio'
                id='private'
                name='visibility'
                value='private'
                onChange={handleVisibility}
                checked={visibility === 'private'} />
              <label for='private'>private</label>
              <br />
            </Card.Body>
          </Card> */}

          <button type="submit" class="btn btn-primary">Submit</button><br />
          <p>{message}</p>
        </form>
      </Container>
    </Container>
  );
}

export default ParticipateSurvey;
