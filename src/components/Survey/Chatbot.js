import React, { useState, useEffect } from 'react';
import TopicInput from './TopicInput';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ChatbotSurvey from './ChatbotSurvey';
import { ProgressBar, Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Question from "./Question";

function Chatbot() {
    let whoLoggedIn = null;
    useEffect(() => {
        whoLoggedIn = sessionStorage.getItem('whoLoggedIn');
        if (whoLoggedIn === null) {
            alert("로그인 후 이용해 주세요");
            window.location.href = "/login";
        }
    }, []);

    const [topic, setTopic] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false); // 로딩 상태를 관리하는 상태 변수 추가
    const [visibility, setVisibility] = useState('');
    const [GPS, setGPS] = useState(false);
    const [city, setCity] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");



    function handleGPS(event) {
        // if(event.target.value === 'GPSO') {
        //   navigator.geolocation.getCurrentPosition(function(pos){
        //     setgeoData((prevData) =>({
        //         ...prevData,
        //       ["latitude"]: pos.coords.latitude,
        //       ["longitude"]: pos.coords.longitude,
        //     }));
        //     // setGPS(event.target.value);
        //     //console.log(geoData);
        //   });
        // }
        setGPS(event.target.value);
    }

    function handleCity(event) {
        setCity(event.target.value);
        console.log(city)
    }
    function handleTopicChange(event) {
        setTopic(event.target.value);
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleVisibility(event) {
        setVisibility(event.target.value);
    }
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    }
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true); // 데이터 요청 전 로딩 상태를 true로 변경
        axios.get("/api/survey/chatbot?topic=" + topic)
            .then(function (response) {
                navigate("/chatbotsurvey", { state: { response: response.data.choices , survey_title: title, survey_GPS: GPS, survey_city: city, survey_start: startDate, survey_end: endDate, survey_visibility: visibility} });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get("/api/")
        alert(topic + ' 주제로 설문조사를 만들어드릴게요!' + visibility + GPS + '\n' + startDate + '-' + endDate + '\n');
        //console.log(geoData);
    }

    return (
        <div className='surveys'>
            <div className='surveys__container'>
                <form onSubmit={handleSubmit}>
                    <h1 className="project-heading">
                        Our <strong className="yellow">Chatbot </strong>Survey
                    </h1>
                    <p>
                        공개 설문조사로 업로드하면 검색으로 누구나 내 설문에 참여할 수 있어요!
                    </p><br />
                    <Card className="survey-card-view">
                        <Card.Body>
                            <Question question="설문조사 주제" />
                            <TopicInput
                                label="Topic"
                                name="topic"
                                value={topic}
                                onChange={handleTopicChange}
                            /><br />
                        </Card.Body>
                    </Card>

                    <Card className="survey-card-view">
                        <Card.Body>
                            <Question question="설문조사 제목" />
                            <TopicInput
                                label="Title"
                                name="title"
                                value={title}
                                onChange={handleTitleChange}
                            /><br />
                        </Card.Body>
                    </Card>

                    <Card className="survey-card-view">
                        <Card.Body>
                            <Question question="설문조사 공개/비공개" />
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type='radio'
                                            id='public'
                                            name='visibility'
                                            value='public'
                                            onChange={handleVisibility}
                                            checked={visibility === 'public'}
                                        />
                                        <label htmlFor='public'>공개 설문으로 생성할게요</label>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type='radio'
                                            id='private'
                                            name='visibility'
                                            value='private'
                                            onChange={handleVisibility}
                                            checked={visibility === 'private'}
                                        />
                                        <label htmlFor='private'>비공개 설문으로 생성할게요</label>
                                    </div>
                                </div>
                            </div>

                            <br />
                        </Card.Body>
                    </Card>

                    {(visibility === 'public') && <Card className="survey-card-view">
                        <Card.Body>
                            <Question question="GPS 사용 여부" />
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type='radio'
                                            id='GPSO'
                                            name='gps'
                                            value='GPSO'
                                            onChange={handleGPS}
                                            checked={GPS === 'GPSO'}
                                        />
                                        <label htmlFor='GPSO'>GPS 정보를 사용할게요</label>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type='radio'
                                            id='GPSX'
                                            name='gps'
                                            value='GPSX'
                                            onChange={handleGPS}
                                            checked={GPS === 'GPSX'}
                                        />
                                        <label htmlFor='GPSX'>GPS 정보를 사용하지 않을게요</label>
                                    </div>
                                </div>
                            </div>

                            <br />

                        </Card.Body>
                    </Card>}

                    {(GPS === 'GPSO') && <Card className="survey-card-view">
                        <Card.Body>
                            <Question question="설문 가능 지역" />
                            <div className="city-table">
                                {["서울", "부산", "대구", "광주", "인천", "대전", "울산", "경기", "강원", "제주"].map((city, index) => (
                                    <div key={index}>
                                        <input
                                            type="checkbox"
                                            id={city.toLowerCase()}
                                            name="city"
                                            value={city.toLowerCase()}
                                            onChange={handleCity}
                                        />
                                        <label htmlFor={city.toLowerCase()}>{city}</label>
                                    </div>
                                ))}
                            </div>

                        </Card.Body></Card>
                    }
                    <Card className="survey-card-view">
                        <Card.Body>
                            <Question question="Survey Start Date" />
                            <input
                                type="date"
                                value={startDate}
                                onChange={handleStartDateChange}
                            />
                        </Card.Body>
                    </Card>

                    <Card className="survey-card-view">
                        <Card.Body>
                            <Question question="Survey End Date" />
                            <input
                                type="date"
                                value={endDate}
                                onChange={handleEndDateChange}
                            />
                        </Card.Body>
                    </Card>
                    <button type="submit" class="btn btn-primary" disabled={loading}>
                        {loading ? (
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading</span>
                            </Spinner>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Chatbot;