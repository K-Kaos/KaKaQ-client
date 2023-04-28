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
{/* 
          <Card className="survey-card-view">
            <Card.Body>
              <Question question="Option" />
              <input
                type='radio'
                id='public'
                name='visibility'
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
          </Card>

          {(visibility === 'public') && <Card className="survey-card-view">
            <Card.Body>
              <Question question="설문조사 공개 여부" />
              <input
                type='radio'
                id='GPSO'
                name='gps'
                value='GPSO'
                onChange={handleGPS}
                checked={GPS === 'GPSO'} />
              <label for='GPSO'>YES!</label><br />
              <input
                type='radio'
                id='GPSX'
                name='gps'
                value='GPSX'
                onChange={handleGPS}
                checked={GPS === 'GPSX'} />
              <label for='GPSX'>NO!</label>
              <br />
            </Card.Body>
          </Card>}

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="Survey Start Date" />
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </Card.Body>
          </Card>

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="Survey End Date" />
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </Card.Body>
          </Card>

          {questions.map((question) => (
            <Card key={question.id} className="survey-card-view">
              <Card.Body>
                <p>Question: {question.text}</p>
                <p>Type: {question.type}</p>
                {question.type !== "서술형" && (
                <div>
                  <p>Options:</p>
                  <ul>
                    {question.options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
                )}
              </Card.Body>
            </Card>
          ))}

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="Question Type" />
              <select value={type} onChange={handleTypeChange}>
                <option value="">Select type</option>
                <option value="객관식">객관식</option>
                <option value="찬반식">찬반식</option>
                <option value="서술형">서술형</option>
              </select>
            </Card.Body>
          </Card>

          {type && (
            <Card className="survey-card-view">
              <Card.Body>
                <Question question="Question" />
                <input
                  type="text"
                  value={question}
                  onChange={handleQuestionChange}
                  placeholder="Enter the question"
                />
              </Card.Body>
            </Card>
          )}

          {type === "객관식" && (
            <Card className="survey-card-view">
              <Card.Body>
                <h3 for="optionsInput"><b>Options</b></h3>
                {options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={option}
                      onChange={(event) => handleOptionTextChange(index, event)}
                      placeholder="Enter an option"
                    />
                  </div>
                ))}
                <br />
                <button class="btn btn-primary" type="button" onClick={handleAddOption}>
                  Add Option
                </button>
              </Card.Body>
            </Card>
          )} */}

          {/* <button type="button" class="btn btn-primary" onClick={handleAddQuestion}>Add Question</button> */}


          <button type="submit" class="btn btn-primary">Submit</button><br />
          <p>{message}</p>
        </form>
      </Container>
    </Container>
  );
}

export default ParticipateSurvey;
