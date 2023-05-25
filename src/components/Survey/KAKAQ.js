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
import ShareLink from "./ShareLink";
import CreateSurvey from "./CreateSurvey";
import FindRespondent from "./FindRespondent";
import SurveyResult from "./SurveyResult";

function KAKAQ() {
  // 설문 데이터
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleQuestionTypeChange = (type) => {
    setQuestion(type);
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
                        top: "13px",
                        position: "absolute",
                        flexDirection: "row",
                      }}
                    >
                      <div class="MuiBox-root css-191gqa8">
                        <p class="MuiTypography-root MuiTypography-body1 css-qt1p9i">
                          Drafts
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
                          value={title}
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
                            color: "rgb(38, 112, 255)",
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
                    <button
                      class="MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1iuaaxh"
                      tabindex="0"
                      type="button"
                      id="mui-20"
                    >
                      게시하기
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>
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
                        src="https://lh3.googleusercontent.com/a/AGNmyxZ-kEj3uV178F4hJQqY8hHdyfuRWhGsM9MepJ4o=s96-c"
                        class="MuiAvatar-img css-1hy9t21"
                      />
                    </div>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </div>
              </div>
            </header>
            {showCreateSurvey && <CreateSurvey />}
            {showShareLink && <ShareLink />}
            {showFindRespondent && <FindRespondent />}
            {showSurveyResult && <SurveyResult />}

            {/* <div class="MuiDrawer-root MuiDrawer-docked css-gyfe2h">
                            <div class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-1l8j5k8">
                                <div class="MuiBox-root css-0" style={{ marginTop: '56px', marginBottom: '56px', backgroundColor: '(255, 255, 255)', height: '100%', width: '100%', position: 'relative' }}>
                                    <div class="MuiBox-root css-1txvmxe">
                                        <div id="formContent" style={{ padding: '0px', color: 'rgb(66, 82, 110)', fontSize: '14px', fontWeight: '700' }}>전체 문항</div>
                                        <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabIndex="0" type="button" aria-label="추가하기"
                                            onClick={showAdd}>
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1sonui6" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddBoxIcon">
                                                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                                            </svg>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </button>
                                    </div>
                                    <ul class="MuiList-root css-1uzmcsd" style={{ margin: '80px 16px 20px' }}>
                                        {listItems}
                                    </ul>
                                    <div class="MuiBox-root css-0" style={{ margin: '10px 16px', paddingBottom: '10%' }}>
                                        <div class="MuiBox-root css-0">
                                            <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-104rrqu" tabindex="0" type="button" onClick={showAdd}>
                                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddCircleOutlinedIcon" style={{ color: 'rgb(66, 82, 110)', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                                                </svg>
                                                <p class="MuiTypography-root MuiTypography-body1 css-ozdz0e">추가하기</p>
                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                            </button>
                                            <hr class="MuiDivider-root MuiDivider-fullWidth css-cx417z" />
                                            <div class="MuiPaper-root MuiPaper-elevation sMuiPaper-elevation0 MuiAccordion-root Mui-expanded css-xqhq9l">
                                                <div class="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded css-1q5grb" tabindex="0" role="button" aria-expanded="true">
                                                    <div class="MuiAccordionSummary-content Mui-expanded css-1n11r91">
                                                        <div class="MuiBox-root css-1bsnnbm">
                                                            <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: '500' }}>Endings</p>
                                                            <div class="MuiBox-root css-k008qs">
                                                                <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-12zyo4q"
                                                                    onClick={showEndingType}>
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1sonui6" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddBoxIcon">
                                                                        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                                                                    </svg>
                                                                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr" style={{ minHeight: '0px' }}>
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
                                    </div>
                                    <div class="FieldsListDrawer__ColResizer-sc-rlte4u-0 cWIaYp leftColResizer" role="presentation"></div>
                                </div>
                            </div>
                        </div>
                        <div class="MuiContainer-root MuiContainer-maxWidthLg jss1 css-okglv3">
                            <div tabindex="-1" style={{ outline: 'none' }}>
                                <div class="MuiBox-root css-0" style={{ display: 'flex', flexDirection: 'column', padding: '40px', gap: '10px', width: '100%', height: '100%' }}>
                                    <div class="MuiBox-root css-kcttjf">
                                        <div class="MuiBox-root css-fxr4xl">
                                            <div class="MuiBox-root css-1szjw0z">
                                                <div class="MuiBox-root css-0" style={{ width: '100%', gap: '40px', display: 'flex', flexDirection: 'column' }}>
                                                    <div class="MuiBox-root css-1xdhyk6">
                                                        <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '-0.02rem', color: 'rgb(38, 112, 255)', lineHeight: '12px', minHeight: '12px' }}></p>
                                                        <div class="MuiBox-root css-0">
                                                            <div class="MuiGrid-root MuiGrid-container css-onfdyp">
                                                                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                                    <div class="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-multiline Mui-focused css-1xxtoyx">
                                                                        <textarea placeholder="질문을 입력해주세요" class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18" style={{ height: '24px', overflow: 'hidden' }} onChange={handleQuestionChange}></textarea>
                                                                        <textarea aria-hidden="true" class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18" readonly="" tabindex="-1" style={{ visibility: 'hidden', position: 'absolute', overflow: 'hidden', height: '0px', top: '0px', left: '0px', transform: 'translateZ(0px)', padding: '0px', width: '496px' }}></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                                    <div class="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-multiline css-lryuv7">
                                                                        <textarea placeholder="(선택 사항) 키워드를 입력하세요" class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18" style={{ height: '23px', overflow: 'hidden' }}></textarea>
                                                                        <textarea aria-hidden="true" class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18" readonly="" tabindex="-1" style={{ visibility: 'hidden', position: 'absolute', overflow: 'hidden', height: '0px', top: '0px', left: '0px', transform: 'translateZ(0px)', padding: '0px', width: '496px' }}></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="MuiBox-root css-1oi2cng">
                                                        <div>
                                                            <div class="MuiInputBase-root MuiInputBase-colorPrimary css-2g6513">
                                                                <input autocomplete="off" placeholder="응답을 입력하세요" type="text" class="MuiInputBase-input css-mnn31" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="MuiBox-root css-1bvc4cc">
                                                        <button class="css-1c3ey53" style={buttonStyle} onMouseEnter={handleHoverEnter} onMouseOut={handleHoverLeave}>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="mask0_12070_64088" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: 'alpha' }}>
                                                                    <rect width="24" height="24" fill="#D9D9D9"></rect></mask>
                                                                <g mask="url(#mask0_12070_64088)">
                                                                    <path d="M10.0001 12.7751L15.5001 7.3001C15.8001 7.0001 16.1668 6.8501 16.6001 6.8501C17.0334 6.8501 17.4001 7.0001 17.7001 7.3001C18.0001 7.6001 18.1501 7.96676 18.1501 8.4001C18.1501 8.83343 18.0001 9.2001 17.7001 9.5001L11.1251 16.1001C10.8084 16.4168 10.4334 16.5751 10.0001 16.5751C9.56676 16.5751 9.19176 16.4168 8.8751 16.1001L6.3001 13.5001C6.0001 13.2001 5.8501 12.8334 5.8501 12.4001C5.8501 11.9668 6.0001 11.6001 6.3001 11.3001C6.6001 11.0001 6.96676 10.8501 7.4001 10.8501C7.83343 10.8501 8.2001 11.0001 8.5001 11.3001L10.0001 12.7751Z" fill="#FFFFFF"></path>
                                                                </g>
                                                            </svg>
                                                            <p class="MuiTypography-root MuiTypography-body1 css-10q16nc">OK</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="MuiDrawer-root MuiDrawer-docked css-ygodwc">
                            <div class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorRight MuiDrawer-paperAnchorDockedRight css-1ciwpa8">
                                <div class="MuiBox-root css-0" style={{ marginTop: '56px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '2px solid rgb(238, 238, 238)' }}>
                                    <div class="MuiBox-root css-k008qs">
                                        <div class="MuiTabs-root css-1rkpyfd">
                                            <div class="MuiTabs-scroller MuiTabs-fixed css-1anid1y" style={{ overflow: 'hidden', marginBottom: '0px' }}>
                                                <div aria-label="right-tabs" class="MuiTabs-flexContainer css-k008qs" role="tablist">
                                                    <button class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-1b8ypoz" tabindex="0" type="button" role="tab" aria-selected="true" style={{ fontWeight: 'bold', flex: '1 1 0%' }} aria-controls="mui-p-92062-P-options" id="mui-p-92062-T-options">옵션<span class="MuiTouchRipple-root css-w0pj6f"></span></button>

                                                    <button class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1b8ypoz" tabindex="-1" type="button" role="tab" aria-selected="false" style={{ fontWeight: 'bold', flex: '1 1 0%' }} aria-controls="mui-p-92062-P-logic" id="mui-p-92062-T-logic">로직<span class="MuiTouchRipple-root css-w0pj6f"></span></button>

                                                    <button class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1b8ypoz" tabindex="-1" type="button" role="tab" aria-selected="false" style={{ fontWeight: 'bold', flex: '1 1 0%' }} aria-controls="mui-p-92062-P-setting" id="mui-p-92062-T-setting">설정<span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                                                </div>
                                                <span class="MuiTabs-indicator css-eu9d1t" style={{ left: '0px', width: '90px' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
                                    <div class="MuiTabPanel-root css-fb5pz1" role="tabpanel" aria-labelledby="mui-p-92062-T-options" id="mui-p-92062-P-options">
                                        <div class="MuiBox-root css-0">
                                            <ul class="MuiList-root MuiList-padding css-18xpdcy">
                                                <li class="MuiListSubheader-root MuiListSubheader-gutters MuiListSubheader-sticky css-v9lw7v">유형</li>
                                                <li class="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-h7s0ss">
                                                    <div class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                                                        <div class="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1v7g7es">

                                                            <div tabIndex="0" role="button" aria-expanded="false" aria-haspopup='listbox' aria-labelledby="3739285390-field-type" id="3739285390-field-type" class="MuiSelect-select MuiSelect-outlined MuiInputBase-input css-1vfqwq">
                                                                <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', backgroundColor: 'rgb(239, 248, 255)', padding: '4px 8px', borderRadius: '8px' }}>
                                                                    <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1.33329 1.33333C1.1444 1.33333 0.985959 1.26933 0.857959 1.14133C0.730404 1.01378 0.666626 0.855556 0.666626 0.666667C0.666626 0.477778 0.730404 0.319333 0.857959 0.191333C0.985959 0.0637776 1.1444 0 1.33329 0H10.6666C10.8555 0 11.0137 0.0637776 11.1413 0.191333C11.2693 0.319333 11.3333 0.477778 11.3333 0.666667C11.3333 0.855556 11.2693 1.01378 11.1413 1.14133C11.0137 1.26933 10.8555 1.33333 10.6666 1.33333H1.33329ZM1.33329 4C1.1444 4 0.985959 3.936 0.857959 3.808C0.730404 3.68044 0.666626 3.52222 0.666626 3.33333C0.666626 3.14444 0.730404 2.986 0.857959 2.858C0.985959 2.73044 1.1444 2.66667 1.33329 2.66667H6.66662C6.85551 2.66667 7.01396 2.73044 7.14196 2.858C7.26951 2.986 7.33329 3.14444 7.33329 3.33333C7.33329 3.52222 7.26951 3.68044 7.14196 3.808C7.01396 3.936 6.85551 4 6.66662 4H1.33329Z" fill="#2272AF"></path>
                                                                    </svg>
                                                                    <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(34, 114, 175)', fontSize: '11px', paddingLeft: '8px', textTransform: 'uppercase' }}>단답형</p>
                                                                </div>
                                                            </div>
                                                            <input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput css-1k3x8v3" value="SHORT_ANSWER" />
                                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1636szt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon">
                                                                <path d="M7 10l5 5 5-5z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="MuiListSubheader-root MuiListSubheader-gutters MuiListSubheader-sticky css-v9lw7v">설정</li>
                                                <li class="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-h7s0ss">
                                                    <div class="MuiListItemText-root css-1q9qwbn" id="field-setting-required">
                                                        <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1litj1t">필수입력</span>
                                                    </div>
                                                    <span class="MuiSwitch-root MuiSwitch-edgeEnd MuiSwitch-sizeMedium css-11qz5is">
                                                        <span class="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary css-1sf64yn">
                                                            <input class="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3" type="checkbox" aria-labelledby="field-setting-required" />
                                                            <span class="MuiSwitch-thumb css-19gndve"></span>
                                                        </span>
                                                        <span class="MuiSwitch-track css-1ju1kxc"></span>
                                                    </span>
                                                </li>
                                                <li class="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-h7s0ss">
                                                    <div class="MuiListItemText-root css-1q9qwbn" id="field-response-validation-exist">
                                                        <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1litj1t">응답확인</span>
                                                    </div>
                                                    <span class="MuiSwitch-root MuiSwitch-edgeEnd MuiSwitch-sizeMedium css-11qz5is">
                                                        <span class="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary css-1sf64yn">
                                                            <input class="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3" type="checkbox" />
                                                            <span class="MuiSwitch-thumb css-19gndve"></span>
                                                        </span>
                                                        <span class="MuiSwitch-track css-1ju1kxc"></span>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="MuiTabPanel-root css-fb5pz1" hidden="" role="tabpanel" aria-labelledby="mui-p-92062-T-logic" id="mui-p-92062-P-logic"></div>
                                    <div class="MuiTabPanel-root css-fb5pz1" hidden="" role="tabpanel" aria-labelledby="mui-p-92062-T-setting" id="mui-p-92062-P-setting"></div>
                                </div>
                                <div role="presentation" class="css-c38wi9"></div>
                            </div>
                        </div> */}
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
      {/* {isAddVisible && (<div role="presentation" class="MuiPopover-root MuiModal-root css-d9kxen">
                <div aria-hidden="true" class="MuiBackdrop-root MuiBackdrop-invisible css-esi9ax" style={{ opacity: '1', transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }} onClick={handelClickBackdrop}></div>
                <div tabindex="0" data-testid="sentinelStart"></div>
                <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1oqb34a" tabIndex="-1" style={{ opacity: '1', transform: 'none', transition: 'opacity 344ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 229ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', top: '72px', left: '253px', transformOrigin: '0px 0px' }}>
                    <div class="MuiBox-root css-uwwqev">
                        <div class="MuiBox-root css-0">
                            <div class="MuiBox-root css-qn3dl5">
                                <div class="MuiBox-root css-y95sa7">
                                    <div class="MuiBox-root css-j7qwjs">
                                        <div class="MuiBox-root css-5ah26q">TEXT</div>
                                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1pfw34x" tabIndex="-1" role='menuitem' onClick={handleQuestionListAdd}>
                                            <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <div class="MuiBox-root css-ma06kp">
                                                    <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33329 1.33333C1.1444 1.33333 0.985959 1.26933 0.857959 1.14133C0.730404 1.01378 0.666626 0.855556 0.666626 0.666667C0.666626 0.477778 0.730404 0.319333 0.857959 0.191333C0.985959 0.0637776 1.1444 0 1.33329 0H10.6666C10.8555 0 11.0137 0.0637776 11.1413 0.191333C11.2693 0.319333 11.3333 0.477778 11.3333 0.666667C11.3333 0.855556 11.2693 1.01378 11.1413 1.14133C11.0137 1.26933 10.8555 1.33333 10.6666 1.33333H1.33329ZM1.33329 4C1.1444 4 0.985959 3.936 0.857959 3.808C0.730404 3.68044 0.666626 3.52222 0.666626 3.33333C0.666626 3.14444 0.730404 2.986 0.857959 2.858C0.985959 2.73044 1.1444 2.66667 1.33329 2.66667H6.66662C6.85551 2.66667 7.01396 2.73044 7.14196 2.858C7.26951 2.986 7.33329 3.14444 7.33329 3.33333C7.33329 3.52222 7.26951 3.68044 7.14196 3.808C7.01396 3.936 6.85551 4 6.66662 4H1.33329Z" fill="#2272AF"></path></svg>
                                                </div>
                                                <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(34, 114, 175)', fontSize: '11px', paddingLeft: '8px', textTransform: 'uppercase' }}>단답형</p>
                                            </div>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </li>
                                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1pfw34x" tabIndex="-1" role='menuitem' onClick={handleQuestionListAdd}>
                                            <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <div class="MuiBox-root css-ma06kp">
                                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33329 9.66665C1.1444 9.66665 0.985959 9.60265 0.857959 9.47465C0.730404 9.34709 0.666626 9.18887 0.666626 8.99998C0.666626 8.81109 0.730404 8.65287 0.857959 8.52532C0.985959 8.39732 1.1444 8.33332 1.33329 8.33332H6.66662C6.85551 8.33332 7.01396 8.39732 7.14196 8.52532C7.26951 8.65287 7.33329 8.81109 7.33329 8.99998C7.33329 9.18887 7.26951 9.34709 7.14196 9.47465C7.01396 9.60265 6.85551 9.66665 6.66662 9.66665H1.33329ZM1.33329 4.33331C1.1444 4.33331 0.985959 4.26931 0.857959 4.14131C0.730404 4.01376 0.666626 3.85554 0.666626 3.66665C0.666626 3.47776 0.730404 3.31931 0.857959 3.19131C0.985959 3.06376 1.1444 2.99998 1.33329 2.99998H10.6666C10.8555 2.99998 11.0137 3.06376 11.1413 3.19131C11.2693 3.31931 11.3333 3.47776 11.3333 3.66665C11.3333 3.85554 11.2693 4.01376 11.1413 4.14131C11.0137 4.26931 10.8555 4.33331 10.6666 4.33331H1.33329ZM1.33329 6.99998C1.1444 6.99998 0.985959 6.93598 0.857959 6.80798C0.730404 6.68043 0.666626 6.5222 0.666626 6.33332C0.666626 6.14443 0.730404 5.98598 0.857959 5.85798C0.985959 5.73043 1.1444 5.66665 1.33329 5.66665H10.6666C10.8555 5.66665 11.0137 5.73043 11.1413 5.85798C11.2693 5.98598 11.3333 6.14443 11.3333 6.33332C11.3333 6.5222 11.2693 6.68043 11.1413 6.80798C11.0137 6.93598 10.8555 6.99998 10.6666 6.99998H1.33329ZM1.33329 1.66665C1.1444 1.66665 0.985959 1.60287 0.857959 1.47531C0.730404 1.34731 0.666626 1.18887 0.666626 0.99998C0.666626 0.811091 0.730404 0.652647 0.857959 0.524647C0.985959 0.397091 1.1444 0.333313 1.33329 0.333313H10.6666C10.8555 0.333313 11.0137 0.397091 11.1413 0.524647C11.2693 0.652647 11.3333 0.811091 11.3333 0.99998C11.3333 1.18887 11.2693 1.34731 11.1413 1.47531C11.0137 1.60287 10.8555 1.66665 10.6666 1.66665H1.33329Z" fill="#2272AF"></path></svg>
                                                </div>
                                                <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(34, 114, 175)', fontSize: '11px', paddingLeft: '8px', textTransform: 'uppercase' }}>장문형</p>
                                            </div>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </li>
                                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1pfw34x" tabIndex="-1" role='menuitem'>
                                            <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <div class="MuiBox-root css-ma06kp">
                                                    <svg width="11" height="4" viewBox="0 0 11 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.16663 4C2.02218 4 1.90285 3.95267 1.80863 3.858C1.71396 3.76378 1.66663 3.64444 1.66663 3.5V1H1.16663C1.02218 1 0.902848 0.952667 0.808626 0.858C0.713959 0.763778 0.666626 0.644444 0.666626 0.5C0.666626 0.355556 0.713959 0.236 0.808626 0.141333C0.902848 0.047111 1.02218 0 1.16663 0H1.99996C2.18885 0 2.34729 0.0637776 2.47529 0.191333C2.60285 0.319333 2.66663 0.477778 2.66663 0.666667V3.5C2.66663 3.64444 2.61929 3.76378 2.52463 3.858C2.4304 3.95267 2.31107 4 2.16663 4ZM4.66663 4C4.47774 4 4.31952 3.936 4.19196 3.808C4.06396 3.68044 3.99996 3.52222 3.99996 3.33333V2.33333C3.99996 2.14444 4.06396 1.986 4.19196 1.858C4.31952 1.73044 4.47774 1.66667 4.66663 1.66667H5.99996V1H4.49996C4.35552 1 4.23618 0.952667 4.14196 0.858C4.04729 0.763778 3.99996 0.644444 3.99996 0.5C3.99996 0.355556 4.04729 0.236 4.14196 0.141333C4.23618 0.047111 4.35552 0 4.49996 0H6.33329C6.52218 0 6.68063 0.0637776 6.80863 0.191333C6.93618 0.319333 6.99996 0.477778 6.99996 0.666667V1.66667C6.99996 1.85556 6.93618 2.01378 6.80863 2.14133C6.68063 2.26933 6.52218 2.33333 6.33329 2.33333H4.99996V3H6.49996C6.64441 3 6.76396 3.04711 6.85863 3.14133C6.95285 3.236 6.99996 3.35556 6.99996 3.5C6.99996 3.64444 6.95285 3.76378 6.85863 3.858C6.76396 3.95267 6.64441 4 6.49996 4H4.66663ZM8.49996 4C8.35552 4 8.23618 3.95267 8.14196 3.858C8.0473 3.76378 7.99996 3.64444 7.99996 3.5C7.99996 3.35556 8.0473 3.236 8.14196 3.14133C8.23618 3.04711 8.35552 3 8.49996 3H9.99996V2.33333H8.99996C8.91107 2.33333 8.8333 2.3 8.76663 2.23333C8.69996 2.16667 8.66663 2.08889 8.66663 2C8.66663 1.91111 8.69996 1.83333 8.76663 1.76667C8.8333 1.7 8.91107 1.66667 8.99996 1.66667H9.99996V1H8.49996C8.35552 1 8.23618 0.952667 8.14196 0.858C8.0473 0.763778 7.99996 0.644444 7.99996 0.5C7.99996 0.355556 8.0473 0.236 8.14196 0.141333C8.23618 0.047111 8.35552 0 8.49996 0H10.3333C10.5222 0 10.6804 0.0637776 10.808 0.191333C10.936 0.319333 11 0.477778 11 0.666667V3.33333C11 3.52222 10.936 3.68044 10.808 3.808C10.6804 3.936 10.5222 4 10.3333 4H8.49996Z" fill="#2272AF"></path></svg>
                                                </div>
                                                <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(34, 114, 175)', fontSize: '11px', paddingLeft: '8px', textTransform: 'uppercase' }}>숫자</p>
                                            </div>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </li>
                                    </div>
                                    <div class="MuiBox-root css-j7qwjs">
                                        <div class="MuiBox-root css-ic7mip">CHOICES</div>
                                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1pfw34x" tabIndex="-1" role='menuitem' onClick={handleQuestionListAdd}>
                                            <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <div class="MuiBox-root css-0" style={{ backgroundColor: 'rgb(230, 235, 253)', display: 'flex', padding: '0px 4px', borderRadius: '8px', width: '24px', height: '24px', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.666667 2.99998C0.477778 2.99998 0.319556 2.93598 0.192 2.80798C0.0640001 2.68042 0 2.5222 0 2.33331V0.99998C0 0.811091 0.0640001 0.652647 0.192 0.524647C0.319556 0.397091 0.477778 0.333313 0.666667 0.333313H2C2.18889 0.333313 2.34733 0.397091 2.47533 0.524647C2.60289 0.652647 2.66667 0.811091 2.66667 0.99998V2.33331C2.66667 2.5222 2.60289 2.68042 2.47533 2.80798C2.34733 2.93598 2.18889 2.99998 2 2.99998H0.666667ZM4 2.99998C3.81111 2.99998 3.65289 2.93598 3.52533 2.80798C3.39733 2.68042 3.33333 2.5222 3.33333 2.33331V0.99998C3.33333 0.811091 3.39733 0.652647 3.52533 0.524647C3.65289 0.397091 3.81111 0.333313 4 0.333313H11.3333C11.5222 0.333313 11.6804 0.397091 11.808 0.524647C11.936 0.652647 12 0.811091 12 0.99998V2.33331C12 2.5222 11.936 2.68042 11.808 2.80798C11.6804 2.93598 11.5222 2.99998 11.3333 2.99998H4ZM4 6.33332C3.81111 6.33332 3.65289 6.26932 3.52533 6.14131C3.39733 6.01376 3.33333 5.85554 3.33333 5.66665V4.33331C3.33333 4.14443 3.39733 3.98598 3.52533 3.85798C3.65289 3.73043 3.81111 3.66665 4 3.66665H11.3333C11.5222 3.66665 11.6804 3.73043 11.808 3.85798C11.936 3.98598 12 4.14443 12 4.33331V5.66665C12 5.85554 11.936 6.01376 11.808 6.14131C11.6804 6.26932 11.5222 6.33332 11.3333 6.33332H4ZM0.666667 6.33332C0.477778 6.33332 0.319556 6.26932 0.192 6.14131C0.0640001 6.01376 0 5.85554 0 5.66665V4.33331C0 4.14443 0.0640001 3.98598 0.192 3.85798C0.319556 3.73043 0.477778 3.66665 0.666667 3.66665H2C2.18889 3.66665 2.34733 3.73043 2.47533 3.85798C2.60289 3.98598 2.66667 4.14443 2.66667 4.33331V5.66665C2.66667 5.85554 2.60289 6.01376 2.47533 6.14131C2.34733 6.26932 2.18889 6.33332 2 6.33332H0.666667ZM4 9.66665C3.81111 9.66665 3.65289 9.60265 3.52533 9.47465C3.39733 9.34709 3.33333 9.18887 3.33333 8.99998V7.66665C3.33333 7.47776 3.39733 7.31932 3.52533 7.19132C3.65289 7.06376 3.81111 6.99998 4 6.99998H11.3333C11.5222 6.99998 11.6804 7.06376 11.808 7.19132C11.936 7.31932 12 7.47776 12 7.66665V8.99998C12 9.18887 11.936 9.34709 11.808 9.47465C11.6804 9.60265 11.5222 9.66665 11.3333 9.66665H4ZM0.666667 9.66665C0.477778 9.66665 0.319556 9.60265 0.192 9.47465C0.0640001 9.34709 0 9.18887 0 8.99998V7.66665C0 7.47776 0.0640001 7.31932 0.192 7.19132C0.319556 7.06376 0.477778 6.99998 0.666667 6.99998H2C2.18889 6.99998 2.34733 7.06376 2.47533 7.19132C2.60289 7.31932 2.66667 7.47776 2.66667 7.66665V8.99998C2.66667 9.18887 2.60289 9.34709 2.47533 9.47465C2.34733 9.60265 2.18889 9.66665 2 9.66665H0.666667Z" fill="#304EB8"></path>
                                                    </svg>
                                                </div>
                                                <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(48, 78, 184)', fontSize: '11px', paddingLeft: '8px', textTransform: 'uppercase' }}>객관식</p>
                                            </div>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </li>
                                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1pfw34x" tabIndex="-1" role='menuitem'>
                                            <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <div class="MuiBox-root css-0" style={{ backgroundColor: 'rgb(230, 235, 253)', display: 'flex', padding: '0px 4px', borderRadius: '8px', width: '24px', height: '24px', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.00004 7.33335C6.18893 7.33335 5.48048 7.08069 4.87471 6.57535C4.26937 6.06958 3.88893 5.43335 3.73337 4.66669H1.00004C0.811152 4.66669 0.65293 4.60269 0.525374 4.47469C0.397374 4.34713 0.333374 4.18891 0.333374 4.00002C0.333374 3.81113 0.397374 3.65269 0.525374 3.52469C0.65293 3.39713 0.811152 3.33335 1.00004 3.33335H3.73337C3.88893 2.56669 4.26937 1.93046 4.87471 1.42469C5.48048 0.919354 6.18893 0.666687 7.00004 0.666687C7.81115 0.666687 8.5196 0.919354 9.12537 1.42469C9.73071 1.93046 10.1112 2.56669 10.2667 3.33335H13C13.1889 3.33335 13.3472 3.39713 13.4747 3.52469C13.6027 3.65269 13.6667 3.81113 13.6667 4.00002C13.6667 4.18891 13.6027 4.34713 13.4747 4.47469C13.3472 4.60269 13.1889 4.66669 13 4.66669H10.2667C10.1112 5.43335 9.73071 6.06958 9.12537 6.57535C8.5196 7.08069 7.81115 7.33335 7.00004 7.33335ZM7.00004 6.00002C7.5556 6.00002 8.02782 5.80558 8.41671 5.41669C8.8056 5.0278 9.00004 4.55558 9.00004 4.00002C9.00004 3.44446 8.8056 2.97224 8.41671 2.58335C8.02782 2.19446 7.5556 2.00002 7.00004 2.00002C6.44448 2.00002 5.97226 2.19446 5.58337 2.58335C5.19448 2.97224 5.00004 3.44446 5.00004 4.00002C5.00004 4.55558 5.19448 5.0278 5.58337 5.41669C5.97226 5.80558 6.44448 6.00002 7.00004 6.00002Z" fill="#304EB8"></path></svg>
                                                </div>
                                                <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(48, 78, 184)', fontSize: '11px', paddingLeft: '8px', textTransform: 'uppercase' }}>선형배율</p>
                                            </div>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </li>
                                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1pfw34x" tabIndex="-1" role='menuitem'>
                                            <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <div class="MuiBox-root css-0" style={{ backgroundColor: 'rgb(230, 235, 253)', display: 'flex', padding: '0px 4px', borderRadius: '8px', width: '24px', height: '24px', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.83337 3.83331V0.833313H6.66671V3.83331H3.83337ZM7.33337 3.83331V0.833313H10.1667V3.83331H7.33337ZM10.8334 3.83331V0.833313H13.6667V3.83331H10.8334ZM0.333374 3.83331V0.833313H3.16671V3.83331H0.333374ZM7.33337 7.49998V4.49998H10.1667V7.49998H7.33337ZM10.8334 7.49998V4.49998H13.6667V7.49998H10.8334ZM0.333374 7.49998V4.49998H3.16671V7.49998H0.333374ZM7.33337 11.1667V8.16665H10.1667V11.1667H7.33337ZM3.83337 11.1667V8.16665H6.66671V11.1667H3.83337ZM10.8334 11.1667V8.16665H13.6667V11.1667H10.8334ZM0.333374 11.1667V8.16665H3.16671V11.1667H0.333374ZM3.83337 7.49998V4.49998H6.66671V7.49998H3.83337Z" fill="#304EB8"></path></svg>
                                                </div>
                                                <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(48, 78, 184)', fontSize: '11px', paddingLeft: '8px', textTransform: 'uppercase' }}>객관식 표</p>
                                            </div>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </li>
                                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1pfw34x" tabIndex="-1" role='menuitem'>
                                            <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <div class="MuiBox-root css-0" style={{ backgroundColor: 'rgb(230, 235, 253)', display: 'flex', padding: '0px 4px', borderRadius: '8px', width: '24px', height: '24px', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.76671 8.76665C6.83337 8.83331 6.91115 8.86665 7.00004 8.86665C7.08893 8.86665 7.16671 8.83331 7.23337 8.76665L9.10004 6.89998C9.20004 6.79998 9.22493 6.68042 9.17471 6.54131C9.12493 6.40265 9.02226 6.33331 8.86671 6.33331H5.13337C4.97782 6.33331 4.87515 6.40265 4.82537 6.54131C4.77515 6.68042 4.80004 6.79998 4.90004 6.89998L6.76671 8.76665ZM7.00004 13.6666C6.07782 13.6666 5.21115 13.4915 4.40004 13.1413C3.58893 12.7915 2.88337 12.3166 2.28337 11.7166C1.68337 11.1166 1.20849 10.4111 0.858707 9.59998C0.508485 8.78887 0.333374 7.9222 0.333374 6.99998C0.333374 6.07776 0.508485 5.21109 0.858707 4.39998C1.20849 3.58887 1.68337 2.88331 2.28337 2.28331C2.88337 1.68331 3.58893 1.2082 4.40004 0.85798C5.21115 0.508202 6.07782 0.333313 7.00004 0.333313C7.92226 0.333313 8.78893 0.508202 9.60004 0.85798C10.4112 1.2082 11.1167 1.68331 11.7167 2.28331C12.3167 2.88331 12.7916 3.58887 13.1414 4.39998C13.4916 5.21109 13.6667 6.07776 13.6667 6.99998C13.6667 7.9222 13.4916 8.78887 13.1414 9.59998C12.7916 10.4111 12.3167 11.1166 11.7167 11.7166C11.1167 12.3166 10.4112 12.7915 9.60004 13.1413C8.78893 13.4915 7.92226 13.6666 7.00004 13.6666Z" fill="#304EB8"></path></svg>
                                                </div>
                                                <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(48, 78, 184)', fontSize: '11px', paddingLeft: '8px', textTransform: 'uppercase' }}>드롭다운</p>
                                            </div>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </li>
                                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1pfw34x" tabIndex="-1" role='menuitem'>
                                            <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <div class="MuiBox-root css-0" style={{ backgroundColor: 'rgb(230, 235, 253)', display: 'flex', padding: '0px 4px', borderRadius: '8px', width: '24px', height: '24px', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.83337 3.83331V0.833313H6.66671V3.83331H3.83337ZM7.33337 3.83331V0.833313H10.1667V3.83331H7.33337ZM10.8334 3.83331V0.833313H13.6667V3.83331H10.8334ZM0.333374 3.83331V0.833313H3.16671V3.83331H0.333374ZM7.33337 7.49998V4.49998H10.1667V7.49998H7.33337ZM10.8334 7.49998V4.49998H13.6667V7.49998H10.8334ZM0.333374 7.49998V4.49998H3.16671V7.49998H0.333374ZM7.33337 11.1667V8.16665H10.1667V11.1667H7.33337ZM3.83337 11.1667V8.16665H6.66671V11.1667H3.83337ZM10.8334 11.1667V8.16665H13.6667V11.1667H10.8334ZM0.333374 11.1667V8.16665H3.16671V11.1667H0.333374ZM3.83337 7.49998V4.49998H6.66671V7.49998H3.83337Z" fill="#304EB8"></path></svg>
                                                </div>
                                                <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(48, 78, 184)', fontSize: '11px', paddingLeft: '8px', textTransform: 'uppercase' }}>다중필드</p>
                                            </div>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div tabindex="0" data-testid="sentinelEnd"></div>
            </div>
            )}
            {showTooltip && (<div role='tooltip' id='mui-17' class="Muitooltip-popper MuiTooltip-popperInteractive MuiTooltip-popperArrow css-1xjiak MuiPopperUnstyled-root" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(253px, 148px)' }} data-popper-placement="right">
                <div class="MuiTooltip-tooltip MuiTooltip-tooltipArrow MuiTooltip-tooltipPlacementRight css-1rlcjdf">
                    empty
                    <span class="MuiTooltip-arrow css-1urvb1y">
                        ::before
                    </span>
                </div>
            </div>)}
            {isDeleteVisible && (<div role="presentation" class="MuiModal-root css-1gx91h0">
                <div aria-hidden="true" class="MuiBackdrop-root css-919eu4" style={{ opacity: '1', transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }} onClick={handelClickBackdrop}></div>
                <div tabindex="0" data-testid="sentinelStart"></div>
                <div class="MuiBox-root css-1352zcs" tabIndex="-1">
                    <h5 class="MuiTypography-root MuiTypography-h5 css-s6hdhn">
                        <div class="MuiBox-root css-0" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNzY2NCAzLjk4Mjc2QzEzLjAwOTMgNC4wODM0MyAxMy4yMzAxIDQuMjMwOTkgMTMuNDE2IDQuNDE3MDFMMTkuNTg0IDEwLjU4NEMxOS43NzAyIDEwLjc2OTkgMTkuOTE3OSAxMC45OTA3IDIwLjAxODYgMTEuMjMzOEMyMC4xMTk0IDExLjQ3NjkgMjAuMTcxMiAxMS43Mzc0IDIwLjE3MTIgMTIuMDAwNUMyMC4xNzEyIDEyLjI2MzYgMjAuMTE5NCAxMi41MjQyIDIwLjAxODYgMTIuNzY3MkMxOS45MTc5IDEzLjAxMDMgMTkuNzcwMiAxMy4yMzExIDE5LjU4NCAxMy40MTdMMTMuNDE2IDE5LjU4NEMxMy4yMzAxIDE5Ljc3IDEzLjAwOTMgMTkuOTE3NiAxMi43NjY0IDIwLjAxODNDMTIuNTIzNCAyMC4xMTg5IDEyLjI2MyAyMC4xNzA3IDEyIDIwLjE3MDdDMTEuNzM3IDIwLjE3MDcgMTEuNDc2NiAyMC4xMTg5IDExLjIzMzYgMjAuMDE4M0MxMC45OTA3IDE5LjkxNzYgMTAuNzY5OSAxOS43NyAxMC41ODQgMTkuNTg0TDQuNDE2IDEzLjQxN0M0LjIyOTg0IDEzLjIzMTEgNC4wODIxNSAxMy4wMTAzIDMuOTgxMzggMTIuNzY3MkMzLjg4MDYyIDEyLjUyNDIgMy44Mjg3NSAxMi4yNjM2IDMuODI4NzUgMTIuMDAwNUMzLjgyODc1IDExLjczNzQgMy44ODA2MiAxMS40NzY5IDMuOTgxMzggMTEuMjMzOEM0LjA4MjE1IDEwLjk5MDcgNC4yMjk4NCAxMC43Njk5IDQuNDE2IDEwLjU4NEwxMC41ODQgNC40MTcwMUMxMC43Njk5IDQuMjMwOTkgMTAuOTkwNyA0LjA4MzQzIDExLjIzMzYgMy45ODI3NkMxMS40NzY2IDMuODgyMDggMTEuNzM3IDMuODMwMjYgMTIgMy44MzAyNkMxMi4yNjMgMy44MzAyNiAxMi41MjM0IDMuODgyMDggMTIuNzY2NCAzLjk4Mjc2Wk0xMS4yOTI5IDEzLjcwNzFDMTEuNDgwNCAxMy44OTQ2IDExLjczNDggMTQgMTIgMTRDMTIuMjY1MiAxNCAxMi41MTk2IDEzLjg5NDYgMTIuNzA3MSAxMy43MDcxQzEyLjg5NDYgMTMuNTE5NiAxMyAxMy4yNjUyIDEzIDEzVjhDMTMgNy43MzQ3OCAxMi44OTQ2IDcuNDgwNDMgMTIuNzA3MSA3LjI5Mjg5QzEyLjUxOTYgNy4xMDUzNiAxMi4yNjUyIDcgMTIgN0MxMS43MzQ4IDcgMTEuNDgwNCA3LjEwNTM2IDExLjI5MjkgNy4yOTI4OUMxMS4xMDU0IDcuNDgwNDMgMTEgNy43MzQ3OCAxMSA4VjEzQzExIDEzLjI2NTIgMTEuMTA1NCAxMy41MTk2IDExLjI5MjkgMTMuNzA3MVpNMTEuMjkyOSAxNi43MDcxQzExLjQ4MDQgMTYuODk0NiAxMS43MzQ4IDE3IDEyIDE3QzEyLjI2NTIgMTcgMTIuNTE5NiAxNi44OTQ2IDEyLjcwNzEgMTYuNzA3MUMxMi44OTQ2IDE2LjUxOTYgMTMgMTYuMjY1MiAxMyAxNkMxMyAxNS43MzQ4IDEyLjg5NDYgMTUuNDgwNCAxMi43MDcxIDE1LjI5MjlDMTIuNTE5NiAxNS4xMDU0IDEyLjI2NTIgMTUgMTIgMTVDMTEuNzM0OCAxNSAxMS40ODA0IDE1LjEwNTQgMTEuMjkyOSAxNS4yOTI5QzExLjEwNTQgMTUuNDgwNCAxMSAxNS43MzQ4IDExIDE2QzExIDE2LjI2NTIgMTEuMTA1NCAxNi41MTk2IDExLjI5MjkgMTYuNzA3MVoiIGZpbGw9IiNERTM1MEIiLz4KPC9zdmc+Cg==" />
                        </div>
                        이 필드를 삭제하시겠어요?
                    </h5>
                    <p class="MuiTypography-root MuiTypography-body1 css-lbqas0">
                        <b>{question}</b>
                        <br /> <br />
                        삭제된 필드는 다시 되돌릴 수 없어요.
                    </p>
                    <div role="group" class="MuiButtonGroup-root MuiButtonGroup-outlined css-1gkqau2">
                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary css-55a4wh" tabindex="0" type="button" onClick={hideDelete}>취소<span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary css-itbpdr" tabindex="0" type="button">삭제<span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                    </div>
                </div>
                <div tabindex="0" data-testid="sentinelEnd"></div>
            </div>)}
            {isEndingTypeVisible && (
                <div role="presentation" class="MuiPopover-root MuiModal-root css-d9kxen">
                    <div aria-hidden="true" class="MuiBackdrop-root MuiBackdrop-invisible css-esi9ax" style={{ opacity: "1", transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }} onClick={handelClickBackdrop}></div>
                    <div tabindex="0" data-testid="sentinelStart"></div>
                    <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1oqb34a" tabIndex="-1" style={{ opacity: '1', transform: 'none', transition: 'opacity 257ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 171ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', top: '269px', left: '253px', transformOrigin: '0px 50px' }}>
                        <div class="MuiBox-root css-uwwqev">
                            <div class="MuiBox-root css-0">
                                <div class="MuiBox-root css-j7qwjs">
                                    <div class="MuiBox-root css-5ah26q">ENDING TYPES</div>
                                    <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1pfw34x" tabIndex="-1" role="menuitem">
                                        <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <div class="MuiBox-root css-19vax5x">
                                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1yls13q" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MeetingRoomRoundedIcon"><path d="M20 19h-1V5c0-.55-.45-1-1-1h-4c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v15H4c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1V6h3v14c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm-9-6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>
                                            </div>
                                            <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(76, 76, 76)', fontSize: '11px', paddingLeft: '8px', textTransform: 'uppercase' }}>URL로 이동</p>
                                        </div>
                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
    </>
  );
}

export default KAKAQ;
