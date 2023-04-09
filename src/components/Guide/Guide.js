import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import guidePic from "../../Assets/Projects/survey.png";

function Guide() {
  return (
    <section>
      <Container fluid className="guide-section">
        <Particle />
        <Container className="guide-content">
          <Row>
          <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={guidePic}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={7} className="guide-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Create an online form as easy as creating a document{" "}
              </h1>
              <p>
              Easily select from multiple question types, 
              create questions, and customize values.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Guide;
