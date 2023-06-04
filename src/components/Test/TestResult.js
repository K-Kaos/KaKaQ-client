import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SurveyCompletion from "../Survey/SurveyCompletion";
import { useLocation } from "react-router-dom";

function TestResult(props) {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 객체 가져오기
  const result = useLocation().state.value;
  console.log(result);
  
  let name = "";
  let src = "";
  let intro = "";
  let character = "";

  if (result == "라이언") {
    name = "기뻐하는 라이언";
    src =
      "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502133540_5b2ce511c22d4197807e32485d3fca0c.png";
    intro =
      "머나먼 둥둥섬을 떠나 자유를 찾아온 왕자. 나는 갈기 없는 숫사자 컴플렉스야";
    character =
      "갈기가 없는 게 컴플렉스인 수사자 라이언. 큰 덩치와 무뚝뚝한 표정으로 오해를 많이 사지만 사실 누구보다 여리고 섬세한 감성을 가지고 있는 카카오프렌즈의 믿음직스러운 조언자. 아프리카 둥둥섬 왕위 계승자였으나 자유로운 삶을 동경해 탈출. 꼬리가 길면 잡히기 때문에 꼬리가 짧습니다.";
  } else if (result == "어피치") {
    name = "부끄러운 어피치";
    src =
      "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502133641_a7c5ac400a974e4ea655b5b7b6a51b59.png";
    intro = "카카오프렌즈 최고 잔망꾸러기 복숭아🍑 피치 못할 매력에 빠져봐!";
    character =
      "유전자 변이로 자웅동주가 된 것을 알고 복숭아 나무에서 탈출한 악동 복숭아 어피치. 섹시한 뒷태로 사람들을 매혹시키지만 성격이 매우 급하고 과격합니다.";
  } else if (result == "콘") {
    name = "신비로운 콘";
    src =
      "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502134234_52e92257f3e04c619fd901da809e84f0.png";
    intro =
      "안녕 반갑다콘! 나는 Friends City 외곽의 비밀스러운 장소인 Con Lab 살고 있어.";
    character =
      "단무지를 키워 무지를 만든 말 없는 정체불명의 악어 콘! 이제는 복숭아를 키우고 싶어 어피치를 찾아 다닙니다";
  } else if (result == "춘식이") {
    name = "고구마 먹는 춘식이";
    src =
      "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502134313_3946f67d34604e629a739c72c24d5aa4.png";
    intro = "안냥. 나는 라이언과 동거중인 춘식이다냥. 고구마 너무 좋아 🍠";
    character =
      "어느 날 라이언이 길에서 데려온 '길고양이' 춘식이! 취향에 맞는지 그대로 라이언의 집에 눌러 앉아 버렸어요.";
  } else if (result == "무지") {
    name = "콘이 웃긴 무지";
    src =
      "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502133726_696cdcc692a6434293c16bc41ba09c96.png";
    intro = "무지무지 귀여운 토끼옷을 입은 단무지의 하루를 보여줄게 🐰 ";
    character =
      "단무지를 키워 무지를 만든 말 없는 정체불명의 악어 콘! 이제는 복숭아를 키우고 싶어 어피치를 찾아 다닙니다.";
  } else {
    name = "신나는 프로도";
    src =
      "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502133812_098f311bb7be4d3a9fe5bc78d80b9e49.png";
    intro = "네오의 영원한 단짝. 부잣집 도시개 프로도를 알고싶다면?";
    character =
      "부자집 도시개 프로도. 잡종이라 태생에 대한 컴플렉스가 많습니다. ";
  }

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleCreateSurveyClick = () => {
    navigate("/kakaq");
  };

  // 나의 설문조사 버튼 클릭 시 /workspace로 이동
  const handleClick = () => {
    navigate("/workspace");
  };

  return (
    <div class="MuiContainer-root MuiContainer-maxWidthLg jss7 css-okglv3">
      <div tabindex="-1" style={{ outline: "none" }}>
        <div class="MuiContainer-root MuiContainer-maxWidthLg css-1qtp0is">
          <div
            class="MuiBox-root css-ip3vow"
            style={{ display: "block", textAlign: "-webkit-center" }}
          >
            <div className="MuiBox-root css-0">
              <div
                className="MuiGrid-root MuiGrid-container css-sow6z2"
                style={{ display: "block", textAlign: "-webkit-center" }}
              >
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-we0np1">
                  <div className="MuiBox-root css-0">
                    <p className="MuiTypography-root MuiTypography-body1 css-zuj73s">
                      <span style={{ color: "rgb(250, 200, 0)" }}>
                        {props.surveyTitle}{" "}
                      </span>
                      <div
                        style={{
                          width: "123px",
                          height: "123px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          margin: "0 auto",
                          boxShadow: "0 10px 25px 0 rgba(0,0,0,.3)",
                        }}
                      >
                        <img src={src}></img>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-we0np1">
                  <div className="MuiBox-root css-0">
                    <p className="MuiTypography-root MuiTypography-body1 css-zuj73s">
                      <span style={{ color: "rgb(250, 200, 0)" }}>
                        {props.surveyTitle}{" "}
                      </span>
                      당신의 캐릭터는 {name}입니다!
                    </p>
                  </div>
                </div>
                <div
                  class="MuiGrid-root"
                  style={{ textAlign: "-webkit-center" }}
                >
                  <div
                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-8 MuiGrid-grid-lg-12 css-1iqtsvr"
                    style={{ maxWidth: "70%", textAlign: "-webkit-center" }}
                  >
                    <div
                      className="MuiBox-root css-bdnmmq mb-4"
                      style={{ placeContent: "center" }}
                    >
                      <p className="MuiTypography-root MuiTypography-body1 css-qisfzi">
                        {intro}
                      </p>
                      
                    </div>
                  </div>
                </div>
                <div
                  class="MuiGrid-root"
                  style={{ textAlign: "-webkit-center" }}
                >
                  <div
                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-8 MuiGrid-grid-lg-12 css-1iqtsvr"
                    style={{ maxWidth: "70%", textAlign: "-webkit-center" }}
                  >
                    <div
                      className="MuiBox-root css-bdnmmq mb-4"
                      style={{ placeContent: "center" }}
                    >
                      <p className="MuiTypography-root MuiTypography-body1 css-qisfzi">
                        {character}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="MuiGrid2-root MuiGrid2-container MuiGrid2-direcxtion-xs-row css-9329ze"
              style={{ maxWidth: "70%" }}
            >
              <div class="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-true css-1hoyqw5">
                <div class="ShareProjectSettings__ShareContentCard-sc-1713g9x-0 kpxJWt MuiBox-root css-1po3p4o">
                  <div className="MuiBox-root css-ldo4d5">
                    <div className="MuiBox-root css-fm00og">
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth css-h5p8ty"
                        tabIndex="0"
                        type="button"
                        onClick={handleLoginClick}
                      >
                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            viewBox="0 0 24 24"
                          >
                            <title>gesture-tap-button</title>
                            <path d="M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z" />
                          </svg>
                        </span>
                        <p className="MuiTypography-root MuiTypography-body1 css-awn6hr">
                          로그인
                        </p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth css-h5p8ty"
                        tabIndex="0"
                        type="button"
                        onClick={handleCreateSurveyClick}
                      >
                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            viewBox="0 0 24 24"
                          >
                            <path d="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z" />
                          </svg>
                        </span>
                        <p className="MuiTypography-root MuiTypography-body1 css-awn6hr">
                          새로운 설문조사 만들기
                        </p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth css-h5p8ty"
                        tabIndex="0"
                        type="button"
                        onClick={handleClick}
                      >
                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 4C4.8 4 3 5.8 3 8S4.8 12 7 12 11 10.2 11 8 9.2 4 7 4M7 10C5.9 10 5 9.1 5 8S5.9 6 7 6 9 6.9 9 8 8.1 10 7 10M0 18C0 15.8 3.1 14 7 14C8.5 14 9.9 14.3 11 14.7V17C10.2 16.5 8.8 16 7 16C3.8 16 2 17.4 2 18H11V20H0V18M22 4H15C13.9 4 13 4.9 13 6V18C13 19.1 13.9 20 15 20H22C23.1 20 24 19.1 24 18V6C24 4.9 23.1 4 22 4M22 18H15V6H22V18Z" />
                          </svg>
                        </span>
                        <p className="MuiTypography-root MuiTypography-body1 css-awn6hr">
                          나의 워크스페이스 보기
                        </p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestResult;
