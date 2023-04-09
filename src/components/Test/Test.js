import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";
import Checkbox from "./CheckBox";
import CheckboxGroup from "./CheckboxGroup";
import InputBox from "./InputBox";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import Particle from "../Particle";

function Test(props) {
  const [pages, setPages] = React.useState(["home"]);
  const [message, setMessage] = React.useState('');

  return (
    <Container fluid className="survey-header" >
      <Container>
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