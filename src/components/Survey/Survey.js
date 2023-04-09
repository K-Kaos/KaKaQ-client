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
import TypeQuestion from "./TypeQuestion";

function Survey(props) {
  const [pages, setPages] = React.useState(["home"]);
  const [message, setMessage] = React.useState('');

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

          <Card className="survey-card-view ">
            <Card.Body>
              <Question question="Survey Title" />
              <InputBox id="survey-title" name="survey title" value="survey-title" size="50" ></InputBox>
            </Card.Body>
          </Card>

          <Card className="survey-card-view">
            <Card.Body>
              <Question question="Option" />
              <RadioGroup>
                <Radio name="option" value="public" defaultChecked>
                  Public
                </Radio>
                <br/>
                <Radio name="option" value="private">
                  Private
                </Radio>
                <br/>
                <Radio name="gps" value="gps">
                  GPS
                </Radio>
              </RadioGroup>
              <br />
            </Card.Body>
          </Card>

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

          <button type="submit" class="btn btn-primary">Submit</button><br />
          <h2 style={{ color: "white" }}>{message}</h2>
        </form>
      </Container>
    </Container>
  );
}

export default Survey;