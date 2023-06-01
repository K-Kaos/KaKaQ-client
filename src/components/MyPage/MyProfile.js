import { Container, Row, Col } from "react-bootstrap";
import TimelineCard from "./MyPageCards";
import Card from "react-bootstrap/Card";
import profile_image from "../../Assets/Profile/profile.png";
import React, { useState, useEffect } from "react";
import axios from "axios";

function MyProfile() {
    const [isOpen, setIsOpen] = useState(false);
  const [whoLoggedIn, setWhoLeggedIn] = useState(null); // 사용자 이메일(아이디) 저장
  const [username, setUsername] = useState(null); // 사용자 이름 저장
  const [creator, setCreator] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleClickProfile = () => {
    setShowProfile(true);
  };
  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  useEffect(() => {
    const LoggedInUser = sessionStorage.getItem("whoLoggedIn");
    if (LoggedInUser === null) {
      alert("로그인 후 이용해 주세요");
      window.location.href = "/login";
    } else {
      setWhoLeggedIn(LoggedInUser);

      // 서버로 LoggedInUser 보내기
      fetch("/api/mypage/userInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: LoggedInUser }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("서버 응답:", data);
          setUsername(data.username); // 서버 응답에서 받은 사용자 이름을 state로 저장
        })
        .catch((error) => console.error("오류 발생:", error));

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

  function fetchCreatedSurveys() {
    const email = sessionStorage.getItem("whoLoggedIn");
    axios
      .get("/api/mypage/created", {
        params: {
          user: email, // 로그인한 사용자의 이메일
        },
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
    const email = sessionStorage.getItem("whoLoggedIn");
    axios
      .get("/api/mypage/participated", {
        params: {
          user: email, // 로그인한 사용자의 이메일
        },
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

  const [siData, setsiData] = useState();

  window.addEventListener(
    "load",
    () => {
      navigator.geolocation.getCurrentPosition(function (pos) {
        //현재위치 가져오기
        setgeoData((prevData) => ({
          ...prevData,
          ["latitude"]: pos.coords.latitude,
          ["longitude"]: pos.coords.longitude,
        }));
      });
    },
    []
  );
  useEffect(() => {
    axios
      .post("/api/mypage/gps", {
        //서버에 좌표 주고 시 받아오기
        latitude: geoData.latitude,
        longitude: geoData.longitude,
      })
      .then(function (response) {
        setsiData(response.data);
        console.log(siData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [geoData]);

  const [createdSurveys, setCreatedSurveys] = useState([]);

  return (
    <>
      <div role="presentation" class="MuiDialog-root MuiModal-root css-126xj0f">
        <div
          aria-hidden="true"
          class="MuiBackdrop-root css-919eu4"
          style={{
            opacity: 1,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            boxShadow: "none",
            transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}
        ></div>
        <div tabindex="0" data-testid="sentinelStart"></div>
        <div
          class="MuiDialog-container MuiDialog-scrollPaper css-ekeie0"
          role="presentation"
          tabindex="-1"
          style={{
            opacity: 1,
            transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}
        >
          <div
            class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation24 MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthLg css-4paed7"
            role="dialog"
            aria-labelledby="mui-5"
          >
            <div
              class="MuiBox-root css-0"
              style={{ width: "890px", height: "816px", display: "flex" }}
            >
              <div
                className="MuiBox-root css-0"
                style={{
                  width: "20%",
                  transition: "width 0.5s ease 0s",
                  backgroundColor: "rgb(242, 242, 242)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <div
                  className="MuiBox-root css-0"
                  style={{
                    flex: "1 1 0%",
                    marginTop: "5rem",
                    overflow: "hidden",
                  }}
                >
                  <ul
                    className="MuiList-root css-1uzmcsd"
                    style={{ overflow: "hidden" }}
                  >
                    <li className="MuiListItem-root MuiListItem-gutters css-vvazg8">
                      <div
                        className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-1nvso38"
                        tabIndex="0"
                        role="button"
                        style={{
                          padding: "0px 10px",
                          borderRadius: "3px",
                          backgroundColor: "rgba(9, 30, 66, 0.04)",
                          display: "block",
                        }}
                      >
                        <div className="MuiListItemText-root css-163zbd2">
                          내 계정
                        </div>

                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </div>
                    </li>
                    <li className="MuiListItem-root MuiListItem-gutters css-vvazg8">
                      <div
                        className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-1nvso38"
                        tabIndex="0"
                        role="button"
                        style={{
                          padding: "0px 10px",
                          borderRadius: "3px",
                          backgroundColor: "transparent",
                          display: "block",
                        }}
                      >
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="MuiBox-root css-0"
                  style={{ margin: "20px 10px" }}
                >
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-rgw6ep"
                    tabIndex="0"
                    type="button"
                  >
                    <p
                      className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                      style={{
                        fontSize: "14px",
                        color: "rgb(66, 82, 110)",
                        lineHeight: "40px",
                      }}
                    >
                      로그아웃
                    </p>
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </div>
              </div>

              <div
                className="MuiBox-root css-0"
                style={{
                  width: "80%",
                  transition: "width 0.5s ease 0s",
                  backgroundColor: "rgb(255, 255, 255)",
                  overflow: "hidden scroll",
                }}
              >
                <div className="MuiBox-root css-0" style={{ padding: "40px" }}>
                  <div
                    className="MuiBox-root css-0"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="MuiBox-root css-0"
                      style={{ flex: "1 1 0%" }}
                    >
                      <div
                        className="MuiDialogContent-root css-1jk1mjg"
                        style={{ marginBottom: "40px" }}
                      >
                        <p
                          className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                          style={{
                            fontWeight: 500,
                            fontSize: "20px",
                            lineHeight: "24px",
                            color: "rgb(23, 43, 77)",
                          }}
                        >
                          내 계정
                        </p>
                        <div
                          className="MuiBox-root css-0"
                          style={{ cursor: "pointer", marginLeft: "40px" }}
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgogICAgPHBhdGggZD0iTTkuOTk5ODUgOC44MjE2N0w1LjU4OTAyIDQuNDEwODRDNS40MzE4NSA0LjI1OTA0IDUuMjIxMzUgNC4xNzUwNSA1LjAwMjg1IDQuMTc2OTRDNC43ODQzNSA0LjE3ODg0IDQuNTc1MzQgNC4yNjY0OCA0LjQyMDg0IDQuNDIwOTlDNC4yNjYzMyA0LjU3NTUgNC4xNzg2OSA0Ljc4NDUxIDQuMTc2NzkgNS4wMDMwMUM0LjE3NDg5IDUuMjIxNSA0LjI1ODg5IDUuNDMyIDQuNDEwNjggNS41ODkxN0w4LjgyMTUyIDEwTDQuNDEwNjggMTQuNDEwOEM0LjI1ODg5IDE0LjU2OCA0LjE3NDg5IDE0Ljc3ODUgNC4xNzY3OSAxNC45OTdDNC4xNzg2OSAxNS4yMTU1IDQuMjY2MzMgMTUuNDI0NSA0LjQyMDg0IDE1LjU3OUM0LjU3NTM0IDE1LjczMzUgNC43ODQzNSAxNS44MjEyIDUuMDAyODUgMTUuODIzMUM1LjIyMTM1IDE1LjgyNSA1LjQzMTg1IDE1Ljc0MSA1LjU4OTAyIDE1LjU4OTJMOS45OTk4NSAxMS4xNzgzTDE0LjQxMDcgMTUuNTg5MkMxNC41Njc5IDE1Ljc0MSAxNC43Nzg0IDE1LjgyNSAxNC45OTY5IDE1LjgyMzFDMTUuMjE1MyAxNS44MjEyIDE1LjQyNDQgMTUuNzMzNSAxNS41Nzg5IDE1LjU3OUMxNS43MzM0IDE1LjQyNDUgMTUuODIxIDE1LjIxNTUgMTUuODIyOSAxNC45OTdDMTUuODI0OCAxNC43Nzg1IDE1Ljc0MDggMTQuNTY4IDE1LjU4OSAxNC40MTA4TDExLjE3ODIgMTBMMTUuNTg5IDUuNTg5MTdDMTUuNjY4NiA1LjUxMjMgMTUuNzMyMSA1LjQyMDM1IDE1Ljc3NTggNS4zMTg2OEMxNS44MTk0IDUuMjE3MDEgMTUuODQyNCA1LjEwNzY2IDE1Ljg0MzQgNC45OTcwMUMxNS44NDQ0IDQuODg2MzYgMTUuODIzMyA0Ljc3NjYzIDE1Ljc4MTQgNC42NzQyMUMxNS43Mzk1IDQuNTcxOCAxNS42Nzc2IDQuNDc4NzUgMTUuNTk5MyA0LjQwMDUxQzE1LjUyMTEgNC4zMjIyNyAxNS40MjgxIDQuMjYwMzkgMTUuMzI1NiA0LjIxODQ5QzE1LjIyMzIgNC4xNzY1OSAxNS4xMTM1IDQuMTU1NSAxNS4wMDI5IDQuMTU2NDZDMTQuODkyMiA0LjE1NzQzIDE0Ljc4MjkgNC4xODA0MSAxNC42ODEyIDQuMjI0MDlDMTQuNTc5NSA0LjI2Nzc2IDE0LjQ4NzYgNC4zMzEyNSAxNC40MTA3IDQuNDEwODRMOS45OTk4NSA4LjgyMTY3WiIKICAgICAgICAgIGZpbGw9IiM0MjUyNkUiLz4KPC9zdmc+Cg=="
                            alt="close-icon"
                            onClick={handleCloseProfile}
                          />
                        </div>
                      </div>
                      <p style={{ marginBottom: "25px", textAlign: "start" }}>
                        프로필 이미지
                      </p>
                      <div
                        className="MuiBox-root css-0"
                        style={{ marginBottom: "17px" }}
                      >
                        <div
                          className="MuiAvatar-root MuiAvatar-circular css-1kavoh2"
                          style={{ width: "90px", height: "90px" }}
                        >
                          <img
                            alt="user-image"
                            src="https://lh3.googleusercontent.com/a/AGNmyxYCL1L24exss9DNiVXadg4hyk22I6p-ygUS50-mVx0=s96-c"
                            className="MuiAvatar-img css-1hy9t21"
                          />
                        </div>
                      </div>
                      <input
                        accept="image/*"
                        type="file"
                        style={{ display: "none" }}
                      />
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-awlkbl"
                        tabIndex="0"
                        type="button"
                        style={{
                          borderRadius: "12px",
                          backgroundColor: "rgba(9, 30, 66, 0.04)",
                          display: "flex",
                          alignItems: "center",
                          padding: "0px 20px",
                          marginBottom: "17px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            color: "rgb(66, 82, 110)",
                            lineHeight: "40px",
                          }}
                        >
                          이미지 바꾸기
                        </span>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      <div
                        className="MuiBox-root css-0"
                        style={{ marginBottom: "25px" }}
                      >
                        <div
                          className="MuiBox-root css-0"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginBottom: "10px",
                          }}
                        >
                          <div
                            className="MuiBox-root css-0"
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "4px",
                              paddingLeft: "5px",
                            }}
                          >
                            <p
                              className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                              style={{ fontSize: "14px", lineHeight: "20px" }}
                            >
                              이름
                            </p>
                          </div>
                        </div>
                        <div className="MuiBox-root css-0">
                          <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-4m3kxx">
                            <div className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel css-b4zgsm">
                              <input
                                aria-invalid="false"
                                autoComplete="name"
                                placeholder="이름"
                                required=""
                                type="text"
                                className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-10m06oi"
                                value={username}
                                id="mui-120"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="MuiBox-root css-0"
                        style={{ marginBottom: "25px" }}
                      >
                        <div
                          className="MuiBox-root css-0"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginBottom: "10px",
                          }}
                        >
                          <div
                            className="MuiBox-root css-0"
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "4px",
                              paddingLeft: "5px",
                            }}
                          >
                            <p
                              className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                              style={{ fontSize: "14px", lineHeight: "20px" }}
                            >
                              이메일 주소
                            </p>
                          </div>
                        </div>
                        <div className="MuiBox-root css-0">
                          <div
                            className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-4m3kxx"
                            readOnly=""
                          >
                            <div className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel MuiInputBase-readOnly css-b4zgsm">
                              <input
                                aria-invalid="false"
                                autoComplete="name"
                                placeholder="이메일 주소"
                                readOnly=""
                                required=""
                                type="text"
                                className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel MuiInputBase-readOnly css-10m06oi"
                                value={whoLoggedIn}
                                id="mui-121"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-awlkbl"
                        tabIndex="0"
                        type="button"
                        style={{
                          borderRadius: "12px",
                          backgroundColor: "rgb(250, 220, 95)",
                          display: "flex",
                          alignItems: "center",
                          padding: "0px 20px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            color: "rgb(255, 255, 255)",
                            lineHeight: "40px",
                          }}
                        >
                          저장하기
                        </span>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                    </div>
                    <div
                      className="MuiBox-root css-0"
                      style={{ flex: "1 1 0%" }}
                    ></div>
                  </div>
                  <hr
                    className="MuiDivider-root MuiDivider-fullWidth css-39bbo6"
                    style={{
                      margin: "50px 0px",
                      borderColor: "rgb(244, 244, 244)",
                      borderBottomWidth: "2px",
                    }}
                  />
                  <div className="MuiBox-root css-0">
                    <p
                      className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <span style={{ textAlign: "start" }}>
                        회원 삭제 시, KaKaQ에서 작성한 모든 내용이 사라집니다.
                        삭제를 원하시는 경우 이곳에서 회원 삭제 신청을
                        완료해주세요.
                      </span>
                      <div
                        style={{
                          color: "red",
                          textDecoration: "underline",
                          cursor: "pointer",
                          textAlign: "start",
                        }}
                      >
                        회원 삭제
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
