import React from "react";
import {
  Box,
  Paper,
  CssBaseline,
  Toolbar,
  Typography,
  InputBase,
  ButtonBase,
  TouchRippleClassKey,
  SvgIcon,
  Avatar,
  Drawer,
  List,
  Divider,
  Accordion,
  Collapse,
  Grid,
  Container,
  Tab,
  FormControl,
  ListItem,
  Switch,
  Popover,
  Backdrop,
  Modal,
  MenuItem,
  ButtonGroup,
} from "@mui/material";
import { CgBorderBottom } from "react-icons/cg";
import logo from "../../Assets/Logo/logo.png";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import OpenSurvey from "./OpenSurvey";

function MakeChatbotForm() {
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [type, setType] = useState("");
  const options = ["여행", "맛집", "교육", "문화생활", "기타"];
  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveySubject, setSurveySubject] = useState("");
  const [surveyKeyword, setSurveyKeyword] = useState("");
  const [surveyCategory, setSurveyCategory] = useState("");
  // const [selectedSurveyCategory, setSelectedSurveyCategory] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleSurveyCategorySelect = (option) => {
  //   setSurveyCategory(option);
  //   setIsOpen(false);
  // };

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
    setSurveyKeyword(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // 사용자가 입력한 제목, 키워드, 카테고리를 이용하여 작업을 수행합니다.
    // 여기에서는 간단히 콘솔에 값을 출력하는 예시를 보여드리겠습니다.
    console.log("제목:", surveyTitle);
    console.log("키워드:", surveyKeyword);
    console.log("카테고리:", surveyCategory);
    // /kakaq로 이동하는 작업을 수행합니다.
    window.location.href = "/kakaq";
  };

  // script
  const [isAddVisible, setAddVisible] = useState(false);
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const [isEndingTypeVisible, setEndingTypeVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [openSurveys, setOpenSurveys] = useState([]);

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
                     *
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
                      value={surveyKeyword}
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
                          {surveyCategory === "" ? "카테고리" : surveyCategory}
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
                // onClick={handleCloseMakeForm}
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
                onSubmit={handleSubmit}
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
    </>
  );
}

export default MakeChatbotForm;
