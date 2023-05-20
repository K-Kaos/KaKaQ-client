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

function Workspace() {
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
                        src="https://lh3.googleusercontent.com/a/AGNmyxZ-kEj3uV178F4hJQqY8hHdyfuRWhGsM9MepJ4o=s96-c"
                        class="MuiAvatar-img css-1hy9t21"
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
                    {/* Drafts */}
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
                              Drafts
                            </span>
                          </div>
                        </div>
                      </ul>
                    </div>
                    {/* 워크 스페이스 추가 버튼 */}
                    <div className="MuiBox-root css-ie0u5e">
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
                    </div>
                  </div>

                  {/* 추가되는 workspace */}
                  <div className="MuiBox-root css-rjihzs">
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
                  </div>
                  
                  
                  <div
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
                  </div>
                  <div
                    class="FieldsListDrawer__ColResizer-sc-rlte4u-0 cWIaYp leftColResizer"
                    role="presentation"
                  ></div>
                  {/* 여기에 추가해야함 */}
                  
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
