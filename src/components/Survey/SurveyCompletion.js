import React from "react";
import { Button } from "react-bootstrap";

function SurveyCompletion({ handleShare }) {
  return (
    <div>
      <h1>설문 생성이 완료되었습니다!</h1>
      <p>새로운 설문을 생성하시려면 <a href="/survey">여기를 클릭하세요</a>.</p>
      <Button variant="primary" style={{ marginTop: "20px" }} onClick={handleShare}>
        공유하기
      </Button>
    </div>
  );
}

export default SurveyCompletion;
