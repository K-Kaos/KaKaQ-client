import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import TimelineCard from "./MyPageCards";
import Particle from "../Particle";
<<<<<<< Updated upstream
=======
import Card from "react-bootstrap/Card";
import profile_image from '../../Assets/Images/profile.png'
import axios from "axios";

>>>>>>> Stashed changes

function MyPage() {
  const [geoData, setgeoData] = useState({
    latitude: "",
    longitude: "",
  });
  
  useEffect(() => {
    console.log(geoData);
  }, [geoData]);
  
  navigator.geolocation.getCurrentPosition(function(pos){//현재위치 가져오기
    setgeoData((prevData) =>({
        ...prevData,
      ["latitude"]: pos.coords.latitude,
      ["longitude"]: pos.coords.longitude,
    }));
  });
  axios.post("/api/mypage/gps",{//서버에 좌표 주고 시 받아오기
    latitude: geoData.latitude,
    longitude:geoData.longitude,
  }).then(function(response){
    console.log(response);
  }).catch(function(error){
    console.log(error);
  });

  return (
    <Container fluid className="mypage-section">
      <Particle />
      <Container>
        <h1 className="mypage-heading">
          My <strong className="yellow">page </strong>
        </h1>
<<<<<<< Updated upstream
        <p>
          마이페이지
        </p>
=======
        <div>
          <div class="px-4 sm:px-0">
            <h3 class="text-base text-xl font-semibold leading-7">Your Information</h3><br />
            <p class="mt-1 max-w-xl font-semibold text-2xl leading-2">Personal details and survey.</p>
          </div>
          <div class="flex -space-x-1 overflow-hidden m-auto w-100 py-6">
            <img class="inline-block h-20 w-20 rounded-full m-auto ring-2 ring-white" src={profile_image} />
          </div>
          <div class="m-auto mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-2xl font-semibold font-medium leading-6">Name</dt>
                <dd class="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">서버에서 불러온 Name</dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-2xl font-semibold font-medium leading-6 ">Email</dt>
                <dd class="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">서버에서 불러온 Email</dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-2xl font-semibold font-medium leading-6">Password</dt>
                <dd class="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">서버에서 불러온 Password</dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-2xl font-semibold font-medium leading-6">GPS</dt>
                <dd class="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">서버에서 불러온 GPS</dd>
              </div><br /><br />
              <p class="mt-3 max-w-xl font-semibold text-2xl leading-6">생성한 설문조사</p>
              <table class="table ml-6 mr-6 text-2xl">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">제목</th>
                    <th scope="col">작성시간</th>
                    <th scope="col">상태</th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <th scope="row">1</th>
                    <td><a href="#">설문조사 제목 1</a></td>
                    <td>2022-04-20</td>
                    <td>종료</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><a href="#">설문조사 제목 2</a></td>
                    <td>2022-04-21</td>
                    <td>종료</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><a href="#">설문조사 제목 3</a></td>
                    <td>2022-04-22</td>
                    <td>종료</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td><a href="#">설문조사 제목 4</a></td>
                    <td>2022-04-21</td>
                    <td>종료</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td><a href="#">설문조사 제목 5</a></td>
                    <td>2022-04-22</td>
                    <td>진행중</td>
                  </tr>
                </tbody>
              </table><br />
              
              <p class="mt-3 max-w-xl font-semibold text-2xl leading-6">참여한 설문조사</p>
              <table class="table ml-6 mr-6 text-2xl">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">제목</th>
                    <th scope="col">글쓴이</th>
                    <th scope="col">작성시간</th>
                    <th scope="col">상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td><a href="#">설문조사 제목 1</a></td>
                    <td>이서빈</td>
                    <td>2022-04-20</td>
                    <td>종료</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><a href="#">설문조사 제목 2</a></td>
                    <td>유소연</td>
                    <td>2022-04-21</td>
                    <td>진행중</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><a href="#">설문조사 제목 3</a></td>
                    <td>이소현</td>
                    <td>2022-04-22</td>
                    <td>진행중</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td><a href="#">설문조사 제목 4</a></td>
                    <td>윤주은</td>
                    <td>2022-04-23</td>
                    <td>진행중</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td><a href="#">설문조사 제목 5</a></td>
                    <td>장예경</td>
                    <td>2022-04-24</td>
                    <td>진행중</td>
                  </tr>
                </tbody>
              </table><br />
            </dl>
          </div>
        </div>

>>>>>>> Stashed changes
      </Container>
    </Container>
  );
}

export default MyPage;
