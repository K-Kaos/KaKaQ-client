import React from "react";
import { Card, Button } from "react-bootstrap";

function SurveyCompletion({ handleShare }) {
  return (
    <Card className="survey-card-view ">
    <Card.Body>
      <h1 className="text-3xl font-bold tracking-tight sm:text-3xl">설문 생성이 완료되었습니다!</h1>
      <p className="mt-4 text-lg leading-8 text-gray-700">새로운 설문을 생성하시려면 <a href="/survey">여기를 클릭하세요</a>.</p>
      <Button className="btn flex bg-white border border-gray-300 rounded-lg hover:bg-gray-100 font-medium p-2.5 text-black bg-primary-600 hover:bg-primary-700 px-4 mt-3" onClick={handleShare}>
        공유하기
      </Button>
      </Card.Body>
    </Card>
  );
}

export default SurveyCompletion;
