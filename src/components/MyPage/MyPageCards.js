import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";

export default function MyPageCards(props) {
  return (
    <Card className="timeline-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title >{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}

      </Card.Body>
    </Card>
  );
}

