import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TimelineCard from "./MyPageCards";
import Particle from "../Particle";

function MyPage() {
  return (
    <Container fluid className="mypage-section">
      <Particle />
      <Container>
        <h1 className="mypage-heading">
          My <strong className="yellow">page </strong>
        </h1>
        <p>
          마이페이지
        </p>
      </Container>
    </Container>
  );
}

export default MyPage;
