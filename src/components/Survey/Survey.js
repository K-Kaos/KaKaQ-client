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

function Survey(props) {
  const [pages, setPages] = React.useState(["home"]);
  const [message, setMessage] = React.useState('');
  const [visibility, setVisibility] = useState('');
  const [GPS, setGPS] = useState(false);
  const [content, setContent] = useState();
  const [navColour, updateNavbar] = useState(false);
  const [ showQuestionGenerator, setShowQuestionGenerator ] = useState(false);

  const handleShowQuestionGenerator = () => {
    setShowQuestionGenerator(true);
  }
  
  function handleDropdown() {
    const dropdownNavbar = document.getElementById("dropdownNavbar");
    dropdownNavbar.classList.toggle("hidden");
  }
  
  function handleVisibility(event) {
    setVisibility(event.target.value);
  }
  function handleGPS(event) {
    setGPS(event.target.value);
  }
  return (
    <Container fluid className="survey-header" >
      <Container>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert(`제출 `);
          return true;
        }}>
          <h1 className="project-heading">
            Our <strong className="yellow">Survey </strong>
          </h1>
          <p>
            Here is a survey we're working on recently.
          </p><br />
          <div class="flex flex-col items-center justify-center">
            <ol class="flex items-center w-full">
              <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                  <svg aria-hidden="true" class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </span>
              </li>
              <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </span>
              </li>
              <li class="flex items-center w-full">
                <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                </span>
              </li>
            </ol>
          </div>
          <Card className="survey-card-view ">
            <Card.Body>
              <Question question="Survey Title" />
              <InputBox id="survey-title" name="survey title" value="survey-title" size="50" ></InputBox>
            </Card.Body>
          </Card>

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

          <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" class="btn btn-primary">1</button>
            <button type="button" class="btn btn-primary">2</button>

            <div class="btn-group" role="group">
              <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                <li><a class="dropdown-item" href="#">Dropdown link</a></li>
              </ul>
            </div>
          </div><br />

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="Type the Title of Question1" />
              <InputBox id="q1-title" name="question title" value="q1-title" size="50" ></InputBox><br></br>
              <Question question="Type the Lists of Question1" />
              <InputBox id="q1-l1" name="list1" value="q1-l1" size="50" ></InputBox>
              <InputBox id="q1-l2" name="list2" value="q1-l2" size="50" ></InputBox>
              <br />
            </Card.Body>
          </Card>

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="Type the Title of Question2" />
              <InputBox id="q2-title" name="question title" value="q-title1" size="50" ></InputBox><br></br>
            </Card.Body>
          </Card>

          <div>
            <h1>질문 생성기</h1>
            {showQuestionGenerator ? (
              <QuestionGenerator />
            ) : (
              <buttion class="btn btn-primary" onClick={handleShowQuestionGenerator}>+</buttion>
            )}
          </div>

          <button type="submit" class="btn btn-primary">Submit</button><br />
          <h2 style={{ color: "white" }}>{message}</h2>
        </form>
      </Container>
    </Container>
  );
}

export default Survey;