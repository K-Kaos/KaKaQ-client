import React, { useState } from 'react';
import TopicInput from './TopicInput';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ChatbotSurvey from './ChatbotSurvey';
import { ProgressBar, Spinner } from "react-bootstrap";

function Chatbot() {

    const [topic, setTopic] = useState('');
    const [loading, setLoading] = useState(false); // 로딩 상태를 관리하는 상태 변수 추가
    const [visibility, setVisibility] = useState('');
    const [GPS, setGPS] = useState(false);


    function handleTopicChange(event) {
        setTopic(event.target.value);
    }

    function handleVisibility(event) {
        setVisibility(event.target.value);
    }

    function handleGPS(event) {
        setGPS(event.target.value);
    }

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true); // 데이터 요청 전 로딩 상태를 true로 변경
        axios.get("/http/topic?topic=" + topic)
            .then(function (response) {
                navigate("/chatbotsurvey", { state: { response: response.data.choices } });
            })
            .catch(function (error) {
                console.log(error);
            });
        alert('Topic ' + topic + ' has been submitted to ' + visibility + '!' + GPS);

    }

    return (
        <div className='surveys'>
            <div className='surveys__container'>
                <form onSubmit={handleSubmit}>
                    <div className='surveys__wrapper'>
                        <section class="dark:bg-gray-900">
                            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                                <h2 class="mb-4 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">원하는 토픽을 입력해서 <br />'5초' 만에 설문조사를 만들어보세요!
                                </h2>
                            </div>
                        </section>
                        <TopicInput
                            label="Topic"
                            name="topic"
                            value={topic}
                            onChange={handleTopicChange}
                        />
                        <br /> <br />
                    </div>
                    <div>
                        <h5>공개 설문조사로 업로드하기.</h5>
                        <p>공개 설문조사로 업로드하면 검색으로 누구나 내 설문에 참여할 수 있어요!</p>
                        <input
                            type='radio'
                            id='public'
                            name='visibility'
                            value='public'
                            onChange={handleVisibility}
                            checked={visibility === 'public'} />
                        <label for='public'>public</label>
                        <input
                            type='radio'
                            id='private'
                            name='visibility'
                            value='private'
                            onChange={handleVisibility}
                            checked={visibility === 'private'} />
                        <label for='private'>private</label>
                    </div>

                    {(visibility === 'public') && <div>
                        <p>GPS를 사용해서 우리 지역에 꼭 맞는 설문이 되어보세요!</p>
                        <input
                            type='radio'
                            id='GPSO'
                            name='gps'
                            value='GPSO'
                            onChange={handleGPS}
                            checked={GPS === 'GPSO'} />
                        <label for='GPSO'>YES!</label>
                        <input
                            type='radio'
                            id='GPSX'
                            name='gps'
                            value='GPSX'
                            onChange={handleGPS}
                            checked={GPS === 'GPSX'} />
                        <label for='GPSX'>NO!</label>
                    </div>
                    }
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