import React, { useState, useEffect } from 'react';
import TopicInput from './TopicInput';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ChatbotSurvey from './ChatbotSurvey';
import { CardGroup, Container, ProgressBar, Spinner } from "react-bootstrap";
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
    const [category, setCategory] = useState('');
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

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
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
                navigate("/chatbotsurvey", { state: { response: response.data.choices, survey_title: title, survey_GPS: GPS, survey_city: city, survey_start: startDate, survey_end: endDate, survey_visibility: visibility } });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get("/api/")
        alert(topic + ' 주제로 설문조사를 만들어드릴게요!' + visibility + GPS + '\n' + startDate + '-' + endDate + '\n');
        //console.log(geoData);
    }

    return (
        <Container fluid className="survey-header max-w-3xl mx-auto" >
            <Container className="m-auto mx-10">
                <form onSubmit={handleSubmit}>
                    <h1 className="project-heading">
                        챗봇 설문조사 <strong className="yellow">생성하기 </strong>
                    </h1>
                    <p>
                        챗봇을 이용하여 보다 편리하고 간단하게 설문조사를 생성합니다.
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

                    <Card className="survey-card-view ">
                        <Card.Body>
                            <Question question="설문조사 카테고리" />
                            <input
                                type="text"
                                value={category}
                                onChange={handleCategoryChange}
                                placeholder="설문조사 카테고리를 입력해주세요."
                                className="m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                    <CardGroup>
                        <Card className="survey-card-view">
                            <Card.Body>
                                <Question question="설문 시작일" />
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                />
                            </Card.Body>
                        </Card>

                        <Card className="survey-card-view">
                            <Card.Body>
                                <Question question="설문 마감일" />
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                />
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <div className="flex justify-center">
                        <button type="submit" className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={loading}>
                            {loading ? (
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading</span>
                                </Spinner>
                            ) : (
                                '챗봇으로 설문조사 생성하기'
                            )}
                        </button>
                    </div>
                </form>
                <br />
            </Container>
        </Container>
    );
}

export default Chatbot;