import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";
import Checkbox from "./CheckBox";
import CheckboxGroup from "./CheckboxGroup";
import InputBox from "./InputBox";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import axios from "axios";

function Test(props) {
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

  axios.get("api/user/pt")

  return (
    <Container fluid className="survey-header" >
      <Container class="flex items-center">
        <form onSubmit={(e) => {
          e.preventDefault();
          alert(`Thank you for submitting ${e.target.firstName.value} ${e.target.lastName.value}! `);
          setMessage(`Thank you for submitting ${e.target.firstName.value} ${e.target.lastName.value}! `);
          return true;
        }}>
          <h1 className="project-heading">
            Our <strong className="yellow">Type Test </strong>
          </h1>
          <p >
            Here is a Type Test.
          </p><br />
          {/* <div class="block flex items-center w-full">
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
          </div> */}

          <Card className="survey-card-view ">
            <Card.Body>
              <Question question="1. Type your full name" />
              <InputBox id="firstName" name="FirstName" value="firstName" size="20" ></InputBox>
              <InputBox id="lastName" name="LastName" value="lastName" size="20"></InputBox>
            </Card.Body>
          </Card>

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="2. Type your gender" />
              <RadioGroup>
                <Radio name="gender" value="Man" defaultChecked>
                  Man
                </Radio>
                <br />
                <Radio name="gender" value="Woman">
                  Woman
                </Radio>
              </RadioGroup>
              <br />
            </Card.Body>
          </Card>

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="3. Type your age group" />
              <RadioGroup>
                <Radio name="ageGroup" value="20s" defaultChecked>
                  20s
                </Radio>
                <br />
                <Radio name="ageGroup" value="30s">
                  30s
                </Radio>
                <br />
                <Radio name="ageGroup" value="40s">
                  40s
                </Radio>
                <br />
                <Radio name="ageGroup" value="50s">
                  50s
                </Radio>
                <br />
                <Radio name="ageGroup" value="60s">
                  60s
                </Radio>
              </RadioGroup>
              <br />
            </Card.Body>
          </Card>

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="4. Type your email address" />
              <InputBox id="email" name="Email" value="email" size="30"></InputBox>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </Card.Body>
          </Card>

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="5. Type your address" />
              <InputBox id="address" name="Address" value="address" size="50"></InputBox>
            </Card.Body>
          </Card>

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="6. Enter your favorite page" />
              <div class="mb-3">
                <CheckboxGroup
                  values={pages}
                  onChange={setPages}>
                  <Checkbox value="home"> Home</Checkbox>
                  <Checkbox value="about"> About</Checkbox>
                  <Checkbox value="projects"> Projects</Checkbox>
                  <Checkbox value="member"> Member</Checkbox>
                  <Checkbox value="timeline"> Timeline</Checkbox>
                </CheckboxGroup>
              </div>
            </Card.Body>
          </Card>

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="7. Enter your favorite KaKao character" />
              <div class="mb-3">
                <CheckboxGroup
                  values={pages}
                  onChange={setPages}>
                  <Checkbox value="char1"> 라이언</Checkbox>
                  <Checkbox value="char2"> 어피치</Checkbox>
                  <Checkbox value="char3"> 무지</Checkbox>
                  <Checkbox value="char4"> 프로도</Checkbox>
                  <Checkbox value="char5"> 네오</Checkbox>
                  <Checkbox value="char6"> 튜브</Checkbox>
                  <Checkbox value="char7"> 제이지</Checkbox>
                  <Checkbox value="char8"> 콘</Checkbox>
                  <Checkbox value="char9"> 춘식이</Checkbox>
                </CheckboxGroup>
              </div>
            </Card.Body>
          </Card>

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="8. Enter KaKao character that you want to profile" />
              <div class="mb-3">
                <CheckboxGroup
                  values={pages}
                  onChange={setPages}>
                  <Checkbox value="char1"> 라이언</Checkbox>
                  <Checkbox value="char2"> 어피치</Checkbox>
                  <Checkbox value="char3"> 무지</Checkbox>
                  <Checkbox value="char4"> 프로도</Checkbox>
                  <Checkbox value="char5"> 네오</Checkbox>
                  <Checkbox value="char6"> 튜브</Checkbox>
                  <Checkbox value="char7"> 제이지</Checkbox>
                  <Checkbox value="char8"> 콘</Checkbox>
                  <Checkbox value="char9"> 춘식이</Checkbox>
                </CheckboxGroup>
              </div>
            </Card.Body>
          </Card>

          <button type="submit" class="btn btn-primary">Submit</button><br />
          <h2 style={{ color: "white" }}>{message}</h2>
        </form>
      </Container>
    </Container>
  );
}

export default Test;