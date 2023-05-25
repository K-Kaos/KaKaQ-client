import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import homeLogo from "../../Assets/Projects/home.png";
import { Link } from "react-router-dom";
import seobin from "../../Assets/Profile/seobin.png";
import soyeon from "../../Assets/Profile/soyeon.png";
import sohyun from "../../Assets/Profile/sohyun.png";
import jueun from "../../Assets/Profile/jueun.png";
import yekyeong from "../../Assets/Profile/yekyeong.png";
import GuideIntro from "../Guide/GuideIntro";
import "../../style.css";
import logo from "../../Assets/Logo/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
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
} from "@mui/material";

function Home(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    opacity: isHovered ? 1 : 0.8,
    transform: isHovered ? "translateY(-2px) scale(1.1)" : "none",
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
  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      id="main"
      data-framer-hydrate-v2='{"routeId":"p21q_B_LG"}'
      data-framer-ssr-released-at="2023-05-08T09:00:54.216Z"
      data-framer-page-optimized-at="2023-05-15T03:17:37.321Z"
    >
      <div
        class="framer-Hi9oj"
        data-projection-id="502"
        style={{ display: "contents" }}
      >
        <div
          class="framer-1hy14a1"
          data-projection-id="503"
          style={{ minHeight: "100%", width: "auto" }}
        >
          <div
            class="framer-1a0jxm-container"
            data-projection-id="510"
            style={{ transform: "translateX(-50%)" }}
          >
            <div
              class="framer-BKQla framer-v-16wpwxw"
              tabindex="0"
              data-projection-id="511"
              style={{ display: "contents" }}
            >
              {/* // Navbar */}
              <nav
                class="framer-16wpwxw"
                data-framer-name="Desktop"
                data-projection-id="512"
                style={{
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  width: "100%",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                }}
              >
                <a
                  class="framer-1rzrhxl framer-142n3id"
                  data-framer-name="walla_purple"
                  href="./"
                  data-framer-page-link-current="true"
                  data-projection-id="513"
                  style={{
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: 1,
                  }}
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="514"
                    style={{
                      position: "absolute",
                      pointerEvents: "none",
                      userSelect: "none",
                      borderRadius: "inherit",
                      inset: 0,
                    }}
                  >
                    <div
                      style={{
                        display: "contents",
                        borderRadius: "inherit",
                        pointerEvents: "none",
                      }}
                    >
                      <img
                        src={logo}
                        alt="KAKAQ-logo"
                        sizes="82px"
                        style={{ height: "36px" }}
                      />
                    </div>
                  </div>
                </a>
                <div
                  class="framer-1bmyg1j"
                  data-projection-id="515"
                  style={{
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: 1,
                  }}
                >
                  <div
                    class="framer-1ip9hjg"
                    data-framer-name="Icons"
                    data-projection-id="516"
                    style={{
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: 1,
                    }}
                  >
                    <a
                      class="framer-11qszmx framer-142n3id"
                      href="./"
                      data-projection-id="517"
                      style={{
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                        opacity: "1",
                      }}
                    ></a>
                  </div>
                  <div
                    class="framer-15lrvy6"
                    data-framer-name="Links"
                    data-projection-id="2690"
                    style={{ opacity: "1" }}
                  >
                    <div
                      class="framer-1xlz8p9"
                      data-projection-id="2691"
                      style={{ opacity: "1" }}
                    >
                      <a
                        class="framer-oy7oxm framer-142n3id"
                        href="https://github.com/K-Kaos"
                        target="_blank"
                        rel="noopener"
                        data-projection-id="2695"
                        style={{ opacity: "1" }}
                      >
                        <div
                          class="framer-dg4wwn"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="2696"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: "0",
                            "--extracted-r6o4lv":
                              "var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78))",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                            opacity: "1",
                          }}
                        >
                          <p
                            class="framer-text"
                            data-projection-id="2697"
                            style={{
                              "--font-selector": "R0Y7TWFucm9wZS04MDA=",
                              "--framer-font-family": '"Manrope", sans-serif',
                              "--framer-font-weight": 800,
                              "--framer-line-height": "1em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv)",
                            }}
                          >
                            Blog
                          </p>
                        </div>
                      </a>
                      <a
                        class="framer-dt975w framer-142n3id"
                        href="https://github.com/K-Kaos/K-Kaos"
                        target="_blank"
                        rel="noopener"
                        data-projection-id="2698"
                        style={{ opacity: "1" }}
                      >
                        <div
                          class="framer-ie821d"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="2699"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: 0,
                            "--extracted-r6o4lv":
                              "var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78))",
                            "--framer-paragraph-spacing": "0px",
                            transform: "none",
                            opacity: 1,
                          }}
                        >
                          <p
                            class="framer-text"
                            data-projection-id="2700"
                            style={{
                              "--font-selector": "R0Y7TWFucm9wZS04MDA=",
                              "--framer-font-family":
                                '"Pretendard-Bold", "Manrope", sans-serif',
                              "--framer-font-weight": 800,
                              "--framer-line-height": "1em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv)",
                            }}
                          >
                            Team
                          </p>
                        </div>
                      </a>
                    </div>
                    <div
                      class="framer-4q5yoh-container"
                      data-projection-id="2701"
                      style={{ opacity: "1" }}
                    >
                      <div
                        class="framer-0us6Y framer-v-12sq4y7"
                        tabindex="0"
                        data-projection-id="2702"
                        style={{ display: "contents" }}
                      >
                        <a
                          class="framer-12sq4y7 framer-1xvjq46"
                          data-highlight="true"
                          data-reset="button"
                          href="/login"
                          rel="noopener"
                          tabindex="0"
                          data-projection-id="2703"
                          style={{
                            "--border-bottom-width": "0px",
                            "--border-color": "rgba(0, 0, 0, 0)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "0px",
                            backgroundColor: "rgb(44, 174, 255)",
                            filter: "brightness(1)",
                            borderRadius: "10px",
                            opacity: 1,
                          }}
                          data-framer-name="Standard Accent"
                        >
                          <div
                            class="framer-1r3iwnw"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2704"
                            style={{
                              outline: "none",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              flexShrink: 0,
                              "--extracted-r6o4lv":
                                "var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78))",
                              "--framer-paragraph-spacing": "0px",
                              transform: "none",
                              opacity: 1,
                            }}
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2705"
                              style={{
                                "--font-selector":
                                  "Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=",
                                "--framer-font-family": "Pretendard Bold",
                                "--framer-line-height": "1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv)",
                              }}
                            >
                              Start for free
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div class="framer-1dorvhs" data-projection-id="520">
            <div class="MuiBox-root css-kcttjf">
              <div class="MuiBox-root css-fxr4xl">
                <div class="MuiBox-root css-1szjw0z">
                  <div
                    class="MuiBox-root css-0"
                    style={{
                      width: "100%",
                      gap: "40px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div class="MuiBox-root css-1xdhyk6">
                      <p
                        class="MuiTypography-root MuiTypography-body1 css-qisfzi"
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          letterSpacing: "-0.02rem",
                          color: "rgb(38, 112, 255)",
                          lineHeight: "12px",
                          minHeight: "12px",
                        }}
                      ></p>
                      <div class="MuiBox-root css-0">
                        <div class="MuiGrid-root MuiGrid-container css-onfdyp">
                          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                            <div class="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-multiline Mui-focused css-1xxtoyx">
                              <textarea
                                placeholder="질문을 입력해주세요"
                                class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18"
                                style={{ height: "24px", overflow: "hidden" }}
                                onChange={handleQuestionChange}
                              ></textarea>
                              <textarea
                                aria-hidden="true"
                                class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18"
                                readonly=""
                                tabindex="-1"
                                style={{
                                  visibility: "hidden",
                                  position: "absolute",
                                  overflow: "hidden",
                                  height: "0px",
                                  top: "0px",
                                  left: "0px",
                                  transform: "translateZ(0px)",
                                  padding: "0px",
                                  width: "496px",
                                }}
                              ></textarea>
                            </div>
                          </div>
                          <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                            <div class="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-multiline css-lryuv7">
                              <textarea
                                placeholder="(선택 사항) 키워드를 입력하세요"
                                class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18"
                                style={{ height: "23px", overflow: "hidden" }}
                              ></textarea>
                              <textarea
                                aria-hidden="true"
                                class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18"
                                readonly=""
                                tabindex="-1"
                                style={{
                                  visibility: "hidden",
                                  position: "absolute",
                                  overflow: "hidden",
                                  height: "0px",
                                  top: "0px",
                                  left: "0px",
                                  transform: "translateZ(0px)",
                                  padding: "0px",
                                  width: "496px",
                                }}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="MuiBox-root css-1oi2cng">
                      <div>
                        <div class="MuiInputBase-root MuiInputBase-colorPrimary css-2g6513">
                          <input
                            autocomplete="off"
                            placeholder="응답을 입력하세요"
                            type="text"
                            class="MuiInputBase-input css-mnn31"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="MuiBox-root css-1bvc4cc">
                      <button
                        class="css-1c3ey53"
                        style={buttonStyle}
                        onMouseEnter={handleHoverEnter}
                        onMouseOut={handleHoverLeave}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_12070_64088"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                            style={{ maskType: "alpha" }}
                          >
                            <rect width="24" height="24" fill="#D9D9D9"></rect>
                          </mask>
                          <g mask="url(#mask0_12070_64088)">
                            <path
                              d="M10.0001 12.7751L15.5001 7.3001C15.8001 7.0001 16.1668 6.8501 16.6001 6.8501C17.0334 6.8501 17.4001 7.0001 17.7001 7.3001C18.0001 7.6001 18.1501 7.96676 18.1501 8.4001C18.1501 8.83343 18.0001 9.2001 17.7001 9.5001L11.1251 16.1001C10.8084 16.4168 10.4334 16.5751 10.0001 16.5751C9.56676 16.5751 9.19176 16.4168 8.8751 16.1001L6.3001 13.5001C6.0001 13.2001 5.8501 12.8334 5.8501 12.4001C5.8501 11.9668 6.0001 11.6001 6.3001 11.3001C6.6001 11.0001 6.96676 10.8501 7.4001 10.8501C7.83343 10.8501 8.2001 11.0001 8.5001 11.3001L10.0001 12.7751Z"
                              fill="#FFFFFF"
                            ></path>
                          </g>
                        </svg>
                        <p class="MuiTypography-root MuiTypography-body1 css-10q16nc">
                          OK
                        </p>
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

export default Home;
