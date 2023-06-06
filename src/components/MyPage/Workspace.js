import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarProfile from "../../NavbarProfile";
import ShowProfile from "../../ShowProfile";

function Workspace() {
  // 설문 데이터
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [showSurvey, setShowSurvey] = useState(true);
  const [showParticipate, setShowParticipate] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMakeForm, setShowMakeForm] = useState(false);
  const [showMakeChatbotForm, setShowMakeChatbotForm] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [type, setType] = useState("");
  const options = ["여행", "맛집", "교육", "문화생활", "기타"];
  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveyKeyword, setSurveyKeyword] = useState([]);
  const [surveyCategory, setSurveyCategory] = useState("");
  const [surveySubject, setSurveySubject] = useState("");
  const [categorySurveys, setCategorySurveys] = useState([]);
  const [searchSurveys, setSearchSurveys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [whoLoggedIn, setWhoLeggedIn] = useState(null); // 사용자 이메일(아이디) 저장
  const [username, setUsername] = useState(null); // 사용자 이름 저장
  const [role, setRole] = useState(null);
  const [creator, setCreator] = useState("");
  const [keyword, setKeyword] = useState("");
  const [mergedSurveys, setMergedSurveys] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 카테고리 버튼
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // 검색 키워드
  const handleInputChange = (event) => {
    setKeyword(event.target.value);
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

      navigator.geolocation.getCurrentPosition(function (pos) {
        //현재위치 가져오기
        setgeoData((prevData) => ({
          ...prevData,
          ["latitude"]: pos.coords.latitude,
          ["longitude"]: pos.coords.longitude,
        }));
      });
    }
  }, []);

  let imageUrl = "";

  const userRole = sessionStorage.getItem("userRole");

  if (userRole === "라이언") {
      imageUrl = "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502133540_5b2ce511c22d4197807e32485d3fca0c.png";
  } else if (userRole === "어피치") {
      imageUrl = "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502133641_a7c5ac400a974e4ea655b5b7b6a51b59.png";
  } else if (userRole === "콘") {
      imageUrl = "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502134234_52e92257f3e04c619fd901da809e84f0.png";
  } else if (userRole === "춘식이") {
      imageUrl = "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502134313_3946f67d34604e629a739c72c24d5aa4.png";
  } else if (userRole === "무지") {
      imageUrl = "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502133726_696cdcc692a6434293c16bc41ba09c96.png";
  } else {
      imageUrl = "https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230502133812_098f311bb7be4d3a9fe5bc78d80b9e49.png";
  }

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

  const handleSurveyCategorySelect = (event) => {
    const selectedOption = event.target.value;
    setSurveyCategory(selectedOption);
  };

  const handleSurveySubjectChange = (event) => {
    setSurveySubject(event.target.value);
  };

  const handleSurveyTitleChange = (event) => {
    setSurveyTitle(event.target.value);
  };

  const handleSurveyKeywordChange = (event) => {
    const keywordString = event.target.value;
    const keywordArray = keywordString
      .split(",")
      .map((keyword) => keyword.trim());
    console.log(keywordArray);
    setSurveyKeyword(keywordArray);
  };

  const handleKeywordDelete = (index) => {
    const updatedKeywords = [...surveyKeyword];
    updatedKeywords.splice(index, 1);
    setSurveyKeyword(updatedKeywords);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleQuestionTypeChange = (type) => {
    setQuestion(type);
  };

  const handleSurveyClick = () => {
    setShowSurvey(true);
    setShowParticipate(false);
    setShowList(false);
  };

  const handleParticipateClick = () => {
    setShowSurvey(false);
    setShowParticipate(true);
    setShowList(false);
  };

  const handleListClick = () => {
    setShowSurvey(false);
    setShowParticipate(false);
    setShowList(true);
  };

  const handleClickPresentation = () => {
    setShowPresentation(true);
  };

  const handleClosePresentation = () => {
    setShowPresentation(false);
  };

  const handleClickProfile = () => {
      setShowProfile(true);
  };

  const handleCloseProfile = () => {
      setShowProfile(false);
  };

  const handleClickMakeForm = () => {
    setShowMakeForm(true);
  };

  const handleCloseMakeForm = () => {
    setShowMakeForm(false);
  };

  const handleClickMakeChatbotForm = () => {
    setShowMakeChatbotForm(true);
  };

  const handleCloseMakeChatbotForm = () => {
    setShowMakeChatbotForm(false);
  };

  const handleClickOption = () => {
    setShowOption(true);
  };

  const handleCloseOption = () => {
    setShowOption(false);
  };

  const handleClickEdit = () => {
    alert("수정하시겠습니까?");
  };

  const handleClickDelete = () => {
    alert("삭제하시겠습니까?");
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // 사용자가 입력한 제목, 키워드, 카테고리를 이용하여 작업을 수행합니다.
    // 여기에서는 간단히 콘솔에 값을 출력하는 예시를 보여드리겠습니다.
    console.log("제목:", surveyTitle);
    console.log("키워드:", surveyKeyword);
    console.log("카테고리:", surveyCategory);

    navigate("/kakaq", {
      state: {
        surveyTitle: surveyTitle,
        surveyKeyword: surveyKeyword,
        surveyCategory: surveyCategory,
        username: username,
        siData: siData
      },
    });
  };

  const [questions, setQuestions] = useState([]);

  const handleChatbotSubmit = (event) => {
    event.preventDefault();
    console.log("제목: ", surveyTitle);
    console.log("키워드: ", surveyKeyword);
    console.log("카테고리: ", surveyCategory);
    console.log("주제: ", surveySubject);

    axios
      .get("/api/survey/chatbot?topic=" + surveySubject)
      .then(function (response) {
        console.log(response.data.choices[0].text);

        const newQuestions = response.data.choices[0].text
          .split("\n\n")
          .slice(1)
          .map((questionText, questionIndex) => {
            const options = questionText
              .split("\n")
              .slice(1)
              .map((optionText) => optionText);

            return {
              id: questionIndex + 1,
              text: questionText.split("\n")[0].slice(3),
              type: "객관식",
              options: options,
            };
          });

        setQuestions(newQuestions);
        console.log(newQuestions);
        navigate("/kakaq", {
          state: {
            surveyQuestions: newQuestions,
            surveyTitle: surveyTitle,
            surveyKeyword: surveyKeyword,
            surveyCategory: surveyCategory,
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // script
  const [isAddVisible, setAddVisible] = useState(false);
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const [isEndingTypeVisible, setEndingTypeVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [openSurveys, setOpenSurveys] = useState([]);

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

  const hideDelete = () => {
    setDeleteVisible(false);
  };

  const hideEndingType = () => {
    setEndingTypeVisible(false);
  };

  useEffect(() => {
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

  // filter survey API
  useEffect(() => {
    let url = "api/surveys/filter";
    if (selectedCategory) {
      url += `?category=${selectedCategory}`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategorySurveys(data);
        console.log("Filtered result:", data);
      })
      .catch((error) => {
        console.error("Error fetching surveys:", error);
      });
  }, [selectedCategory]);

  // search survey API
  const handleSearch = () => {
    if (keyword.trim() !== "") {
      fetch(`api/search?keyword=${encodeURIComponent(keyword)}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setSearchSurveys(data);
          console.log("Search results:", data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  };

  // Merge filtered and search surveys whenever they change
  useEffect(() => {
    const filteredIds = categorySurveys.map((survey) => survey.id);
    const merged = searchSurveys.filter((survey) => filteredIds.includes(survey.id));
    setMergedSurveys(merged);
  }, [categorySurveys, searchSurveys]);

  return (
    <>
      <div id="___gatsby">
        <div tabindex="-1" id="gatsby-focus-wrapper">
          <div class="Muibox-root css-121had8">
            {/* 상단 navbar */}
            <NavbarProfile 
            username={username}
            whoLoggedIn={whoLoggedIn}
            siData={siData}/>
            <div class="MuiDrawer-root MuiDrawer-docked css-gyfe2h">
              <div class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-1l8j5k8">
                <div
                  class="MuiBox-root css-0"
                  style={{
                    marginTop: "56px",
                    marginBottom: "56px",
                    backgroundColor: "(255, 255, 255)",
                    height: "100%",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  {/* 왼쪽 navbar */}
                  <div className="MuiBox-root css-6u4ksa">
                    {/* 사용자 정보 */}
                    <div className="MuiBox-root css-1gr7l3m">
                      <div className="MuiBox-root css-0">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-148fdm8"
                          tabIndex="0"
                          type="button"
                        >
                          <div className="MuiAvatar-root MuiAvatar-circular css-1kavoh2">
                            <img
                              alt="profile_photo"
                              src={imageUrl}
                              className="MuiAvatar-img css-1hy9t21"
                              onClick={handleClickProfile}
                            />
                          </div>
                          <span className="MuiTouchRipple-root css-w0pj6f"></span>
                        </button>
                      </div>
                      <div
                        className="MuiBox-root css-0"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "10px",
                        }}
                      >
                        <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                          {username}
                        </span>
                        <span
                          style={{
                            fontSize: "10px",
                            color: "rgb(107, 119, 140)",
                          }}
                        >
                          {whoLoggedIn}
                        </span>
                      </div>
                    </div>
                    {/* Survey */}
                    <div className="MuiBox-root css-0">
                      <ul className="MuiList-root MuiList-padding MuiList-dense css-1ontqvh">
                        <div
                          className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-dense MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-dense MuiListItemButton-gutters Mui-selected css-1pxge5a"
                          tabIndex="0"
                          role="button"
                        >
                          <div className="MuiListItemIcon-root css-se9f2t">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-57kesc"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="DescriptionRoundedIcon"
                            >
                              <path d="M14.59 2.59c-.38-.38-.89-.59-1.42-.59H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM15 18H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm-2-6V3.5L18.5 9H14c-.55 0-1-.45-1-1z"></path>
                            </svg>
                          </div>
                          <div className="MuiListItemText-root MuiListItemText-dense css-1tsvksn">
                            <span className="MuiTypography-root MuiTypography-body2 MuiListItemText-primary css-uytoh0">
                              생성한 설문조사
                            </span>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>

                  <div
                    class="FieldsListDrawer__ColResizer-sc-rlte4u-0 cWIaYp leftColResizer"
                    role="presentation"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="MuiBox-root css-taqiom"
              component="main"
              style={{ height: "100%" }}
            >
              <div tabindex="-1" style={{ outline: "none" }}>
                <div
                  class="MuiBox-root css-0 mt-2"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="MuiBox-root css-13srvq4">
                    <div className="MuiBox-root css-1l4w6pd">
                      <div className="MuiTabs-root css-orq8zk">
                        <div
                          className="MuiTabs-scroller MuiTabs-fixed css-1anid1y"
                          style={{ overflow: "hidden", marginBottom: "0px" }}
                        >
                          <div
                            aria-label="lab API tabs example"
                            className="MuiTabs-flexContainer css-k008qs"
                            role="tablist"
                          >
                            <button
                              className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1b8ypoz ${
                                showSurvey ? "Mui-selected" : ""
                              }`}
                              tabIndex={0}
                              type="button"
                              role="tab"
                              aria-selected="true"
                              aria-controls="mui-p-43309-P-all"
                              id="mui-p-43309-T-all"
                              onClick={handleSurveyClick}
                            >
                              생성한 설문조사
                            </button>
                            <button
                              className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1b8ypoz ${
                                showParticipate ? "Mui-selected" : ""
                              }`}
                              tabIndex={-1}
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="mui-p-43309-P-deleted"
                              id="mui-p-43309-T-all"
                              onClick={handleParticipateClick}
                            >
                              참여한 설문조사
                            </button>
                            <button
                              className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1b8ypoz ${
                                showList ? "Mui-selected" : ""
                              }`}
                              tabIndex={-1}
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="mui-p-43309-P-deleted"
                              id="mui-p-43309-T-deleted"
                              onClick={handleListClick}
                            >
                              참여 가능 설문조사
                            </button>
                          </div>
                          <span
                            className="MuiTabs-indicator css-eu9d1t"
                            style={{ left: "0px", width: "90px" }}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="MuiBox-root css-0">
                    <div class="MuiContainer-root css-10ur324">
                      <div
                        className={`MuiTabPanel-root css-19kzrtu ${
                          showSurvey ? "" : "hidden"
                        }`}
                        role="tabpanel"
                        aria-labelledby="mui-p-43309-T-all"
                        id="mui-p-43309-P-all"
                      >
                        <div
                          className="MuiBox-root css-0"
                          style={{ display: "flex", flexWrap: "wrap" }}
                        >
                          <div
                            className="MuiBox-root css-1nt6gcm"
                            style={{ display: "flex", flexWrap: "wrap" }}
                          >
                            <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-aodj49">
                              <div
                                className="MuiCardContent-root css-1isomi"
                                onClick={handleClickPresentation}
                              >
                                <img
                                  class="MuiBox-root css-ild8d2"
                                  alt="addProjectIcon"
                                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yOC4wMDAxIDAuNDQ0MzM2QzQzLjE5NDEgMC40NDQzMzYgNTUuNTU1NyAxMi44MDU5IDU1LjU1NTcgMjcuOTk5OUM1NS41NTU3IDQzLjE5MzkgNDMuMTk0MSA1NS41NTU0IDI4LjAwMDEgNTUuNTU1NEMxMi44MDYxIDU1LjU1NTQgMC40NDQ1NTcgNDMuMTkzOSAwLjQ0NDU1NyAyNy45OTk5QzAuNDQ0NTU3IDEyLjgwNTkgMTIuODA2MSAwLjQ0NDMzNiAyOC4wMDAxIDAuNDQ0MzM2Wk0xNy40MDE4IDMwLjExOTVIMjUuODgwNVYzOC41OTgyQzI1Ljg4MDUgMzkuMTYwMyAyNi4xMDM4IDM5LjY5OTUgMjYuNTAxMyA0MC4wOTdDMjYuODk4OCA0MC40OTQ1IDI3LjQzNzkgNDAuNzE3OCAyOC4wMDAxIDQwLjcxNzhDMjguNTYyMyA0MC43MTc4IDI5LjEwMTQgNDAuNDk0NSAyOS40OTg5IDQwLjA5N0MyOS44OTY0IDM5LjY5OTUgMzAuMTE5OCAzOS4xNjAzIDMwLjExOTggMzguNTk4MlYzMC4xMTk1SDM4LjU5ODRDMzkuMTYwNiAzMC4xMTk1IDM5LjY5OTcgMjkuODk2MiA0MC4wOTcyIDI5LjQ5ODdDNDAuNDk0NyAyOS4xMDEyIDQwLjcxODEgMjguNTYyMSA0MC43MTgxIDI3Ljk5OTlDNDAuNzE4MSAyNy40Mzc3IDQwLjQ5NDcgMjYuODk4NiA0MC4wOTcyIDI2LjUwMTFDMzkuNjk5NyAyNi4xMDM2IDM5LjE2MDYgMjUuODgwMiAzOC41OTg0IDI1Ljg4MDJIMzAuMTE5OFYxNy40MDE2QzMwLjExOTggMTYuODM5NCAyOS44OTY0IDE2LjMwMDMgMjkuNDk4OSAxNS45MDI4QzI5LjEwMTQgMTUuNTA1MyAyOC41NjIzIDE1LjI4MTkgMjguMDAwMSAxNS4yODE5QzI3LjQzNzkgMTUuMjgxOSAyNi44OTg4IDE1LjUwNTMgMjYuNTAxMyAxNS45MDI4QzI2LjEwMzggMTYuMzAwMyAyNS44ODA1IDE2LjgzOTQgMjUuODgwNSAxNy40MDE2VjI1Ljg4MDJIMTcuNDAxOEMxNi44Mzk3IDI1Ljg4MDIgMTYuMzAwNSAyNi4xMDM2IDE1LjkwMyAyNi41MDExQzE1LjUwNTUgMjYuODk4NiAxNS4yODIyIDI3LjQzNzcgMTUuMjgyMiAyNy45OTk5QzE1LjI4MjIgMjguNTYyMSAxNS41MDU1IDI5LjEwMTIgMTUuOTAzIDI5LjQ5ODdDMTYuMzAwNSAyOS44OTYyIDE2LjgzOTcgMzAuMTE5NSAxNy40MDE4IDMwLjExOTVaIgogICAgICAgICAgZmlsbD0iI0NEQ0RDRCIvPgo8L3N2Zz4K"
                                />
                              </div>
                            </div>
                            {createdSurveys.map((survey, index) => (
                              <Link to={"/survey/" + survey.id + "/result"}>
                                <div
                                  className="MuiBox-root css-0"
                                  style={{ margin: "0px 24px 20px 0px" }}
                                >
                                  <div
                                    className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1ohqwy3"
                                    width="265"
                                    minheight="160"
                                  >
                                    <div className="MuiCardContent-root css-67yy9o">
                                      <div className="MuiBox-root css-1yd9vr8">
                                        <div
                                          className="MuiBox-root css-0"
                                          style={{
                                            width: "40px",
                                            height: "40px",
                                            backgroundColor: "rgb(249 249 196)",
                                            borderRadius: "40px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            overflow: "hidden",
                                          }}
                                        >
                                          <span
                                            style={{
                                              position: "absolute",
                                              fontSize: "20px",
                                            }}
                                          >
                                            🙂
                                          </span>
                                        </div>
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium .css-d9kxen .MuiPopover-paper .css-1oqb34a css-1yxmbwk"
                                          tabIndex="0"
                                          type="button"
                                          style={{
                                            padding: "3px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            position: "absolute",
                                            top: "24px",
                                            right: "24px",
                                            cursor: "pointer",
                                          }}
                                        >
                                          <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-luvl9n mr-1"
                                            focusable="false"
                                            aria-hidden="true"
                                            data-testid="EditIcon"
                                            viewBox="0 0 24 24"
                                            onClick={handleClickEdit}
                                          >
                                            <path d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" />
                                          </svg>
                                          <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-luvl9n "
                                            focusable="false"
                                            aria-hidden="true"
                                            data-testid="DeleteIcon"
                                            viewBox="0 0 24 24"
                                            onClick={handleClickDelete}
                                          >
                                            <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
                                          </svg>
                                          <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                        </button>
                                      </div>

                                      <div
                                        className="MuiBox-root css-8atqhb"
                                        aria-label={survey.title}
                                      >
                                        <div className="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-readOnly css-88ls20">
                                          <input
                                            readOnly
                                            type="text"
                                            className="MuiInputBase-input MuiInputBase-readOnly css-mnn31"
                                            value={survey.title}
                                          />
                                        </div>
                                      </div>
                                      <div className="MuiBox-root css-1yd9vr8">
                                        <p
                                          className="MuiTypography-root MuiTypography-body1 css-szuxaf"
                                          style={{ textDecoration: "none" }}
                                        >
                                          {survey.status ? "진행중" : "종료"}
                                        </p>
                                        <div
                                          className="MuiBox-root css-0"
                                          style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                          }}
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`MuiTabPanel-root css-19kzrtu ${
                          showParticipate ? "" : "hidden"
                        }`}
                        role="tabpanel"
                        aria-labelledby="mui-p-43309-T-deleted"
                        id="mui-p-43309-P-deleted"
                      >
                        <div
                          className="MuiBox-root css-0"
                          style={{ display: "flex", flexWrap: "wrap" }}
                        >
                          {/* 참여한 설문조사 */}
                          {participatedSurveys.map((survey, index) => (
                            <div
                              className="MuiBox-root css-0"
                              style={{ margin: "0px 24px 20px 0px" }}
                            >
                              <div
                                className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1ohqwy3"
                                width="265"
                                minheight="160"
                              >
                                <div className="MuiCardContent-root css-67yy9o">
                                  <div className="MuiBox-root css-1yd9vr8">
                                    <div class="flex items-center gap-x-4 text-xs">
                                      <div class="text-gray-500">
                                        {index + 1}
                                      </div>
                                      <div class="text-gray-500">
                                        {survey.status ? "진행중" : "종료"}
                                      </div>
                                    </div>
                                    <svg
                                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-luvl9n"
                                      focusable="false"
                                      aria-hidden="true"
                                      viewBox="0 0 24 24"
                                      data-testid="MoreHorizIcon"
                                    >
                                      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiBox-root css-8atqhb"
                                    aria-label={survey.title}
                                  >
                                    <div className="mt-4 MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-readOnly css-88ls20">
                                      <input
                                        readOnly
                                        type="text"
                                        className="MuiInputBase-input MuiInputBase-readOnly css-mnn31"
                                        value={survey.title}
                                      />
                                    </div>
                                  </div>
                                  <div class="relative mt-8 flex items-center gap-x-4">
                                    <img
                                      alt=""
                                      class="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div class="text-sm leading-6">
                                      <p class="font-semibold text-gray-900">
                                        <a href="#">
                                          <span class="absolute inset-0"></span>
                                        </a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`MuiTabPanel-root css-19kzrtu ${
                          showList ? "" : "hidden"
                        }`}
                        role="tabpanel"
                        aria-labelledby="mui-p-43309-T-deleted"
                        id="mui-p-43309-P-deleted"
                      >
                        <div
                          className="MuiBox-root css-0"
                          style={{ display: "flex", flexWrap: "wrap" }}
                        >
                          <div className="MuiBox-root css-kl5uk3">
                            <div>
                              <div className="ant-picker ant-picker-range css-diro6f MuiBox-root css-rk138a">
                                <div className="ant-picker-input ant-picker-input-active">
                                  <input
                                    type="text"
                                    value={keyword}
                                    onChange={handleInputChange}
                                    placeholder="키워드를 입력해주세요."
                                    style={{ marginRight: "10px" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={handleSearch}
                              className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1y1p9da"
                              tabIndex="0"
                              type="button"
                            >
                              <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="SearchIcon"
                                >
                                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </svg>
                              </span>
                              조회하기
                              <span className="MuiTouchRipple-root css-w0pj6f"></span>
                            </button>
                          </div>
                        </div>
                        <div>
                          {/* 키워드 검색 */}
                          <div className="survey-search-results">
                            {searchSurveys.map((survey) => (
                              <div key={survey.id}>
                                <p>Survey: {survey.title}</p>
                                <p>Category: {survey.category}</p>
                                <p>Start Date: {survey.startDate}</p>
                                <p>End Date: {survey.endDate}</p>
                              </div>
                            ))}
                          </div>
                          {/* 카테고리 선택 버튼 */}
                          <div
                            className="MuiTabs-scroller MuiTabs-fixed css-1anid1y"
                            style={{ overflow: "hidden", marginBottom: "0px" }}
                          >
                            <div
                              aria-label="lab API tabs example"
                              className="MuiTabs-flexContainer css-k008qs"
                              role="tablist"
                            >
                              <button
                                className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1b8ypoz category-button ${
                                  selectedCategory === ""
                                    ? "selected Mui-selected"
                                    : ""
                                }`}
                                tabIndex={0}
                                type="button"
                                role="tab"
                                aria-selected="true"
                                aria-controls="mui-p-43309-P-all"
                                id="mui-p-43309-T-all"
                                onClick={() => handleCategoryClick("")}
                              >
                                전체
                              </button>
                              <button
                                className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1b8ypoz category-button ${
                                  selectedCategory === "여행"
                                    ? "selected Mui-selected"
                                    : ""
                                }`}
                                tabIndex={0}
                                type="button"
                                role="tab"
                                aria-selected="true"
                                aria-controls="mui-p-43309-P-all"
                                id="mui-p-43309-T-all"
                                onClick={() => handleCategoryClick("여행")}
                              >
                                여행
                              </button>
                              <button
                                className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1b8ypoz category-button ${
                                  selectedCategory === "맛집"
                                    ? "selected Mui-selected"
                                    : ""
                                }`}
                                tabIndex={0}
                                type="button"
                                role="tab"
                                aria-selected="true"
                                aria-controls="mui-p-43309-P-all"
                                id="mui-p-43309-T-all"
                                onClick={() => handleCategoryClick("맛집")}
                              >
                                맛집
                              </button>
                              <button
                                className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1b8ypoz category-button ${
                                  selectedCategory === "문화생활"
                                    ? "selected Mui-selected"
                                    : ""
                                }`}
                                tabIndex={0}
                                type="button"
                                role="tab"
                                aria-selected="true"
                                aria-controls="mui-p-43309-P-all"
                                id="mui-p-43309-T-all"
                                onClick={() => handleCategoryClick("문화생활")}
                              >
                                문화생활
                              </button>
                              <button
                                className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1b8ypoz category-button ${
                                  selectedCategory === "교육"
                                    ? "selected Mui-selected"
                                    : ""
                                }`}
                                tabIndex={0}
                                type="button"
                                role="tab"
                                aria-selected="true"
                                aria-controls="mui-p-43309-P-all"
                                id="mui-p-43309-T-all"
                                onClick={() => handleCategoryClick("교육")}
                              >
                                교육
                              </button>
                              <button
                                className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1b8ypoz category-button ${
                                  selectedCategory === "기타"
                                    ? "selected Mui-selected"
                                    : ""
                                }`}
                                tabIndex={0}
                                type="button"
                                role="tab"
                                aria-selected="true"
                                aria-controls="mui-p-43309-P-all"
                                id="mui-p-43309-T-all"
                                onClick={() => handleCategoryClick("기타")}
                              >
                                기타
                              </button>
                            </div>
                            <span
                              className="MuiTabs-indicator css-eu9d1t"
                              style={{ left: "0px", width: "90px" }}
                            ></span>
                          </div>
                          <div
                            className="survey-results"
                            style={{ display: "flex", flexWrap: "wrap" }}
                          >
                            {mergedSurveys.map((survey) => (
                              <Link to={"/participate/" + survey.id}>
                                <>
                                  <div
                                    className="MuiBox-root css-0"
                                    style={{ margin: "0px 24px 20px 0px" }}
                                  >
                                    <div
                                      className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1ohqwy3"
                                      width="265"
                                      minheight="160"
                                    >
                                      <div className="MuiCardContent-root css-67yy9o">
                                        <div className="MuiBox-root css-1yd9vr8">
                                          <div class="flex items-center gap-x-4 text-xs">
                                            <time class="text-gray-500">
                                              {survey.startDate.substring(
                                                0,
                                                survey.startDate.indexOf("T")
                                              )}
                                            </time>
                                            <time
                                              datetime="2020-03-16"
                                              class="text-gray-500"
                                            >
                                              {survey.endDate.substring(
                                                0,
                                                survey.endDate.indexOf("T")
                                              )}
                                            </time>
                                          </div>
                                          <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-luvl9n"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="MoreHorizIcon"
                                          >
                                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                          </svg>
                                        </div>
                                        <div
                                          className="MuiBox-root css-8atqhb"
                                          style={{ display: "flex" }}
                                          aria-label={survey.title}
                                        >
                                          <div className="mt-4 MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-readOnly css-88ls20">
                                            <input
                                              readOnly
                                              type="text"
                                              className="MuiInputBase-input MuiInputBase-readOnly css-mnn31"
                                              value={survey.title}
                                            />
                                          </div>
                                          <div className="mt-4 MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-readOnly css-88ls20">
                                            <input
                                              readOnly
                                              type="text"
                                              className="MuiInputBase-input MuiInputBase-readOnly css-mnn31"
                                              style={{ fontSize: "small" }}
                                              value={survey.category}
                                            />
                                          </div>
                                        </div>
                                        <div class="relative mt-8 flex items-center gap-x-4">
                                          <img
                                            // src={survey.profile}
                                            alt=""
                                            class="h-10 w-10 rounded-full bg-gray-50"
                                          />
                                          <div class="text-sm leading-6">
                                            <p class="font-semibold text-gray-900">
                                              <a href="#">
                                                <span class="absolute inset-0"></span>
                                                {survey.creator}
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        ></div>
      </div>
      {showProfile && (
          <ShowProfile 
          onClose={handleCloseProfile}
          username={username}
          whoLoggedIn={whoLoggedIn}
          siData={siData}
          />
      )}
      {showPresentation && (
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
              class="MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullWidth MuiBox-root css-1exnm1p"
              elevation="24"
              role="dialog"
              aria-labelledby="mui-4"
            >
              <div className="MuiDialogContent-root css-1jk1mjg">
                <p
                  className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                  style={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "rgb(23, 43, 77)",
                  }}
                >
                  새로운 프로젝트 만들기
                </p>
                <div
                  className="MuiBox-root css-0"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgogICAgPHBhdGggZD0iTTkuOTk5ODUgOC44MjE2N0w1LjU4OTAyIDQuNDEwODRDNS40MzE4NSA0LjI1OTA0IDUuMjIxMzUgNC4xNzUwNSA1LjAwMjg1IDQuMTc2OTRDNC43ODQzNSA0LjE3ODg0IDQuNTc1MzQgNC4yNjY0OCA0LjQyMDg0IDQuNDIwOTlDNC4yNjYzMyA0LjU3NTUgNC4xNzg2OSA0Ljc4NDUxIDQuMTc2NzkgNS4wMDMwMUM0LjE3NDg5IDUuMjIxNSA0LjI1ODg5IDUuNDMyIDQuNDEwNjggNS41ODkxN0w4LjgyMTUyIDEwTDQuNDEwNjggMTQuNDEwOEM0LjI1ODg5IDE0LjU2OCA0LjE3NDg5IDE0Ljc3ODUgNC4xNzY3OSAxNC45OTdDNC4xNzg2OSAxNS4yMTU1IDQuMjY2MzMgMTUuNDI0NSA0LjQyMDg0IDE1LjU3OUM0LjU3NTM0IDE1LjczMzUgNC43ODQzNSAxNS44MjEyIDUuMDAyODUgMTUuODIzMUM1LjIyMTM1IDE1LjgyNSA1LjQzMTg1IDE1Ljc0MSA1LjU4OTAyIDE1LjU4OTJMOS45OTk4NSAxMS4xNzgzTDE0LjQxMDcgMTUuNTg5MkMxNC41Njc5IDE1Ljc0MSAxNC43Nzg0IDE1LjgyNSAxNC45OTY5IDE1LjgyMzFDMTUuMjE1MyAxNS44MjEyIDE1LjQyNDQgMTUuNzMzNSAxNS41Nzg5IDE1LjU3OUMxNS43MzM0IDE1LjQyNDUgMTUuODIxIDE1LjIxNTUgMTUuODIyOSAxNC45OTdDMTUuODI0OCAxNC43Nzg1IDE1Ljc0MDggMTQuNTY4IDE1LjU4OSAxNC40MTA4TDExLjE3ODIgMTBMMTUuNTg5IDUuNTg5MTdDMTUuNjY4NiA1LjUxMjMgMTUuNzMyMSA1LjQyMDM1IDE1Ljc3NTggNS4zMTg2OEMxNS44MTk0IDUuMjE3MDEgMTUuODQyNCA1LjEwNzY2IDE1Ljg0MzQgNC45OTcwMUMxNS44NDQ0IDQuODg2MzYgMTUuODIzMyA0Ljc3NjYzIDE1Ljc4MTQgNC42NzQyMUMxNS43Mzk1IDQuNTcxOCAxNS42Nzc2IDQuNDc4NzUgMTUuNTk5MyA0LjQwMDUxQzE1LjUyMTEgNC4zMjIyNyAxNS40MjgxIDQuMjYwMzkgMTUuMzI1NiA0LjIxODQ5QzE1LjIyMzIgNC4xNzY1OSAxNS4xMTM1IDQuMTU1NSAxNS4wMDI5IDQuMTU2NDZDMTQuODkyMiA0LjE1NzQzIDE0Ljc4MjkgNC4xODA0MSAxNC42ODEyIDQuMjI0MDlDMTQuNTc5NSA0LjI2Nzc2IDE0LjQ4NzYgNC4zMzEyNSAxNC40MTA3IDQuNDEwODRMOS45OTk4NSA4LjgyMTY3WiIKICAgICAgICAgIGZpbGw9IiM0MjUyNkUiLz4KPC9zdmc+Cg=="
                    alt="close-icon"
                    onClick={handleClosePresentation}
                  />
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-container css-164m23r">
                {/* 컴포넌트 1 */}
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true css-uvp898">
                  <div
                    className="MuiBox-root css-25bi29"
                    style={{
                      boxShadow: "none",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    onClick={handleClickMakeForm}
                  >
                    <div className="MuiBox-root css-1acuc8l">
                      <div
                        className="MuiBox-root css-0"
                        style={{
                          width: "164px",
                          height: "92px",
                          backgroundColor: "rgb(240, 240, 240)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "5px",
                        }}
                      >
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yOC4wMDAxIDAuNDQ0MzM2QzQzLjE5NDEgMC40NDQzMzYgNTUuNTU1NyAxMi44MDU5IDU1LjU1NTcgMjcuOTk5OUM1NS41NTU3IDQzLjE5MzkgNDMuMTk0MSA1NS41NTU0IDI4LjAwMDEgNTUuNTU1NEMxMi44MDYxIDU1LjU1NTQgMC40NDQ1NTcgNDMuMTkzOSAwLjQ0NDU1NyAyNy45OTk5QzAuNDQ0NTU3IDEyLjgwNTkgMTIuODA2MSAwLjQ0NDMzNiAyOC4wMDAxIDAuNDQ0MzM2Wk0xNy40MDE4IDMwLjExOTVIMjUuODgwNVYzOC41OTgyQzI1Ljg4MDUgMzkuMTYwMyAyNi4xMDM4IDM5LjY5OTUgMjYuNTAxMyA0MC4wOTdDMjYuODk4OCA0MC40OTQ1IDI3LjQzNzkgNDAuNzE3OCAyOC4wMDAxIDQwLjcxNzhDMjguNTYyMyA0MC43MTc4IDI5LjEwMTQgNDAuNDk0NSAyOS40OTg5IDQwLjA5N0MyOS44OTY0IDM5LjY5OTUgMzAuMTE5OCAzOS4xNjAzIDMwLjExOTggMzguNTk4MlYzMC4xMTk1SDM4LjU5ODRDMzkuMTYwNiAzMC4xMTk1IDM5LjY5OTcgMjkuODk2MiA0MC4wOTcyIDI5LjQ5ODdDNDAuNDk0NyAyOS4xMDEyIDQwLjcxODEgMjguNTYyMSA0MC43MTgxIDI3Ljk5OTlDNDAuNzE4MSAyNy40Mzc3IDQwLjQ5NDcgMjYuODk4NiA0MC4wOTcyIDI2LjUwMTFDMzkuNjk5NyAyNi4xMDM2IDM5LjE2MDYgMjUuODgwMiAzOC41OTg0IDI1Ljg4MDJIMzAuMTE5OFYxNy40MDE2QzMwLjExOTggMTYuODM5NCAyOS44OTY0IDE2LjMwMDMgMjkuNDk4OSAxNS45MDI4QzI5LjEwMTQgMTUuNTA1MyAyOC41NjIzIDE1LjI4MTkgMjguMDAwMSAxNS4yODE5QzI3LjQzNzkgMTUuMjgxOSAyNi44OTg4IDE1LjUwNTMgMjYuNTAxMyAxNS45MDI4QzI2LjEwMzggMTYuMzAwMyAyNS44ODA1IDE2LjgzOTQgMjUuODgwNSAxNy40MDE2VjI1Ljg4MDJIMTcuNDAxOEMxNi44Mzk3IDI1Ljg4MDIgMTYuMzAwNSAyNi4xMDM2IDE1LjkwMyAyNi41MDExQzE1LjUwNTUgMjYuODk4NiAxNS4yODIyIDI3LjQzNzcgMTUuMjgyMiAyNy45OTk5QzE1LjI4MjIgMjguNTYyMSAxNS41MDU1IDI5LjEwMTIgMTUuOTAzIDI5LjQ5ODdDMTYuMzAwNSAyOS44OTYyIDE2LjgzOTcgMzAuMTE5NSAxNy40MDE4IDMwLjExOTVaIgogICAgICAgICAgZmlsbD0iI0NEQ0RDRCIvPgo8L3N2Zz4K"
                          alt="option-image"
                        />
                      </div>
                    </div>
                    <div className="MuiBox-root css-1bb41tk">
                      <p
                        className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "rgb(0, 0, 0)",
                        }}
                      >
                        설문조사 직접 새로 만들기
                      </p>
                      <p
                        className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                        style={{
                          fontSize: "12px",
                          letterSpacing: "-0.3px",
                          lineHeight: "20px",
                          color: "rgb(122, 134, 154)",
                        }}
                      >
                        KaKaQ에서 제공하는 간편하고 쉽게 새로운 설문을 만들어
                        보세요.
                      </p>
                    </div>
                  </div>
                </div>
                {/* 컴포넌트 2 */}
                <div class="MuiGrid-root https://app.walla.my/static/cramped_here-3da56a369fe34e6141f34a1e8c347a7f.svgMuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true css-uvp898">
                  <div
                    className="MuiBox-root css-25bi29 ml-2 mt-2"
                    style={{
                      boxShadow: "none",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    onClick={handleClickMakeChatbotForm}
                  >
                    <div className="MuiBox-root css-1acuc8l">
                      <div
                        className="MuiBox-root css-0"
                        style={{
                          width: "164px",
                          height: "92px",
                          backgroundColor: "rgb(240, 240, 240)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "5px",
                        }}
                      >
                        <img
                          src="https://nordvpn.com/wp-content/uploads/blog-featured-what-is-chatbot.svg"
                          alt="option-image"
                        />
                      </div>
                    </div>
                    <div className="MuiBox-root css-1bb41tk">
                      <p
                        className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "rgb(0, 0, 0)",
                        }}
                      >
                        챗봇으로 설문조사 만들기
                      </p>
                      <p
                        className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                        style={{
                          fontSize: "12px",
                          letterSpacing: "-0.3px",
                          lineHeight: "20px",
                          color: "rgb(122, 134, 154)",
                        }}
                      >
                        KaKaQ에서 챗봇을 통하여 빠르게 새로운 설문을 만들어
                        보세요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tabindex="0" data-testid="sentinelEnd"></div>
        </div>
      )}
      
      {showMakeForm && (
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
            <form
              onSubmit={handleSubmit}
              elevation="24"
              role="dialog"
              aria-aria-labelledby="mui-472"
              class="MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullWidth css-1uop03p"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "24px 0px 0px",
                alignItems: "flex-start",
                gap: "16px",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                boxShadow:
                  "rgba(9, 30, 66, 0.2) 0px 3px 5px, rgba(9, 30, 66, 0.31) 0px 0px 1px",
                maxWidth: "700px",
              }}
            >
              <div className="MuiBox-root css-v1a73h">
                <p
                  className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                  style={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "rgb(23, 43, 77)",
                  }}
                >
                  새로운 KaKaQ 폼 만들기
                </p>
              </div>
              <div
                class="MuiDivider-root MuiDivider-fullWidth MuiDivider-flexItem MuiBox-root css-12t296x"
                role="separator"
              ></div>
              {/* 프로젝트 제목 */}
              <div class="Muibox-root css-m6exs1">
                <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                  <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard css-bvzqnv"
                    data-shrink="true"
                    htmlFor="project-title"
                  >
                    프로젝트 제목
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-10awim0"
                    >
                      *
                    </span>
                  </label>
                  <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-4m3kxx">
                    <div className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel css-b4zgsm">
                      <input
                        aria-invalid="false"
                        autoComplete="off"
                        id="survey-title"
                        placeholder="새로운 프로젝트 제목"
                        required=""
                        type="text"
                        maxLength="30"
                        className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-10m06oi"
                        value={surveyTitle}
                        onChange={handleSurveyTitleChange}
                      />
                    </div>
                  </div>
                </div>
                {/* 프로젝트 키워드 */}
                <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                  <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard css-bvzqnv"
                    data-shrink="true"
                    htmlFor="project-title"
                  >
                    프로젝트 키워드
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-10awim0"
                    >
                      * (쉼표로 구분)
                    </span>
                  </label>
                  <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-4m3kxx">
                    {surveyKeyword.map((keyword, index) => (
                      <div key={index} className="keyword-item flex">
                        <button
                          className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1w5d2ml"
                          onClick={() => handleKeywordDelete(index)}
                        >
                          {keyword}&nbsp;
                        </button>
                      </div>
                    ))}
                    <div className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel keyword-list css-b4zgsm">
                      <input
                        aria-invalid="false"
                        autoComplete="off"
                        id="survey-keyword"
                        placeholder="새로운 프로젝트 키워드"
                        required=""
                        type="text"
                        maxLength="30"
                        className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-10m06oi"
                        value={surveyKeyword.join(", ")}
                        onChange={handleSurveyKeywordChange}
                      />
                    </div>
                  </div>
                </div>
                {/* 프로젝트 카테고리 */}
                <div
                  className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
                  style={{ textAlign: "start" }}
                >
                  <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard css-bvzqnv"
                    data-shrink="true"
                    htmlFor="project-title"
                  >
                    프로젝트 카테고리
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-10awim0"
                    >
                      *
                    </span>
                  </label>

                  <div
                    className="MuiBox-root css-0 mt-4"
                    style={{
                      display: "flex",
                      marginTop: "8px",
                      flexDirection: "row",
                      gap: "12px",
                    }}
                  >
                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-4m3kxx">
                      <div
                        className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel css-b4zgsm"
                        style={{ width: "fit-content" }}
                      >
                        <select
                          value={surveyCategory}
                          onChange={handleSurveyCategorySelect}
                          tabIndex="0"
                          role="button"
                          aria-expanded={isOpen ? "true" : "false"}
                          aria-haspopup="listbox"
                          aria-labelledby="select-color"
                          id="select-color"
                          className="MuiSelect-select MuiSelect-filled MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-19tmo23"
                        >
                          <option value="">
                            {surveyCategory === ""
                              ? "카테고리"
                              : surveyCategory}
                          </option>
                          <option value="여행">여행</option>
                          <option value="맛집">맛집</option>
                          <option value="교육">교육</option>
                          <option value="문화생활">문화생활</option>
                          <option value="기타">기타</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="MuiDivider-root MuiDivider-fullWidth MuiDivider-flexItem MuiBox-root css-12t296x"
                role="separator"
              ></div>
              <div className="MuiBox-root css-1v9rthj">
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1w5d2mk"
                  tabIndex="0"
                  type="button"
                  onClick={handleCloseMakeForm}
                >
                  <p
                    className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    그만두기
                  </p>
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-s92m9s"
                  tabIndex="0"
                  type="submit"
                >
                  <p
                    className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    만들기
                  </p>
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </div>
            </form>
          </div>
          <div tabindex="0" data-testid="sentinelEnd"></div>
        </div>
      )}

      {showMakeChatbotForm && (
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
            <form
              // onSubmit={handleChatbotSubmit}
              elevation="24"
              role="dialog"
              aria-aria-labelledby="mui-472"
              class="MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullWidth css-1uop03p"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "24px 0px 0px",
                alignItems: "flex-start",
                gap: "16px",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                boxShadow:
                  "rgba(9, 30, 66, 0.2) 0px 3px 5px, rgba(9, 30, 66, 0.31) 0px 0px 1px",
                maxWidth: "700px",
              }}
            >
              <div className="MuiBox-root css-v1a73h">
                <p
                  className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                  style={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "rgb(23, 43, 77)",
                  }}
                >
                  새로운 KaKaQ 폼 Chatbot으로 만들기
                </p>
              </div>
              <div
                class="MuiDivider-root MuiDivider-fullWidth MuiDivider-flexItem MuiBox-root css-12t296x"
                role="separator"
              ></div>
              {/* 프로젝트 제목 */}
              <div class="Muibox-root css-m6exs1">
                <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                  <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard css-bvzqnv"
                    data-shrink="true"
                    htmlFor="project-title"
                  >
                    프로젝트 제목
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-10awim0"
                    >
                      *
                    </span>
                  </label>
                  <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-4m3kxx">
                    <div className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel css-b4zgsm">
                      <input
                        aria-invalid="false"
                        autoComplete="off"
                        id="survey-title"
                        placeholder="새로운 프로젝트 제목"
                        required=""
                        type="text"
                        maxLength="30"
                        className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-10m06oi"
                        value={surveyTitle}
                        onChange={handleSurveyTitleChange}
                      />
                    </div>
                  </div>
                </div>
                {/* 프로젝트 주제 */}
                <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                  <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard css-bvzqnv"
                    data-shrink="true"
                    htmlFor="project-title"
                  >
                    프로젝트 주제
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-10awim0"
                    >
                      *
                    </span>
                  </label>
                  <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-4m3kxx">
                    <div className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel css-b4zgsm">
                      <input
                        aria-invalid="false"
                        autoComplete="off"
                        id="survey-subject"
                        placeholder="새로운 프로젝트 주제"
                        required=""
                        type="text"
                        maxLength="30"
                        className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-10m06oi"
                        value={surveySubject}
                        onChange={handleSurveySubjectChange}
                      />
                    </div>
                  </div>
                </div>
                {/* 프로젝트 키워드 */}
                <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                  <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard css-bvzqnv"
                    data-shrink="true"
                    htmlFor="project-title"
                  >
                    프로젝트 키워드
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-10awim0"
                    >
                      * (쉼표로 구분)
                    </span>
                  </label>
                  <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-4m3kxx">
                    <div className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel css-b4zgsm">
                      <input
                        aria-invalid="false"
                        autoComplete="off"
                        id="survey-keyword"
                        placeholder="새로운 프로젝트 키워드"
                        required=""
                        type="text"
                        maxLength="30"
                        className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-10m06oi"
                        value={surveyKeyword.join(", ")}
                        onChange={handleSurveyKeywordChange}
                      />
                    </div>
                  </div>
                </div>
                {/* 프로젝트 카테고리 */}
                <div
                  className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
                  style={{ textAlign: "start" }}
                >
                  <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-standard css-bvzqnv"
                    data-shrink="true"
                    htmlFor="project-title"
                  >
                    프로젝트 카테고리
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-10awim0"
                    >
                      *
                    </span>
                  </label>

                  <div
                    className="MuiBox-root css-0 mt-4"
                    style={{
                      display: "flex",
                      marginTop: "8px",
                      flexDirection: "row",
                      gap: "12px",
                    }}
                  >
                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-4m3kxx">
                      <div
                        className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel css-b4zgsm"
                        style={{ width: "fit-content" }}
                      >
                        <select
                          value={surveyCategory}
                          onChange={handleSurveyCategorySelect}
                          tabIndex="0"
                          role="button"
                          aria-expanded={isOpen ? "true" : "false"}
                          aria-haspopup="listbox"
                          aria-labelledby="select-color"
                          id="select-color"
                          className="MuiSelect-select MuiSelect-filled MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-19tmo23"
                        >
                          <option value="">
                            {surveyCategory === ""
                              ? "카테고리"
                              : surveyCategory}
                          </option>
                          <option value="여행">여행</option>
                          <option value="맛집">맛집</option>
                          <option value="교육">교육</option>
                          <option value="문화생활">문화생활</option>
                          <option value="기타">기타</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="MuiDivider-root MuiDivider-fullWidth MuiDivider-flexItem MuiBox-root css-12t296x"
                role="separator"
              ></div>
              <div className="MuiBox-root css-1v9rthj">
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1w5d2mk"
                  tabIndex="0"
                  type="button"
                  onClick={handleCloseMakeChatbotForm}
                >
                  <p
                    className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    그만두기
                  </p>
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
                <button
                  onClick={handleChatbotSubmit}
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-s92m9s"
                  tabIndex="0"
                  type="submit"
                >
                  <p
                    className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    만들기
                  </p>
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </div>
            </form>
          </div>
          <div tabindex="0" data-testid="sentinelEnd"></div>
        </div>
      )}
      {showOption && (
        <div
          className="MuiMenuUnstyled-root Mui-expanded css-d9kxen MuiPopover-paper css-1oqb34a css-10ui89v MuiPopperUnstyled-root"
          style={{
            position: "absolute",
            inset: "0px auto auto 0px",
            margin: "0px",
            transform: "translate3d(744px, 183px, 0px)",
          }}
          data-popper-placement="bottom"
        >
          <ul
            id="simple-menu"
            role="menu"
            tabIndex="-1"
            className="MuiMenuUnstyled-listbox Mui-expanded css-1ubxsfb"
            style={{ margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" }}
          >
            <li
              role="menuitem"
              value="결과 조회하기"
              className="MuiMenuItemUnstyled-root css-1lvg639"
              tabIndex="0"
              id="mui-38-option-0"
              style={{ marginBottom: "5px" }}
            >
              결과 조회하기
            </li>
            <li
              role="menuitem"
              value="수정하기"
              className="MuiMenuItemUnstyled-root css-1lvg639"
              tabIndex="-1"
              id="mui-38-option-4"
              style={{ marginBottom: "5px" }}
            >
              수정하기
            </li>
            <li
              role="menuitem"
              value="삭제하기"
              className="MuiMenuItemUnstyled-root css-1lvg639"
              tabIndex="-1"
              id="mui-38-option-5"
            >
              삭제하기
            </li>
          </ul>
        </div>
      )}
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
    </>
  );
}

export default Workspace;
