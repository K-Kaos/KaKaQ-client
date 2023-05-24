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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

  const buttonStyle = {
    opacity: isHovered ? 1 : 0.8,
    transform: isHovered ? "translateY(-2px) scale(1.1)" : "none",
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
      <div id="___gatsby">
        <div tabindex="-1" id="gatsby-focus-wrapper">
          <div class="Muibox-root css-121had8">
            {/* 상단 navbar */}
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
                  >
                    <img
                      src={logo}
                      alt="KAKAQ-logo"
                      style={{ height: "18px" }}
                    />
                  </div>
                  <div class="MuiBox-root css-0">
                    <div
                      class="MuiBox-root css-0"
                      style={{
                        display: "flex",
                        paddingLeft: "20px",
                        alignItems: "center",
                        top: "18px",
                        position: "absolute",
                        flexDirection: "row",
                      }}
                    >
                      <div class="MuiBox-root css-191gqa8">
                        <p class="MuiTypography-root MuiTypography-body1 css-qt1p9i">
                          내 프로젝트
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="MuiBox-root css-0"></div>
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
                              src="https://lh3.googleusercontent.com/a/AGNmyxYCL1L24exss9DNiVXadg4hyk22I6p-ygUS50-mVx0=s96-c"
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
                          이서빈이
                        </span>
                        <span
                          style={{
                            fontSize: "10px",
                            color: "rgb(107, 119, 140)",
                          }}
                        >
                          leeseobin000709@gmail.com
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
                    {/* 워크 스페이스 추가 버튼 */}
                    {/* <div className="MuiBox-root css-ie0u5e">
                      <div className="MuiBox-root css-0">
                        <p
                          style={{
                            color: "rgb(107, 119, 140)",
                            fontSize: "11px",
                            fontWeight: "bold",
                          }}
                        >
                          워크스페이스
                        </p>
                      </div>
                      <button
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-g8j2xy"
                        tabIndex="0"
                        type="button"
                        onClick={showAdd}
                      >
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSize12px css-1ezkyeh"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="AddRoundedIcon"
                        >
                          <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                        </svg>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                    </div> */}
                  </div>

                  {/* 추가되는 workspace */}
                  {/* <div className="MuiBox-root css-rjihzs">
                    <div className="MuiBox-root css-0">
                      <ul className="MuiList-root css-nfuokb">
                        <div>
                          <div>
                            <div
                              tabIndex="0"
                              role="button"
                              aria-describedby="rbd-hidden-text-4-hidden-text-14"
                              data-rbd-drag-handle-draggable-id="draggableItem_O43DE5Tsq603kNzu8dl7"
                              data-rbd-drag-handle-context-id="4"
                              draggable="false"
                              data-rbd-draggable-context-id="4"
                              data-rbd-draggable-id="draggableItem_O43DE5Tsq603kNzu8dl7"
                            >
                              <li className="MuiListItem-root MuiListItem-gutters css-vvazg8">
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-1hk9m6t"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemText-root css-6eqwaw">
                                    New Workspace
                                  </div>
                                  <div
                                    className="MuiBox-root css-0"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div
                                      className="MuiBox-root css-1ogin6f"
                                      style={{
                                        width: "40px",
                                        height: "20px",
                                        borderRadius: "6px",
                                        backgroundColor: "rgb(242, 249, 255)",
                                        fontSize: "10px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgb(0, 123, 229)",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Free
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </div>
                          <div>
                            <div
                              tabIndex="0"
                              role="button"
                              aria-describedby="rbd-hidden-text-4-hidden-text-14"
                              data-rbd-drag-handle-draggable-id="draggableItem_q75Eg99vRKmGF8SgDpcR"
                              data-rbd-drag-handle-context-id="4"
                              draggable="false"
                              data-rbd-draggable-context-id="4"
                              data-rbd-draggable-id="draggableItem_q75Eg99vRKmGF8SgDpcR"
                            >
                              <li className="MuiListItem-root MuiListItem-gutters css-vvazg8">
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-1hk9m6t"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemText-root css-6eqwaw">
                                    New Workspace
                                  </div>
                                  <div
                                    className="MuiBox-root css-0"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div
                                      className="MuiBox-root css-1ogin6f"
                                      style={{
                                        width: "40px",
                                        height: "20px",
                                        borderRadius: "6px",
                                        backgroundColor: "rgb(242, 249, 255)",
                                        fontSize: "10px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgb(0, 123, 229)",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Free
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div> */}

                  {/* 새로운 workspace 추가 버튼 */}
                  {/* <div
                    class="MuiBox-root css-0"
                    style={{ margin: "10px 16px", paddingBottom: "10%" }}
                  >
                    <div class="MuiBox-root css-0">
                      <button
                        class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-104rrqu"
                        tabindex="0"
                        type="button"
                        onClick={showAdd}
                      >
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="AddCircleOutlinedIcon"
                          style={{
                            color: "rgb(66, 82, 110)",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                        </svg>
                        <p class="MuiTypography-root MuiTypography-body1 css-ozdz0e">
                          새로운 워크스페이스
                        </p>
                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      <hr class="MuiDivider-root MuiDivider-fullWidth css-cx417z" />
                      <div class="MuiPaper-root MuiPaper-elevation sMuiPaper-elevation0 MuiAccordion-root Mui-expanded css-xqhq9l">
                        <div
                          class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr"
                          style={{ minHeight: "0px" }}
                        >
                          <div class="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                            <div class="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                              <div role="region" class="MuiAccordion-region">
                                <div class="MuiAccordionDetails-root css-s2yvfd"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
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
              {/* <div
                className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-i6s8oy"
                style={{ height: "56px", minHeight: "0px" }}
              ></div> */}
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
                          <div className="MuiBox-root css-1nt6gcm">
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
                          </div>
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
                                      backgroundColor: "rgb(239, 249, 255)",
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
                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
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
                                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-luvl9n"
                                      focusable="false"
                                      aria-hidden="true"
                                      viewBox="0 0 24 24"
                                      data-testid="MoreHorizIcon"
                                    >
                                      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                    </svg>
                                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                  </button>
                                </div>
                                <div
                                  className="MuiBox-root css-8atqhb"
                                  aria-label="새로운 프로젝트"
                                >
                                  <div className="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-readOnly css-88ls20">
                                    <input
                                      readOnly
                                      type="text"
                                      className="MuiInputBase-input MuiInputBase-readOnly css-mnn31"
                                      value="새로운 프로젝트"
                                    />
                                  </div>
                                </div>
                                <div className="MuiBox-root css-1yd9vr8">
                                  <p className="MuiTypography-root MuiTypography-body1 css-szuxaf">
                                    0 개 응답
                                  </p>
                                  <div
                                    className="MuiBox-root css-0"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img src="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                                      backgroundColor: "rgb(239, 249, 255)",
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
                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
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
                                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-luvl9n"
                                      focusable="false"
                                      aria-hidden="true"
                                      viewBox="0 0 24 24"
                                      data-testid="MoreHorizIcon"
                                    >
                                      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                    </svg>
                                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                  </button>
                                </div>
                                <div
                                  className="MuiBox-root css-8atqhb"
                                  aria-label="새로운 프로젝트"
                                >
                                  <div className="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-readOnly css-88ls20">
                                    <input
                                      readOnly
                                      type="text"
                                      className="MuiInputBase-input MuiInputBase-readOnly css-mnn31"
                                      value="새로운 프로젝트"
                                    />
                                  </div>
                                </div>
                                <div className="MuiBox-root css-1yd9vr8">
                                  <p className="MuiTypography-root MuiTypography-body1 css-szuxaf">
                                    0 개 응답
                                  </p>
                                  <div
                                    className="MuiBox-root css-0"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img src="" />
                                  </div>
                                </div>
                              </div>
                            </div>
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
                          {/* 여기 참여한 설문조사를 띄울것 */}
                          참여한 설문조사가 추가될 예정입니다.
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
                          {/* 여기에 list 띄울 것 */}
                          <OpenSurvey />
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
        >
          Navigated to 왈라! - 편집하기
        </div>
      </div>
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
                {/* 컴포넌트 1개 */}
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
                {/* 컴포넌트 2개 */}
                <div class="MuiGrid-root https://app.walla.my/static/cramped_here-3da56a369fe34e6141f34a1e8c347a7f.svgMuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true css-uvp898">
                  <div
                    className="MuiBox-root css-25bi29 ml-2 mt-2"
                    style={{
                      boxShadow: "none",
                      cursor: "pointer",
                      position: "relative",
                    }}
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
                        <button
                          className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-awlkbl"
                          tabIndex="0"
                          type="button"
                          style={{
                            borderRadius: "12px",
                            backgroundColor: "rgb(46, 146, 255)",
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
                        id="project-title"
                        placeholder="30자 이내로 입력해주세요"
                        required=""
                        type="text"
                        maxLength="30"
                        className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-10m06oi"
                        value="새로운 프로젝트 제목"
                      />
                    </div>
                  </div>
                </div>
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
                        id="project-title"
                        placeholder="30자 이내로 입력해주세요"
                        required=""
                        type="text"
                        maxLength="30"
                        className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-10m06oi"
                        value="새로운 프로젝트 키워드"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
                  style={{ textAlign: "start" }}
                >
                  {/* <p className="MuiTypography-root MuiTypography-body1 css-18flzx8">
                    프로젝트 카테고리
                  </p> */}
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
                    <div className="MuiBox-root css-0"
                    onClick={toggleMenu}
                    onBlur={() => setIsOpen(false)}>
                      <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-4m3kxx">
                        <div className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel css-b4zgsm">
                          <div
                            tabIndex="0"
                            role="button"
                            aria-expanded={isOpen ? 'true' : 'false'}
                            aria-haspopup="listbox"
                            aria-labelledby="select-color"
                            id="select-color"
                            className="MuiSelect-select MuiSelect-filled MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-19tmo23"
                          >
                            <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-q5vxhk">
                              <span className="MuiChip-label MuiChip-labelMedium css-9iedg7">
                                키워드
                              </span>
                            </div>
                          </div>
                          <input
                            aria-hidden="true"
                            tabIndex="-1"
                            className="MuiSelect-nativeInput css-1k3x8v3"
                            autoComplete="off"
                            placeholder="색상 선택"
                            required
                            value="#eff9ff"
                          />
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconFilled css-1636szt"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="ArrowDropDownIcon"
                          >
                            <path d="M7 10l5 5 5-5z"></path>
                          </svg>
                        </div>
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
                        id="project-title"
                        placeholder="30자 이내로 입력해주세요"
                        required=""
                        type="text"
                        maxLength="30"
                        className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-10m06oi"
                        value="새로운 프로젝트 제목"
                      />
                    </div>
                  </div>
                </div>
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
                        id="project-title"
                        placeholder="30자 이내로 입력해주세요"
                        required=""
                        type="text"
                        maxLength="30"
                        className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-10m06oi"
                        value="새로운 프로젝트 키워드"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"
                  style={{ textAlign: "start" }}
                >
                  {/* <p className="MuiTypography-root MuiTypography-body1 css-18flzx8">
                    프로젝트 카테고리
                  </p> */}
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
                    <div className="MuiBox-root css-0"
                    onClick={toggleMenu}
                    onBlur={() => setIsOpen(false)}>
                      <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-4m3kxx">
                        <div className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel css-b4zgsm">
                          <div
                            tabIndex="0"
                            role="button"
                            aria-expanded={isOpen ? 'true' : 'false'}
                            aria-haspopup="listbox"
                            aria-labelledby="select-color"
                            id="select-color"
                            className="MuiSelect-select MuiSelect-filled MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-19tmo23"
                          >
                            <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-q5vxhk">
                              <span className="MuiChip-label MuiChip-labelMedium css-9iedg7">
                                키워드
                              </span>
                            </div>
                          </div>
                          <input
                            aria-hidden="true"
                            tabIndex="-1"
                            className="MuiSelect-nativeInput css-1k3x8v3"
                            autoComplete="off"
                            placeholder="색상 선택"
                            required
                            value="#eff9ff"
                          />
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconFilled css-1636szt"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="ArrowDropDownIcon"
                          >
                            <path d="M7 10l5 5 5-5z"></path>
                          </svg>
                        </div>
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
      {isOpen && (<div
        role="presentation"
        className="MuiPopover-root MuiMenu-root MuiModal-root css-1sucic7"
        id="menu-"
      >
        <div
          aria-hidden="true"
          className="MuiBackdrop-root MuiBackdrop-invisible css-esi9ax"
          style={{
            opacity: 1,
            transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}
        ></div>
        <div tabIndex="0" data-testid="sentinelStart"></div>
        <div
          className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-5yvhmz"
          tabIndex="-1"
          style={{
            opacity: 1,
            transform: "none",
            minWidth: "101px",
            transition:
              "opacity 318ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 212ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            top: "436px",
            left: "463px",
            transformOrigin: "53.5px 28.5547px",
          }}
        >
          <ul
            className="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"
            role="listbox"
            tabIndex="-1"
          >
            <li
              className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters Mui-selected MuiMenuItem-root MuiMenuItem-gutters Mui-selected css-1rol45i"
              tabIndex="0"
              role="option"
              aria-selected="true"
              data-value="#eff9ff"
            >
              <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-q5vxhk">
                <span className="MuiChip-label MuiChip-labelMedium css-9iedg7">
                  키워드
                </span>
              </div>
              <span className="MuiTouchRipple-root css-w0pj6f"></span>
            </li>
            <li
              className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1rol45i"
              tabIndex="-1"
              role="option"
              aria-selected="false"
              data-value="#fafde6"
            >
              <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-1l77ve1">
                <span className="MuiChip-label MuiChip-labelMedium css-9iedg7">
                  LIME
                </span>
              </div>
              <span className="MuiTouchRipple-root css-w0pj6f"></span>
            </li>
            <li
              className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1rol45i"
              tabIndex="-1"
              role="option"
              aria-selected="false"
              data-value="#f0fde6"
            >
              <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-15fvcm6">
                <span className="MuiChip-label MuiChip-labelMedium css-9iedg7">
                  GREEN
                </span>
              </div>
              <span className="MuiTouchRipple-root css-w0pj6f"></span>
            </li>
            <li
              className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1rol45i"
              tabIndex="-1"
              role="option"
              aria-selected="false"
              data-value="#fff3fc"
            >
              <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-k1i94v">
                <span className="MuiChip-label MuiChip-labelMedium css-9iedg7">
                  PINK
                </span>
              </div>
              <span className="MuiTouchRipple-root css-w0pj6f"></span>
            </li>
            <li
              className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1rol45i"
              tabIndex="-1"
              role="option"
              aria-selected="false"
              data-value="#fdf4e6"
            >
              <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-1ix9ntq">
                <span className="MuiChip-label MuiChip-labelMedium css-9iedg7">
                  ORANGE
                </span>
              </div>
              <span className="MuiTouchRipple-root css-w0pj6f"></span>
            </li>
            <li
              className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1rol45i"
              tabIndex="-1"
              role="option"
              aria-selected="false"
              data-value="#e6ebfd"
            >
              <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-1ays376">
                <span className="MuiChip-label MuiChip-labelMedium css-9iedg7">
                  INDIGO
                </span>
              </div>
              <span className="MuiTouchRipple-root css-w0pj6f"></span>
            </li>
            <li
              className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1rol45i"
              tabIndex="-1"
              role="option"
              aria-selected="false"
              data-value="#ffeded"
            >
              <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-11rsuxe">
                <span className="MuiChip-label MuiChip-labelMedium css-9iedg7">
                  RED
                </span>
              </div>
              <span className="MuiTouchRipple-root css-w0pj6f"></span>
            </li>
          </ul>
        </div>
        <div tabIndex="0" data-testid="sentinelEnd"></div>
      </div>)}

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
