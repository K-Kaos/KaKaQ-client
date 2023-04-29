import React, { useEffect} from 'react';
import OpenSurveyItem from './OpenSurveyItem';
import pizza_image from '../../Assets/Images/Pizza.jpg'
import museum_image from '../../Assets/Images/Museum.jpg'
import minute_image from '../../Assets/Images/5_minute.jpg'
import hotel_image from '../../Assets/Images/hotel.jpg'
import tang_image from '../../Assets/Images/tang.jpg'
import './OpenSurvey.css'

function OpenSurvey() {
    let whoLoggedIn = null;
    useEffect(() => {
        whoLoggedIn = sessionStorage.getItem('whoLoggedIn');
        if(whoLoggedIn === null){
        alert("로그인 후 이용해 주세요");
        window.location.href = "/login";
        }
    }, []);
    
    return (
        <div className='surveys'>
            <h1>이 지역에서만 할 수 있는 설문조사에요!</h1>
            <div className='surveys__container'>
                <div className='surveys__wrapper'>
                    <ul className='surveys__items'>
                        <OpenSurveyItem
                            src = {pizza_image}
                            text = "우리집 피자 어땠나요? 당신의 의견을 들려주세요!" // 설문 간단 설명
                            label = "MyhomePizza" // 설문 제목
                            path="/Home" // 설문 참여 창으로
                        />

                        <OpenSurveyItem
                            src = {museum_image}
                            text = "국립공주박물관에 오신 것을 환영합니다." // 설문 간단 설명
                            label = "PrincessMuseum" // 설문 제목
                            path="" // 설문 참여 창으로
                        />
                    </ul>
                    <ul className='surveys__items'>
                        <OpenSurveyItem
                            src = {minute_image}
                            text = "5분만 시간 내주세요..." // 설문 간단 설명
                            label = "Please" // 설문 제목
                            path="" // 설문 참여 창으로
                        />

                        <OpenSurveyItem
                            src = {tang_image}
                            text = "뜨끈한 국물이 땡기는 오늘, 도리도리에서 닭볶음탕 한 사바리 어떠세요? 설문조사 후 방문하시면 음료수 서비스를 드립니다!" // 설문 간단 설명
                            label = "doridori" // 설문 제목
                            path="" // 설문 참여 창으로
                        />

                        
                        <OpenSurveyItem
                            src = {hotel_image}
                            text = "호텔에서 편안한 여행을 보내셨나요?" // 설문 간단 설명
                            label = "hotel" // 설문 제목
                            path="" // 설문 참여 창으로
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OpenSurvey;