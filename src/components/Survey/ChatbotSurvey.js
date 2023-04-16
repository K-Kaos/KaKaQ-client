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

function ChatbotSurvey(props) {
  const [pages, setPages] = React.useState(["home"]);
  const [message, setMessage] = React.useState('');

  return (
    <Container fluid className="survey-header" >
      <Container class="flex items-center">
        <form onSubmit={(e) => {
          e.preventDefault();
          alert(`Chatbot based survey created! `);
          return true;
        }}>
          <h1 className="project-heading">
            Our <strong className="yellow">Chatbot-based </strong>Survey 
          </h1>
          <p >
            Here is survey created by a chatbot
          </p><br />
            <Card className="survey-card-view ">
            <Card.Body>
              <Question question="1. Type your full name" />
              <RadioGroup>
                <Radio name="gender" value="Man" defaultChecked>
                  Man
                </Radio>
                <br />
                <Radio name="gender" value="Woman">
                  Woman
                </Radio><br />
                <Radio name="gender" value="Woman">
                  Woman
                </Radio><br />
                <Radio name="gender" value="Woman">
                  Woman
                </Radio><br />
                <Radio name="gender" value="Woman">
                  Woman
                </Radio><br />
              </RadioGroup>
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
                </Radio><br />
                <Radio name="gender" value="Woman">
                  Woman
                </Radio><br />
                <Radio name="gender" value="Woman">
                  Woman
                </Radio><br />
                <Radio name="gender" value="Woman">
                  Woman
                </Radio><br />
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
              <Question question="5. Type your address" />
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

          <button type="submit" class="btn btn-primary">Make Survey</button><br />
          <h2 style={{ color: "white" }}>{message}</h2>
        </form>
      </Container>
    </Container>
  );
}

export default ChatbotSurvey;