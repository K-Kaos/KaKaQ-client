import React, { useEffect, useState } from 'react';
import OpenSurveyItem from './OpenSurveyItem';
// import seobin from "../../Assets/Profile/seobin.png";
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
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <div className='surveys' class="py-24 sm:py-32">
            <div className='surveys__container' class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {openSurveys.map((survey) => (
                        <OpenSurveyItem
                            startdate={survey.startDate.substring(0, survey.startDate.indexOf("T"))}
                            enddate={survey.endDate.substring(0, survey.endDate.indexOf("T"))}
                            text={survey.title} // 설문 제목
                            label={survey.keywords.map((keyword, index) => (
                                <span key={index}>{keyword}</span>
                            ))}
                            path={"/participate/" + survey.id} // 설문 참여 창으로
                            name={survey.creator}
                            //profile={seobin}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OpenSurvey;