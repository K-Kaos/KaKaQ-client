import React, { useState } from 'react';
import TopicInput from './TopicInput';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ChatbotSurvey from './ChatbotSurvey';
import { ProgressBar } from "react-bootstrap";

function Chatbot() {

    const [topic, setTopic] = useState('');
    const [loading, setLoading] = useState(false); // 로딩 상태를 관리하는 상태 변수 추가
    const [ chatbotResponse , setResponse ] = useState('');

    function handleTopicChange(event) {
        setTopic(event.target.value);
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
        alert('Topic ' + topic + ' has been submitted!');
      }

    return (
        <div className='surveys'>
            <div className='surveys__container'>
                <form onSubmit={handleSubmit}>
                    <div className='surveys__wrapper'>
                        <section class="dark:bg-gray-900">
                            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                                <h2 class="mb-4 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">원하는 토픽을 입력해서 5초만에 설문조사를 만들어보세요!
                                </h2>
                            </div>
                        </section>
                        <TopicInput
                            label="Topic"
                            name="topic"
                            value={topic}
                            onChange={handleTopicChange}
                        />
                        <br />

                        <p>Select topic: {topic}</p>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <br />
                    {loading && <ProgressBar className="my-1" now={100} animated label="Loading..." />} {/* 로딩 중이면 progress bar를 표시 */}
                </form>
            </div>
            
        </div>
        
    );
}

export default Chatbot;