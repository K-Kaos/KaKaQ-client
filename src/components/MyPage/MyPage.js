import { Container, Row, Col } from "react-bootstrap";
import TimelineCard from "./MyPageCards";
import Card from "react-bootstrap/Card";
import profile_image from '../../Assets/Profile/profile.png'
import React, { useState, useEffect } from "react";
import axios from "axios";


function MyPage() {
  const [whoLoggedIn, setWhoLeggedIn] = useState(null); // 사용자 이메일(아이디) 저장
  const [username, setUsername] = useState(null); // 사용자 이름 저장
  const [creator, setCreator] = useState('');

  useEffect(() => {
    const LoggedInUser = sessionStorage.getItem('whoLoggedIn');
    if (LoggedInUser === null) {
      alert("로그인 후 이용해 주세요");
      window.location.href = "/login";
    } else {
      setWhoLeggedIn(LoggedInUser);

      // 서버로 LoggedInUser 보내기
      fetch('/api/mypage/userInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: LoggedInUser })
      })
        .then(response => response.json())
        .then(data => {
          console.log('서버 응답:', data);
          setUsername(data.username); // 서버 응답에서 받은 사용자 이름을 state로 저장
        })
        .catch(error => console.error('오류 발생:', error));

      // 생성한 설문조사 목록 가져오기
      fetchCreatedSurveys();
      // 참가한 설문조사 목록 가져오기
      fetchParticipatedSurveys();
    }
  }, []);

  const [geoData, setgeoData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const [userData, setuserData] = useState({
    latitude: "",
    longitude: "",
  });

  const [siData, setsiData] = useState();

  window.addEventListener("load", () => {
    navigator.geolocation.getCurrentPosition(function (pos) {//현재위치 가져오기
      setgeoData((prevData) => ({
        ...prevData,
        ["latitude"]: pos.coords.latitude,
        ["longitude"]: pos.coords.longitude,
      }));

    });

    // axios.post("/api/mypage/user",{//mypage에 유저 정보 넣기
    //   id:sessionStorage.getItem("IdLoggedIn"),
    // }).then(function(response){

    // }).catch(function(error){
    //   console.log(error);
    // });

  }, []);

  useEffect(() => {
    axios.post("/api/mypage/gps", {//서버에 좌표 주고 시 받아오기
      latitude: geoData.latitude,
      longitude: geoData.longitude,
    }).then(function (response) {
      setsiData(response.data);
      console.log(siData);
    }).catch(function (error) {
      console.log(error);
    });
  }, [geoData]);

  const [createdSurveys, setCreatedSurveys] = useState([]);

  function fetchCreatedSurveys() {
    const email = sessionStorage.getItem('whoLoggedIn');
    axios.get("/api/mypage/created", {
      params: {
        user: email // 로그인한 사용자의 이메일
      }
    })
      .then(function (response) {
        // 응답 데이터 처리
        const createdSurveys = response.data;
        setCreatedSurveys(createdSurveys);
      })
      .catch(function (error) {
        console.log(error);
        // 에러 처리
      });
  }
  
  const [participatedSurveys, setParticipatedSurveys] = useState([]);
  function fetchParticipatedSurveys() {
    const email = sessionStorage.getItem('whoLoggedIn');
    axios.get("/api/mypage/participated", {
      params: {
        user: email // 로그인한 사용자의 이메일
      }
    })
      .then(function (response) {
        // 응답 데이터 처리
        const participatedSurveys = response.data;
        setParticipatedSurveys(participatedSurveys);
      })
      .catch(function (error) {
        console.log(error);
        // 에러 처리
      });
  }

  return (
    <Container fluid className="mypage-section">
      <Container>
        <h1 className="mypage-card">
          My <strong className="yellow">page </strong>
        </h1>
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base text-xl font-semibold leading-7">Your Information</h3><br />
            <p className="mt-1 max-w-xl font-semibold text-lg leading-2">{username}님의 정보입니다.</p>
          </div>
          <div className="flex -space-x-1 overflow-hidden m-auto w-100 py-6">
            <img className="inline-block h-20 w-20 rounded-full m-auto ring-2 ring-white" src={profile_image} />
          </div>
          <div className="m-auto mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-xl font-semibold font-medium leading-6">Name</dt>
                <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{username}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-xl font-semibold font-medium leading-6 ">Email</dt>
                <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{whoLoggedIn}</dd>
              </div>
              {/* <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-xl font-semibold font-medium leading-6">Password</dt>
                <dd class="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">서버에서 불러온 Password</dd>
              </div> */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-xl font-semibold font-medium leading-6">Location</dt>
                <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{siData}</dd>
              </div><br /><br />
              <p className="mt-3 max-w-xl font-semibold text-xl leading-6">생성한 설문조사</p>
              <table className="table ml-6 mr-6 ">
                <thead className="text-xl">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">제목</th>
                    <th scope="col">작성시간</th>
                    <th scope="col">상태</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  {createdSurveys.map((survey, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td><a href="#">{survey.title}</a></td>
                      <td>{survey.createdAt}</td>
                      <td>{survey.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table><br />

              <p className="mt-3 max-w-xl font-semibold text-xl leading-6">참여한 설문조사</p>
              <table className="table ml-6 mr-6 ">
                <thead className="text-xl">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">제목</th>
                    <th scope="col">상태</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  {participatedSurveys.map((survey, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td><a href="#">{survey.title}</a></td>
                      <td>{survey.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table><br />
            </dl>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default MyPage;
