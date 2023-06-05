import React, { useEffect, useState } from "react";
import OpenSurveyItem from "./OpenSurveyItem";
import "./OpenSurvey.css";
import axios from "axios";

function OpenSurvey() {
  let whoLoggedIn = null;
  const [openSurveys, setOpenSurveys] = useState([]);

  useEffect(() => {
    whoLoggedIn = sessionStorage.getItem("whoLoggedIn");
    if (whoLoggedIn === null) {
      alert("로그인 후 이용해 주세요");
      window.location.href = "/login";
    }
    axios
      .get("/api/surveys", {})
      .then(function (response) {
        const surveys = response.data;
        setOpenSurveys(surveys);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {openSurveys.map((survey) => (
        <OpenSurveyItem
          startdate={survey.startDate.substring(
            0,
            survey.startDate.indexOf("T")
          )}
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
    </>
  );
}

export default OpenSurvey;
