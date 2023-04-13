import React, {useState} from 'react';
import TopicInput from './TopicInput';

function Chatbot() {

    const [topic, setTopic] = useState('');

    function handleTopicChange(event) {
        setTopic(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert('Topic ' + topic + ' has been submitted!');
    }

    return (
        <div className='surveys'>
            <div className='surveys__container'>
                <form onSubmit={handleSubmit}>
                <div className='surveys__wrapper'>
                
                        
                    <h1>원하는 토픽을 입력해서 5초만에 설문조사를 만들어보세요!</h1>
                    
                    <br />
                    <TopicInput 
                    label = "Topic"
                    name = "topic"
                    value = {topic}
                    onChange = {handleTopicChange}
                    />
                    <br />

                    <p>Select topic: {topic}</p>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button><br />
                </form>
            </div>
        </div>
    );
}

export default Chatbot;