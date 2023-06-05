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
                  data-framer-name="kakaq_logo"
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
                            Github
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
                            // backgroundColor: "rgb(44, 174, 255)",
                            backgroundColor: "rgb(250, 220, 95)",
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
                                  "white",
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
            <div
              class="framer-1qelean"
              data-framer-appear-id="m2ii2j"
              data-projection-id="521"
              style={{
                opacity: 1,
                transform: "perspective(1200px)",
              }}
            >
              <div
                data-aos="fade-up"
                class="framer-11q8487"
                data-framer-component-type="RichTextContainer"
                data-projection-id="522"
                style={{
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: 0,
                  transform: "none",
                }}
              >
                <p
                  data-aos="fade-up"
                  class="framer-text"
                  style={{
                    "--font-selector": "Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=",
                    "--framer-font-family": '"Manrope", sans-serif',
                    "--framer-line-height": "1.5em",
                    "--framer-text-color":
                      "var(--token-81c88cf7-3b7f-4171-9140-39d2c84ed790, #FADC5F)",
                    "--framer-text-transform": "uppercase",
                  }}
                >
                  설문조사를 위한 자동화 올인원 툴
                </p>
              </div>
              <div
                class="framer-xlkaf5"
                data-framer-component-type="RichTextContainer"
                data-projection-id="523"
                style={{
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: 0,
                  transform: "none",
                }}
              >
                <h1
                  data-aos="fade-up"
                  className="framer-text"
                  style={{
                    "--font-selector": "Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==",
                    "--framer-font-family": "Pretendard Bold",
                    "--framer-font-size": "60px",
                    "--framer-letter-spacing": "-1px",
                    "--framer-line-height": "1.1em",
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78))",
                  }}
                >
                  Share your Opinion!
                  <br class="framer-text" />
                </h1>
              </div>
              <div
                className="framer-rfth35"
                data-framer-component-type="RichTextContainer"
                data-projection-id="524"
                style={{
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: 0,
                  transform: "none",
                }}
              >
                <p
                  data-aos="fade-up"
                  class="framer-text"
                  style={{
                    "--font-selector": "Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt",
                    "--framer-font-family": "Pretendard Bold",
                    "--framer-font-size": "24px",
                    "--framer-letter-spacing": "-0.7px",
                    "--framer-line-height": "1.5em",
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "rgb(91, 94, 118)",
                  }}
                >
                  KakaQ와 의견을 나누고 친구들을 만나보세요.
                </p>
                <p
                  data-aos="fade-up"
                  className="framer-text"
                  style={{
                    "--font-selector": "Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt",
                    "--framer-font-family": '"Manrope", sans-serif',
                    "--framer-font-size": "24px",
                    "--framer-letter-spacing": "-0.7px",
                    "--framer-line-height": "1.5em",
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "rgb(91, 94, 118)",
                  }}
                >
                  사용자 친화적인 설문조사를 KakaQ에서 만나볼 수 있습니다.
                </p>
              </div>
              <div class="framer-1tp0a7d-container" data-projection-id="525">
                <div
                  class="framer-BlDRO framer-v-k2zcsa"
                  tabindex="0"
                  data-projection-id="526"
                  style={{ display: "contents" }}
                >
                  <a
                    className="framer-1pifrf framer-cz1ok2"
                    data-highlight="true"
                    data-reset="button"
                    href="https://github.com/K-Kaos"
                    rel="noopener"
                    tabIndex="0"
                    data-projection-id="527"
                    style={{
                      "--border-bottom-width": "0px",
                      "--border-color": "rgba(0, 0, 0, 0)",
                      "--border-left-width": "0px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                      backgroundColor: "rgb(250, 220, 95)",
                      filter: "brightness(1)",
                      borderRadius: "12px",
                      opacity: 1,
                    }}
                    data-framer-name="Large Accent"
                  >
                    <div
                      className="framer-11cvz9b"
                      data-framer-component-type="RichTextContainer"
                      data-projection-id="528"
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: 0,
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-link-current-text-color": "hsl(0, 0%, 0%)",
                        "--framer-link-hover-text-color": "#666",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                        opacity: 1,
                      }}
                    >
                      <p
                        className="framer-text"
                        data-projection-id="529"
                        style={{
                          "--font-selector": "Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==",
                          "--framer-font-family": '"Manrope", sans-serif',
                          "--framer-font-size": "18px",
                          "--framer-letter-spacing": "-0.3px",
                          "--framer-line-height": "1em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv)",
                        }}
                      >
                        바로 시작하기
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="framer-veyzli" data-projection-id="531">
              <div class="framer-rhfjb6-container" data-projection-id="532">
                <div
                  class="framer-AQnid framer-v-o5jq8j"
                  tabindex="0"
                  data-projection-id="533"
                  style={{ display: "contents" }}
                >
                  <div
                    className="framer-1fc61s1"
                    data-framer-name="Tablet_2"
                    data-projection-id="534"
                    style={{
                      borderRadius: "8px",
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 10px 0px",
                      opacity: 1,
                    }}
                    data-highlight="true"
                  >
                    <div
                      className="framer-1r55ilo"
                      data-framer-name="Browser"
                      data-projection-id="2461"
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        opacity: 1,
                      }}
                    >
                      <div
                        class="framer-2jymsj-container"
                        data-projection-id="2788"
                        style={{ opacity: "1" }}
                      >
                        <video
                          src="#"
                          loop
                          autoPlay
                          playsInline
                          poster="#"
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "0px",
                            display: "block",
                            objectFit: "fill",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            objectPosition: "50% 50%",
                          }}
                        ></video>
                      </div>
                      <div
                        data-framer-component-type="SVG"
                        className="framer-1vky2jf"
                        data-projection-id="2463"
                        style={{
                          imageRendering: "pixelated",
                          flexShrink: 0,
                          fill: "rgb(0, 0, 0)",
                          color: "rgb(0, 0, 0)",
                          opacity: 0,
                        }}
                      >
                        <div
                          class="svgContainer"
                          style={{
                            width: "100%",
                            height: "100%",
                            aspectRatio: "inherit",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            style={{
                              gap: "200px",
                              width: "100%",
                              height: "100%",
                            }}
                            viewBox="0 0 1000 30"
                            preserveAspectRatio="none"
                            width="100%"
                            height="100%"
                          >
                            <use href="#svg-901415929_548"></use>
                          </svg>
                        </div>
                      </div>
                      <div
                        data-framer-component-type="SVG"
                        className="framer-xidi4j"
                        data-projection-id="2464"
                        style={{
                          gap: "200px",
                          imageRendering: "pixelated",
                          flexShrink: 0,
                          fill: "rgb(0, 0, 0)",
                          color: "rgb(0, 0, 0)",
                          opacity: 1,
                        }}
                      >
                        <div
                          className="svgContainer"
                          style={{
                            width: "100%",
                            height: "100%",
                            aspectRatio: "inherit",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                            viewBox="0 0 37 10"
                            preserveAspectRatio="none"
                            width="100%"
                            height="100%"
                          >
                            <use href="#svg-1930292360_1063"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="framer-1qelean"
              data-framer-appear-id="m2ii2j"
              data-projection-id="521"
              style={{
                paddingTop: "150px",
                opacity: 1,
                transform: "perspective(1200px)",
              }}
            >
              <div
                class="framer-xlkaf5"
                data-framer-component-type="RichTextContainer"
                data-projection-id="523"
                style={{
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: 0,
                  transform: "none",
                }}
              >
                <h2
                  data-aos="fade-up"
                  className="framer-text"
                  style={{
                    "--font-selector": "Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==",
                    "--framer-font-family": "Pretendard Bold",
                    "--framer-font-size": "50px",
                    "--framer-letter-spacing": "-1px",
                    "--framer-line-height": "1.1em",
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78))",
                  }}
                >
                  똑똑한 KaKaQ는
                  <br class="framer-text" />
                  생산성을 위해 만들어졌어요
                </h2>
              </div>

              <div
                data-aos="fade-up"
                class="framer-1tp0a7d-container"
                data-projection-id="525"
              >
                <div
                  data-aos="fade-up"
                  class="framer-BlDRO framer-v-k2zcsa"
                  tabindex="0"
                  data-projection-id="526"
                  style={{ display: "contents" }}
                >
                  <a
                    data-aos="fade-up"
                    className="framer-1pifrf framer-cz1ok2"
                    data-highlight="true"
                    data-reset="button"
                    href="https://github.com/K-Kaos"
                    rel="noopener"
                    tabIndex="0"
                    data-projection-id="527"
                    style={{
                      gap: "250px",
                      marginTop: "80px",
                      marginBottom: "80px",
                      "--border-bottom-width": "0px",
                      "--border-color": "rgba(0, 0, 0, 0)",
                      "--border-left-width": "0px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                      backgroundColor: "#FADC5F",
                      filter: "brightness(1)",
                      borderRadius: "12px",
                      opacity: 1,
                    }}
                    data-framer-name="Large Accent"
                  >
                    <div
                      data-aos="fade-up"
                      className="framer-11cvz9b"
                      data-framer-component-type="RichTextContainer"
                      data-projection-id="528"
                      style={{
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: 0,
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-link-current-text-color": "hsl(0, 0%, 0%)",
                        "--framer-link-hover-text-color": "#666",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                        opacity: 1,
                      }}
                    >
                      <p
                        className="framer-text"
                        data-projection-id="529"
                        style={{
                          "--font-selector": "Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==",
                          "--framer-font-family": '"Manrope", sans-serif',
                          "--framer-font-size": "18px",
                          "--framer-letter-spacing": "-0.3px",
                          "--framer-line-height": "1em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv)",
                        }}
                      >
                        더 알아보기
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <GuideIntro />
            <div
              class="framer-11q8487"
              data-framer-component-type="RichTextContainer"
              data-projection-id="522"
              style={{
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexShrink: 0,
                transform: "none",
              }}
            >
              <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    K-Kaos의 멤버
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    K-Kaos의 멤버들을 소개합니다.
                  </p>
                </div>
                <ul
                  role="list"
                  className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                >
                  <li>
                    <Card
                      data-aos="fade-up"
                      className="p-2"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <div className="flex items-center gap-x-6">
                        <img
                          className="h-24 w-24 rounded-full"
                          src={seobin}
                          alt=""
                        />
                        <div>
                          <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                            Seobin Lee
                          </h3>
                          <p
                            className="text-base font-semibold leading-6 "
                            style={{ color: "#FADC5F" }}
                          >
                            PM / Front-end
                          </p>
                        </div>
                      </div>
                    </Card>
                  </li>
                  <li>
                    <Card
                      data-aos="fade-up"
                      className="p-2"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <div className="flex items-center gap-x-6">
                        <img
                          className="h-24 w-24 rounded-full"
                          src={soyeon}
                          alt=""
                        />
                        <div>
                          <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                            Soyeon You{" "}
                          </h3>
                          <p
                            className="text-base font-semibold leading-6 "
                            style={{ color: "#FADC5F" }}
                          >
                            Database
                          </p>
                        </div>
                      </div>
                    </Card>
                  </li>
                  <li>
                    <Card
                      data-aos="fade-up"
                      className="p-2"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <div className="flex items-center gap-x-6">
                        <img
                          className="h-24 w-24 rounded-full"
                          src={sohyun}
                          alt=""
                        />
                        <div>
                          <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                            Sohyun Lee
                          </h3>
                          <p
                            className="text-base font-semibold leading-6 "
                            style={{ color: "#FADC5F" }}
                          >
                            Back-end
                          </p>
                        </div>
                      </div>
                    </Card>
                  </li>
                  <li>
                    <Card
                      data-aos="fade-up"
                      className="p-2"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <div className="flex items-center gap-x-6">
                        <img
                          className="h-24 w-24 rounded-full"
                          src={jueun}
                          alt=""
                        />
                        <div>
                          <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                            Jueun Yoon
                          </h3>
                          <p
                            className="text-base font-semibold leading-6 "
                            style={{ color: "#FADC5F" }}
                          >
                            Front-end
                          </p>
                        </div>
                      </div>
                    </Card>
                  </li>
                  <li>
                    <Card
                      data-aos="fade-up"
                      className="p-2"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <div className="flex items-center gap-x-6">
                        <img
                          className="h-24 w-24 rounded-full"
                          src={yekyeong}
                          alt=""
                        />
                        <div>
                          <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                            Yekyeong Jang
                          </h3>
                          <p
                            className="text-base font-semibold leading-6 "
                            style={{ color: "#FADC5F" }}
                          >
                            Back-end
                          </p>
                        </div>
                      </div>
                    </Card>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
