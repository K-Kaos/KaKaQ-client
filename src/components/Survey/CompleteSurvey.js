import React, { useEffect, useState } from "react";
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
import QuestionGenerator from "./QuestionGenerator";
import { RiQuestionAnswerFill } from "react-icons/ri";

function CompleteSurvey() {
    const surveyUrl = "#"
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(surveyUrl);
            alert('클립보드에 복사되었습니다.');
        } catch (err) {
            console.error('클립보드 복사에 실패하였습니다:', err);
        }
    };

    return (
        <Container fluid className="survey-header mx-md" class="flex flex-col items-center justify-center px-2 py-2 " style={{ maxWidth: "830px" }} >
            <Container class="p-20 px-10 space-y-4 md:space-y-6 sm:p-8" style={{ alignItems: "center" }}>
                <h1 >
                    Created <strong className="yellow">Survey </strong>
                </h1>
                <p>
                    설문 생성이 완료 되었습니다.
                </p><br />
                
                <button onClick={copyToClipboard}
                    class="w-1/2 flex items-center justify-center bg-white-50 border border-gray-300 rounded-lg hover:bg-gray-100 font-medium p-2 text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    설문조사 URL 복사하기
                </button><br/>
                <p>
                    생성된 설문조사 미리보기 넣을 것임
                </p><br />
            </Container>
        </Container >
    );
}

export default CompleteSurvey;