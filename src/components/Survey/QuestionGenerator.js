import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Question from './Question';
import InputBox from './InputBox';

function QuestionGenerator() {
    const [questionType, setQuestionType] = useState('');
    const [showSurveyCard, setShowSurveyCard] = useState(false);
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [surveyData, setSurveyData] = useState(null);

    const handleQuestionTypeChange = (event) => {
        setQuestionType(event.target.value);
    };

    const handleGenerateQuestion = () => {
        setShowSurveyCard(true);
    };

    const handleGoBack = () => {
        setShowSurveyCard(false);
        setQuestionType('');
        setQuestion('');
        setOptions([]);
    };

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    }

    const handleOptionChange = (index, event) => {
        const newOptions = [...options];
        newOptions[index] = event.target.value;
        setOptions(newOptions);
    };

    const handleAddOption = () => {
        const newOptions = [...options];
        newOptions.push('');
        setOptions(newOptions);
    };


    const handleSaveQuestion = () => {
        console.log('질문: ' + {question})
        console.log('선택지: ' + {options})

        const surveyData = {
            question,
            options
        };

        setSurveyData(surveyData);
        setShowSurveyCard(true);
    };

    if (showSurveyCard) {
        return (
            <div>
                <Card className="survey-card-view">
                    <Card.Body>
                        <Form.Group>
                            <Form.Label>{questionType} 질문</Form.Label>
                            <Form.Control type="text" value={question} onChange={handleQuestionChange} />
                        </Form.Group>
                        {options.map((option, index) => (
                            <Form.Group key={index}>
                                <Form.Label>선택지 {index + 1}</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={option}
                                    onChange={(event) => handleOptionChange(index, event)}
                                />
                            </Form.Group>
                        ))}
                        <Button variant="primary" onClick={handleAddOption}>
                            선택지 추가
                        </Button>
                    </Card.Body>
                </Card>
                <Button className="btn btn-secondary" onClick={handleGoBack}>
                    돌아가기
                </Button>
                <Button className="btn btn-primary" onClick={handleSaveQuestion}>
                    저장
                </Button>
            </div>
        );
    }

    return (
        <div>
            <h2>질문 생성기</h2>
            <div>
                <label>
                    <input
                        type='radio'
                        value='multipleChoice'
                        checked={questionType === 'multipleChoice'}
                        onChange={handleQuestionTypeChange}
                    />
                    객관식 질문
                </label>
            </div>
            <div>
                <label>
                    <input
                        type='radio'
                        value='trueFalse'
                        checked={questionType === 'trueFalse'}
                        onChange={handleQuestionTypeChange}
                    />
                    찬부식 질문
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value='openEnded'
                        checked={questionType === 'openEnded'}
                        onChange={handleQuestionTypeChange}
                    />
                    서술형 질문
                </label>
            </div>
            <button class="btn btn-primary" onClick={handleGenerateQuestion}>질문 생성</button>
            <br />
        </div>
    );
}

export default QuestionGenerator;