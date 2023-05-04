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
import OpenSurvey from "./OpenSurvey"

function Survey(props) {
  const [pages, setPages] = React.useState(["home"]);
  const [message, setMessage] = React.useState('');

  return (
    <Container fluid className="home-section">
      <Container className="home-content">
        <form onSubmit={(e) => {
          e.preventDefault();
          alert(`Thank you for submitting ${e.target.firstName.value} ${e.target.lastName.value}! `);
          setMessage(`Thank you for submitting ${e.target.firstName.value} ${e.target.lastName.value}! `);
          return true;
        }}>

          <OpenSurvey />

          <button type="submit" class="btn btn-primary">Submit</button><br />
          <h2>{message}</h2>
        </form>
      </Container>
    </Container>
  );
}

export default Survey;