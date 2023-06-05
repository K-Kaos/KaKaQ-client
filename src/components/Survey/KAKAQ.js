import React from "react";
import { CgBorderBottom } from "react-icons/cg";
import logo from "../../Assets/Logo/logo.png";
import { useState, useEffect, useRef } from "react";
import ShareLink from "./ShareLink";
import CreateSurvey from "./CreateSurvey";
import FindRespondent from "./FindRespondent";
import SurveyResult from "./SurveyResult";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function KAKAQ(props) {
  let whoLoggedIn = null;
  useEffect(() => {
    whoLoggedIn = sessionStorage.getItem("whoLoggedIn");
    if (whoLoggedIn === null) {
      alert("로그인 후 이용해 주세요");
      window.location.href = "/login";
    }
    setCreator(sessionStorage.getItem("whoLoggedIn"));
  }, []);
  const [creator, setCreator] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // 설문 데이터
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveyKeyword, setSurveyKeyword] = useState([]);
  const [surveyCategory, setSurveyCategory] = useState("");

  const [surveyQuestions, setSurveyQuestions] = useState([]);
  const handleSurveyQuestionsChange = (event) => {
    setSurveyQuestions(event);
    console.log(event);
  };

  useEffect(() => {
    //페이지에서 설정한 데이터들 가져오기
    if (location.state && location.state.surveyTitle) {
      setSurveyTitle(location.state.surveyTitle);
    }
    if (location.state && location.state.surveyKeyword) {
      setSurveyKeyword(location.state.surveyKeyword);
    }
    if (location.state && location.state.surveyCategory) {
      setSurveyCategory(location.state.surveyCategory);
    }
    if (location.state && location.state.surveyQuestions) {
      setSurveyQuestions(location.state.surveyQuestions);
    }

    console.log(surveyQuestions);
  }, [location.state]);

  const date = new Date();
  const defaultStartDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}T${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

  const futureDate = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000); // 7일 후의 날짜를 계산
  const defaultEndDate = `${futureDate.getFullYear()}-${(
    futureDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${futureDate
    .getDate()
    .toString()
    .padStart(2, "0")}T${futureDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${futureDate.getMinutes().toString().padStart(2, "0")}`;

  const [isSurveyPublic, setIsSurveyPublic] = useState("");
  const [isSurveyGPS, setIsSurveyGPS] = useState("");
  const [surveyCity, setSurveyCity] = useState("");
  const [surveyStartDate, setSurveyStartDate] = useState(defaultStartDate);
  const [surveyEndDate, setSurveyEndDate] = useState(defaultEndDate);
  const [surveyIndex, setSurveyIndex] = useState("");
  const [questionIndex, setQuestionIndex] = useState([]);

  const handleClick = () => {
    navigate("/workspace");
  };

  const handleSurveyPublicChange = (event) => {
    setIsSurveyPublic(event);
    console.log("kakaq에서 알려드립니다: " + event);
  };

  const handleSurveyGPSChange = (event) => {
    setIsSurveyGPS(event);
    console.log("kakaq에서 알려드립니다: " + event);
  };

  const handleSurveyCityChange = (event) => {
    setSurveyCity(event);
    console.log("kakaq에서 알려드립니다: " + event);
  };

  const handleSurveyStartDateChange = (event) => {
    setSurveyStartDate(event);
    console.log("kakaq에서 알려드립니다: " + event);
  };

  const handleSurveyEndDateChange = (event) => {
    setSurveyEndDate(event);
    console.log("kakaq에서 알려드립니다: " + event);
  };

  const [geoData, setgeoData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const handleTitleChange = (event) => {
    setSurveyTitle(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleQuestionTypeChange = (type) => {
    setQuestion(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(surveyStartDate);
    console.log(surveyEndDate);
    console.log(surveyKeyword);
    console.log(surveyCity);
    axios
      .post("/api/survey/create", {
        //survey db 데이터 보내기
        title: surveyTitle,
        city: surveyCity,
        startDate: surveyStartDate,
        endDate: surveyEndDate,
        publicState: isSurveyPublic,
        category: surveyCategory,
        keywords: surveyKeyword,
        creator: {
          email: creator,
        },
      })
      .then(function (response) {
        console.log(creator);
        console.log(response.data);
        setSurveyIndex(response.data);

        // 설문조사 질문 생성
        const promises = surveyQuestions.map((question) =>
          axios
            .post("/api/survey/question?surveyId=" + response.data, {
              text: question.text, //질문
              type: {
                name: question.type,
              },
              options: question.options,
              survey: {
                id: response.data,
              },
            })
            .then(function (response) {
              console.log("index" + response.data);
              setQuestionIndex([...questionIndex, response.data]);
              console.log(typeof response.data);
            })
            .catch(function (error) {
              console.log(error);
            })
        );
        Promise.all(promises).then(() => {
          console.log("newindex" + questionIndex);
          setMessage("설문조사가 제출되었습니다.");
          setTimeout(() => {
            setMessage("");
          }, 3000);
        });
      });
    navigate("/workspace");
  };

  // script
  const [isAddVisible, setAddVisible] = useState(false);
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const [isEndingTypeVisible, setEndingTypeVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [selectedListItem, setSelectedListItem] = useState(null);

  const showAdd = () => {
    setAddVisible(true);
  };

  const hideAdd = () => {
    setAddVisible(false);
  };

  const handelClickBackdrop = () => {
    if (isAddVisible) {
      hideAdd();
    }

    if (isDeleteVisible) {
      hideDelete();
    }

    if (isEndingTypeVisible) {
      hideEndingType();
    }
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const showDelete = () => {
    setDeleteVisible(true);
  };

  const hideDelete = () => {
    setDeleteVisible(false);
  };

  const showEndingType = () => {
    setEndingTypeVisible(true);
  };

  const hideEndingType = () => {
    setEndingTypeVisible(false);
  };

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  const handleClickProfile = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  const handleQuestionListAdd = () => {
    setListItems((prevItems) => [
      ...prevItems,
      <div>
        <div
          tabIndex="0"
          role="button"
          aria-describedby="rbd-hidden-text-2-hidden-text-4"
          data-rbd-drag-handle-draggable-id="draggableItem_3739285390"
          data-rbd-drag-handle-context-id="2"
          draggable="false"
          data-rbd-draggable-context-id="2"
          data-rbd-draggable-id="draggableItem_3739285390"
        >
          <li
            key={prevItems.length + 1}
            class="MuiListItem-root MuiListItem-gutters css-vvazg8"
          >
            <div
              class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-qy2th"
              tabIndex="0"
              role="button"
              aria-label={question}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div class="MuiListItemIcon-root css-1f8bwsm">
                <div
                  class="MuiBox-root css-0"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    backgroundColor: "rgb(239, 248, 255)",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    justifyContent: "space-between",
                  }}
                >
                  <svg
                    width="12"
                    height="4"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33329 1.33333C1.1444 1.33333 0.985959 1.26933 0.857959 1.14133C0.730404 1.01378 0.666626 0.855556 0.666626 0.666667C0.666626 0.477778 0.730404 0.319333 0.857959 0.191333C0.985959 0.0637776 1.1444 0 1.33329 0H10.6666C10.8555 0 11.0137 0.0637776 11.1413 0.191333C11.2693 0.319333 11.3333 0.477778 11.3333 0.666667C11.3333 0.855556 11.2693 1.01378 11.1413 1.14133C11.0137 1.26933 10.8555 1.33333 10.6666 1.33333H1.33329ZM1.33329 4C1.1444 4 0.985959 3.936 0.857959 3.808C0.730404 3.68044 0.666626 3.52222 0.666626 3.33333C0.666626 3.14444 0.730404 2.986 0.857959 2.858C0.985959 2.73044 1.1444 2.66667 1.33329 2.66667H6.66662C6.85551 2.66667 7.01396 2.73044 7.14196 2.858C7.26951 2.986 7.33329 3.14444 7.33329 3.33333C7.33329 3.52222 7.26951 3.68044 7.14196 3.808C7.01396 3.936 6.85551 4 6.66662 4H1.33329Z"
                      fill="#2272AF"
                    ></path>
                  </svg>
                  <p
                    class="MuiTypography-root MuiTypography-body1 css-qisfzi"
                    style={{
                      fontWeight: "bold",
                      color: "rgb(34, 114, 175)",
                      fontSize: "11px",
                      paddingLeft: "8px",
                    }}
                  >
                    {prevItems.length + 1}
                  </p>
                </div>
              </div>
              <div class="MuiListItemText-root css-1tsvksn">
                <p
                  class="MuiTypography-root MuiTypography-body1 css-qisfzi"
                  style={{
                    minHeight: "40px",
                    lineHeight: "40px",
                    color: "rgb(0, 82, 204",
                    fontWeight: "500",
                    fontSize: "14px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    opacity: "0.5",
                    fontStyle: "italic",
                  }}
                >
                  {question}
                </p>
              </div>
              <button
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                tabindex="0"
                type="button"
                style={{
                  justifyContent: "flex-end",
                  background: "transparent",
                  maxWidth: "20px",
                  maxHeight: "20px",
                  minWidth: "20px",
                  minHeight: "20px",
                  padding: "0px",
                  margin: "0px",
                }}
              >
                {showTooltip && (
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="DeleteIcon"
                    style={{ color: "rgb(188, 188, 188)", fontSize: "20px" }}
                    onClick={showDelete}
                  >
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                )}
              </button>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </div>
          </li>
        </div>
      </div>,
    ]);
  };

  const buttonStyle = {
    opacity: isHovered ? 1 : 0.8,
    transform: isHovered ? "translateY(-2px) scale(1.1)" : "none",
  };

  const [showCreateSurvey, setShowCreateSurvey] = useState(true);
  const [showShareLink, setShowShareLink] = useState(false);
  const [showFindRespondent, setFindRespondent] = useState(false);
  const [showSurveyResult, setShowSurveyResult] = useState(false);

  const handleShowProjectEdit = () => {
    setShowCreateSurvey(true);
    setShowShareLink(false);
    setFindRespondent(false);
    setShowSurveyResult(false);
  };

  const handleShowShareLink = () => {
    setShowCreateSurvey(false);
    setShowShareLink(true);
    setFindRespondent(false);
    setShowSurveyResult(false);
  };

  const handleShowFindRespondent = () => {
    setShowCreateSurvey(false);
    setShowShareLink(false);
    setFindRespondent(true);
    setShowSurveyResult(false);
  };

  const handleShowSurveyResult = () => {
    setShowCreateSurvey(false);
    setShowShareLink(false);
    setFindRespondent(false);
    setShowSurveyResult(true);
  };

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

  return (
    <>
      <div id="___gatsby">
        <div tabindex="-1" id="gatsby-focus-wrapper">
          <div class="Muibox-root css-121had8">
            <header
              class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-1jrh10h"
              style={{
                boxShadow: "none",
                borderBottomWidth: "2px",
                borderBottomStyle: "solid",
                borderBottomColor: "rgb(238, 238, 238)",
              }}
            >
              <div
                class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-i6s8oy"
                style={{
                  height: "100%",
                  minHeight: "56px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  class="MuiBox-root css-0"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexGrow: "1",
                    flexShrink: "1",
                    flexBasis: "0%",
                  }}
                >
                  <div
                    class="MuiBox-root css-12kkxif"
                    aria-label="Back to dashboard"
                    //onClick={() => { 경고창 띄우고(필드 삭제와 같은 스타일로) 뒤로가기 }
                  >
                    <img
                      src={logo}
                      alt="KAKAQ-logo"
                      style={{ height: "18px" }}
                      onClick={handleClick}
                    />
                  </div>
                  <div class="MuiBox-root css-0">
                    <div
                      class="MuiBox-root css-0"
                      style={{
                        display: "flex",
                        paddingLeft: "20px",
                        alignItems: "center",
                        top: "13px",
                        position: "absolute",
                        flexDirection: "row",
                      }}
                    >
                      <div class="MuiBox-root css-191gqa8">
                        <p class="MuiTypography-root MuiTypography-body1 css-qt1p9i">
                          생성한 설문조사
                        </p>
                      </div>
                      <div class="MuiBox-root css-4g6ai3">
                        <p
                          class="MuiTypography-root MuiTypography-body1 css-qisfzi"
                          style={{
                            color: "rgb(0, 0, 0)",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          /
                        </p>
                      </div>
                      <div class="MuiInputBase-root MuiInputBase-colorPrimary css-8x6mwb">
                        <input
                          placeholder="새로운 설문조사"
                          type="text"
                          class="MuiInputBase-input css-mnn31"
                          value={surveyTitle}
                          onChange={handleTitleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="MuiBox-root css-0"></div>
                </div>
                <div class="MuiBox-root css-1oo7ptx">
                  <div class="MuiBox-root css-1txeit4">
                    <div
                      onClick={handleShowProjectEdit}
                      class="MuiBox-root css-0"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1xuqdzl"
                        tabIndex="0"
                        type="button"
                        name="프로젝트 편집"
                      >
                        <p
                          class="MuiTypography-root MuiTypography-body1 css-qisfzi"
                          style={{
                            textDecoration: "none",
                            color: "rgba(29, 37, 45, 0.6)",
                            // color: "rgb(38, 112, 255)",
                            fontSize: "14px",
                            fontWeight: "700",
                          }}
                        >
                          프로젝트 편집
                        </p>
                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                    </div>
                    <div
                      class="MuiBox-root css-0"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDkgMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBvcGFjaXR5PSIwLjYiPgogICAgICAgIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUpIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgICAgICAgZD0iTTIuMjkzOTIgMTQuMjA3OEMyLjQ4MjgxIDE0LjM5NDYgMi43Mzc3NSAxNC40OTk0IDMuMDAzNDIgMTQuNDk5NEMzLjI2OTA4IDE0LjQ5OTQgMy41MjQwMyAxNC4zOTQ2IDMuNzEyOTIgMTQuMjA3OEw2LjY3NzkyIDExLjI2ODhDNi44OTI5MiAxMS4wNTA4IDYuOTk5OTIgMTAuNzY4OCA2Ljk5OTkyIDEwLjQ4OThDNi45OTk5MiAxMC4yMTA4IDYuODkyOTIgOS45MzM3OCA2LjY3NzkyIDkuNzIwNzhMMy43MjI5MiA2Ljc5MDc4QzMuNTMzOSA2LjYwNDIxIDMuMjc5IDYuNDk5NiAzLjAxMzQyIDYuNDk5NkMyLjc0NzgzIDYuNDk5NiAyLjQ5Mjk0IDYuNjA0MjEgMi4zMDM5MiA2Ljc5MDc4QzIuMjEwNzMgNi44ODI2MSAyLjEzNjc0IDYuOTkyMDUgMi4wODYyMyA3LjExMjc0QzIuMDM1NzIgNy4yMzM0MyAyLjAwOTcxIDcuMzYyOTUgMi4wMDk3MSA3LjQ5Mzc4QzIuMDA5NzEgNy42MjQ2MSAyLjAzNTcyIDcuNzU0MTMgMi4wODYyMyA3Ljg3NDgyQzIuMTM2NzQgNy45OTU1MSAyLjIxMDczIDguMTA0OTUgMi4zMDM5MiA4LjE5Njc4TDQuNjIwOTIgMTAuNDk0OEwyLjI5MzkyIDEyLjgwMThDMi4yMDExIDEyLjg5MzggMi4xMjc0MiAxMy4wMDMzIDIuMDc3MTQgMTMuMTI0QzIuMDI2ODYgMTMuMjQ0NiAyLjAwMDk4IDEzLjM3NDEgMi4wMDA5OCAxMy41MDQ4QzIuMDAwOTggMTMuNjM1NSAyLjAyNjg2IDEzLjc2NDkgMi4wNzcxNCAxMy44ODU2QzIuMTI3NDIgMTQuMDA2MiAyLjIwMTEgMTQuMTE1NyAyLjI5MzkyIDE0LjIwNzhaIgogICAgICAgICAgICAgIGZpbGw9IiMzNDQ1NjMiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                        alt="arrow"
                      />
                    </div>
                  </div>

                  <div class="MuiBox-root css-1txeit4">
                    <div
                      onClick={handleShowFindRespondent}
                      class="MuiBox-root css-0"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1cadocr"
                        tabIndex="0"
                        type="button"
                        name="응답자 찾기"
                      >
                        <p
                          class="MuiTypography-root MuiTypography-body1 css-qisfzi"
                          style={{
                            textDecoration: "none",
                            color: "rgba(29, 37, 45, 0.6)",
                            fontSize: "14px",
                            fontWeight: "700",
                          }}
                        >
                          응답자 찾기
                        </p>
                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                    </div>
                    <div
                      class="MuiBox-root css-0"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDkgMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBvcGFjaXR5PSIwLjYiPgogICAgICAgIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUpIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgICAgICAgZD0iTTIuMjkzOTIgMTQuMjA3OEMyLjQ4MjgxIDE0LjM5NDYgMi43Mzc3NSAxNC40OTk0IDMuMDAzNDIgMTQuNDk5NEMzLjI2OTA4IDE0LjQ5OTQgMy41MjQwMyAxNC4zOTQ2IDMuNzEyOTIgMTQuMjA3OEw2LjY3NzkyIDExLjI2ODhDNi44OTI5MiAxMS4wNTA4IDYuOTk5OTIgMTAuNzY4OCA2Ljk5OTkyIDEwLjQ4OThDNi45OTk5MiAxMC4yMTA4IDYuODkyOTIgOS45MzM3OCA2LjY3NzkyIDkuNzIwNzhMMy43MjI5MiA2Ljc5MDc4QzMuNTMzOSA2LjYwNDIxIDMuMjc5IDYuNDk5NiAzLjAxMzQyIDYuNDk5NkMyLjc0NzgzIDYuNDk5NiAyLjQ5Mjk0IDYuNjA0MjEgMi4zMDM5MiA2Ljc5MDc4QzIuMjEwNzMgNi44ODI2MSAyLjEzNjc0IDYuOTkyMDUgMi4wODYyMyA3LjExMjc0QzIuMDM1NzIgNy4yMzM0MyAyLjAwOTcxIDcuMzYyOTUgMi4wMDk3MSA3LjQ5Mzc4QzIuMDA5NzEgNy42MjQ2MSAyLjAzNTcyIDcuNzU0MTMgMi4wODYyMyA3Ljg3NDgyQzIuMTM2NzQgNy45OTU1MSAyLjIxMDczIDguMTA0OTUgMi4zMDM5MiA4LjE5Njc4TDQuNjIwOTIgMTAuNDk0OEwyLjI5MzkyIDEyLjgwMThDMi4yMDExIDEyLjg5MzggMi4xMjc0MiAxMy4wMDMzIDIuMDc3MTQgMTMuMTI0QzIuMDI2ODYgMTMuMjQ0NiAyLjAwMDk4IDEzLjM3NDEgMi4wMDA5OCAxMy41MDQ4QzIuMDAwOTggMTMuNjM1NSAyLjAyNjg2IDEzLjc2NDkgMi4wNzcxNCAxMy44ODU2QzIuMTI3NDIgMTQuMDA2MiAyLjIwMTEgMTQuMTE1NyAyLjI5MzkyIDE0LjIwNzhaIgogICAgICAgICAgICAgIGZpbGw9IiMzNDQ1NjMiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                        alt="arrow"
                      />
                    </div>
                  </div>
                  <div class="MuiBox-root css-1txeit4">
                    <div
                      onClick={handleShowShareLink}
                      class="MuiBox-root css-0"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1cadocr"
                        tabIndex="0"
                        type="button"
                        name="공유하기"
                      >
                        <p
                          class="MuiTypography-root MuiTypography-body1 css-qisfzi"
                          style={{
                            textDecoration: "none",
                            color: "rgba(29, 37, 45, 0.6)",
                            fontSize: "14px",
                            fontWeight: "700",
                          }}
                        >
                          공유하기
                        </p>
                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                    </div>
                    <div
                      class="MuiBox-root css-0"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDkgMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBvcGFjaXR5PSIwLjYiPgogICAgICAgIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUpIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgICAgICAgZD0iTTIuMjkzOTIgMTQuMjA3OEMyLjQ4MjgxIDE0LjM5NDYgMi43Mzc3NSAxNC40OTk0IDMuMDAzNDIgMTQuNDk5NEMzLjI2OTA4IDE0LjQ5OTQgMy41MjQwMyAxNC4zOTQ2IDMuNzEyOTIgMTQuMjA3OEw2LjY3NzkyIDExLjI2ODhDNi44OTI5MiAxMS4wNTA4IDYuOTk5OTIgMTAuNzY4OCA2Ljk5OTkyIDEwLjQ4OThDNi45OTk5MiAxMC4yMTA4IDYuODkyOTIgOS45MzM3OCA2LjY3NzkyIDkuNzIwNzhMMy43MjI5MiA2Ljc5MDc4QzMuNTMzOSA2LjYwNDIxIDMuMjc5IDYuNDk5NiAzLjAxMzQyIDYuNDk5NkMyLjc0NzgzIDYuNDk5NiAyLjQ5Mjk0IDYuNjA0MjEgMi4zMDM5MiA2Ljc5MDc4QzIuMjEwNzMgNi44ODI2MSAyLjEzNjc0IDYuOTkyMDUgMi4wODYyMyA3LjExMjc0QzIuMDM1NzIgNy4yMzM0MyAyLjAwOTcxIDcuMzYyOTUgMi4wMDk3MSA3LjQ5Mzc4QzIuMDA5NzEgNy42MjQ2MSAyLjAzNTcyIDcuNzU0MTMgMi4wODYyMyA3Ljg3NDgyQzIuMTM2NzQgNy45OTU1MSAyLjIxMDczIDguMTA0OTUgMi4zMDM5MiA4LjE5Njc4TDQuNjIwOTIgMTAuNDk0OEwyLjI5MzkyIDEyLjgwMThDMi4yMDExIDEyLjg5MzggMi4xMjc0MiAxMy4wMDMzIDIuMDc3MTQgMTMuMTI0QzIuMDI2ODYgMTMuMjQ0NiAyLjAwMDk4IDEzLjM3NDEgMi4wMDA5OCAxMy41MDQ4QzIuMDAwOTggMTMuNjM1NSAyLjAyNjg2IDEzLjc2NDkgMi4wNzcxNCAxMy44ODU2QzIuMTI3NDIgMTQuMDA2MiAyLjIwMTEgMTQuMTE1NyAyLjI5MzkyIDE0LjIwNzhaIgogICAgICAgICAgICAgIGZpbGw9IiMzNDQ1NjMiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                        alt="arrow"
                      />
                    </div>
                  </div>
                  <div class="MuiBox-root css-1txeit4">
                    <div
                      onClick={handleShowSurveyResult}
                      class="MuiBox-root css-0"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1cadocr"
                        tabIndex="0"
                        type="button"
                        name="결과보기"
                      >
                        <p
                          class="MuiTypography-root MuiTypography-body1 css-qisfzi"
                          style={{
                            textDecoration: "none",
                            color: "rgba(29, 37, 45, 0.6)",
                            fontSize: "14px",
                            fontWeight: "700",
                          }}
                        >
                          결과보기
                        </p>
                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="MuiBox-root css-tzmmb1">
                  <div class="MuiBox-root css-1gmwkzf">
                    <a
                      class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                      tabindex="0"
                      href="가이드"
                      target="_blank"
                      aria-label="프로젝트 가이드 보러가기"
                    >
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="HelpRoundedIcon"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88c.43-1.47 1.68-2.59 3.23-2.83 1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z"></path>
                      </svg>
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </a>
                  </div>
                  <button
                    class="MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1iuaaxh"
                    tabindex="0"
                    type="button"
                    id="mui-23"
                    onClick={handleSubmit}
                  >
                    게시하기
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                  <button
                    class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-148fdm8"
                    tabindex="0"
                    type="button"
                    aria-label="설정"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "16px",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      class="MuiAvatar-root MuiAvatar-circular css-1kavoh2"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <img
                        alt="profile_image"
                        src="https://lh3.googleusercontent.com/a/AGNmyxYCL1L24exss9DNiVXadg4hyk22I6p-ygUS50-mVx0=s96-c"
                        class="MuiAvatar-img css-1hy9t21"
                        onClick={handleClickProfile}
                      />
                    </div>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </div>
              </div>
            </header>
            {showCreateSurvey && (
              <CreateSurvey
                title={surveyTitle}
                category={surveyCategory}
                keyword={surveyKeyword}
                surveyQuestions={surveyQuestions}
                onSurveyQuestionsChange={handleSurveyQuestionsChange}
              />
            )}
            {showShareLink && <ShareLink surveyTitle={surveyTitle} />}
            {showFindRespondent && (
              <FindRespondent
                isSurveyPublic={isSurveyPublic}
                onSurveyPublicChange={handleSurveyPublicChange}
                isSurveyGPS={isSurveyGPS}
                onSurveyGPSChange={handleSurveyGPSChange}
                surveyCity={surveyCity}
                onSurveyCityChange={handleSurveyCityChange}
                surveyStartDate={surveyStartDate}
                onSurveyStartDateChange={handleSurveyStartDateChange}
                surveyEndDate={surveyEndDate}
                onSurveyEndDateChange={handleSurveyEndDateChange}
              />
            )}
            {showSurveyResult && <SurveyResult />}
          </div>
        </div>
        <div
          id="gatsby-announcer"
          aria-live="assertive"
          aria-atomic="true"
          style={{
            position: "absolute",
            top: "0px",
            width: "1px",
            height: "1px",
            padding: "0px",
            overflow: "hidden",
            clip: "rect(0px, 0px, 0px, 0px)",
            whiteSpace: "nowrap",
            border: "0px",
          }}
        >
          Navigated to 왈라! - 편집하기
        </div>
      </div>
      <div
        id="rbd-announcement-1"
        aria-live="assertive"
        aria-atomic="true"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          border: "0px",
          padding: "0px",
          overflow: "hidden",
          clip: "rect(0px, 0px, 0px, 0px)",
          clipPath: "inset(100%)",
        }}
        aria-hidden="true"
      ></div>
      <div
        id="rbd-hidden-text-1-hidden-text-2"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        Press space bar to start a drag. When dragging you can use the arrow
        keys to move the item around and escape to cancel. Some screen readers
        may require you to be in focus mode or to use your pass through key
      </div>
      {showProfile && (
        <div
          role="presentation"
          class="MuiDialog-root MuiModal-root css-126xj0f"
        >
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
                  <div
                    className="MuiBox-root css-0"
                    style={{ padding: "40px" }}
                  >
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
                                  value="이서빈이"
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
                                  value="leeseobin000709@gmail.com"
                                  id="mui-121"
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
                                위치
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
                                  placeholder={siData}
                                  readOnly=""
                                  required=""
                                  type="text"
                                  className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel MuiInputBase-readOnly css-10m06oi"
                                  value={siData}
                                  id="mui-121"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
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
      )}
    </>
  );
}

export default KAKAQ;
