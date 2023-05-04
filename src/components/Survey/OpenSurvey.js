import React, { useEffect, useState } from 'react';
import OpenSurveyItem from './OpenSurveyItem';
import pizza_image from '../../Assets/Images/Pizza.jpg'
import museum_image from '../../Assets/Images/Museum.jpg'
import minute_image from '../../Assets/Images/5_minute.jpg'
import hotel_image from '../../Assets/Images/hotel.jpg'
import tang_image from '../../Assets/Images/tang.jpg'
import seobin from "../../Assets/profile/seobin.png";
import './OpenSurvey.css'
import axios from "axios";

function OpenSurvey() {
    let whoLoggedIn = null;
    const [openSurveys, setOpenSurveys] = useState([]);

    useEffect(() => {
        whoLoggedIn = sessionStorage.getItem('whoLoggedIn');
        if (whoLoggedIn === null) {
            alert("로그인 후 이용해 주세요");
            window.location.href = "/login";
        }
        axios.get("/api/surveys", {
          }).then(function (response) {
            const surveys = response.data;
            setOpenSurveys(surveys);
            // for (i=0;i<surveys.length;i++){
            //     CreateSurveyItem(surveys[i]);
            // }
          }).catch(function (error) {
            console.log(error);
          });
    }, []);

    // function CreateSurveyItem(){


    // }
    return (
        <div className='surveys' class="py-24 sm:py-32">
            <h1>이 지역에서만 할 수 있는 설문조사에요!</h1>
            <div className='surveys__container' class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {openSurveys.map((survey) => (
                        <OpenSurveyItem
                        startdate={survey.startDate}
                        enddate={survey.endDate}
                        text={survey.title} // 설문 제목
                        label={survey.keyword} // 설문 카테고리
                        path="/Home" // 설문 참여 창으로
                        name={survey.creator.username}
                        profile={seobin}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OpenSurvey;