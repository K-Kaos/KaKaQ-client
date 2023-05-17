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
import AOS from "aos";
import "aos/dist/aos.css";
// import { Map, Marker } from "react-kakao-maps";
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
  const isLogin = props.isLogin;
  const homeSectionRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFadeIn(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(homeSectionRef.current);
  }, []);

  useEffect(() => {
    // 사용자의 위치 정보를 받아와 state로 저장하는 부분
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <body
      class="framer-body-p21q_B_LG"
      data-new-gr-c-s-check-loaded="14.1110.0"
      data-gr-ext-installed=""
    >
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
                          src="https://framerusercontent.com/images/N6QGzxlalC4EH5elN7872I9dwA.png?scale-down-to=4096"
                          alt=""
                          srcset="https://framerusercontent.com/images/N6QGzxlalC4EH5elN7872I9dwA.png?scale-down-to=512 512w, https://framerusercontent.com/images/N6QGzxlalC4EH5elN7872I9dwA.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/N6QGzxlalC4EH5elN7872I9dwA.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/N6QGzxlalC4EH5elN7872I9dwA.png?scale-down-to=4096 4096w, https://framerusercontent.com/images/N6QGzxlalC4EH5elN7872I9dwA.png 4821w"
                          sizes="82px"
                          style={{
                            pointerEvents: "none",
                            userSelect: "none",
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            objectPosition: "center center",
                            objectFit: "cover",
                            imageRendering: "auto",
                          }}
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
                          class="framer-10huym9 framer-142n3id"
                          href="./blog/walla-pricing"
                          data-projection-id="2692"
                          style={{ opacity: "1" }}
                        >
                          <div
                            class="framer-18vrjj5"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2693"
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
                              data-projection-id="2694"
                              style='--font-selector: R0Y7TWFucm9wZS04MDA=; --framer-font-family: "Manrope", sans-serif; --framer-font-weight: 800; --framer-line-height: 1em; --framer-text-alignment: center; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              Pricing
                            </p>
                          </div>
                        </a>
                        <a
                          class="framer-oy7oxm framer-142n3id"
                          href="https://home.walla.my/blog"
                          target="_blank"
                          rel="noopener"
                          data-projection-id="2695"
                          style={{ opacity: "1" }}
                        >
                          <div
                            class="framer-dg4wwn"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2696"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2697"
                              style='--font-selector: R0Y7TWFucm9wZS04MDA=; --framer-font-family: "Manrope", sans-serif; --framer-font-weight: 800; --framer-line-height: 1em; --framer-text-alignment: center; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              Blog
                            </p>
                          </div>
                        </a>
                        <a
                          class="framer-dt975w framer-142n3id"
                          href="https://paprikadatalab.com"
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
                                "--framer-font-family": '"Manrope", sans-serif',
                                "--framer-font-weight": 800,
                                "--framer-line-height": "1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv)",
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
                            href="https://app.walla.my"
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
                                  "--framer-font-family":
                                    '"Pretendard SemiBold", serif',
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
                    class="framer-text"
                    style={{
                      "--font-selector": "Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=",
                      "--framer-font-family": '"Pretendard SemiBold", serif',
                      "--framer-line-height": "1.5em",
                      "--framer-text-color":
                        "var(--token-81c88cf7-3b7f-4171-9140-39d2c84ed790, rgb(61, 161, 255))",
                      "--framer-text-transform": "uppercase",
                    }}
                  >
                    데이터 수집을 위한 올인원 툴
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
                    class="framer-text"
                    style={{
                      "--font-selector": "Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==",
                      "--framer-font-family": '"Pretendard Bold", serif',
                      "--framer-font-size": "60px",
                      "--framer-letter-spacing": "-1px",
                      "--framer-line-height": "1.1em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color":
                        "var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78))",
                    }}
                  >
                    폼을 만들고 분석하는
                    <br class="framer-text" />
                    가장 합리적인 방법
                  </h1>
                </div>
                <div
                  class="framer-rfth35"
                  data-framer-component-type="RichTextContainer"
                  data-projection-id="524"
                  style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                >
                  <p
                    class="framer-text"
                    style={{
                      "--font-selector": "Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt",
                      "--framer-font-family": '"Pretendard Medium", serif',
                      "--framer-font-size": "24px",
                      "--framer-letter-spacing": "-0.7px",
                      "--framer-line-height": "1.5em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "rgb(91, 94, 118)",
                    }}
                  >
                    폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지
                    마세요.
                  </p>
                  <p
                    class="framer-text"
                    style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 24px; --framer-letter-spacing: -0.7px; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: rgb(91, 94, 118);'
                  >
                    모든 핵심 과정을 왈라에서 한번에 해결하실 수 있습니다.
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
                      class="framer-1pifrf framer-cz1ok2"
                      data-highlight="true"
                      data-reset="button"
                      href="https://app.walla.my"
                      rel="noopener"
                      tabindex="0"
                      data-projection-id="527"
                      style="--border-bottom-width: 0px; --border-color: rgba(0, 0, 0, 0); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: rgb(44, 174, 255); filter: brightness(1); border-radius: 12px; opacity: 1;"
                      data-framer-name="Large Accent"
                    >
                      <div
                        class="framer-11cvz9b"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="528"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(255, 255, 255); --framer-link-current-text-color: hsl(0, 0%, 0%); --framer-link-hover-text-color: #666; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                      >
                        <p
                          class="framer-text"
                          data-projection-id="529"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 18px; --framer-letter-spacing: -0.3px; --framer-line-height: 1em; --framer-text-alignment: center; --framer-text-color: var(--extracted-r6o4lv);'
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
                    style="display: contents;"
                  >
                    <div
                      class="framer-1fc61s1"
                      data-framer-name="Tablet_2"
                      data-projection-id="534"
                      style="border-radius: 8px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 10px 0px; opacity: 1;"
                      data-highlight="true"
                    >
                      <div
                        class="framer-1r55ilo"
                        data-framer-name="Browser"
                        data-projection-id="2461"
                        style="background-color: rgb(255, 255, 255); opacity: 1;"
                      >
                        <div
                          class="framer-2jymsj-container"
                          data-projection-id="2788"
                          style={{ opacity: "1" }}
                        >
                          <video
                            src="https://framerusercontent.com/modules/assets/YtkdZAcVa9tOLn12W7DHtVyr8U~yyEgGRxwzx4wuNxIW96GnOx2UsZ58t-4JYr3kt4dT18.mp4"
                            loop=""
                            autoplay=""
                            poster="https://framerusercontent.com/images/7Vx6X1mWwSPwgdt1Geh6Ko1rMSU.png?scale-down-to=4096"
                            playsinline=""
                            style="width: 100%; height: 100%; border-radius: 0px; display: block; object-fit: fill; background-color: rgba(0, 0, 0, 0); object-position: 50% 50%;"
                          ></video>
                        </div>
                        <div
                          data-framer-component-type="SVG"
                          class="framer-1vky2jf"
                          data-projection-id="2463"
                          style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0); opacity: 0;"
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
                              style={{ width: "100%", height: "100%" }}
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
                          class="framer-xidi4j"
                          data-projection-id="2464"
                          style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0); opacity: 1;"
                        >
                          <div
                            class="svgContainer"
                            style="width: 100%; height: 100%; aspect-ratio: inherit;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              // xmlns:xlink="http://www.w3.org/1999/xlink"
                              style="width: 100%; height: 100%"
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
            </div>

            {/* -------------- */}
            <div
              class="framer-12lb9gk-container hidden-1bcm6xg"
              data-projection-id="2706"
            >
              <div
                class="framer-UKmnU framer-v-fhqdpg"
                tabindex="0"
                data-projection-id="2707"
                style="display: contents;"
              >
                <div
                  class="framer-1e0tqys"
                  data-framer-name="Variant 2"
                  data-projection-id="2708"
                  style="opacity: 1;"
                >
                  <div
                    class="framer-1xxy1j0"
                    data-highlight="true"
                    tabindex="0"
                    data-projection-id="2709"
                    style="background-color: rgb(0, 153, 255); border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.043) 0px 0.482584px 0.482584px -0.416667px, rgba(0, 0, 0, 0.055) 0px 1.83217px 1.83217px -0.833333px, rgba(0, 0, 0, 0.114) 0px 8px 8px -1.25px; transform: none; opacity: 1;"
                  >
                    <div
                      class="framer-rhiez4-container"
                      data-projection-id="2710"
                      style="opacity: 1;"
                    >
                      <div data-projection-id="2711" style="display: contents;">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          focusable="false"
                          color="rgb(255, 255, 255)"
                          style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); flex-shrink: 0;"
                        >
                          <g color="rgb(255, 255, 255)" weight="fill">
                            <path d="M128.00146,24.002A104.02442,104.02442,0,0,0,36.814,178.041l-8.55468,29.91406a16.00544,16.00544,0,0,0,19.78125,19.78125l29.91406-8.54688A104.00785,104.00785,0,1,0,128.00146,24.002Z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="framer-qcngmv" data-projection-id="539">
              <div
                class="framer-fvf3bd"
                data-projection-id="540"
                style="opacity: 1; transform: perspective(1200px);"
              >
                <div
                  class="framer-aivsxb"
                  data-framer-component-type="RichTextContainer"
                  data-projection-id="541"
                  style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                >
                  <p
                    class="framer-text"
                    style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); --framer-text-transform: uppercase;'
                  >
                    사용 후기
                  </p>
                </div>
                <div
                  class="framer-gmd50n"
                  data-framer-component-type="RichTextContainer"
                  data-projection-id="542"
                  style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                >
                  <h2
                    class="framer-text"
                    style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: center; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-line-height: 1.3em;'
                  >
                    이미 많은 분들이 실무에서
                    <br class="framer-text" />
                    왈라를 사용하고 있어요
                  </h2>
                </div>
              </div>
              <div class="framer-1vk4njj" data-projection-id="543">
                <div
                  class="framer-sr5lch-container"
                  data-projection-id="544"
                  style="opacity: 1; transform: perspective(1200px);"
                >
                  <div
                    class="framer-pcNmf framer-v-1e905ux"
                    tabindex="0"
                    data-projection-id="545"
                    style="display: contents;"
                  >
                    <div
                      class="framer-gst8v4"
                      data-border="true"
                      data-framer-name="Center"
                      data-projection-id="546"
                      style="--border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.08); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-d76e7120-d27d-4da8-b15f-04234125e89d, rgb(255, 255, 255)); width: 100%; border-radius: 20px; box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 30px -20px; opacity: 1;"
                    >
                      <div
                        class="framer-15sh9l"
                        data-projection-id="547"
                        style="opacity: 1;"
                      >
                        <div
                          class="framer-17kclga"
                          data-projection-id="548"
                          style="opacity: 1;"
                        >
                          <div
                            class="framer-t31fbb"
                            data-projection-id="549"
                            style="background-color: var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)); border-radius: 100px; opacity: 1;"
                          >
                            <div
                              class="framer-18qtb8a"
                              data-framer-name="Jason_2x"
                              data-projection-id="550"
                              style="opacity: 1;"
                            >
                              <div
                                data-framer-background-image-wrapper="true"
                                data-projection-id="551"
                                style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                              >
                                <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                  <img
                                    src="https://framerusercontent.com/images/nQxgk5Jrc6Hi2ef7svCdHo76FE.png"
                                    alt=""
                                    sizes="40px"
                                    style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-5fhcgl"
                            data-projection-id="552"
                            style="opacity: 1;"
                          >
                            <div
                              class="framer-b17v5b"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="553"
                              style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: rgb(25, 21, 78); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                            >
                              <h3
                                class="framer-text"
                                data-projection-id="554"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--extracted-a0htzi); --framer-text-alignment: center;'
                              >
                                강래양
                              </h3>
                            </div>
                            <div
                              class="framer-15fs220"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="555"
                              style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(25, 21, 78); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                            >
                              <p
                                class="framer-text"
                                data-projection-id="556"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv); --framer-text-alignment: center;'
                              >
                                온라인 마케터 @브릿지코드
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          class="framer-kl8azn"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="557"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(25, 21, 78); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                        >
                          <p
                            class="framer-text"
                            data-projection-id="558"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=; --framer-font-family: "Pretendard Light", serif; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv); --framer-text-alignment: center;'
                          >
                            왈라를 보며 정말 세상이 꼭 필요로 하는 서비스라는
                            생각이 들었어요. 미처 필요하다고 인식하지 못했던
                            사람도 한번 만나고 나면 모르던 시절로 돌아갈 수
                            없어요.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="framer-9oz39g-container"
                  data-projection-id="559"
                  style="opacity: 1; transform: perspective(1200px);"
                >
                  <div
                    class="framer-5ihPn framer-v-1mnmjbi"
                    tabindex="0"
                    data-projection-id="560"
                    style="display: contents;"
                  >
                    <div
                      class="framer-byxwev"
                      data-border="true"
                      data-framer-name="Center"
                      data-projection-id="561"
                      style="--border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.08); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-d76e7120-d27d-4da8-b15f-04234125e89d, rgb(255, 255, 255)); width: 100%; border-radius: 20px; box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 30px -20px; opacity: 1;"
                    >
                      <div
                        class="framer-1fnuhy7"
                        data-projection-id="562"
                        style="opacity: 1;"
                      >
                        <div
                          class="framer-1ailjw"
                          data-projection-id="563"
                          style="opacity: 1;"
                        >
                          <div
                            class="framer-1m9zped"
                            data-projection-id="564"
                            style="background-color: var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)); border-radius: 100px; opacity: 1;"
                          >
                            <div
                              class="framer-1k29zox"
                              data-framer-name="Jason_2x"
                              data-projection-id="565"
                              style="opacity: 1;"
                            >
                              <div
                                data-framer-background-image-wrapper="true"
                                data-projection-id="566"
                                style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                              >
                                <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                  <img
                                    src="https://framerusercontent.com/images/8elhWwpaCgr6mvHfML62dqzQAE.png"
                                    alt=""
                                    sizes="40px"
                                    style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-ip293y"
                            data-projection-id="567"
                            style="opacity: 1;"
                          >
                            <div
                              class="framer-1irntu8"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="568"
                              style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: rgb(25, 21, 78); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                            >
                              <h3
                                class="framer-text"
                                data-projection-id="569"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--extracted-a0htzi); --framer-text-alignment: center;'
                              >
                                김지원
                              </h3>
                            </div>
                            <div
                              class="framer-p12ai1"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="570"
                              style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(25, 21, 78); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                            >
                              <p
                                class="framer-text"
                                data-projection-id="571"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv); --framer-text-alignment: center;'
                              >
                                고객 리서치 담당자
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          class="framer-1mn73lj"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="572"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(25, 21, 78); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                        >
                          <p
                            class="framer-text"
                            data-projection-id="573"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=; --framer-font-family: "Pretendard Light", serif; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv); --framer-text-alignment: center;'
                          >
                            왈라 덕분에 매달 쏟아지는 주관식 응답을 탈출할 수
                            있었어요. 정말 좋습니다. 분석 기능이 신의 한 수
                            입니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="framer-1ns23jp-container"
                  data-projection-id="574"
                  style="opacity: 1; transform: perspective(1200px);"
                >
                  <div
                    class="framer-iGWjL framer-v-beq8kg"
                    tabindex="0"
                    data-projection-id="575"
                    style="display: contents;"
                  >
                    <div
                      class="framer-x2hpo4"
                      data-border="true"
                      data-framer-name="Center"
                      data-projection-id="576"
                      style="--border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.08); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-d76e7120-d27d-4da8-b15f-04234125e89d, rgb(255, 255, 255)); width: 100%; border-radius: 20px; box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 30px -20px; opacity: 1;"
                    >
                      <div
                        class="framer-hmvf5d"
                        data-projection-id="577"
                        style="opacity: 1;"
                      >
                        <div
                          class="framer-rbyls8"
                          data-projection-id="578"
                          style="background-color: var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)); border-radius: 100px; opacity: 1;"
                        >
                          <div
                            class="framer-4rndzu"
                            data-framer-name="Jason_2x"
                            data-projection-id="579"
                            style="opacity: 1;"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="580"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/bT0MILDSlwRoCGdjaP2je4Q.png"
                                  alt=""
                                  sizes="40px"
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="framer-jrb3jn"
                          data-projection-id="581"
                          style="opacity: 1;"
                        >
                          <div
                            class="framer-5q6223"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="582"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: rgb(25, 21, 78); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <h3
                              class="framer-text"
                              data-projection-id="583"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--extracted-a0htzi); --framer-text-alignment: center;'
                            >
                              연수민
                            </h3>
                          </div>
                          <div
                            class="framer-yut9fl"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="584"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(25, 21, 78); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="585"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv); --framer-text-alignment: center;'
                            >
                              개인 사용자
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="framer-ucg3ix"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="586"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                      >
                        <p
                          class="framer-text"
                          data-projection-id="587"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTGlnaHQ=; --framer-font-family: "Pretendard Light", serif; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv); --framer-text-alignment: center;'
                        >
                          설문폼 중에 역대급 최고입니다. 감동 중 감동이에요.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="framer-616xyt" data-projection-id="588">
              <div class="framer-1ywvhkd" data-projection-id="589">
                <div
                  data-framer-component-type="SVG"
                  class="framer-uipxae"
                  data-projection-id="590"
                  style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black;"
                >
                  <div
                    class="svgContainer"
                    style="width: 100%; height: 100%; aspect-ratio: inherit;"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      style="width: 100%; height: 100%"
                      viewBox="0 0 1280 301"
                      preserveAspectRatio="none"
                      width="100%"
                      height="100%"
                    >
                      <use href="#svg452877805_1158"></use>
                    </svg>
                  </div>
                </div>
                <div
                  data-framer-component-type="SVG"
                  class="framer-1qjmw6t"
                  data-projection-id="591"
                  style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black;"
                >
                  <div
                    class="svgContainer"
                    style="width: 100%; height: 100%; aspect-ratio: inherit;"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      style="width: 100%; height: 100%"
                      viewBox="0 0 163 127"
                      preserveAspectRatio="none"
                      width="100%"
                      height="100%"
                    >
                      <use href="#svg-976424370_2130"></use>
                    </svg>
                  </div>
                </div>
                <div
                  data-framer-component-type="SVG"
                  class="framer-1hhk42j"
                  data-projection-id="592"
                  style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black;"
                >
                  <div
                    class="svgContainer"
                    style="width: 100%; height: 100%; aspect-ratio: inherit;"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      style="width: 100%; height: 100%"
                      viewBox="0 0 140 39"
                      preserveAspectRatio="none"
                      width="100%"
                      height="100%"
                    >
                      <use href="#svg1493498078_1548"></use>
                    </svg>
                  </div>
                </div>
                <div
                  data-framer-component-type="SVG"
                  class="framer-1wins3t"
                  data-projection-id="593"
                  style='image-rendering: pixelated; flex-shrink: 0; background-size: 100% 100%; background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20115%2035%22%3E%3Cpath%20d%3D%22M%2046.215%2022.138%20L%2046.215%2014.472%20L%2042.242%2014.472%20L%2042.242%2010.446%20L%2046.215%2010.446%20L%2046.215%205.58%20L%2051.075%204.267%20L%2051.075%2010.429%20L%2057.138%2010.429%20L%2057.138%2014.454%20L%2051.075%2014.454%20L%2051.075%2022.051%20C%2051.075%2024.064%2052.155%2025.254%2054.02%2025.254%20C%2055.082%2025.254%2055.866%2025.044%2056.685%2024.431%20L%2058.427%2028.072%20C%2057.138%2029.07%2055.448%2029.542%2053.602%2029.542%20C%2048.88%2029.56%2046.215%2026.882%2046.215%2022.138%20Z%22%20fill%3D%22rgb(0%2C100%2C255)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2068.793%2025.149%20C%2071.755%2025.149%2073.985%2022.839%2073.985%2019.758%20C%2073.985%2016.677%2071.755%2014.35%2068.793%2014.35%20C%2065.831%2014.35%2063.601%2016.66%2063.601%2019.74%20C%2063.601%2022.821%2065.814%2025.149%2068.793%2025.149%20Z%20M%2058.671%2019.74%20C%2058.671%2014.157%2062.975%209.991%2068.776%209.991%20C%2074.578%209.991%2078.881%2014.174%2078.881%2019.74%20C%2078.881%2025.324%2074.578%2029.507%2068.776%2029.507%20C%2062.975%2029.507%2058.671%2025.324%2058.671%2019.74%20Z%22%20fill%3D%22rgb(0%2C100%2C255)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2080.187%2024.641%20L%2085.013%2023.329%20C%2085.327%2024.834%2086.72%2025.692%2088.968%2025.692%20C%2090.814%2025.692%2092.156%2024.852%2092.156%2023.749%20C%2092.156%2022.926%2091.216%2022.348%2089.769%2022.034%20L%2086.163%2021.263%20C%2082.748%2020.528%2080.64%2018.708%2080.64%2016.082%20C%2080.64%2012.424%2083.794%209.974%2088.411%209.974%20C%2092.539%209.974%2095.676%2011.864%2096.512%2014.909%20L%2091.999%2016.17%20C%2091.703%2014.717%2090.275%2013.754%2088.289%2013.754%20C%2086.616%2013.754%2085.501%2014.542%2085.501%2015.645%20C%2085.501%2016.502%2086.267%2016.957%2087.505%2017.238%20L%2091.72%2018.2%20C%2094.944%2018.935%2096.895%2020.738%2096.895%2023.364%20C%2096.895%2027.197%2093.707%2029.507%2088.532%2029.507%20C%2084.002%2029.507%2080.849%2027.67%2080.187%2024.641%20Z%22%20fill%3D%22rgb(0%2C100%2C255)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2098.08%2024.641%20L%20102.905%2023.329%20C%20103.219%2024.834%20104.613%2025.692%20106.86%2025.692%20C%20108.707%2025.692%20110.048%2024.852%20110.048%2023.749%20C%20110.048%2022.926%20109.108%2022.348%20107.662%2022.034%20L%20104.055%2021.263%20C%20100.64%2020.528%2098.533%2018.708%2098.533%2016.082%20C%2098.533%2012.424%20101.686%209.974%20106.303%209.974%20C%20110.431%209.974%20113.568%2011.864%20114.404%2014.909%20L%20109.856%2016.152%20C%20109.561%2014.7%20108.132%2013.737%20106.146%2013.737%20C%20104.474%2013.737%20103.358%2014.524%20103.358%2015.627%20C%20103.358%2016.485%20104.125%2016.94%20105.362%2017.22%20L%20109.578%2018.183%20C%20112.801%2018.918%20114.752%2020.721%20114.752%2023.346%20C%20114.752%2027.179%20111.564%2029.49%20106.39%2029.49%20C%20101.895%2029.507%2098.742%2027.67%2098.08%2024.641%20Z%22%20fill%3D%22rgb(0%2C100%2C255)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2020.639%207.943%20L%2022.19%200.627%20C%2022.259%200.259%2021.946%20-0.073%2021.58%200.014%20C%2019.333%200.417%2016.998%201.117%2014.681%202.115%20C%204.263%206.543%20-2.044%2015.225%200.604%2021.508%20C%202.608%2026.217%209.071%2028.23%2016.58%2027.057%20L%2015.029%2034.373%20C%2014.96%2034.741%2015.273%2035.073%2015.639%2034.986%20C%2017.886%2034.583%2020.221%2033.883%2022.538%2032.885%20C%2032.956%2028.457%2039.246%2019.775%2036.598%2013.474%20C%2034.612%208.783%2028.148%206.77%2020.639%207.943%20Z%22%20fill%3D%22rgb(0%2C100%2C255)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");'
                ></div>
                <div
                  class="framer-wqpnoh"
                  data-framer-name="snu_ui_download"
                  name="snu_ui_download"
                  data-projection-id="594"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="595"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/2RNQASFqb67wkzpg4JQkl0YL4.png?scale-down-to=2048"
                        alt=""
                        srcset="https://framerusercontent.com/images/2RNQASFqb67wkzpg4JQkl0YL4.png?scale-down-to=512 493w, https://framerusercontent.com/images/2RNQASFqb67wkzpg4JQkl0YL4.png?scale-down-to=1024 987w, https://framerusercontent.com/images/2RNQASFqb67wkzpg4JQkl0YL4.png?scale-down-to=2048 1974w, https://framerusercontent.com/images/2RNQASFqb67wkzpg4JQkl0YL4.png 2116w"
                        sizes="49px"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="framer-1q27nuu" data-projection-id="596">
                <div
                  class="framer-1n1009p"
                  data-framer-name="image"
                  name="image"
                  data-projection-id="597"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="598"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/mOPr4WQsxsr60ppj7RnzHNsJxes.png?scale-down-to=512"
                        alt=""
                        srcset="https://framerusercontent.com/images/mOPr4WQsxsr60ppj7RnzHNsJxes.png?scale-down-to=512 512w, https://framerusercontent.com/images/mOPr4WQsxsr60ppj7RnzHNsJxes.png 1000w"
                        sizes="83px"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="framer-np8w9"
                  data-framer-name="image"
                  name="image"
                  data-projection-id="599"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="600"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/Fmbckaf9cHmjwMkQgYNWeaLA.png?scale-down-to=2048"
                        alt=""
                        srcset="https://framerusercontent.com/images/Fmbckaf9cHmjwMkQgYNWeaLA.png?scale-down-to=512 512w, https://framerusercontent.com/images/Fmbckaf9cHmjwMkQgYNWeaLA.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/Fmbckaf9cHmjwMkQgYNWeaLA.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/Fmbckaf9cHmjwMkQgYNWeaLA.png 2362w"
                        sizes="157px"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="framer-1l6krih"
                  data-framer-name="image"
                  name="image"
                  data-projection-id="601"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="602"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/PTkRWqjjmvln68lxR42NTbmSo.png?scale-down-to=2048"
                        alt=""
                        srcset="https://framerusercontent.com/images/PTkRWqjjmvln68lxR42NTbmSo.png?scale-down-to=512 512w, https://framerusercontent.com/images/PTkRWqjjmvln68lxR42NTbmSo.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/PTkRWqjjmvln68lxR42NTbmSo.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/PTkRWqjjmvln68lxR42NTbmSo.png 2560w"
                        sizes="76px"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="framer-31z58w"
                  data-framer-name="image"
                  name="image"
                  data-projection-id="603"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="604"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/pYhLKXcvb6chWwg2y2pzPMfwXpw.png?scale-down-to=1024"
                        alt=""
                        srcset="https://framerusercontent.com/images/pYhLKXcvb6chWwg2y2pzPMfwXpw.png?scale-down-to=512 512w, https://framerusercontent.com/images/pYhLKXcvb6chWwg2y2pzPMfwXpw.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/pYhLKXcvb6chWwg2y2pzPMfwXpw.png 1127w"
                        sizes="146px"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="framer-1qgfnos"
                  data-framer-name="image"
                  name="image"
                  data-projection-id="605"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="606"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/U4JHzpe73Ucqm2h9MEM1cXARU.png?scale-down-to=512"
                        alt=""
                        srcset="https://framerusercontent.com/images/U4JHzpe73Ucqm2h9MEM1cXARU.png?scale-down-to=512 512w, https://framerusercontent.com/images/U4JHzpe73Ucqm2h9MEM1cXARU.png 600w"
                        sizes="89px"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="framer-oafh5s" data-projection-id="607">
                <div
                  class="framer-1nn61jo"
                  data-framer-name="image"
                  name="image"
                  data-projection-id="608"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="609"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/XF3HbAdGkttXjE5K6BHB3pDXk.png?scale-down-to=512"
                        alt=""
                        srcset="https://framerusercontent.com/images/XF3HbAdGkttXjE5K6BHB3pDXk.png?scale-down-to=512 512w, https://framerusercontent.com/images/XF3HbAdGkttXjE5K6BHB3pDXk.png 981w"
                        sizes="99px"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="framer-3bp5uy"
                  data-framer-name="image"
                  name="image"
                  data-projection-id="610"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="611"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/UqNGZlml7xDntlFICmBhDmfQWHg.png?scale-down-to=2048"
                        alt=""
                        srcset="https://framerusercontent.com/images/UqNGZlml7xDntlFICmBhDmfQWHg.png?scale-down-to=512 512w, https://framerusercontent.com/images/UqNGZlml7xDntlFICmBhDmfQWHg.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/UqNGZlml7xDntlFICmBhDmfQWHg.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/UqNGZlml7xDntlFICmBhDmfQWHg.png 2953w"
                        sizes="116px"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="framer-xo36jg"
                  data-framer-name="image"
                  name="image"
                  data-projection-id="612"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="613"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/ppZu1Ec8c6XLm6EPuu8vjKjzBU.png"
                        alt=""
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="framer-9hia12"
                  data-framer-name="image"
                  name="image"
                  data-projection-id="614"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="615"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/XVhuBLRVIAltoBWvtic6RL0k.png?scale-down-to=1024"
                        alt=""
                        srcset="https://framerusercontent.com/images/XVhuBLRVIAltoBWvtic6RL0k.png?scale-down-to=512 512w, https://framerusercontent.com/images/XVhuBLRVIAltoBWvtic6RL0k.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/XVhuBLRVIAltoBWvtic6RL0k.png 1200w"
                        sizes="108px"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="framer-yqtsxy"
                  data-framer-name="image"
                  name="image"
                  data-projection-id="616"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="617"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/G78RoKwKpIDcrNCrMMiiZ1w7kw.png?scale-down-to=1024"
                        alt=""
                        srcset="https://framerusercontent.com/images/G78RoKwKpIDcrNCrMMiiZ1w7kw.png?scale-down-to=512 512w, https://framerusercontent.com/images/G78RoKwKpIDcrNCrMMiiZ1w7kw.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/G78RoKwKpIDcrNCrMMiiZ1w7kw.png 1200w"
                        sizes="54px"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="framer-17pfmbl" data-projection-id="618">
              <div
                class="framer-h4h33l"
                data-projection-id="619"
                style="opacity: 1; transform: perspective(1200px);"
              >
                <div
                  class="framer-16k3eg2"
                  data-framer-component-type="RichTextContainer"
                  data-projection-id="620"
                  style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                >
                  <h2
                    class="framer-text"
                    style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: center; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-line-height: 1.3em;'
                  >
                    똑똑한 왈라폼은
                    <br class="framer-text" />
                    생산성을 위해 만들어졌어요
                  </h2>
                </div>
              </div>
              <div class="framer-m3fsqj-container" data-projection-id="621">
                <div
                  class="framer-Cbhz2 framer-v-i7dyb5"
                  tabindex="0"
                  data-projection-id="622"
                  style="display: contents;"
                >
                  <a
                    class="framer-1gs0554 framer-kkz8fs"
                    data-framer-name="Large Accent"
                    data-highlight="true"
                    data-reset="button"
                    href="https://paprikadatalab.com"
                    rel="noopener"
                    tabindex="0"
                    data-projection-id="623"
                    style="--border-bottom-width: 0px; --border-color: rgba(0, 0, 0, 0); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: rgb(44, 174, 255); filter: brightness(1); border-radius: 12px; opacity: 1;"
                  >
                    <div
                      class="framer-1gvngqh"
                      data-framer-component-type="RichTextContainer"
                      data-projection-id="624"
                      style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(255, 255, 255); --framer-link-current-text-color: hsl(0, 0%, 0%); --framer-link-hover-text-color: #666; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                    >
                      <p
                        class="framer-text"
                        data-projection-id="625"
                        style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 18px; --framer-letter-spacing: -0.3px; --framer-line-height: 1em; --framer-text-alignment: center; --framer-text-color: var(--extracted-r6o4lv);'
                      >
                        더 알아보기
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="framer-1rwf2q" data-projection-id="626">
              <div class="framer-1m9lgoa" data-projection-id="627">
                <div
                  class="framer-1l8fdcn"
                  data-projection-id="628"
                  style="opacity: 1; transform: perspective(1200px);"
                >
                  <div
                    class="framer-dd5srs"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="629"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); --framer-text-transform: uppercase;'
                    >
                      자동 설문 제작
                    </p>
                  </div>
                  <div
                    class="framer-dsu85b"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="630"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <h2
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: left; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-line-height: 1.3em;'
                    >
                      빠른 개요 작성,
                      <br class="framer-text" />
                      디테일을 덧붙이면 설문 제작 끝
                    </h2>
                  </div>
                  <div
                    class="framer-1xmy5l"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="631"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-letter-spacing: -0.7px; --framer-line-height: 1.5em; --framer-text-alignment: left; --framer-text-color: rgb(91, 94, 118);'
                    >
                      왈라의 AI 어시스턴트가 브랜드와 필요에
                      <br class="framer-text" />꼭 맞는 설문을 함께 고민합니다.
                    </p>
                  </div>
                </div>
                <div
                  class="framer-177kqid"
                  data-projection-id="632"
                  style="opacity: 1; transform: perspective(1200px);"
                >
                  <div
                    class="framer-1bfe524"
                    data-border="true"
                    data-framer-name="AI Modal"
                    name="AI Modal"
                    data-projection-id="633"
                  >
                    <div
                      class="framer-1d0t8wp"
                      data-framer-name="Title"
                      name="Title"
                      data-projection-id="634"
                    >
                      <div
                        class="framer-39mpbf"
                        data-framer-name="AI로 설문 만들기"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="635"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                      >
                        <p
                          class="framer-text"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 18.32px; --framer-text-color: rgb(51, 51, 51);'
                        >
                          AI로 설문 만들기
                        </p>
                      </div>
                    </div>
                    <div
                      data-framer-component-type="SVG"
                      class="framer-39z5ze"
                      data-projection-id="636"
                      style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0);"
                    >
                      <div
                        class="svgContainer"
                        style="width: 100%; height: 100%; aspect-ratio: inherit;"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          // xmlns:xlink="http://www.w3.org/1999/xlink"
                          style="width: 100%; height: 100%"
                          viewBox="0 0 774 4"
                          preserveAspectRatio="none"
                          width="100%"
                          height="100%"
                        >
                          <use href="#svg-1465763066_194"></use>
                        </svg>
                      </div>
                    </div>
                    <div
                      class="framer-1xurozq"
                      data-framer-name="creation"
                      name="creation"
                      data-projection-id="637"
                    >
                      <div
                        class="framer-8kco9x"
                        data-framer-name="Input"
                        name="Input"
                        data-projection-id="638"
                      >
                        <div
                          class="framer-xnnflu"
                          data-framer-name="TextInput"
                          name="TextInput"
                          data-projection-id="639"
                        >
                          <div
                            class="framer-zs8hoz"
                            data-framer-name="길찾기 서비스 어플리케이션 만족도 설문조사 만들어줘"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="640"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <p
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 13.8px; --framer-text-color: rgb(51, 51, 51);'
                            >
                              길찾기 서비스 어플리케이션 만족도 설문조사
                              만들어줘
                            </p>
                          </div>
                        </div>
                        <div class="framer-10ayx32" data-projection-id="641">
                          <div
                            class="framer-bfqcwg"
                            data-framer-name="더 생성하기"
                            name="더 생성하기"
                            data-projection-id="642"
                          >
                            <div
                              class="framer-12dl0k1"
                              data-framer-name="더 생성하기"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="643"
                              style="outline: none; display: flex; flex-direction: column; justify-content: center; flex-shrink: 0; transform: none;"
                            >
                              <p
                                class="framer-text"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 11.21px; --framer-text-alignment: center; --framer-text-color: rgb(51, 51, 51);'
                              >
                                더 생성하기
                              </p>
                            </div>
                          </div>
                          <div
                            class="framer-ycsu3v"
                            data-framer-name="Button"
                            name="Button"
                            data-projection-id="644"
                          >
                            <div
                              class="framer-4vhr8o"
                              data-framer-name="생성하기"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="645"
                              style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                            >
                              <p
                                class="framer-text"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 11.21px; --framer-text-alignment: center; --framer-text-color: rgb(255, 255, 255);'
                              >
                                생성하기
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="framer-e73czu"
                        data-framer-name="만들어진 설문"
                        name="만들어진 설문"
                        data-projection-id="646"
                      >
                        <div
                          class="framer-bcpcta"
                          data-framer-name="Frame 1000001525"
                          name="Frame 1000001525"
                          data-projection-id="647"
                        >
                          <div
                            class="framer-109juu2"
                            data-framer-name="Form types/리커트/Default"
                            name="Form types/리커트/Default"
                            data-projection-id="648"
                          >
                            <div
                              class="framer-183djn0"
                              data-framer-name="commit"
                              name="commit"
                              data-projection-id="649"
                            >
                              <div
                                class="framer-1nfpe09"
                                data-framer-name="Bounding box"
                                name="Bounding box"
                                data-projection-id="650"
                              >
                                <div
                                  data-framer-component-type="SVG"
                                  class="framer-1k8xdc7"
                                  data-projection-id="651"
                                  style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0);"
                                >
                                  <div
                                    class="svgContainer"
                                    style="width: 100%; height: 100%; aspect-ratio: inherit;"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                                      style="width: 100%; height: 100%"
                                      viewBox="0 0 13 7"
                                      preserveAspectRatio="none"
                                      width="100%"
                                      height="100%"
                                    >
                                      <use href="#svg-1519560545_1344"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="framer-1xff0wz"
                              data-framer-name="리커트"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="652"
                              style="outline: none; display: flex; flex-direction: column; justify-content: center; flex-shrink: 0; transform: none;"
                            >
                              <p
                                class="framer-text"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 9.7px; --framer-letter-spacing: -0.07px; --framer-line-height: 14.11px; --framer-text-alignment: center; --framer-text-color: rgb(48, 77, 183); --framer-text-transform: uppercase;'
                              >
                                선형배율
                              </p>
                            </div>
                          </div>
                          <div
                            class="framer-mk7bm9"
                            data-framer-name="길 찾기 서비스에 얼마나 만족하시나요?"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="653"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <p
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 12px; --framer-text-color: rgb(51, 51, 51);'
                            >
                              길 찾기 서비스에 얼마나 만족하시나요?
                            </p>
                          </div>
                        </div>
                        <div
                          class="framer-1edyfhx"
                          data-framer-name="Frame 1000001526"
                          name="Frame 1000001526"
                          data-projection-id="654"
                        >
                          <div
                            class="framer-1or5iwq"
                            data-framer-name="Form types/객관식/Default"
                            name="Form types/객관식/Default"
                            data-projection-id="655"
                          >
                            <div
                              class="framer-uaj68v"
                              data-framer-name="view_list"
                              name="view_list"
                              data-projection-id="656"
                            >
                              <div
                                class="framer-dm3o0l"
                                data-framer-name="Bounding box"
                                name="Bounding box"
                                data-projection-id="657"
                              >
                                <div
                                  data-framer-component-type="SVG"
                                  class="framer-m5mn9p"
                                  data-projection-id="658"
                                  style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0);"
                                >
                                  <div
                                    class="svgContainer"
                                    style="width: 100%; height: 100%; aspect-ratio: inherit;"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                                      style="width: 100%; height: 100%"
                                      viewBox="0 0 12 9"
                                      preserveAspectRatio="none"
                                      width="100%"
                                      height="100%"
                                    >
                                      <use href="#svg-1770691181_2730"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="framer-38e0mv"
                              data-framer-name="객관식"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="659"
                              style="outline: none; display: flex; flex-direction: column; justify-content: center; flex-shrink: 0; transform: none;"
                            >
                              <p
                                class="framer-text"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 9.7px; --framer-letter-spacing: -0.07px; --framer-line-height: 14.11px; --framer-text-alignment: center; --framer-text-color: rgb(48, 77, 183); --framer-text-transform: uppercase;'
                              >
                                객관식
                              </p>
                            </div>
                          </div>
                          <div
                            class="framer-qdploi"
                            data-framer-name="길을 쉽게 찾을 수 있었나요?"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="660"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <p
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 12px; --framer-text-color: rgb(51, 51, 51);'
                            >
                              길을 쉽게 찾을 수 있었나요?
                            </p>
                          </div>
                        </div>
                        <div
                          class="framer-bp6pbj"
                          data-framer-name="Frame 1000001527"
                          name="Frame 1000001527"
                          data-projection-id="661"
                        >
                          <div
                            class="framer-4aeszs"
                            data-framer-name="Form types/장문형/Default"
                            name="Form types/장문형/Default"
                            data-projection-id="662"
                          >
                            <div
                              class="framer-a5tbgi"
                              data-framer-name="subject"
                              name="subject"
                              data-projection-id="663"
                            >
                              <div
                                class="framer-1i1wgfm"
                                data-framer-name="Bounding box"
                                name="Bounding box"
                                data-projection-id="664"
                              >
                                <div
                                  data-framer-component-type="SVG"
                                  class="framer-1hm0tgb"
                                  data-projection-id="665"
                                  style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0);"
                                >
                                  <div
                                    class="svgContainer"
                                    style="width: 100%; height: 100%; aspect-ratio: inherit;"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                                      style="width: 100%; height: 100%"
                                      viewBox="0 0 10 9"
                                      preserveAspectRatio="none"
                                      width="100%"
                                      height="100%"
                                    >
                                      <use href="#svg-1815758265_1838"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="framer-gejzf5"
                              data-framer-name="장문형"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="666"
                              style="outline: none; display: flex; flex-direction: column; justify-content: center; flex-shrink: 0; transform: none;"
                            >
                              <p
                                class="framer-text"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 9.7px; --framer-letter-spacing: -0.07px; --framer-line-height: 14.11px; --framer-text-alignment: center; --framer-text-color: rgb(34, 113, 175); --framer-text-transform: uppercase;'
                              >
                                장문형
                              </p>
                            </div>
                          </div>
                          <div
                            class="framer-64qinv"
                            data-framer-name="추가되었으면 하는 기능이 있나요?"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="667"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <p
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 12px; --framer-text-color: rgb(51, 51, 51);'
                            >
                              추가되었으면 하는 기능이 있나요?
                            </p>
                          </div>
                        </div>
                        <div
                          class="framer-q5qkdk hidden-1bcm6xg"
                          data-framer-name="Frame 1000001528"
                          name="Frame 1000001528"
                          data-projection-id="2712"
                        >
                          <div
                            class="framer-s9zpeh"
                            data-framer-name="Form types/리커트/Default"
                            name="Form types/리커트/Default"
                            data-projection-id="2713"
                          >
                            <div
                              class="framer-19agxo7"
                              data-framer-name="commit"
                              name="commit"
                              data-projection-id="2714"
                            >
                              <div
                                class="framer-e281wb"
                                data-framer-name="Bounding box"
                                name="Bounding box"
                                data-projection-id="2715"
                              >
                                <div
                                  data-framer-component-type="SVG"
                                  class="framer-g75r57"
                                  data-projection-id="2716"
                                  style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0);"
                                >
                                  <div
                                    class="svgContainer"
                                    style="width: 100%; height: 100%; aspect-ratio: inherit;"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                                      style="width: 100%; height: 100%"
                                      viewBox="0 0 13 7"
                                      preserveAspectRatio="none"
                                      width="100%"
                                      height="100%"
                                    >
                                      <use href="#svg1323200948_1342"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="framer-xdjmq7"
                              data-framer-name="리커트"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="2717"
                              style="outline: none; display: flex; flex-direction: column; justify-content: center; flex-shrink: 0; transform: none;"
                            >
                              <p
                                class="framer-text"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 9.7px; --framer-letter-spacing: -0.07px; --framer-line-height: 14.11px; --framer-text-alignment: center; --framer-text-color: rgb(48, 77, 183); --framer-text-transform: uppercase;'
                              >
                                선형배율
                              </p>
                            </div>
                          </div>
                          <div
                            class="framer-sv7kys"
                            data-framer-name="주변 사람들에게 얼마나 추천하고 싶으신가요?"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2718"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <p
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 12px; --framer-text-color: rgb(51, 51, 51);'
                            >
                              주변 사람들에게 얼마나 추천하고 싶으신가요?
                            </p>
                          </div>
                        </div>
                        <div
                          class="framer-19h9js0"
                          data-framer-name="Frame 1000001529"
                          name="Frame 1000001529"
                          data-projection-id="668"
                        >
                          <div
                            class="framer-16msc8l"
                            data-framer-name="Form types/리커트/Default"
                            name="Form types/리커트/Default"
                            data-projection-id="669"
                          >
                            <div
                              class="framer-9qdcax"
                              data-framer-name="commit"
                              name="commit"
                              data-projection-id="670"
                            >
                              <div
                                class="framer-rlhmjm"
                                data-framer-name="Bounding box"
                                name="Bounding box"
                                data-projection-id="671"
                              >
                                <div
                                  data-framer-component-type="SVG"
                                  class="framer-84h8pc"
                                  data-projection-id="672"
                                  style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0);"
                                >
                                  <div
                                    class="svgContainer"
                                    style="width: 100%; height: 100%; aspect-ratio: inherit;"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                                      style="width: 100%; height: 100%"
                                      viewBox="0 0 13 7"
                                      preserveAspectRatio="none"
                                      width="100%"
                                      height="100%"
                                    >
                                      <use href="#svg-632913815_1344"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="framer-1jwywz6"
                              data-framer-name="리커트"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="673"
                              style="outline: none; display: flex; flex-direction: column; justify-content: center; flex-shrink: 0; transform: none;"
                            >
                              <p
                                class="framer-text"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 9.7px; --framer-letter-spacing: -0.07px; --framer-line-height: 14.11px; --framer-text-alignment: center; --framer-text-color: rgb(48, 77, 183); --framer-text-transform: uppercase;'
                              >
                                선형배율
                              </p>
                            </div>
                          </div>
                          <div
                            class="framer-1wxp6wk"
                            data-framer-name="전반적인 길 찾기 UI에 대한 만족도를 알려주세요."
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="674"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <p
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 12px; --framer-text-color: rgb(51, 51, 51);'
                            >
                              전반적인 길 찾기 UI에 대한 만족도를 알려주세요.
                            </p>
                          </div>
                        </div>
                        <div
                          class="framer-rwrmzd hidden-1bcm6xg"
                          data-framer-name="Frame 1000001530"
                          name="Frame 1000001530"
                          data-projection-id="2719"
                        >
                          <div
                            class="framer-h0xi33"
                            data-framer-name="Form types/객관식/Default"
                            name="Form types/객관식/Default"
                            data-projection-id="2720"
                          >
                            <div
                              class="framer-188l67w"
                              data-framer-name="view_list"
                              name="view_list"
                              data-projection-id="2721"
                            >
                              <div
                                class="framer-otmkug"
                                data-framer-name="Bounding box"
                                name="Bounding box"
                                data-projection-id="2722"
                              >
                                <div
                                  data-framer-component-type="SVG"
                                  class="framer-1c4479m"
                                  data-projection-id="2723"
                                  style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0);"
                                >
                                  <div
                                    class="svgContainer"
                                    style="width: 100%; height: 100%; aspect-ratio: inherit;"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                                      style="width: 100%; height: 100%"
                                      viewBox="0 0 12 10"
                                      preserveAspectRatio="none"
                                      width="100%"
                                      height="100%"
                                    >
                                      <use href="#svg-1454463407_2730"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="framer-14yt7vm"
                              data-framer-name="객관식"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="2724"
                              style="outline: none; display: flex; flex-direction: column; justify-content: center; flex-shrink: 0; transform: none;"
                            >
                              <p
                                class="framer-text"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 9.7px; --framer-letter-spacing: -0.07px; --framer-line-height: 14.11px; --framer-text-alignment: center; --framer-text-color: rgb(48, 77, 183); --framer-text-transform: uppercase;'
                              >
                                객관식
                              </p>
                            </div>
                          </div>
                          <div
                            class="framer-1v9wyha"
                            data-framer-name="길 찾기 앱에서 가장 중요하다고 생각되는 기능은?"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2725"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <p
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 12px; --framer-text-color: rgb(51, 51, 51);'
                            >
                              길 찾기 앱에서 가장 중요하다고 생각되는 기능은?
                            </p>
                          </div>
                        </div>
                        <div
                          class="framer-3us97j"
                          data-framer-name="Frame 1000001531"
                          name="Frame 1000001531"
                          data-projection-id="675"
                        >
                          <div
                            class="framer-2v66xv"
                            data-framer-name="Form types/리커트/Default"
                            name="Form types/리커트/Default"
                            data-projection-id="676"
                          >
                            <div
                              class="framer-11tr5dg"
                              data-framer-name="commit"
                              name="commit"
                              data-projection-id="677"
                            >
                              <div
                                class="framer-bcblpf"
                                data-framer-name="Bounding box"
                                name="Bounding box"
                                data-projection-id="678"
                              >
                                <div
                                  data-framer-component-type="SVG"
                                  class="framer-1ifnu5g"
                                  data-projection-id="679"
                                  style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0);"
                                >
                                  <div
                                    class="svgContainer"
                                    style="width: 100%; height: 100%; aspect-ratio: inherit;"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                                      style="width: 100%; height: 100%"
                                      viewBox="0 0 13 7"
                                      preserveAspectRatio="none"
                                      width="100%"
                                      height="100%"
                                    >
                                      <use href="#svg-210850639_1329"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="framer-4vfkpc"
                              data-framer-name="리커트"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="680"
                              style="outline: none; display: flex; flex-direction: column; justify-content: center; flex-shrink: 0; transform: none;"
                            >
                              <p
                                class="framer-text"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 9.7px; --framer-letter-spacing: -0.07px; --framer-line-height: 14.11px; --framer-text-alignment: center; --framer-text-color: rgb(48, 77, 183); --framer-text-transform: uppercase;'
                              >
                                선형배율
                              </p>
                            </div>
                          </div>
                          <div
                            class="framer-rnzkhi"
                            data-framer-name="길 찾기 정확도를 평가해주세요."
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="681"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <p
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 12px; --framer-text-color: rgb(51, 51, 51);'
                            >
                              길 찾기 정확도를 평가해주세요.
                            </p>
                          </div>
                        </div>
                        <div
                          class="framer-1so37yh hidden-1bcm6xg"
                          data-framer-name="Frame 1000001532"
                          name="Frame 1000001532"
                          data-projection-id="2726"
                        >
                          <div
                            class="framer-10hcm9h"
                            data-framer-name="Form types/객관식/Default"
                            name="Form types/객관식/Default"
                            data-projection-id="2727"
                          >
                            <div
                              class="framer-1knzlzh"
                              data-framer-name="view_list"
                              name="view_list"
                              data-projection-id="2728"
                            >
                              <div
                                class="framer-1g8gk7m"
                                data-framer-name="Bounding box"
                                name="Bounding box"
                                data-projection-id="2729"
                              >
                                <div
                                  data-framer-component-type="SVG"
                                  class="framer-1qhyz5d"
                                  data-projection-id="2730"
                                  style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0);"
                                >
                                  <div
                                    class="svgContainer"
                                    style="width: 100%; height: 100%; aspect-ratio: inherit;"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                                      style="width: 100%; height: 100%"
                                      viewBox="0 0 12 10"
                                      preserveAspectRatio="none"
                                      width="100%"
                                      height="100%"
                                    >
                                      <use href="#svg184620325_2718"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="framer-1kgz6xz"
                              data-framer-name="객관식"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="2731"
                              style="outline: none; display: flex; flex-direction: column; justify-content: center; flex-shrink: 0; transform: none;"
                            >
                              <p
                                class="framer-text"
                                style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 9.7px; --framer-letter-spacing: -0.07px; --framer-line-height: 14.11px; --framer-text-alignment: center; --framer-text-color: rgb(48, 77, 183); --framer-text-transform: uppercase;'
                              >
                                객관식
                              </p>
                            </div>
                          </div>
                          <div
                            class="framer-6z6j31"
                            data-framer-name="길 찾기 서비스를 통해 가장 많이 검색하는 장소는?"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2732"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <p
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 12px; --framer-text-color: rgb(51, 51, 51);'
                            >
                              길 찾기 서비스를 통해 가장 많이 검색하는 장소는?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="framer-elo10l"
                      data-framer-name="Pointer"
                      name="Pointer"
                      data-projection-id="682"
                      style="opacity: 1; transform: none;"
                    >
                      <div
                        data-framer-background-image-wrapper="true"
                        data-projection-id="683"
                        style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                      >
                        <div style="display: contents; border-radius: inherit; pointer-events: none;">
                          <img
                            src="https://framerusercontent.com/images/rq3u9Ud7n3tWlaUdPqo7llXwo.png"
                            alt=""
                            loading="lazy"
                            style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-framer-component-type="SVG"
                      class="framer-1v9id4a"
                      data-projection-id="684"
                      style="image-rendering: pixelated; flex-shrink: 0; fill: rgb(0, 0, 0); color: rgb(0, 0, 0);"
                    >
                      <div
                        class="svgContainer"
                        style="width: 100%; height: 100%; aspect-ratio: inherit;"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          // xmlns:xlink="http://www.w3.org/1999/xlink"
                          style="width: 100%; height: 100%"
                          viewBox="0 0 774 4"
                          preserveAspectRatio="none"
                          width="100%"
                          height="100%"
                        >
                          <use href="#svg1259031598_194"></use>
                        </svg>
                      </div>
                    </div>
                    <div
                      class="framer-1m27kzs"
                      data-framer-name="ActionGroup"
                      name="ActionGroup"
                      data-projection-id="685"
                    >
                      <div
                        class="framer-1yjtnwy"
                        data-framer-name="만들기 버튼"
                        name="만들기 버튼"
                        data-projection-id="686"
                      >
                        <div
                          class="framer-ek69np"
                          data-framer-name="만들기"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="687"
                          style="outline: none; display: flex; flex-direction: column; justify-content: center; flex-shrink: 0; transform: none;"
                        >
                          <p
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 11.21px; --framer-text-alignment: center; --framer-text-color: rgb(204, 204, 204);'
                          >
                            취소
                          </p>
                        </div>
                      </div>
                      <div
                        class="framer-aimd1z"
                        data-framer-name="만들기 버튼"
                        name="만들기 버튼"
                        data-projection-id="688"
                      >
                        <div
                          class="framer-1fkp1g7"
                          data-framer-name="만들기"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="689"
                          style="outline: none; display: flex; flex-direction: column; justify-content: center; flex-shrink: 0; transform: none;"
                        >
                          <p
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 11.21px; --framer-text-alignment: center; --framer-text-color: rgb(255, 255, 255);'
                          >
                            이대로 설문 만들기
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="framer-14rn3lo" data-projection-id="690">
              <div class="framer-1yn2sg9" data-projection-id="691">
                <div
                  class="framer-15pnozp"
                  data-border="true"
                  data-framer-name="Preview 2"
                  name="Preview 2"
                  data-projection-id="692"
                  style="opacity: 1; transform: perspective(1200px);"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="693"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/0dj42wZT4K8vyJOfYlhDlR4lnR0.png"
                        alt=""
                        srcset="https://framerusercontent.com/images/0dj42wZT4K8vyJOfYlhDlR4lnR0.png?scale-down-to=512 512w, https://framerusercontent.com/images/0dj42wZT4K8vyJOfYlhDlR4lnR0.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/0dj42wZT4K8vyJOfYlhDlR4lnR0.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/0dj42wZT4K8vyJOfYlhDlR4lnR0.png 2794w"
                        sizes="min(100vw - 200px, 1200px)"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="framer-gpaj50"
                  data-projection-id="694"
                  style="opacity: 1; transform: perspective(1200px);"
                >
                  <div class="framer-av5d22" data-projection-id="695">
                    <div
                      class="framer-1wznd6b"
                      data-framer-component-type="RichTextContainer"
                      data-projection-id="696"
                      style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                    >
                      <p
                        class="framer-text"
                        style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-alignment: right; --framer-text-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); --framer-text-transform: uppercase;'
                      >
                        구글폼 불러오기
                      </p>
                    </div>
                    <div
                      class="framer-11a4mp5"
                      data-framer-component-type="RichTextContainer"
                      data-projection-id="697"
                      style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                    >
                      <h2
                        class="framer-text"
                        style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: right; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-line-height: 1.3em;'
                      >
                        사용하는 구글폼을
                        <br class="framer-text" />
                        왈라에 가져오세요
                      </h2>
                    </div>
                    <div
                      class="framer-1u8nde1"
                      data-framer-component-type="RichTextContainer"
                      data-projection-id="698"
                      style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                    >
                      <p
                        class="framer-text"
                        style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-letter-spacing: -0.7px; --framer-line-height: 1.5em; --framer-text-alignment: right; --framer-text-color: rgb(91, 94, 118);'
                      >
                        이미 구글폼으로 수집하고 계신 DB가 걱정이신가요?
                        <br class="framer-text" />
                        링크를 입력하고 3초만 기다리세요.
                      </p>
                    </div>
                  </div>
                  <div class="framer-s7mbdw" data-projection-id="699">
                    <div class="framer-1h6gv7j" data-projection-id="700">
                      <div
                        class="framer-1rfji2p-container"
                        data-projection-id="701"
                      >
                        <div
                          data-framer-generated="true"
                          class="framer-u9mQN framer-oLTtJ framer-bxxjc framer-v-1s2kwch"
                          tabindex="0"
                          data-projection-id="702"
                          style="display: contents;"
                        >
                          <div
                            class="framer-1bqr37g"
                            data-framer-name="Standard Badge"
                            data-projection-id="703"
                            style="background-color: rgba(25, 21, 78, 0.03); border-radius: 100px; opacity: 1;"
                          >
                            <div
                              class="framer-77qnma-container"
                              data-projection-id="704"
                              style="opacity: 1;"
                            >
                              <div
                                data-projection-id="705"
                                style="display: contents;"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 256 256"
                                  focusable="false"
                                  color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                  style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0; cursor: auto;"
                                >
                                  <g
                                    color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                    weight="fill"
                                  >
                                    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div
                              class="framer-xgndie"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="706"
                              style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--variable-reference-TyxD043yt-bkf_3iqYh); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --variable-reference-TyxD043yt-bkf_3iqYh: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); transform: none; opacity: 1;"
                            >
                              <h3
                                class="framer-text framer-styles-preset-13xnbb0"
                                data-styles-preset="zFV_Olyc4"
                                data-projection-id="707"
                                style="--framer-text-color: var(--extracted-a0htzi);"
                              >
                                구글폼에도 응답 쌓기
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="framer-1400k2n-container"
                        data-projection-id="708"
                      >
                        <div
                          data-framer-generated="true"
                          class="framer-u9mQN framer-oLTtJ framer-bxxjc framer-v-1s2kwch"
                          tabindex="0"
                          data-projection-id="709"
                          style="display: contents;"
                        >
                          <div
                            class="framer-1bqr37g"
                            data-framer-name="Standard Badge"
                            data-projection-id="710"
                            style="background-color: rgba(25, 21, 78, 0.03); border-radius: 100px; opacity: 1;"
                          >
                            <div
                              class="framer-77qnma-container"
                              data-projection-id="711"
                              style="opacity: 1;"
                            >
                              <div
                                data-projection-id="712"
                                style="display: contents;"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 256 256"
                                  focusable="false"
                                  color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                  style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0; cursor: auto;"
                                >
                                  <g
                                    color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                    weight="fill"
                                  >
                                    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div
                              class="framer-xgndie"
                              data-framer-component-type="RichTextContainer"
                              data-projection-id="713"
                              style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--variable-reference-TyxD043yt-bkf_3iqYh); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --variable-reference-TyxD043yt-bkf_3iqYh: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); transform: none; opacity: 1;"
                            >
                              <h3
                                class="framer-text framer-styles-preset-13xnbb0"
                                data-styles-preset="zFV_Olyc4"
                                data-projection-id="714"
                                style="--framer-text-color: var(--extracted-a0htzi);"
                              >
                                로직 그대로 불러오기
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="framer-9v5bem-container"
                      data-projection-id="715"
                    >
                      <div
                        class="framer-Cma3C framer-bxxjc framer-v-1lme3m4"
                        tabindex="0"
                        data-projection-id="716"
                        style="display: contents;"
                      >
                        <a
                          class="framer-1lme3m4 framer-gyz49z"
                          data-framer-name="CTA Standard"
                          data-highlight="true"
                          href="./googleform"
                          tabindex="0"
                          data-projection-id="717"
                          style="opacity: 1;"
                        >
                          <div
                            class="framer-1sdv28j"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="718"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--variable-reference-EnBVDC6a2-OlTWqYMo3); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --variable-reference-EnBVDC6a2-OlTWqYMo3: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); transform: none; opacity: 1;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="719"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 18px; --framer-line-height: 1.7em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              더 알아보기
                            </p>
                          </div>
                          <div
                            class="framer-wcti0l-container"
                            data-projection-id="720"
                            style="opacity: 1;"
                          >
                            <div
                              data-projection-id="721"
                              style="display: contents;"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                focusable="false"
                                color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0;"
                              >
                                <g
                                  color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                  weight="bold"
                                >
                                  <line
                                    x1="40"
                                    y1="128"
                                    x2="216"
                                    y2="128"
                                    fill="none"
                                    stroke='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="24"
                                  ></line>
                                  <polyline
                                    points="144 56 216 128 144 200"
                                    fill="none"
                                    stroke='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="24"
                                  ></polyline>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="framer-zz4d0l" data-projection-id="722">
              <div class="framer-16sjhxu" data-projection-id="723">
                <div
                  class="framer-17bebzv"
                  data-projection-id="724"
                  style="opacity: 0; transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);"
                >
                  <div
                    class="framer-1r7zt03"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="725"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); --framer-text-transform: uppercase;'
                    >
                      다양한 필드 &amp; 비주얼 로직 맵
                    </p>
                  </div>
                  <div
                    class="framer-pxw1jr"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="726"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <h2
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: left; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-line-height: 1.3em;'
                    >
                      복잡한 문항, 로직도 한 눈에 관리하세요
                    </h2>
                  </div>
                  <div
                    class="framer-15g22mh"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="727"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-letter-spacing: -0.7px; --framer-line-height: 1.5em; --framer-text-alignment: left; --framer-text-color: rgb(91, 94, 118);'
                    >
                      이미지, 영상, 파일, URL 임베딩, 히든필드.
                    </p>
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-letter-spacing: -0.7px; --framer-line-height: 1.5em; --framer-text-alignment: left; --framer-text-color: rgb(91, 94, 118);'
                    >
                      그리고 이들에 따라 움직이는 원자단위의 로직까지.
                    </p>
                  </div>
                  <div
                    class="framer-15juq9s-container"
                    data-projection-id="728"
                  >
                    <div
                      class="framer-Cma3C framer-bxxjc framer-v-1lme3m4"
                      tabindex="0"
                      data-projection-id="729"
                      style="display: contents;"
                    >
                      <a
                        class="framer-1lme3m4 framer-gyz49z"
                        data-framer-name="CTA Standard"
                        data-highlight="true"
                        href="https://home.walla.my/blog/how-to-use-logic-in-walla"
                        rel="noopener"
                        tabindex="0"
                        data-projection-id="730"
                        style="opacity: 1;"
                      >
                        <div
                          class="framer-1sdv28j"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="731"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--variable-reference-EnBVDC6a2-OlTWqYMo3); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --variable-reference-EnBVDC6a2-OlTWqYMo3: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); transform: none; opacity: 1;"
                        >
                          <p
                            class="framer-text"
                            data-projection-id="732"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 18px; --framer-line-height: 1.7em; --framer-text-color: var(--extracted-r6o4lv);'
                          >
                            더 알아보기
                          </p>
                        </div>
                        <div
                          class="framer-wcti0l-container"
                          data-projection-id="733"
                          style="opacity: 1;"
                        >
                          <div
                            data-projection-id="734"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0;"
                            >
                              <g
                                color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                weight="bold"
                              >
                                <line
                                  x1="40"
                                  y1="128"
                                  x2="216"
                                  y2="128"
                                  fill="none"
                                  stroke='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="24"
                                ></line>
                                <polyline
                                  points="144 56 216 128 144 200"
                                  fill="none"
                                  stroke='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="24"
                                ></polyline>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="framer-ohgj6m"
                  data-border="true"
                  data-projection-id="735"
                  style="opacity: 0; transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="736"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/WDcjVe9eyGEC5wr1xTBxM0T9uFs.png"
                        alt="Gradient"
                        srcset="https://framerusercontent.com/images/WDcjVe9eyGEC5wr1xTBxM0T9uFs.png?scale-down-to=512 512w, https://framerusercontent.com/images/WDcjVe9eyGEC5wr1xTBxM0T9uFs.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/WDcjVe9eyGEC5wr1xTBxM0T9uFs.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/WDcjVe9eyGEC5wr1xTBxM0T9uFs.png?scale-down-to=4096 4096w, https://framerusercontent.com/images/WDcjVe9eyGEC5wr1xTBxM0T9uFs.png 5588w"
                        sizes="min(100vw - 200px, 1200px)"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="framer-4tx4yj" data-projection-id="737">
              <div class="framer-egkk7i" data-projection-id="738">
                <div
                  class="framer-py0il0"
                  data-projection-id="739"
                  style="opacity: 0; transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);"
                >
                  <div
                    class="framer-1v5chsf"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="740"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); --framer-text-transform: uppercase;'
                    >
                      자동화 연동
                    </p>
                  </div>
                  <div
                    class="framer-1j7whxl"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="741"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <h2
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: center; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-line-height: 1.3em;'
                    >
                      사용하시던 툴을
                      <br class="framer-text" />
                      그대로 연결하세요
                    </h2>
                  </div>
                  <div
                    class="framer-u40hl0"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="742"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-letter-spacing: -0.7px; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: rgb(91, 94, 118);'
                    >
                      매번 번거롭게 들어가서 확인하실 필요,
                      <br class="framer-text" />
                      하나씩 문서 작업을 하실 필요, 더이상 없으니까요.
                    </p>
                  </div>
                </div>
                <div
                  class="framer-1pa4khb-container"
                  data-projection-id="743"
                  style="opacity: 0; transform: perspective(1200px);"
                >
                  <section style="display: flex; width: 100%; height: 100%; max-width: 100%; max-height: 100%; place-items: center; margin: 0px; padding: 10px; list-style-type: none; opacity: 1; -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 100%); overflow: hidden;">
                    <ul style="display: flex; width: 100%; height: 100%; max-width: 100%; max-height: 100%; place-items: center; margin: 0px; padding: 0px; list-style-type: none; gap: 20px; position: relative; flex-direction: row; will-change: transform;">
                      <li>
                        <div
                          class="framer-p19kx9"
                          data-border="true"
                          data-framer-name="Twitter"
                          name="Twitter"
                          data-projection-id="744"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-cl1155" data-projection-id="745">
                            <div
                              class="framer-1bt94yg"
                              data-framer-name="image"
                              name="image"
                              data-projection-id="746"
                            >
                              <div
                                data-framer-background-image-wrapper="true"
                                data-projection-id="747"
                                style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                              >
                                <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                  <img
                                    src="https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png?scale-down-to=512"
                                    alt=""
                                    srcset="https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png?scale-down-to=512 512w, https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png 1024w"
                                    sizes="61px"
                                    style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-ecb9x8"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="748"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Gmail
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="framer-1ennr16"
                          data-border="true"
                          data-framer-name="Eventbrite"
                          name="Eventbrite"
                          data-projection-id="749"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-6rv7b1" data-projection-id="750">
                            <div class="framer-i35ic9" data-projection-id="751">
                              <div
                                class="framer-daqi8k"
                                data-framer-name="image"
                                name="image"
                                data-projection-id="752"
                              >
                                <div
                                  data-framer-background-image-wrapper="true"
                                  data-projection-id="753"
                                  style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                                >
                                  <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                    <img
                                      src="https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png"
                                      alt=""
                                      srcset="https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png?scale-down-to=512 512w, https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png 1615w"
                                      sizes="75px"
                                      style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1bwlos6"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="754"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255));'
                            >
                              Discord
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="framer-180heqf"
                          data-border="true"
                          data-framer-name="Spotify"
                          name="Spotify"
                          data-projection-id="755"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-eyxkdt"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="756"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="757"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=1024"
                                  alt=""
                                  srcset="https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=512 512w, https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png 2048w"
                                  sizes="53px"
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1s2unvn"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="758"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255));'
                            >
                              Slack
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="framer-i7nbos"
                          data-border="true"
                          data-framer-name="Formspark"
                          name="Formspark"
                          data-projection-id="759"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-1y9cnml" data-projection-id="760">
                            <div
                              class="framer-1cha9gr"
                              data-framer-name="image"
                              name="image"
                              data-projection-id="761"
                            >
                              <div
                                data-framer-background-image-wrapper="true"
                                data-projection-id="762"
                                style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                              >
                                <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                  <img
                                    src="https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=1024"
                                    alt=""
                                    srcset="https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=512 512w, https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png 2048w"
                                    sizes="47px"
                                    style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1lez39j"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="763"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78));'
                            >
                              Notion
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="framer-8jxxyx"
                          data-border="true"
                          data-framer-name="Mailchimp"
                          name="Mailchimp"
                          data-projection-id="764"
                          style="flex-shrink: 0;"
                        >
                          <div
                            data-framer-component-type="SVG"
                            class="framer-172zz7z"
                            data-projection-id="765"
                            style='image-rendering: pixelated; flex-shrink: 0; background-size: 100% 100%; background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2050%2054%22%3E%3Cpath%20d%3D%22M%2048.011%2034.031%20L%2047.159%2031.641%20C%2047.159%2031.641%2050.71%2026.297%2041.903%2024.469%20C%2041.903%2024.469%2042.472%2017.859%2039.347%2014.766%20C%2046.165%208.156%2044.602%20-1.828%2029.119%204.641%20C%2021.165%20-10.406%20-9.517%2024.891%203.267%2030.516%20C%201.989%2032.203%201.989%2040.641%2010.795%2041.484%20C%2016.761%2054.141%2031.25%2054.984%2039.631%2051.187%20C%2048.011%2047.391%2052.841%2035.297%2048.011%2034.031%20Z%20M%2010.653%2039.656%20C%203.409%2038.953%202.699%2029.109%208.949%2028.125%20C%2015.199%2027.141%2016.761%2040.219%2010.653%2039.656%20Z%20M%208.523%2026.297%20C%206.534%2026.297%204.119%2028.969%204.119%2028.969%20C%20-5.54%2024.328%2021.591%20-6.469%2027.415%205.484%20C%2027.415%205.484%2013.21%2012.234%208.523%2026.297%20Z%20M%2036.932%2038.25%20C%2036.932%2037.687%2033.949%2039.094%2028.551%2037.266%20C%2028.977%2034.312%2035.369%2039.797%2046.023%2032.625%20L%2046.875%2035.578%20C%2050.852%2034.875%2046.875%2048.234%2034.091%2048.094%20C%2023.722%2047.953%2020.455%2037.406%2026.136%2031.641%20C%2027.273%2030.516%2022.017%2028.266%2023.011%2023.344%20C%2023.437%2021.234%2025.284%2018.141%2029.972%2018.984%20C%2034.659%2019.828%2035.653%2015.609%2038.778%2017.156%20C%2041.903%2018.703%2040.057%2024.609%2040.483%2025.453%20C%2040.909%2026.297%2045.455%2026.437%2046.307%2028.828%20C%2047.159%2031.219%2040.483%2036.422%2030.114%2035.016%20C%2027.699%2034.734%2026.278%2037.828%2027.841%2039.797%20C%2030.966%2044.297%2043.75%2041.344%2045.881%2036.984%20C%2040.483%2041.062%2029.403%2042.609%2028.551%2038.25%20C%2031.676%2039.656%2036.932%2038.812%2036.932%2038.25%20Z%20M%2018.324%2016.031%20C%2021.449%2012.234%2025.568%209.984%2025.568%209.984%20L%2024.716%2012.094%20C%2024.716%2012.094%2027.699%209.844%2030.966%209.844%20L%2029.83%2010.969%20C%2033.523%2011.109%2035.085%2012.516%2035.085%2012.516%20C%2035.085%2012.516%2026.42%209.984%2018.324%2016.031%20Z%20M%2037.5%2021.516%20C%2039.347%2021.375%2038.778%2025.594%2038.778%2025.594%20L%2037.642%2025.594%20C%2037.642%2025.594%2035.653%2021.656%2037.5%2021.516%20Z%20M%2029.119%2026.156%20C%2027.841%2026.297%2026.42%2027%2026.562%2026.438%20C%2027.131%2024.188%2032.386%2024.75%2032.244%2026.719%20C%2032.102%2028.688%2030.966%2025.875%2029.119%2026.156%20Z%20M%2032.102%2027.844%20C%2032.244%2028.125%2031.108%2027.844%2030.256%2027.984%20C%2029.403%2028.125%2028.551%2028.547%2028.551%2028.266%20C%2028.551%2027.984%2031.818%2026.719%2032.102%2027.844%20Z%20M%2034.943%2028.266%20C%2035.369%2027.422%2037.074%2028.266%2036.648%2029.109%20C%2036.222%2029.953%2034.517%2029.109%2034.943%2028.266%20Z%20M%2038.494%2028.547%20C%2037.642%2028.547%2037.642%2026.719%2038.494%2026.719%20C%2039.347%2026.719%2039.347%2028.687%2038.494%2028.687%20Z%20M%2012.926%2036%20C%2013.352%2036.422%2012.074%2037.266%2011.08%2036.562%20C%2010.085%2035.859%2012.216%2032.484%209.659%2031.641%20C%207.102%2030.797%207.812%2034.031%207.102%2033.609%20C%206.392%2033.187%208.097%2028.687%2011.08%2030.516%20C%2014.062%2032.344%2010.227%2035.156%2011.932%2036%20C%2013.636%2036.844%2012.642%2035.719%2012.926%2036%20Z%22%20fill%3D%22rgb(34%2C34%2C34)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");'
                          ></div>
                          <div
                            class="framer-1n0kmb3"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="766"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78));'
                            >
                              Mailchimp
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="framer-v6ktes"
                          data-border="true"
                          data-framer-name="Intercom"
                          name="Intercom"
                          data-projection-id="767"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-5zg52x"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="768"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="769"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/4qUiKAAP8SRBl5FRZWMlsB8UuO0.png"
                                  alt=""
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-4lt34r"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="770"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Google Calendar
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="framer-1289r2e"
                          data-border="true"
                          data-framer-name="YouTube"
                          name="YouTube"
                          data-projection-id="771"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-b5udiu"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="772"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="773"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/schQf9a8RaJ4vNNfkfV2FNNuZIQ.png"
                                  alt=""
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-y9yc0f"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="774"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Airtable
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-p19kx9"
                          data-border="true"
                          data-framer-name="Twitter"
                          name="Twitter"
                          data-projection-id="1045"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-cl1155" data-projection-id="1046">
                            <div
                              class="framer-1bt94yg"
                              data-framer-name="image"
                              name="image"
                              data-projection-id="1047"
                            >
                              <div
                                data-framer-background-image-wrapper="true"
                                data-projection-id="1048"
                                style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                              >
                                <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                  <img
                                    src="https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png?scale-down-to=512"
                                    alt=""
                                    srcset="https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png?scale-down-to=512 512w, https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png 1024w"
                                    sizes="61px"
                                    style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-ecb9x8"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1049"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Gmail
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-1ennr16"
                          data-border="true"
                          data-framer-name="Eventbrite"
                          name="Eventbrite"
                          data-projection-id="1050"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-6rv7b1" data-projection-id="1051">
                            <div
                              class="framer-i35ic9"
                              data-projection-id="1052"
                            >
                              <div
                                class="framer-daqi8k"
                                data-framer-name="image"
                                name="image"
                                data-projection-id="1053"
                              >
                                <div
                                  data-framer-background-image-wrapper="true"
                                  data-projection-id="1054"
                                  style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                                >
                                  <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                    <img
                                      src="https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png"
                                      alt=""
                                      srcset="https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png?scale-down-to=512 512w, https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png 1615w"
                                      sizes="75px"
                                      style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1bwlos6"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1055"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255));'
                            >
                              Discord
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-180heqf"
                          data-border="true"
                          data-framer-name="Spotify"
                          name="Spotify"
                          data-projection-id="1056"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-eyxkdt"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="1057"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="1058"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=1024"
                                  alt=""
                                  srcset="https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=512 512w, https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png 2048w"
                                  sizes="53px"
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1s2unvn"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1059"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255));'
                            >
                              Slack
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-i7nbos"
                          data-border="true"
                          data-framer-name="Formspark"
                          name="Formspark"
                          data-projection-id="1060"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-1y9cnml" data-projection-id="1061">
                            <div
                              class="framer-1cha9gr"
                              data-framer-name="image"
                              name="image"
                              data-projection-id="1062"
                            >
                              <div
                                data-framer-background-image-wrapper="true"
                                data-projection-id="1063"
                                style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                              >
                                <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                  <img
                                    src="https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=1024"
                                    alt=""
                                    srcset="https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=512 512w, https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png 2048w"
                                    sizes="47px"
                                    style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1lez39j"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1064"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78));'
                            >
                              Notion
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-8jxxyx"
                          data-border="true"
                          data-framer-name="Mailchimp"
                          name="Mailchimp"
                          data-projection-id="1065"
                          style="flex-shrink: 0;"
                        >
                          <div
                            data-framer-component-type="SVG"
                            class="framer-172zz7z"
                            data-projection-id="1066"
                            style='image-rendering: pixelated; flex-shrink: 0; background-size: 100% 100%; background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2050%2054%22%3E%3Cpath%20d%3D%22M%2048.011%2034.031%20L%2047.159%2031.641%20C%2047.159%2031.641%2050.71%2026.297%2041.903%2024.469%20C%2041.903%2024.469%2042.472%2017.859%2039.347%2014.766%20C%2046.165%208.156%2044.602%20-1.828%2029.119%204.641%20C%2021.165%20-10.406%20-9.517%2024.891%203.267%2030.516%20C%201.989%2032.203%201.989%2040.641%2010.795%2041.484%20C%2016.761%2054.141%2031.25%2054.984%2039.631%2051.187%20C%2048.011%2047.391%2052.841%2035.297%2048.011%2034.031%20Z%20M%2010.653%2039.656%20C%203.409%2038.953%202.699%2029.109%208.949%2028.125%20C%2015.199%2027.141%2016.761%2040.219%2010.653%2039.656%20Z%20M%208.523%2026.297%20C%206.534%2026.297%204.119%2028.969%204.119%2028.969%20C%20-5.54%2024.328%2021.591%20-6.469%2027.415%205.484%20C%2027.415%205.484%2013.21%2012.234%208.523%2026.297%20Z%20M%2036.932%2038.25%20C%2036.932%2037.687%2033.949%2039.094%2028.551%2037.266%20C%2028.977%2034.312%2035.369%2039.797%2046.023%2032.625%20L%2046.875%2035.578%20C%2050.852%2034.875%2046.875%2048.234%2034.091%2048.094%20C%2023.722%2047.953%2020.455%2037.406%2026.136%2031.641%20C%2027.273%2030.516%2022.017%2028.266%2023.011%2023.344%20C%2023.437%2021.234%2025.284%2018.141%2029.972%2018.984%20C%2034.659%2019.828%2035.653%2015.609%2038.778%2017.156%20C%2041.903%2018.703%2040.057%2024.609%2040.483%2025.453%20C%2040.909%2026.297%2045.455%2026.437%2046.307%2028.828%20C%2047.159%2031.219%2040.483%2036.422%2030.114%2035.016%20C%2027.699%2034.734%2026.278%2037.828%2027.841%2039.797%20C%2030.966%2044.297%2043.75%2041.344%2045.881%2036.984%20C%2040.483%2041.062%2029.403%2042.609%2028.551%2038.25%20C%2031.676%2039.656%2036.932%2038.812%2036.932%2038.25%20Z%20M%2018.324%2016.031%20C%2021.449%2012.234%2025.568%209.984%2025.568%209.984%20L%2024.716%2012.094%20C%2024.716%2012.094%2027.699%209.844%2030.966%209.844%20L%2029.83%2010.969%20C%2033.523%2011.109%2035.085%2012.516%2035.085%2012.516%20C%2035.085%2012.516%2026.42%209.984%2018.324%2016.031%20Z%20M%2037.5%2021.516%20C%2039.347%2021.375%2038.778%2025.594%2038.778%2025.594%20L%2037.642%2025.594%20C%2037.642%2025.594%2035.653%2021.656%2037.5%2021.516%20Z%20M%2029.119%2026.156%20C%2027.841%2026.297%2026.42%2027%2026.562%2026.438%20C%2027.131%2024.188%2032.386%2024.75%2032.244%2026.719%20C%2032.102%2028.688%2030.966%2025.875%2029.119%2026.156%20Z%20M%2032.102%2027.844%20C%2032.244%2028.125%2031.108%2027.844%2030.256%2027.984%20C%2029.403%2028.125%2028.551%2028.547%2028.551%2028.266%20C%2028.551%2027.984%2031.818%2026.719%2032.102%2027.844%20Z%20M%2034.943%2028.266%20C%2035.369%2027.422%2037.074%2028.266%2036.648%2029.109%20C%2036.222%2029.953%2034.517%2029.109%2034.943%2028.266%20Z%20M%2038.494%2028.547%20C%2037.642%2028.547%2037.642%2026.719%2038.494%2026.719%20C%2039.347%2026.719%2039.347%2028.687%2038.494%2028.687%20Z%20M%2012.926%2036%20C%2013.352%2036.422%2012.074%2037.266%2011.08%2036.562%20C%2010.085%2035.859%2012.216%2032.484%209.659%2031.641%20C%207.102%2030.797%207.812%2034.031%207.102%2033.609%20C%206.392%2033.187%208.097%2028.687%2011.08%2030.516%20C%2014.062%2032.344%2010.227%2035.156%2011.932%2036%20C%2013.636%2036.844%2012.642%2035.719%2012.926%2036%20Z%22%20fill%3D%22rgb(34%2C34%2C34)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");'
                          ></div>
                          <div
                            class="framer-1n0kmb3"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1067"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78));'
                            >
                              Mailchimp
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-v6ktes"
                          data-border="true"
                          data-framer-name="Intercom"
                          name="Intercom"
                          data-projection-id="1068"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-5zg52x"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="1069"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="1070"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/4qUiKAAP8SRBl5FRZWMlsB8UuO0.png"
                                  alt=""
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-4lt34r"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1071"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Google Calendar
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-1289r2e"
                          data-border="true"
                          data-framer-name="YouTube"
                          name="YouTube"
                          data-projection-id="1072"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-b5udiu"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="1073"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="1074"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/schQf9a8RaJ4vNNfkfV2FNNuZIQ.png"
                                  alt=""
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-y9yc0f"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1075"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Airtable
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-p19kx9"
                          data-border="true"
                          data-framer-name="Twitter"
                          name="Twitter"
                          data-projection-id="1076"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-cl1155" data-projection-id="1077">
                            <div
                              class="framer-1bt94yg"
                              data-framer-name="image"
                              name="image"
                              data-projection-id="1078"
                            >
                              <div
                                data-framer-background-image-wrapper="true"
                                data-projection-id="1079"
                                style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                              >
                                <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                  <img
                                    src="https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png?scale-down-to=512"
                                    alt=""
                                    srcset="https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png?scale-down-to=512 512w, https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png 1024w"
                                    sizes="61px"
                                    style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-ecb9x8"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1080"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Gmail
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-1ennr16"
                          data-border="true"
                          data-framer-name="Eventbrite"
                          name="Eventbrite"
                          data-projection-id="1081"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-6rv7b1" data-projection-id="1082">
                            <div
                              class="framer-i35ic9"
                              data-projection-id="1083"
                            >
                              <div
                                class="framer-daqi8k"
                                data-framer-name="image"
                                name="image"
                                data-projection-id="1084"
                              >
                                <div
                                  data-framer-background-image-wrapper="true"
                                  data-projection-id="1085"
                                  style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                                >
                                  <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                    <img
                                      src="https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png"
                                      alt=""
                                      srcset="https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png?scale-down-to=512 512w, https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png 1615w"
                                      sizes="75px"
                                      style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1bwlos6"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1086"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255));'
                            >
                              Discord
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-180heqf"
                          data-border="true"
                          data-framer-name="Spotify"
                          name="Spotify"
                          data-projection-id="1087"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-eyxkdt"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="1088"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="1089"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=1024"
                                  alt=""
                                  srcset="https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=512 512w, https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png 2048w"
                                  sizes="53px"
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1s2unvn"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1090"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255));'
                            >
                              Slack
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-i7nbos"
                          data-border="true"
                          data-framer-name="Formspark"
                          name="Formspark"
                          data-projection-id="1091"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-1y9cnml" data-projection-id="1092">
                            <div
                              class="framer-1cha9gr"
                              data-framer-name="image"
                              name="image"
                              data-projection-id="1093"
                            >
                              <div
                                data-framer-background-image-wrapper="true"
                                data-projection-id="1094"
                                style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                              >
                                <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                  <img
                                    src="https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=1024"
                                    alt=""
                                    srcset="https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=512 512w, https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png 2048w"
                                    sizes="47px"
                                    style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1lez39j"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1095"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78));'
                            >
                              Notion
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-8jxxyx"
                          data-border="true"
                          data-framer-name="Mailchimp"
                          name="Mailchimp"
                          data-projection-id="1096"
                          style="flex-shrink: 0;"
                        >
                          <div
                            data-framer-component-type="SVG"
                            class="framer-172zz7z"
                            data-projection-id="1097"
                            style='image-rendering: pixelated; flex-shrink: 0; background-size: 100% 100%; background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2050%2054%22%3E%3Cpath%20d%3D%22M%2048.011%2034.031%20L%2047.159%2031.641%20C%2047.159%2031.641%2050.71%2026.297%2041.903%2024.469%20C%2041.903%2024.469%2042.472%2017.859%2039.347%2014.766%20C%2046.165%208.156%2044.602%20-1.828%2029.119%204.641%20C%2021.165%20-10.406%20-9.517%2024.891%203.267%2030.516%20C%201.989%2032.203%201.989%2040.641%2010.795%2041.484%20C%2016.761%2054.141%2031.25%2054.984%2039.631%2051.187%20C%2048.011%2047.391%2052.841%2035.297%2048.011%2034.031%20Z%20M%2010.653%2039.656%20C%203.409%2038.953%202.699%2029.109%208.949%2028.125%20C%2015.199%2027.141%2016.761%2040.219%2010.653%2039.656%20Z%20M%208.523%2026.297%20C%206.534%2026.297%204.119%2028.969%204.119%2028.969%20C%20-5.54%2024.328%2021.591%20-6.469%2027.415%205.484%20C%2027.415%205.484%2013.21%2012.234%208.523%2026.297%20Z%20M%2036.932%2038.25%20C%2036.932%2037.687%2033.949%2039.094%2028.551%2037.266%20C%2028.977%2034.312%2035.369%2039.797%2046.023%2032.625%20L%2046.875%2035.578%20C%2050.852%2034.875%2046.875%2048.234%2034.091%2048.094%20C%2023.722%2047.953%2020.455%2037.406%2026.136%2031.641%20C%2027.273%2030.516%2022.017%2028.266%2023.011%2023.344%20C%2023.437%2021.234%2025.284%2018.141%2029.972%2018.984%20C%2034.659%2019.828%2035.653%2015.609%2038.778%2017.156%20C%2041.903%2018.703%2040.057%2024.609%2040.483%2025.453%20C%2040.909%2026.297%2045.455%2026.437%2046.307%2028.828%20C%2047.159%2031.219%2040.483%2036.422%2030.114%2035.016%20C%2027.699%2034.734%2026.278%2037.828%2027.841%2039.797%20C%2030.966%2044.297%2043.75%2041.344%2045.881%2036.984%20C%2040.483%2041.062%2029.403%2042.609%2028.551%2038.25%20C%2031.676%2039.656%2036.932%2038.812%2036.932%2038.25%20Z%20M%2018.324%2016.031%20C%2021.449%2012.234%2025.568%209.984%2025.568%209.984%20L%2024.716%2012.094%20C%2024.716%2012.094%2027.699%209.844%2030.966%209.844%20L%2029.83%2010.969%20C%2033.523%2011.109%2035.085%2012.516%2035.085%2012.516%20C%2035.085%2012.516%2026.42%209.984%2018.324%2016.031%20Z%20M%2037.5%2021.516%20C%2039.347%2021.375%2038.778%2025.594%2038.778%2025.594%20L%2037.642%2025.594%20C%2037.642%2025.594%2035.653%2021.656%2037.5%2021.516%20Z%20M%2029.119%2026.156%20C%2027.841%2026.297%2026.42%2027%2026.562%2026.438%20C%2027.131%2024.188%2032.386%2024.75%2032.244%2026.719%20C%2032.102%2028.688%2030.966%2025.875%2029.119%2026.156%20Z%20M%2032.102%2027.844%20C%2032.244%2028.125%2031.108%2027.844%2030.256%2027.984%20C%2029.403%2028.125%2028.551%2028.547%2028.551%2028.266%20C%2028.551%2027.984%2031.818%2026.719%2032.102%2027.844%20Z%20M%2034.943%2028.266%20C%2035.369%2027.422%2037.074%2028.266%2036.648%2029.109%20C%2036.222%2029.953%2034.517%2029.109%2034.943%2028.266%20Z%20M%2038.494%2028.547%20C%2037.642%2028.547%2037.642%2026.719%2038.494%2026.719%20C%2039.347%2026.719%2039.347%2028.687%2038.494%2028.687%20Z%20M%2012.926%2036%20C%2013.352%2036.422%2012.074%2037.266%2011.08%2036.562%20C%2010.085%2035.859%2012.216%2032.484%209.659%2031.641%20C%207.102%2030.797%207.812%2034.031%207.102%2033.609%20C%206.392%2033.187%208.097%2028.687%2011.08%2030.516%20C%2014.062%2032.344%2010.227%2035.156%2011.932%2036%20C%2013.636%2036.844%2012.642%2035.719%2012.926%2036%20Z%22%20fill%3D%22rgb(34%2C34%2C34)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");'
                          ></div>
                          <div
                            class="framer-1n0kmb3"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1098"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78));'
                            >
                              Mailchimp
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-v6ktes"
                          data-border="true"
                          data-framer-name="Intercom"
                          name="Intercom"
                          data-projection-id="1099"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-5zg52x"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="1100"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="1101"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/4qUiKAAP8SRBl5FRZWMlsB8UuO0.png"
                                  alt=""
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-4lt34r"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1102"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Google Calendar
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-1289r2e"
                          data-border="true"
                          data-framer-name="YouTube"
                          name="YouTube"
                          data-projection-id="1103"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-b5udiu"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="1104"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="1105"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/schQf9a8RaJ4vNNfkfV2FNNuZIQ.png"
                                  alt=""
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-y9yc0f"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1106"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Airtable
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-p19kx9"
                          data-border="true"
                          data-framer-name="Twitter"
                          name="Twitter"
                          data-projection-id="1107"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-cl1155" data-projection-id="1108">
                            <div
                              class="framer-1bt94yg"
                              data-framer-name="image"
                              name="image"
                              data-projection-id="1109"
                            >
                              <div
                                data-framer-background-image-wrapper="true"
                                data-projection-id="1110"
                                style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                              >
                                <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                  <img
                                    src="https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png?scale-down-to=512"
                                    alt=""
                                    srcset="https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png?scale-down-to=512 512w, https://framerusercontent.com/images/oDxxZqlDNG99GA16YSLMjQEQipo.png 1024w"
                                    sizes="61px"
                                    style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-ecb9x8"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1111"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Gmail
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-1ennr16"
                          data-border="true"
                          data-framer-name="Eventbrite"
                          name="Eventbrite"
                          data-projection-id="1112"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-6rv7b1" data-projection-id="1113">
                            <div
                              class="framer-i35ic9"
                              data-projection-id="1114"
                            >
                              <div
                                class="framer-daqi8k"
                                data-framer-name="image"
                                name="image"
                                data-projection-id="1115"
                              >
                                <div
                                  data-framer-background-image-wrapper="true"
                                  data-projection-id="1116"
                                  style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                                >
                                  <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                    <img
                                      src="https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png"
                                      alt=""
                                      srcset="https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png?scale-down-to=512 512w, https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/WicgEasDttFrbGy38MtR8EPaL0.png 1615w"
                                      sizes="75px"
                                      style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1bwlos6"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1117"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255));'
                            >
                              Discord
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-180heqf"
                          data-border="true"
                          data-framer-name="Spotify"
                          name="Spotify"
                          data-projection-id="1118"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-eyxkdt"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="1119"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="1120"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=1024"
                                  alt=""
                                  srcset="https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=512 512w, https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/BM8pSrH9JRQy5j8f7MijoaH7zMc.png 2048w"
                                  sizes="53px"
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1s2unvn"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1121"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255));'
                            >
                              Slack
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-i7nbos"
                          data-border="true"
                          data-framer-name="Formspark"
                          name="Formspark"
                          data-projection-id="1122"
                          style="flex-shrink: 0;"
                        >
                          <div class="framer-1y9cnml" data-projection-id="1123">
                            <div
                              class="framer-1cha9gr"
                              data-framer-name="image"
                              name="image"
                              data-projection-id="1124"
                            >
                              <div
                                data-framer-background-image-wrapper="true"
                                data-projection-id="1125"
                                style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                              >
                                <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                  <img
                                    src="https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=1024"
                                    alt=""
                                    srcset="https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=512 512w, https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/pGsokNzMuiO8iRC79Utd5FaT3w.png 2048w"
                                    sizes="47px"
                                    style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-1lez39j"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1126"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78));'
                            >
                              Notion
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-8jxxyx"
                          data-border="true"
                          data-framer-name="Mailchimp"
                          name="Mailchimp"
                          data-projection-id="1127"
                          style="flex-shrink: 0;"
                        >
                          <div
                            data-framer-component-type="SVG"
                            class="framer-172zz7z"
                            data-projection-id="1128"
                            style='image-rendering: pixelated; flex-shrink: 0; background-size: 100% 100%; background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2050%2054%22%3E%3Cpath%20d%3D%22M%2048.011%2034.031%20L%2047.159%2031.641%20C%2047.159%2031.641%2050.71%2026.297%2041.903%2024.469%20C%2041.903%2024.469%2042.472%2017.859%2039.347%2014.766%20C%2046.165%208.156%2044.602%20-1.828%2029.119%204.641%20C%2021.165%20-10.406%20-9.517%2024.891%203.267%2030.516%20C%201.989%2032.203%201.989%2040.641%2010.795%2041.484%20C%2016.761%2054.141%2031.25%2054.984%2039.631%2051.187%20C%2048.011%2047.391%2052.841%2035.297%2048.011%2034.031%20Z%20M%2010.653%2039.656%20C%203.409%2038.953%202.699%2029.109%208.949%2028.125%20C%2015.199%2027.141%2016.761%2040.219%2010.653%2039.656%20Z%20M%208.523%2026.297%20C%206.534%2026.297%204.119%2028.969%204.119%2028.969%20C%20-5.54%2024.328%2021.591%20-6.469%2027.415%205.484%20C%2027.415%205.484%2013.21%2012.234%208.523%2026.297%20Z%20M%2036.932%2038.25%20C%2036.932%2037.687%2033.949%2039.094%2028.551%2037.266%20C%2028.977%2034.312%2035.369%2039.797%2046.023%2032.625%20L%2046.875%2035.578%20C%2050.852%2034.875%2046.875%2048.234%2034.091%2048.094%20C%2023.722%2047.953%2020.455%2037.406%2026.136%2031.641%20C%2027.273%2030.516%2022.017%2028.266%2023.011%2023.344%20C%2023.437%2021.234%2025.284%2018.141%2029.972%2018.984%20C%2034.659%2019.828%2035.653%2015.609%2038.778%2017.156%20C%2041.903%2018.703%2040.057%2024.609%2040.483%2025.453%20C%2040.909%2026.297%2045.455%2026.437%2046.307%2028.828%20C%2047.159%2031.219%2040.483%2036.422%2030.114%2035.016%20C%2027.699%2034.734%2026.278%2037.828%2027.841%2039.797%20C%2030.966%2044.297%2043.75%2041.344%2045.881%2036.984%20C%2040.483%2041.062%2029.403%2042.609%2028.551%2038.25%20C%2031.676%2039.656%2036.932%2038.812%2036.932%2038.25%20Z%20M%2018.324%2016.031%20C%2021.449%2012.234%2025.568%209.984%2025.568%209.984%20L%2024.716%2012.094%20C%2024.716%2012.094%2027.699%209.844%2030.966%209.844%20L%2029.83%2010.969%20C%2033.523%2011.109%2035.085%2012.516%2035.085%2012.516%20C%2035.085%2012.516%2026.42%209.984%2018.324%2016.031%20Z%20M%2037.5%2021.516%20C%2039.347%2021.375%2038.778%2025.594%2038.778%2025.594%20L%2037.642%2025.594%20C%2037.642%2025.594%2035.653%2021.656%2037.5%2021.516%20Z%20M%2029.119%2026.156%20C%2027.841%2026.297%2026.42%2027%2026.562%2026.438%20C%2027.131%2024.188%2032.386%2024.75%2032.244%2026.719%20C%2032.102%2028.688%2030.966%2025.875%2029.119%2026.156%20Z%20M%2032.102%2027.844%20C%2032.244%2028.125%2031.108%2027.844%2030.256%2027.984%20C%2029.403%2028.125%2028.551%2028.547%2028.551%2028.266%20C%2028.551%2027.984%2031.818%2026.719%2032.102%2027.844%20Z%20M%2034.943%2028.266%20C%2035.369%2027.422%2037.074%2028.266%2036.648%2029.109%20C%2036.222%2029.953%2034.517%2029.109%2034.943%2028.266%20Z%20M%2038.494%2028.547%20C%2037.642%2028.547%2037.642%2026.719%2038.494%2026.719%20C%2039.347%2026.719%2039.347%2028.687%2038.494%2028.687%20Z%20M%2012.926%2036%20C%2013.352%2036.422%2012.074%2037.266%2011.08%2036.562%20C%2010.085%2035.859%2012.216%2032.484%209.659%2031.641%20C%207.102%2030.797%207.812%2034.031%207.102%2033.609%20C%206.392%2033.187%208.097%2028.687%2011.08%2030.516%20C%2014.062%2032.344%2010.227%2035.156%2011.932%2036%20C%2013.636%2036.844%2012.642%2035.719%2012.926%2036%20Z%22%20fill%3D%22rgb(34%2C34%2C34)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");'
                          ></div>
                          <div
                            class="framer-1n0kmb3"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1129"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78));'
                            >
                              Mailchimp
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-v6ktes"
                          data-border="true"
                          data-framer-name="Intercom"
                          name="Intercom"
                          data-projection-id="1130"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-5zg52x"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="1131"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="1132"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/4qUiKAAP8SRBl5FRZWMlsB8UuO0.png"
                                  alt=""
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-4lt34r"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1133"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Google Calendar
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li style="display: contents;">
                        <div
                          class="framer-1289r2e"
                          data-border="true"
                          data-framer-name="YouTube"
                          name="YouTube"
                          data-projection-id="1134"
                          style="flex-shrink: 0;"
                        >
                          <div
                            class="framer-b5udiu"
                            data-framer-name="image"
                            name="image"
                            data-projection-id="1135"
                          >
                            <div
                              data-framer-background-image-wrapper="true"
                              data-projection-id="1136"
                              style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                            >
                              <div style="display: contents; border-radius: inherit; pointer-events: none;">
                                <img
                                  src="https://framerusercontent.com/images/schQf9a8RaJ4vNNfkfV2FNNuZIQ.png"
                                  alt=""
                                  style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="framer-y9yc0f"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="1137"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                          >
                            <h3
                              class="framer-text"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em;'
                            >
                              Airtable
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
            <div class="framer-1tikt1z" data-projection-id="775">
              <div class="framer-u17b7k" data-projection-id="776">
                <div
                  class="framer-cnb1g1"
                  data-projection-id="777"
                  style="opacity: 0; transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);"
                >
                  <div class="framer-3chf9c-container" data-projection-id="778">
                    <div
                      class="framer-WLJuG framer-kKB1C framer-u7lhm framer-oLTtJ framer-Fbvn0 framer-v-1cc5xk4"
                      tabindex="0"
                      data-projection-id="779"
                      style="display: contents;"
                    >
                      <div
                        class="framer-u8nnos"
                        data-border="true"
                        data-framer-name="Standard Accent"
                        data-projection-id="780"
                        style="--border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.08); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); width: 100%; border-radius: 10px; box-shadow: none; opacity: 1;"
                      >
                        <div
                          class="framer-oaj1c6"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="781"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --extracted-a0htzi: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); transform: none; opacity: 1;"
                        >
                          <h3
                            class="framer-text framer-styles-preset-kdrywy"
                            data-styles-preset="cGTNsvVOM"
                            data-projection-id="782"
                            style="--framer-text-color: var(--extracted-a0htzi);"
                          >
                            60,000
                          </h3>
                        </div>
                        <div
                          class="framer-cy0g2v"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="783"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --extracted-a0htzi: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); opacity: 0.7; transform: none;"
                        >
                          <h3
                            class="framer-text framer-styles-preset-13xnbb0"
                            data-styles-preset="zFV_Olyc4"
                            data-projection-id="784"
                            style="--framer-text-alignment: center; --framer-text-color: var(--extracted-a0htzi);"
                          >
                            누적 패널 수
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="framer-1jt5sns-container"
                    data-projection-id="785"
                  >
                    <div
                      class="framer-WLJuG framer-kKB1C framer-u7lhm framer-oLTtJ framer-Fbvn0 framer-v-1cc5xk4"
                      tabindex="0"
                      data-projection-id="786"
                      style="display: contents;"
                    >
                      <div
                        class="framer-u8nnos"
                        data-border="true"
                        data-framer-name="Standard Accent"
                        data-projection-id="787"
                        style="--border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.08); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); width: 100%; border-radius: 10px; box-shadow: none; opacity: 1;"
                      >
                        <div
                          class="framer-oaj1c6"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="788"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --extracted-a0htzi: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); transform: none; opacity: 1;"
                        >
                          <h3
                            class="framer-text framer-styles-preset-kdrywy"
                            data-styles-preset="cGTNsvVOM"
                            data-projection-id="789"
                            style="--framer-text-color: var(--extracted-a0htzi);"
                          >
                            90%
                          </h3>
                        </div>
                        <div
                          class="framer-cy0g2v"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="790"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --extracted-a0htzi: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); opacity: 0.7; transform: none;"
                        >
                          <h3
                            class="framer-text framer-styles-preset-13xnbb0"
                            data-styles-preset="zFV_Olyc4"
                            data-projection-id="791"
                            style="--framer-text-alignment: center; --framer-text-color: var(--extracted-a0htzi);"
                          >
                            응답 만족도
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="framer-1ioqtsd-container"
                    data-projection-id="792"
                  >
                    <div
                      class="framer-WLJuG framer-kKB1C framer-u7lhm framer-oLTtJ framer-Fbvn0 framer-v-1cc5xk4"
                      tabindex="0"
                      data-projection-id="793"
                      style="display: contents;"
                    >
                      <div
                        class="framer-u8nnos"
                        data-border="true"
                        data-framer-name="Standard Accent"
                        data-projection-id="794"
                        style="--border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.08); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); width: 100%; border-radius: 10px; box-shadow: none; opacity: 1;"
                      >
                        <div
                          class="framer-oaj1c6"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="795"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --extracted-a0htzi: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); transform: none; opacity: 1;"
                        >
                          <h3
                            class="framer-text framer-styles-preset-kdrywy"
                            data-styles-preset="cGTNsvVOM"
                            data-projection-id="796"
                            style="--framer-text-color: var(--extracted-a0htzi);"
                          >
                            7
                          </h3>
                        </div>
                        <div
                          class="framer-cy0g2v"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="797"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --extracted-a0htzi: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); opacity: 0.7; transform: none;"
                        >
                          <h3
                            class="framer-text framer-styles-preset-13xnbb0"
                            data-styles-preset="zFV_Olyc4"
                            data-projection-id="798"
                            style="--framer-text-alignment: center; --framer-text-color: var(--extracted-a0htzi);"
                          >
                            완료까지의 평균 기간
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="framer-71kbg9-container" data-projection-id="799">
                    <div
                      class="framer-WLJuG framer-kKB1C framer-u7lhm framer-oLTtJ framer-Fbvn0 framer-v-1cc5xk4"
                      tabindex="0"
                      data-projection-id="800"
                      style="display: contents;"
                    >
                      <div
                        class="framer-u8nnos"
                        data-border="true"
                        data-framer-name="Standard Accent"
                        data-projection-id="801"
                        style="--border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.08); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); width: 100%; border-radius: 10px; box-shadow: none; opacity: 1;"
                      >
                        <div
                          class="framer-oaj1c6"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="802"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --extracted-a0htzi: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); transform: none; opacity: 1;"
                        >
                          <h3
                            class="framer-text framer-styles-preset-kdrywy"
                            data-styles-preset="cGTNsvVOM"
                            data-projection-id="803"
                            style="--framer-text-color: var(--extracted-a0htzi);"
                          >
                            30,000
                          </h3>
                        </div>
                        <div
                          class="framer-cy0g2v"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="804"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --extracted-a0htzi: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); opacity: 0.7; transform: none;"
                        >
                          <h3
                            class="framer-text framer-styles-preset-13xnbb0"
                            data-styles-preset="zFV_Olyc4"
                            data-projection-id="805"
                            style="--framer-text-alignment: center; --framer-text-color: var(--extracted-a0htzi);"
                          >
                            100개 응답 수집 금액
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="framer-47qjxt"
                  data-projection-id="806"
                  style="opacity: 0; transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);"
                >
                  <div
                    class="framer-12lo4uu"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="807"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); --framer-text-transform: uppercase;'
                    >
                      응답자 찾기
                    </p>
                  </div>
                  <div
                    class="framer-o8og91"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="808"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <h2
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: left; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-line-height: 1.3em;'
                    >
                      아직도 대답없는 채팅방에서 응답자를 찾으시나요?
                    </h2>
                  </div>
                  <div
                    class="framer-dcbuo7"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="809"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-letter-spacing: -0.7px; --framer-line-height: 1.5em; --framer-text-alignment: left; --framer-text-color: rgb(91, 94, 118);'
                    >
                      응답자를 찾고 계신다면, 왈라를 사용하세요.
                    </p>
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-letter-spacing: -0.7px; --framer-line-height: 1.5em; --framer-text-alignment: left; --framer-text-color: rgb(91, 94, 118);'
                    >
                      응답자 모집에 불필요한 시간을 쏟지 마세요.
                      <br class="framer-text" />
                      왈라가 대신 찾아드릴게요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="framer-1dzkpby" data-projection-id="810">
              <div class="framer-svzqn9" data-projection-id="811">
                <div class="framer-1twxa5s" data-projection-id="812">
                  <div
                    class="framer-o9z6fc"
                    data-projection-id="813"
                    style="opacity: 0; transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);"
                  >
                    <div
                      class="framer-oyupnd"
                      data-framer-component-type="RichTextContainer"
                      data-projection-id="814"
                      style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                    >
                      <p
                        class="framer-text"
                        style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); --framer-text-transform: uppercase;'
                      >
                        세계 최초 GPT 도입 응답 분석 폼 빌더
                      </p>
                    </div>
                    <div
                      class="framer-4jc8q6"
                      data-framer-component-type="RichTextContainer"
                      data-projection-id="815"
                      style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                    >
                      <h2
                        class="framer-text"
                        style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: center; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-line-height: 1.3em;'
                      >
                        응답 데이터 분석,
                        <br class="framer-text" />
                        AI가 알아서.
                      </h2>
                    </div>
                    <div
                      class="framer-28tyvi"
                      data-framer-component-type="RichTextContainer"
                      data-projection-id="816"
                      style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                    >
                      <p
                        class="framer-text"
                        style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: rgb(91, 94, 118);'
                      >
                        데이터 응답 시트에 명령어를 작성하세요.
                      </p>
                      <p
                        class="framer-text"
                        style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: rgb(91, 94, 118);'
                      >
                        그리고 중요한 일에만 집중하세요.
                      </p>
                    </div>
                  </div>
                  <div class="framer-qzmpdm-container" data-projection-id="817">
                    <div
                      class="framer-Cma3C framer-bxxjc framer-v-1lme3m4"
                      tabindex="0"
                      data-projection-id="818"
                      style="display: contents;"
                    >
                      <a
                        class="framer-1lme3m4 framer-gyz49z"
                        data-framer-name="CTA Standard"
                        data-highlight="true"
                        href="https://home.walla.my/blog/how-to-use-gpt-in-walla"
                        rel="noopener"
                        tabindex="0"
                        data-projection-id="819"
                        style="opacity: 1;"
                      >
                        <div
                          class="framer-1sdv28j"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="820"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--variable-reference-EnBVDC6a2-OlTWqYMo3); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --variable-reference-EnBVDC6a2-OlTWqYMo3: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); transform: none; opacity: 1;"
                        >
                          <p
                            class="framer-text"
                            data-projection-id="821"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 18px; --framer-line-height: 1.7em; --framer-text-color: var(--extracted-r6o4lv);'
                          >
                            더 알아보기
                          </p>
                        </div>
                        <div
                          class="framer-wcti0l-container"
                          data-projection-id="822"
                          style="opacity: 1;"
                        >
                          <div
                            data-projection-id="823"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0;"
                            >
                              <g
                                color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                weight="bold"
                              >
                                <line
                                  x1="40"
                                  y1="128"
                                  x2="216"
                                  y2="128"
                                  fill="none"
                                  stroke='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="24"
                                ></line>
                                <polyline
                                  points="144 56 216 128 144 200"
                                  fill="none"
                                  stroke='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="24"
                                ></polyline>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="framer-1hwbv96" data-projection-id="824">
                    <div
                      class="framer-14iibd6-container"
                      data-projection-id="825"
                    >
                      <iframe
                        src="https://app.walla.my/demo/keyWord/"
                        loading="lazy"
                        fetchpriority="auto"
                        referrerpolicy="no-referrer"
                        sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        style="width: 100%; height: 100%; border: none;"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="framer-5q619x" data-projection-id="826">
              <div class="framer-ri8t0p" data-projection-id="827">
                <div
                  class="framer-wjrkd8"
                  data-projection-id="828"
                  style="opacity: 0; transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);"
                >
                  <div
                    class="framer-1yyid8m"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="829"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); --framer-text-transform: uppercase;'
                    >
                      응답 보상
                    </p>
                  </div>
                  <div
                    class="framer-1xloxrb"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="830"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <h2
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: left; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-line-height: 1.3em;'
                    >
                      응답 보상 기프티콘
                      <br class="framer-text" />
                      한번에 해결하세요
                    </h2>
                  </div>
                  <div
                    class="framer-1venq6s"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="831"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-letter-spacing: -0.7px; --framer-line-height: 1.5em; --framer-text-alignment: left; --framer-text-color: rgb(91, 94, 118);'
                    >
                      따로 구매하고 데이터 관리하기 귀찮다면,
                    </p>
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-letter-spacing: -0.7px; --framer-line-height: 1.5em; --framer-text-alignment: left; --framer-text-color: rgb(91, 94, 118);'
                    >
                      왈라에서 스타벅스 기프티콘을 바로 송부하세요.
                    </p>
                  </div>
                  <div
                    class="framer-11tvcfj-container"
                    data-projection-id="832"
                  >
                    <div
                      class="framer-Fxn3I framer-v-1hdrfbr"
                      tabindex="0"
                      data-projection-id="833"
                      style="display: contents;"
                    >
                      <a
                        class="framer-1hdrfbr framer-1k8eqkd"
                        data-framer-name="CTA Standard"
                        data-highlight="true"
                        href="https://home.walla.my/blog/how-to-use-reward-feature-in-walla"
                        rel="noopener"
                        tabindex="0"
                        data-projection-id="834"
                        style="opacity: 1;"
                      >
                        <div
                          class="framer-1mj8ewr"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="835"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(44, 174, 255); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                        >
                          <p
                            class="framer-text"
                            data-projection-id="836"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 18px; --framer-line-height: 1.7em; --framer-text-color: var(--extracted-r6o4lv);'
                          >
                            더 알아보기
                          </p>
                        </div>
                        <div
                          class="framer-1vorzjt-container"
                          data-projection-id="837"
                          style="opacity: 1;"
                        >
                          <div
                            data-projection-id="838"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0;"
                            >
                              <g
                                color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                weight="bold"
                              >
                                <line
                                  x1="40"
                                  y1="128"
                                  x2="216"
                                  y2="128"
                                  fill="none"
                                  stroke='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="24"
                                ></line>
                                <polyline
                                  points="144 56 216 128 144 200"
                                  fill="none"
                                  stroke='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="24"
                                ></polyline>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="framer-k5prng"
                  data-border="true"
                  data-projection-id="839"
                  style="opacity: 0; transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);"
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    data-projection-id="840"
                    style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                  >
                    <div style="display: contents; border-radius: inherit; pointer-events: none;">
                      <img
                        src="https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png"
                        alt="Gradient"
                        srcset="https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png?scale-down-to=512 512w, https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png?scale-down-to=4096 4096w, https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png 4191w"
                        sizes="min(100vw - 200px, 1200px)"
                        loading="lazy"
                        style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="framer-14kci8q" data-projection-id="841">
              <div class="framer-1xk79e4" data-projection-id="842">
                <div
                  class="framer-18urvde"
                  data-projection-id="843"
                  style="opacity: 0; transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);"
                >
                  <div
                    class="framer-19yjqz6"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="844"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); --framer-text-transform: uppercase;'
                    >
                      가격 정책
                    </p>
                  </div>
                  <div
                    class="framer-1cc25fg"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="845"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <h2
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: center; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-line-height: 1.3em;'
                    >
                      비용 지불은 여기서부터
                    </h2>
                  </div>
                  <div
                    class="framer-76idby"
                    data-framer-component-type="RichTextContainer"
                    data-projection-id="846"
                    style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                  >
                    <p
                      class="framer-text"
                      style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 20px; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: rgb(91, 94, 118);'
                    >
                      데이터를 모으는 과정이 쉽고 즐겁기를 바랍니다.
                      <br class="framer-text" />
                      제약없이 사용하고 꼭 필요한 기능에 지불하세요.{" "}
                    </p>
                  </div>
                </div>
                <div class="framer-1mq6wnu-container" data-projection-id="847">
                  <div
                    class="framer-Fxn3I framer-v-1hdrfbr"
                    tabindex="0"
                    data-projection-id="848"
                    style="display: contents;"
                  >
                    <a
                      class="framer-1hdrfbr framer-1k8eqkd"
                      data-framer-name="CTA Standard"
                      data-highlight="true"
                      href="https://home.walla.my/blog/walla-pricing"
                      rel="noopener"
                      tabindex="0"
                      data-projection-id="849"
                      style="opacity: 1;"
                    >
                      <div
                        class="framer-1mj8ewr"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="850"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(44, 174, 255); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                      >
                        <p
                          class="framer-text"
                          data-projection-id="851"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 18px; --framer-line-height: 1.7em; --framer-text-color: var(--extracted-r6o4lv);'
                        >
                          더 알아보기
                        </p>
                      </div>
                      <div
                        class="framer-1vorzjt-container"
                        data-projection-id="852"
                        style="opacity: 1;"
                      >
                        <div
                          data-projection-id="853"
                          style="display: contents;"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            focusable="false"
                            color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                            style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0;"
                          >
                            <g
                              color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                              weight="bold"
                            >
                              <line
                                x1="40"
                                y1="128"
                                x2="216"
                                y2="128"
                                fill="none"
                                stroke='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></line>
                              <polyline
                                points="144 56 216 128 144 200"
                                fill="none"
                                stroke='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></polyline>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="framer-1u33wy7" data-projection-id="854">
                <div
                  class="framer-1k63yqf"
                  data-border="true"
                  data-framer-name="Pricing Card English"
                  name="Pricing Card English"
                  data-projection-id="855"
                >
                  <div class="framer-vxwkq3" data-projection-id="856">
                    <div class="framer-yzpuz1" data-projection-id="857">
                      <div
                        class="framer-cdm365"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="858"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                      >
                        <p
                          class="framer-text"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-color: rgb(25, 21, 78); --framer-text-transform: uppercase;'
                        >
                          Free
                        </p>
                      </div>
                    </div>
                    <div class="framer-nsyr8i" data-projection-id="859">
                      <div
                        class="framer-vo0ila"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="860"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                      >
                        <h2
                          class="framer-text"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-line-height: 1.3em; --framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78));'
                        >
                          ₩
                          <span
                            class="framer-text"
                            style="--framer-text-color: rgb(25, 21, 78);"
                          >
                            0
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div class="framer-1murdd3" data-projection-id="861">
                      <div class="framer-1a3yue7" data-projection-id="862">
                        <div
                          class="framer-7qt46k-container"
                          data-projection-id="863"
                        >
                          <div
                            data-projection-id="864"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0;"
                            >
                              <g
                                color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                weight="fill"
                              >
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-1sa7e2s"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="865"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78));'
                          >
                            무제한 폼 생성 및 응답 수집
                          </h3>
                        </div>
                      </div>
                      <div class="framer-6vmqnd" data-projection-id="866">
                        <div
                          class="framer-ficzv8-container"
                          data-projection-id="867"
                        >
                          <div
                            data-projection-id="868"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0;"
                            >
                              <g
                                color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                weight="fill"
                              >
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-oe1g95"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="869"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: rgb(25, 21, 78);'
                          >
                            최대 3인 협업
                          </h3>
                        </div>
                      </div>
                      <div class="framer-oi9jrh" data-projection-id="870">
                        <div
                          class="framer-1nq441z-container"
                          data-projection-id="871"
                        >
                          <div
                            data-projection-id="872"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0;"
                            >
                              <g
                                color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                weight="fill"
                              >
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-hcb7mi"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="873"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: rgb(25, 21, 78);'
                          >
                            보상 전달
                          </h3>
                        </div>
                      </div>
                      <div class="framer-tzepmb" data-projection-id="874">
                        <div
                          class="framer-5j9xkm-container"
                          data-projection-id="875"
                        >
                          <div
                            data-projection-id="876"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0;"
                            >
                              <g
                                color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                weight="fill"
                              >
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-1y567yf"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="877"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: rgb(25, 21, 78);'
                          >
                            조회수 이탈률 확인
                          </h3>
                        </div>
                      </div>
                      <div class="framer-1csxqk" data-projection-id="878">
                        <div
                          class="framer-1aiui2q-container"
                          data-projection-id="879"
                        >
                          <div
                            data-projection-id="880"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); flex-shrink: 0;"
                            >
                              <g
                                color='var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)) /* {"name":"walla new blue"} */'
                                weight="fill"
                              >
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-168eu9p"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="881"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: rgb(25, 21, 78);'
                          >
                            분석 보고서 자동 생성
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div
                      class="framer-ifph79-container"
                      data-projection-id="882"
                    >
                      <div
                        class="framer-2Qwef framer-v-yzgbng"
                        tabindex="0"
                        data-projection-id="883"
                        style="display: contents;"
                      >
                        <a
                          class="framer-yzgbng framer-1csjtkd"
                          data-framer-name="Standard Accent"
                          data-highlight="true"
                          data-reset="button"
                          href="https://app.walla.my"
                          rel="noopener"
                          tabindex="0"
                          data-projection-id="884"
                          style="--border-bottom-width: 0px; --border-color: rgba(0, 0, 0, 0); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: rgb(44, 174, 255); filter: brightness(1); width: 100%; border-radius: 10px; opacity: 1;"
                        >
                          <div
                            class="framer-1ir1nal"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="885"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(255, 255, 255); --framer-link-current-text-color: hsl(0, 0%, 0%); --framer-link-hover-text-color: #666; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="886"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1em; --framer-text-alignment: center; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              Learn more
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="framer-2wv6zm"
                  data-border="true"
                  data-framer-name="Pricing Card English2"
                  name="Pricing Card English2"
                  data-projection-id="887"
                >
                  <div class="framer-3c94y1" data-projection-id="888">
                    <div class="framer-1xnld2v" data-projection-id="889">
                      <div
                        class="framer-xlxjr3"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="890"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                      >
                        <p
                          class="framer-text"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78)); --framer-text-transform: uppercase;'
                        >
                          PRO
                        </p>
                      </div>
                    </div>
                    <div class="framer-1s6imth" data-projection-id="891">
                      <div
                        class="framer-wvfw9p"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="892"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                      >
                        <h2
                          class="framer-text"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-line-height: 1.3em; --framer-text-color: rgb(25, 21, 78);'
                        >
                          <span
                            class="framer-text"
                            style="--framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78));"
                          >
                            ₩
                          </span>
                          33,000
                        </h2>
                      </div>
                    </div>
                    <div class="framer-1oqxsgb" data-projection-id="893">
                      <div class="framer-v120qh" data-projection-id="894">
                        <div
                          class="framer-1223ewv-container"
                          data-projection-id="895"
                        >
                          <div
                            data-projection-id="896"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color="rgba(255, 255, 255, 0.5)"
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.5); flex-shrink: 0;"
                            >
                              <g color="rgba(255, 255, 255, 0.5)" weight="fill">
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-1r7qzqc"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="897"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: rgb(25, 21, 78);'
                          >
                            기업 1개팀 사용시 추천
                          </h3>
                        </div>
                      </div>
                      <div class="framer-1avitoc" data-projection-id="898">
                        <div
                          class="framer-1n80i7w-container"
                          data-projection-id="899"
                        >
                          <div
                            data-projection-id="900"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color="rgba(255, 255, 255, 0.5)"
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.5); flex-shrink: 0;"
                            >
                              <g color="rgba(255, 255, 255, 0.5)" weight="fill">
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-18qcjof"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="901"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: rgb(25, 21, 78);'
                          >
                            워크스페이스 저장 공간 10GB
                          </h3>
                        </div>
                      </div>
                      <div class="framer-1giwa4z" data-projection-id="902">
                        <div
                          class="framer-gk672x-container"
                          data-projection-id="903"
                        >
                          <div
                            data-projection-id="904"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color="rgba(255, 255, 255, 0.5)"
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.5); flex-shrink: 0;"
                            >
                              <g color="rgba(255, 255, 255, 0.5)" weight="fill">
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-nysgcg"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="905"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: rgb(25, 21, 78);'
                          >
                            유저별 이탈 문항 확인
                          </h3>
                        </div>
                      </div>
                      <div class="framer-1n9megw" data-projection-id="906">
                        <div
                          class="framer-15s7uf9-container"
                          data-projection-id="907"
                        >
                          <div
                            data-projection-id="908"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color="rgba(255, 255, 255, 0.5)"
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.5); flex-shrink: 0;"
                            >
                              <g color="rgba(255, 255, 255, 0.5)" weight="fill">
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-5s3164"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="909"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: rgb(25, 21, 78);'
                          >
                            기업 로고 삽입
                          </h3>
                        </div>
                      </div>
                      <div class="framer-vs4bwr" data-projection-id="910">
                        <div
                          class="framer-8qild0-container"
                          data-projection-id="911"
                        >
                          <div
                            data-projection-id="912"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color="rgba(255, 255, 255, 0.5)"
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.5); flex-shrink: 0;"
                            >
                              <g color="rgba(255, 255, 255, 0.5)" weight="fill">
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-8vtix2"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="913"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: rgb(25, 21, 78);'
                          >
                            파일 업로드, 엔딩 필드 등
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div
                      class="framer-1emce11-container"
                      data-projection-id="914"
                    >
                      <div
                        class="framer-y2HbU framer-v-wrtbr6"
                        tabindex="0"
                        data-projection-id="915"
                        style="display: contents;"
                      >
                        <a
                          class="framer-wrtbr6 framer-wq01br"
                          data-framer-name="Standard Accent"
                          data-highlight="true"
                          data-reset="button"
                          href="https://app.walla.my"
                          rel="noopener"
                          tabindex="0"
                          data-projection-id="916"
                          style="--border-bottom-width: 0px; --border-color: rgba(0, 0, 0, 0); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: rgb(44, 174, 255); filter: brightness(1); width: 100%; border-radius: 10px; opacity: 1;"
                        >
                          <div
                            class="framer-j56l79"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="917"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(255, 255, 255); --framer-link-current-text-color: hsl(0, 0%, 0%); --framer-link-hover-text-color: #666; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="918"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1em; --framer-text-alignment: center; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              Learn more
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="framer-1xb5itf"
                  data-border="true"
                  data-framer-name="Pricing Card Copy 2"
                  name="Pricing Card Copy 2"
                  data-projection-id="919"
                >
                  <div class="framer-83yhx8" data-projection-id="920">
                    <div class="framer-narj2d" data-projection-id="921">
                      <div
                        class="framer-1klzvkb"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="922"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                      >
                        <p
                          class="framer-text"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78)); --framer-text-transform: uppercase;'
                        >
                          Enterprise
                        </p>
                      </div>
                    </div>
                    <div class="framer-u6mua1" data-projection-id="923">
                      <div
                        class="framer-2y0c6z"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="924"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                      >
                        <h2
                          class="framer-text"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-line-height: 1.3em; --framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78));'
                        >
                          ₩
                        </h2>
                      </div>
                      <div
                        class="framer-1gn9o3w"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="925"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                      >
                        <h2
                          class="framer-text"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-line-height: 1.3em; --framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78));'
                        >
                          99,000+
                        </h2>
                      </div>
                    </div>
                    <div class="framer-3un626" data-projection-id="926">
                      <div class="framer-1n8n6bo" data-projection-id="927">
                        <div
                          class="framer-hatwy2-container"
                          data-projection-id="928"
                        >
                          <div
                            data-projection-id="929"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color="rgba(255, 255, 255, 0.7)"
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.7); flex-shrink: 0;"
                            >
                              <g color="rgba(255, 255, 255, 0.7)" weight="fill">
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-2msi4x"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="930"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78));'
                          >
                            PRO의 모든 기능
                          </h3>
                        </div>
                      </div>
                      <div class="framer-ysyabs" data-projection-id="931">
                        <div
                          class="framer-1jnomif-container"
                          data-projection-id="932"
                        >
                          <div
                            data-projection-id="933"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color="rgba(255, 255, 255, 0.7)"
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.7); flex-shrink: 0;"
                            >
                              <g color="rgba(255, 255, 255, 0.7)" weight="fill">
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-w7vpqa"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="934"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78));'
                          >
                            관리자 최대 10인 이상
                          </h3>
                        </div>
                      </div>
                      <div class="framer-1ldyyi6" data-projection-id="935">
                        <div
                          class="framer-4j0nld-container"
                          data-projection-id="936"
                        >
                          <div
                            data-projection-id="937"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color="rgba(255, 255, 255, 0.7)"
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.7); flex-shrink: 0;"
                            >
                              <g color="rgba(255, 255, 255, 0.7)" weight="fill">
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-hy8mzq"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="938"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78));'
                          >
                            PRO 워크스페이스 무한 생성
                          </h3>
                        </div>
                      </div>
                      <div class="framer-16ie0k0" data-projection-id="939">
                        <div
                          class="framer-27ymq6-container"
                          data-projection-id="940"
                        >
                          <div
                            data-projection-id="941"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color="rgba(255, 255, 255, 0.7)"
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.7); flex-shrink: 0;"
                            >
                              <g color="rgba(255, 255, 255, 0.7)" weight="fill">
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-1p89ojq"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="942"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78));'
                          >
                            API, SDK 지원
                          </h3>
                        </div>
                      </div>
                      <div class="framer-1ghd9zv" data-projection-id="943">
                        <div
                          class="framer-hgewxy-container"
                          data-projection-id="944"
                        >
                          <div
                            data-projection-id="945"
                            style="display: contents;"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color="rgba(255, 255, 255, 0.7)"
                              style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgba(255, 255, 255, 0.7); flex-shrink: 0;"
                            >
                              <g color="rgba(255, 255, 255, 0.7)" weight="fill">
                                <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div
                          class="framer-1flfa4w"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="946"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                        >
                          <h3
                            class="framer-text"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 18px; --framer-text-color: var(--token-8a08b456-8f23-4ac0-a1d7-4b67e9f19d4b, rgb(25, 21, 78));'
                          >
                            별도 기능 개발 요청
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div
                      class="framer-jsdw7r-container"
                      data-projection-id="947"
                    >
                      <div
                        class="framer-MYfoJ framer-v-1j56ku8"
                        tabindex="0"
                        data-projection-id="948"
                        style="display: contents;"
                      >
                        <a
                          class="framer-1j56ku8 framer-1h3m4ao"
                          data-framer-name="Standard Accent"
                          data-highlight="true"
                          data-reset="button"
                          href="https://walla.my/survey/9Z04inEDzv9XKqVC7d14?uid=unknown&amp;soure=landing0324"
                          rel="noopener"
                          tabindex="0"
                          data-projection-id="949"
                          style="--border-bottom-width: 0px; --border-color: rgba(0, 0, 0, 0); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: rgb(44, 174, 255); filter: brightness(1); width: 100%; border-radius: 10px; opacity: 1;"
                        >
                          <div
                            class="framer-12twbx1"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="950"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: rgb(255, 255, 255); --framer-link-current-text-color: hsl(0, 0%, 0%); --framer-link-hover-text-color: #666; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="951"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1em; --framer-text-alignment: center; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              문의하기
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="framer-1nwfdu8" data-projection-id="952">
              <div
                class="framer-13efn1z"
                data-projection-id="953"
                style="opacity: 0; transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);"
              >
                <div
                  class="framer-62vk81"
                  data-framer-component-type="RichTextContainer"
                  data-projection-id="954"
                  style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                >
                  <p
                    class="framer-text"
                    style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: var(--token-bf346977-65a9-4c6b-a46b-8276f3797959, rgb(44, 174, 255)); --framer-text-transform: uppercase;'
                  >
                    FAQ
                  </p>
                </div>
                <div
                  class="framer-1953vcd"
                  data-framer-component-type="RichTextContainer"
                  data-projection-id="955"
                  style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                >
                  <h2
                    class="framer-text"
                    style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: center; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-line-height: 1.3em;'
                  >
                    자주 묻는 질문
                  </h2>
                </div>
              </div>
              <div
                class="framer-16dgnnl"
                data-projection-id="956"
                style="opacity: 0; transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);"
              >
                <div class="framer-1et959y-container" data-projection-id="957">
                  <div
                    class="framer-l7ndZ framer-oLTtJ framer-Fbvn0 framer-v-olk5xd"
                    tabindex="0"
                    data-projection-id="958"
                    style="display: contents;"
                  >
                    <div
                      class="framer-olk5xd"
                      data-framer-name="Open"
                      data-highlight="true"
                      tabindex="0"
                      data-projection-id="959"
                      style="background-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); width: 100%; border-radius: 20px; opacity: 1;"
                    >
                      <div
                        class="framer-14k8rn3"
                        data-projection-id="960"
                        style="opacity: 1;"
                      >
                        <div
                          class="framer-wf4vzb"
                          data-projection-id="961"
                          style="opacity: 1;"
                        >
                          <div
                            class="framer-10dl5x2"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="962"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <h3
                              class="framer-text framer-styles-preset-13xnbb0"
                              data-styles-preset="zFV_Olyc4"
                              data-projection-id="963"
                            >
                              왜 대부분의 기능이 무료인가요?
                            </h3>
                          </div>
                          <div
                            class="framer-n744wx"
                            data-projection-id="964"
                            style="transform: rotate(-90deg) translateZ(0px); opacity: 1;"
                          >
                            <div
                              data-framer-component-type="SVG"
                              class="framer-dx3teb"
                              data-projection-id="965"
                              style="image-rendering: pixelated; flex-shrink: 0; opacity: 1;"
                            >
                              <div
                                class="svgContainer"
                                style="width: 100%; height: 100%; aspect-ratio: inherit;"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                                  style="width: 100%; height: 100%"
                                >
                                  <use href="#svg809914610"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="framer-1wueld1"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="966"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                        >
                          <p
                            class="framer-text framer-styles-preset-21ogod"
                            data-styles-preset="xZndidUCt"
                            data-projection-id="967"
                          >
                            왈라팀은 데이터 수집 전반의 과정이 쉽게 이루어지길
                            원합니다. 서비스 중간에 과금이 많은 구조는 저희의
                            철학과 맞지 않아, 꼭 필요하실 때에만 비용을 지불하실
                            수 있도록 하였기 때문에 대부분의 기능이 무료입니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="framer-vh9v4x-container" data-projection-id="968">
                  <div
                    class="framer-l7ndZ framer-oLTtJ framer-Fbvn0 framer-v-2bcbag"
                    tabindex="0"
                    data-projection-id="969"
                    style="display: contents;"
                  >
                    <div
                      class="framer-olk5xd"
                      data-framer-name="Closed"
                      data-highlight="true"
                      tabindex="0"
                      data-projection-id="970"
                      style="background-color: rgba(255, 255, 255, 0); width: 100%; border-radius: 20px; opacity: 1;"
                    >
                      <div
                        class="framer-14k8rn3"
                        data-projection-id="971"
                        style="opacity: 1;"
                      >
                        <div
                          class="framer-wf4vzb"
                          data-projection-id="972"
                          style="opacity: 1;"
                        >
                          <div
                            class="framer-10dl5x2"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="973"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <h3
                              class="framer-text framer-styles-preset-13xnbb0"
                              data-styles-preset="zFV_Olyc4"
                              data-projection-id="974"
                            >
                              대학생 할인도 있나요?
                            </h3>
                          </div>
                          <div
                            class="framer-n744wx"
                            data-projection-id="975"
                            style="transform: rotate(45deg) translateZ(0px); opacity: 1;"
                          >
                            <div
                              data-framer-component-type="SVG"
                              class="framer-dx3teb"
                              data-projection-id="976"
                              style="image-rendering: pixelated; flex-shrink: 0; opacity: 1;"
                            >
                              <div
                                class="svgContainer"
                                style="width: 100%; height: 100%; aspect-ratio: inherit;"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                                  style="width: 100%; height: 100%"
                                >
                                  <use href="#svg809914610"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="framer-1thq4qj-container" data-projection-id="977">
                  <div
                    class="framer-l7ndZ framer-oLTtJ framer-Fbvn0 framer-v-2bcbag"
                    tabindex="0"
                    data-projection-id="978"
                    style="display: contents;"
                  >
                    <div
                      class="framer-olk5xd"
                      data-framer-name="Closed"
                      data-highlight="true"
                      tabindex="0"
                      data-projection-id="979"
                      style="background-color: rgba(255, 255, 255, 0); width: 100%; border-radius: 20px; opacity: 1;"
                    >
                      <div
                        class="framer-14k8rn3"
                        data-projection-id="980"
                        style="opacity: 1;"
                      >
                        <div
                          class="framer-wf4vzb"
                          data-projection-id="981"
                          style="opacity: 1;"
                        >
                          <div
                            class="framer-10dl5x2"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="982"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <h3
                              class="framer-text framer-styles-preset-13xnbb0"
                              data-styles-preset="zFV_Olyc4"
                              data-projection-id="983"
                            >
                              다른 문의도 하고 싶어요.
                            </h3>
                          </div>
                          <div
                            class="framer-n744wx"
                            data-projection-id="984"
                            style="transform: rotate(45deg) translateZ(0px); opacity: 1;"
                          >
                            <div
                              data-framer-component-type="SVG"
                              class="framer-dx3teb"
                              data-projection-id="985"
                              style="image-rendering: pixelated; flex-shrink: 0; opacity: 1;"
                            >
                              <div
                                class="svgContainer"
                                style="width: 100%; height: 100%; aspect-ratio: inherit;"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                                  style="width: 100%; height: 100%"
                                >
                                  <use href="#svg809914610"></use>
                                </svg>
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
            <div class="framer-1gce88k" data-projection-id="986">
              <div class="framer-67tsin" data-projection-id="987">
                <div
                  class="framer-sitef5"
                  data-framer-component-type="RichTextContainer"
                  data-projection-id="988"
                  style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;"
                >
                  <h2
                    class="framer-text"
                    style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgQm9sZA==; --framer-font-family: "Pretendard Bold", serif; --framer-font-size: 48px; --framer-letter-spacing: -1px; --framer-text-alignment: left; --framer-text-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-line-height: 1.3em;'
                  >
                    데이터 수집을 위한
                    <span
                      class="framer-text"
                      style="--framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78));"
                    >
                      <br class="framer-text" />
                    </span>
                    국내 올인원 협업툴,
                    <span
                      class="framer-text"
                      style="--framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78));"
                    >
                      <br class="framer-text" />
                    </span>
                    여기가 유일해요
                  </h2>
                </div>
                <div class="framer-1fle0tc-container" data-projection-id="989">
                  <div
                    class="framer-ijid6 framer-v-gjy132"
                    tabindex="0"
                    data-projection-id="990"
                    style="display: contents;"
                  >
                    <a
                      class="framer-xr7rny framer-12om533"
                      data-framer-name="Standard Light"
                      data-highlight="true"
                      data-reset="button"
                      data-border="true"
                      href="https://app.walla.my"
                      rel="noopener"
                      tabindex="0"
                      data-projection-id="991"
                      style="--border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.08); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); filter: brightness(1); border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.18) 0px 0.60323px 0.60323px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.29021px 2.29021px -2.5px, rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px; opacity: 1;"
                    >
                      <div
                        class="framer-6ngclx"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="992"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, rgb(25, 21, 78)); --framer-link-current-text-color: hsl(0, 0%, 0%); --framer-link-hover-text-color: #666; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                      >
                        <p
                          class="framer-text"
                          data-projection-id="993"
                          style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-line-height: 1em; --framer-text-alignment: center; --framer-text-color: var(--extracted-r6o4lv);'
                        >
                          지금 바로 사용하기
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="framer-17gu12v-container" data-projection-id="994">
              <div
                class="framer-sTQKk framer-iDWhQ framer-v-fztfa5"
                tabindex="0"
                data-projection-id="995"
                style="display: contents;"
              >
                <footer
                  class="framer-fztfa5"
                  data-projection-id="996"
                  style="background-color: rgb(0, 116, 189); width: 100%; opacity: 1;"
                  data-framer-name="Purple"
                >
                  <div
                    class="framer-1djwvf1"
                    data-projection-id="2733"
                    style="opacity: 1;"
                  >
                    <div
                      class="framer-h3on9f"
                      data-projection-id="2734"
                      style="opacity: 1;"
                    >
                      <div
                        class="framer-1hsze9q"
                        data-framer-name="Walla_new_logo_white"
                        data-projection-id="2735"
                        style="opacity: 1;"
                      >
                        <div
                          data-framer-background-image-wrapper="true"
                          data-projection-id="2736"
                          style="position: absolute; pointer-events: none; user-select: none; border-radius: inherit; inset: 0px;"
                        >
                          <div style="display: contents; border-radius: inherit; pointer-events: none;">
                            <img
                              src="https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png"
                              alt="Gradient"
                              srcset="https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png?scale-down-to=512 512w, https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png?scale-down-to=4096 4096w, https://framerusercontent.com/images/qcsiD3ODVm13Qg3Huxef75SFhZ4.png 4191w"
                              sizes="min(100vw - 200px, 1200px)"
                              loading="lazy"
                              style="pointer-events: none; user-select: none; display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="framer-lhhcr"
                      data-projection-id="2737"
                      style="opacity: 1;"
                    >
                      <div
                        class="framer-17y1k85"
                        data-projection-id="2738"
                        style="opacity: 1;"
                      >
                        <div
                          class="framer-x1mwlm"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="2739"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                        >
                          <p
                            class="framer-text"
                            data-projection-id="2740"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                          >
                            주식회사 파프리카데이터랩
                          </p>
                        </div>
                        <div
                          class="framer-967hsy"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="2741"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                        >
                          <p
                            class="framer-text"
                            data-projection-id="2742"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                          >
                            서울특별시 마포구 공덕동 마포대로 122 17층
                          </p>
                        </div>
                        <div
                          class="framer-xxfrfl"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="2743"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                        >
                          <p
                            class="framer-text"
                            data-projection-id="2744"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                          >
                            사업자등록번호 : 660-88-02002
                          </p>
                        </div>
                        <div
                          class="framer-q2mac5"
                          data-framer-component-type="RichTextContainer"
                          data-projection-id="2745"
                          style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                        >
                          <p
                            class="framer-text"
                            data-projection-id="2746"
                            style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                          >
                            통신판매업신고번호 : 제2022-서울관악-0879{" "}
                          </p>
                        </div>
                      </div>
                      <div
                        class="framer-104gn7u"
                        data-projection-id="2747"
                        style="opacity: 1;"
                      >
                        <div
                          class="framer-13hgma2"
                          data-projection-id="2748"
                          style="opacity: 1;"
                        >
                          <div
                            class="framer-zl6g8"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2749"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <h3
                              class="framer-text"
                              data-projection-id="2750"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--extracted-a0htzi);'
                            >
                              Pages
                            </h3>
                          </div>
                          <div
                            class="framer-1soivv9"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2751"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2752"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              <a
                                class="framer-text"
                                href="https://blog.walla.my"
                                target="_blank"
                                rel="noopener"
                                data-projection-id="2753"
                              >
                                왈라 블로그
                              </a>
                            </p>
                          </div>
                          <div
                            class="framer-i0vr7x"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2754"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2755"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              <a
                                class="framer-text"
                                href="./blog/walla-pricing"
                                data-projection-id="2756"
                              >
                                가격정책
                              </a>
                            </p>
                          </div>
                          <div
                            class="framer-1vlsbi9"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2757"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2758"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              <a
                                class="framer-text"
                                href="https://paprikadatalab.com"
                                target="_blank"
                                rel="noopener"
                                data-projection-id="2759"
                              >
                                왈라팀
                              </a>
                            </p>
                          </div>
                        </div>
                        <div
                          class="framer-1tmhrlh"
                          data-projection-id="2760"
                          style="opacity: 1;"
                        >
                          <div
                            class="framer-1un5kur"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2761"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2762"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              SNS
                            </p>
                          </div>
                          <div
                            class="framer-hcnw03"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2763"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2764"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              <a
                                class="framer-text"
                                href="https://instagram.com/wallaform"
                                target="_blank"
                                rel="noopener"
                                data-projection-id="2765"
                              >
                                Instagram
                              </a>
                            </p>
                          </div>
                          <div
                            class="framer-otla5e"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2766"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2767"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              <a
                                class="framer-text"
                                href="https://www.youtube.com/channel/UCWKLvEWCUkjfVAS_lnWLrUQ"
                                target="_blank"
                                rel="noopener"
                                data-projection-id="2768"
                              >
                                Youtube
                              </a>
                            </p>
                          </div>
                          <div
                            class="framer-1sxi556"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2769"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2770"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              <a
                                class="framer-text"
                                href="https://www.linkedin.com/showcase/%EC%99%88%EB%9D%BC-walla/"
                                target="_blank"
                                rel="noopener"
                                data-projection-id="2771"
                              >
                                Linkedin
                              </a>
                            </p>
                          </div>
                        </div>
                        <div
                          class="framer-1w0zbmp"
                          data-projection-id="2772"
                          style="opacity: 1;"
                        >
                          <div
                            class="framer-ynllab"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2773"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; transform: none; opacity: 1;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2774"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgU2VtaUJvbGQ=; --framer-font-family: "Pretendard SemiBold", serif; --framer-font-size: 14px; --framer-line-height: 1.4em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              Terms and Policy
                            </p>
                          </div>
                          <div
                            class="framer-1jzbsik"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2775"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2776"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              <a
                                class="framer-text"
                                href="https://teampaprika.notion.site/8ee8ebc2d18343549d4d3093150ff628"
                                rel="noopener"
                                data-projection-id="2777"
                              >
                                Terms
                              </a>
                            </p>
                          </div>
                          <div
                            class="framer-1uh4prj"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2778"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2779"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              <a
                                class="framer-text"
                                href="https://teampaprika.notion.site/d3004d6c84774e7eb55c7f3719f8f78a"
                                rel="noopener"
                                data-projection-id="2780"
                              >
                                Privacy Policy
                              </a>
                            </p>
                          </div>
                          <div
                            class="framer-uk8s3p"
                            data-framer-component-type="RichTextContainer"
                            data-projection-id="2781"
                            style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                          >
                            <p
                              class="framer-text"
                              data-projection-id="2782"
                              style='--font-selector: Q1VTVE9NO1ByZXRlbmRhcmQgTWVkaXVt; --framer-font-family: "Pretendard Medium", serif; --framer-font-size: 14px; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                            >
                              <a
                                class="framer-text"
                                href="https://teampaprika.notion.site/a60e2ff00f62455c9ff1138b79e7ae0e"
                                target="_blank"
                                rel="noopener"
                                data-projection-id="2783"
                              >
                                Refund
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="framer-1xcpxf8"
                      data-projection-id="2784"
                      style="opacity: 1;"
                    >
                      <div
                        class="framer-1kidsrc"
                        data-framer-component-type="RichTextContainer"
                        data-projection-id="2785"
                        style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.7; transform: none;"
                      >
                        <p
                          class="framer-text"
                          data-projection-id="2786"
                          style='--font-selector: R0Y7TWFucm9wZS01MDA=; --framer-font-family: "Manrope", sans-serif; --framer-font-size: 11px; --framer-font-weight: 500; --framer-line-height: 1.5em; --framer-text-color: var(--extracted-r6o4lv);'
                        >
                          <a
                            class="framer-text framer-styles-preset-nmjwc0"
                            data-styles-preset="DFZKjYyGc"
                            href="https://www.framer.com/"
                            target="_blank"
                            rel="noopener"
                            data-projection-id="2787"
                          >
                            ©
                          </a>
                          2023 Paprika Data Lab Inc. All Rights reserved
                        </p>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
          <div id="overlay"></div>
        </div>
      </div>
      <div
        id="svg-templates"
        style="position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0"
      >
        <div id="container_svg-901415929_548">
          <svg
            width="1000"
            height="30"
            viewBox="0 0 1000 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-901415929_548"
          >
            <path
              opacity="0.9"
              d="M0 7.47221C0 3.6369 3.10913 0.527771 6.94444 0.527771H993.056C996.891 0.527771 1000 3.6369 1000 7.47221V29.6944H0V7.47221Z"
              fill="url(#svg-901415929_548_paint0_linear_13455_80689)"
            ></path>
            <defs>
              <linearGradient
                id="svg-901415929_548_paint0_linear_13455_80689"
                x1="500"
                y1="0.527771"
                x2="500"
                y2="29.6944"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00595238" stop-color="#DFE1E5"></stop>
                <stop offset="0.994048" stop-color="#DFE1E5"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div id="container_svg-1930292360_1063">
          <svg
            width="37"
            height="10"
            viewBox="0 0 37 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-1930292360_1063"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.1945 9.27779C6.49568 9.27779 8.36117 7.41231 8.36117 5.11112C8.36117 2.80994 6.49568 0.944458 4.1945 0.944458C1.89331 0.944458 0.027832 2.80994 0.027832 5.11112C0.027832 7.41231 1.89331 9.27779 4.1945 9.27779Z"
              fill="#FF6058"
              stroke="#E0443D"
              stroke-width="0.347222"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0834 9.27779C20.3846 9.27779 22.2501 7.41231 22.2501 5.11112C22.2501 2.80994 20.3846 0.944458 18.0834 0.944458C15.7822 0.944458 13.9167 2.80994 13.9167 5.11112C13.9167 7.41231 15.7822 9.27779 18.0834 9.27779Z"
              fill="#FFBD2E"
              stroke="#DFA115"
              stroke-width="0.347222"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.9723 9.27779C34.2735 9.27779 36.139 7.41231 36.139 5.11112C36.139 2.80994 34.2735 0.944458 31.9723 0.944458C29.6711 0.944458 27.8057 2.80994 27.8057 5.11112C27.8057 7.41231 29.6711 9.27779 31.9723 9.27779Z"
              fill="#29C940"
              stroke="#26AF36"
              stroke-width="0.347222"
            ></path>
          </svg>
        </div>
        <div id="container_svg452877805_1158">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1280.001"
            height="301.153"
            viewBox="0 0 338.667 79.68"
            id="svg452877805_1158"
          >
            <path
              d="M196.475 70.537c0 .643.203 1.016.576 1.016.315 0 .576-.169.813-.339L303.416 2.709A10.16 10.16 0 0 1 309.511.88h23.196c3.556 0 5.96 2.37 5.96 5.926v44.293c0 5.35-1.185 8.466-5.926 11.31l-28.14 16.932c-.281.195-.613.339-.948.339s-.677-.271-.677-1.253V26.752c0-.61-.169-1.016-.576-1.016-.297 0-.579.152-.813.339l-77.141 50.118c-1.761 1.185-3.827 1.829-5.926 1.795h-51.134c-3.59 0-5.96-2.37-5.96-5.96V8.196c0-.474-.203-.914-.61-.914-.296 0-.577.155-.813.339l-50.895 30.543c-.508.339-.643.576-.643.813 0 .203.102.406.44.779l36.369 36.335c.474.474.813.847.813 1.253 0 .339-.542.61-1.185.61h-32.848c-2.574 0-4.572-.373-5.96-1.761L84.049 54.182a.896.896 0 0 0-.677-.339c-.239 0-.472.081-.677.203L45.852 76.193c-2.235 1.355-3.759 1.727-5.96 1.727H5.995c-3.623.034-5.994-2.37-5.994-5.926V28.547c0-5.384 1.185-8.466 5.96-11.31L34.271.238a1.37 1.37 0 0 1 .745-.237c.44 0 .677.44.677 1.422V59.6c0 .61.135.88.576.88.3 0 .576-.169.847-.339l95.63-57.534c1.829-1.253 4.064-1.862 6.299-1.761h51.472c3.556 0 5.96 2.37 5.96 5.926l-.034 63.765z"
              fill="#131e29"
            ></path>
          </svg>
        </div>
        <div id="container_svg-976424370_2130">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="162.895"
            height="127.452"
            // xml:space="preserve"
            id="svg-976424370_2130"
          >
            <g fill="#E1002A">
              <path d="M23.969 93.54c-4.53-2.118-8.25-3.829-8.25-7.291 0-2.646 2.117-4.571 6.3-4.571 1.539 0 2.797.182 4.097.42.68.117 1.406.217 2.005.217 3.653 0 5.715-2.178 7.086-6.312l.567-1.688c-.583-.238-6.552-2.859-14.335-2.859-12.382 0-18.918 7.941-18.914 16.179 0 4.157 1.301 7.167 3.338 9.54 2.624 3.051 6.366 5.048 9.867 6.755 5.101 2.503 9.705 4.353 9.705 8.063.003 3.291-3.399 5.164-7.947 5.164-6.231 0-11.676-3.562-12.372-3.991L0 122.755c.91.514 7.499 4.697 18.343 4.697 11.555-.008 20.305-6.632 20.305-16.826-.001-10.143-8.111-13.903-14.679-17.086zm45.196 4.736 20.961-25.7H75.191L58.473 94.754h-.25V72.576H45.914l.003 54.441h.732c5.322 0 11.657-2.462 11.657-11.353v-12.499h.25l17.042 23.174h15.665L69.165 98.276zM90.824 14.26c-4.334.818-10.76 4.752-10.739 11.709.017 6.317 5.182 10.146 5.198 18.424.025 6.228-3.407 10.421-7.119 12.746a57.27 57.27 0 0 1 4.951-.223c3.792-.01 6.078.352 6.22.375l19.443-23.859c-5.4-8.084-11.706-14.357-17.954-19.172z"></path>
              <path d="M107.156 78.69c2.451-3.81 2.758-9.882 2.966-16.067.229-5.769 1.433-10.11 9.151-10.137 1.71-.006 3.339.229 6.289.221 11.306-.05 18.688-3.943 23.28-6.498-9.382-5.982-23.076-12.09-40.065-12.777-1.107 3.123-9.717 27.063-10.368 28.995.098.116 1.606 1.806 3.489 5.102 2.778 4.527 4.269 8.362 5.258 11.161z"></path>
            </g>
            <path
              d="M66.089 59.136c-.983.006-1.472-.647-1.605-1.78-.125-1.125-4.988-45.612-5.712-52.345-.105-.983-.349-2.788-.352-3.431C58.418.543 59.093.002 59.889 0c2.304-.009 14.86 2.932 28.185 12.271-3.839 1.083-10.784 5.076-10.752 13.344.025 7.318 5.265 11.346 5.292 18.688.04 11.94-13.683 14.828-16.525 14.833zm42.184 22.729c.209.554.406 1.02.604 1.346.306.52.705.756 1.195.754.31-.004.69-.107 1.11-.297 1.027-.472 41.626-19.372 47.749-22.197.888-.426 2.57-1.178 3.125-1.503.575-.327.838-.806.838-1.292a1.543 1.543 0 0 0-.236-.797c-.765-1.238-4.693-5.407-11.26-9.963-5.215 2.871-13.357 7.311-25.469 7.36-2.968.003-3.64-.196-5.667-.188-5.913.021-7.389 2.55-7.605 7.733-.036.979-.053 2.297-.11 3.742-.187 4.634-.734 11.025-4.274 15.302z"
              fill="#EE7602"
            ></path>
          </svg>
        </div>
        <div id="container_svg1493498078_1548">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="139.866"
            height="38.548"
            id="svg1493498078_1548"
          >
            <path
              fill="#C00C3F"
              d="M19.29 38.548c10.644 0 19.289-8.62 19.289-19.269C38.578 8.629 29.934 0 19.29 0 8.629 0 0 8.629 0 19.279c0 10.649 8.629 19.269 19.29 19.269"
            ></path>
            <path
              fill="#FFF"
              d="M18.515 10.818V27.73h5.375v-1.521h-3.826V10.818zm-5.385 4.615a2.312 2.312 0 0 0 0-4.626 2.316 2.316 0 0 0-2.31 2.316 2.312 2.312 0 0 0 2.31 2.31"
            ></path>
            <path
              fill="#FFF"
              d="M20.063 3.147a23.196 23.196 0 0 0-.768-.022c-8.904 0-16.149 7.248-16.149 16.145 0 4.323 1.68 8.374 4.722 11.42a16.091 16.091 0 0 0 11.427 4.719c4.304 0 8.356-1.68 11.405-4.719a16.036 16.036 0 0 0 4.735-11.42v-.717H23.904v1.485h9.993c0 .033 0 .19-.006.232-.508 7.607-6.862 13.632-14.597 13.632a14.524 14.524 0 0 1-10.35-4.289 14.47 14.47 0 0 1-4.299-10.344A14.53 14.53 0 0 1 8.944 8.924a14.538 14.538 0 0 1 10.35-4.285c.168 0 .58 0 .768.011V3.147z"
            ></path>
            <path
              fill="#6D6E71"
              d="M53.1 6.506h-5.795v25.09h17.801v-4.884H53.1V6.506zm24.757 15.529h4.72v4.388c-.871.331-2.567.662-4.182.662-5.217 0-6.955-2.651-6.955-8.03 0-5.134 1.655-8.157 6.872-8.157 2.899 0 4.555.909 5.919 2.649l3.603-3.314c-2.195-3.144-6.046-4.097-9.647-4.097-8.116 0-12.378 4.431-12.378 12.875 0 8.404 3.849 12.958 12.337 12.958 3.892 0 7.7-.993 9.769-2.441V17.355H77.857v4.68zm55.802-15.568V.146h-4.664v6.321h-6.165v4.459h6.165v6.247h4.664v-6.247h6.207V6.467zm-20.499.028V20.99c0 4.006-1.989 5.976-5.354 5.976s-5.354-1.97-5.354-5.976V6.495h-5.688v14.58c0 7.912 4.209 10.882 10.838 10.882l.204-.001.204.001c6.63 0 10.84-2.971 10.84-10.882V6.495h-5.69z"
            ></path>
          </svg>
        </div>
        <div id="container_svg-1465763066_194">
          <svg
            width="774"
            height="4"
            viewBox="-1 -1 774 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-1465763066_194"
          >
            <line
              y1="0.731348"
              x2="783.15"
              y2="0.731348"
              stroke="#E5E5E5"
              stroke-width="0.862499"
            ></line>
          </svg>
        </div>
        <div id="container_svg-1519560545_1344">
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-1519560545_1344"
          >
            <path
              d="M6.84812 6.25486C6.1328 6.25486 5.50801 6.03203 4.97378 5.58637C4.43993 5.14032 4.10441 4.57924 3.96723 3.90311H1.55669C1.3901 3.90311 1.25057 3.84667 1.13808 3.73378C1.02519 3.62129 0.96875 3.48175 0.96875 3.31517C0.96875 3.14859 1.02519 3.00886 1.13808 2.89597C1.25057 2.78348 1.3901 2.72724 1.55669 2.72724H3.96723C4.10441 2.05111 4.43993 1.49002 4.97378 1.04397C5.50801 0.598316 6.1328 0.375488 6.84812 0.375488C7.56344 0.375488 8.18822 0.598316 8.72246 1.04397C9.25631 1.49002 9.59182 2.05111 9.72901 2.72724H12.1396C12.3061 2.72724 12.4457 2.78348 12.5582 2.89597C12.671 3.00886 12.7275 3.14859 12.7275 3.31517C12.7275 3.48175 12.671 3.62129 12.5582 3.73378C12.4457 3.84667 12.3061 3.90311 12.1396 3.90311H9.72901C9.59182 4.57924 9.25631 5.14032 8.72246 5.58637C8.18822 6.03203 7.56344 6.25486 6.84812 6.25486ZM6.84812 5.07898C7.33807 5.07898 7.75452 4.9075 8.09748 4.56454C8.44045 4.22158 8.61193 3.80512 8.61193 3.31517C8.61193 2.82523 8.44045 2.40877 8.09748 2.06581C7.75452 1.72284 7.33807 1.55136 6.84812 1.55136C6.35817 1.55136 5.94172 1.72284 5.59875 2.06581C5.25579 2.40877 5.08431 2.82523 5.08431 3.31517C5.08431 3.80512 5.25579 4.22158 5.59875 4.56454C5.94172 4.9075 6.35817 5.07898 6.84812 5.07898Z"
              fill="#304EB8"
            ></path>
          </svg>
        </div>
        <div id="container_svg-1770691181_2730">
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-1770691181_2730"
          >
            <path
              d="M1.14262 3.08881C0.976042 3.08881 0.836505 3.03237 0.724013 2.91948C0.61113 2.80699 0.554688 2.66745 0.554688 2.50087V1.325C0.554688 1.15842 0.61113 1.01868 0.724013 0.905799C0.836505 0.793307 0.976042 0.737061 1.14262 0.737061H2.3185C2.48508 0.737061 2.62481 0.793307 2.7377 0.905799C2.85019 1.01868 2.90644 1.15842 2.90644 1.325V2.50087C2.90644 2.66745 2.85019 2.80699 2.7377 2.91948C2.62481 3.03237 2.48508 3.08881 2.3185 3.08881H1.14262ZM4.08231 3.08881C3.91573 3.08881 3.77619 3.03237 3.6637 2.91948C3.55081 2.80699 3.49437 2.66745 3.49437 2.50087V1.325C3.49437 1.15842 3.55081 1.01868 3.6637 0.905799C3.77619 0.793307 3.91573 0.737061 4.08231 0.737061H10.5496C10.7162 0.737061 10.8557 0.793307 10.9682 0.905799C11.0811 1.01868 11.1376 1.15842 11.1376 1.325V2.50087C11.1376 2.66745 11.0811 2.80699 10.9682 2.91948C10.8557 3.03237 10.7162 3.08881 10.5496 3.08881H4.08231ZM4.08231 6.0285C3.91573 6.0285 3.77619 5.97205 3.6637 5.85917C3.55081 5.74668 3.49437 5.60714 3.49437 5.44056V4.26468C3.49437 4.0981 3.55081 3.95837 3.6637 3.84548C3.77619 3.73299 3.91573 3.67675 4.08231 3.67675H10.5496C10.7162 3.67675 10.8557 3.73299 10.9682 3.84548C11.0811 3.95837 11.1376 4.0981 11.1376 4.26468V5.44056C11.1376 5.60714 11.0811 5.74668 10.9682 5.85917C10.8557 5.97205 10.7162 6.0285 10.5496 6.0285H4.08231ZM1.14262 6.0285C0.976042 6.0285 0.836505 5.97205 0.724013 5.85917C0.61113 5.74668 0.554688 5.60714 0.554688 5.44056V4.26468C0.554688 4.0981 0.61113 3.95837 0.724013 3.84548C0.836505 3.73299 0.976042 3.67675 1.14262 3.67675H2.3185C2.48508 3.67675 2.62481 3.73299 2.7377 3.84548C2.85019 3.95837 2.90644 4.0981 2.90644 4.26468V5.44056C2.90644 5.60714 2.85019 5.74668 2.7377 5.85917C2.62481 5.97205 2.48508 6.0285 2.3185 6.0285H1.14262ZM4.08231 8.96818C3.91573 8.96818 3.77619 8.91174 3.6637 8.79885C3.55081 8.68636 3.49437 8.54683 3.49437 8.38024V7.20437C3.49437 7.03779 3.55081 6.89805 3.6637 6.78517C3.77619 6.67268 3.91573 6.61643 4.08231 6.61643H10.5496C10.7162 6.61643 10.8557 6.67268 10.9682 6.78517C11.0811 6.89805 11.1376 7.03779 11.1376 7.20437V8.38024C11.1376 8.54683 11.0811 8.68636 10.9682 8.79885C10.8557 8.91174 10.7162 8.96818 10.5496 8.96818H4.08231ZM1.14262 8.96818C0.976042 8.96818 0.836505 8.91174 0.724013 8.79885C0.61113 8.68636 0.554688 8.54683 0.554688 8.38024V7.20437C0.554688 7.03779 0.61113 6.89805 0.724013 6.78517C0.836505 6.67268 0.976042 6.61643 1.14262 6.61643H2.3185C2.48508 6.61643 2.62481 6.67268 2.7377 6.78517C2.85019 6.89805 2.90644 7.03779 2.90644 7.20437V8.38024C2.90644 8.54683 2.85019 8.68636 2.7377 8.79885C2.62481 8.91174 2.48508 8.96818 2.3185 8.96818H1.14262Z"
              fill="#304EB8"
            ></path>
          </svg>
        </div>
        <div id="container_svg-1815758265_1838">
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-1815758265_1838"
          >
            <path
              d="M0.730515 8.50553C0.563933 8.50553 0.4242 8.44909 0.311316 8.33621C0.198824 8.22372 0.142578 8.08418 0.142578 7.9176C0.142578 7.75102 0.198824 7.61148 0.311316 7.49899C0.4242 7.3861 0.563933 7.32966 0.730515 7.32966H5.43401C5.60059 7.32966 5.74032 7.3861 5.85321 7.49899C5.9657 7.61148 6.02194 7.75102 6.02194 7.9176C6.02194 8.08418 5.9657 8.22372 5.85321 8.33621C5.74032 8.44909 5.60059 8.50553 5.43401 8.50553H0.730515ZM0.730515 3.80204C0.563933 3.80204 0.4242 3.74559 0.311316 3.63271C0.198824 3.52022 0.142578 3.38068 0.142578 3.2141C0.142578 3.04752 0.198824 2.90778 0.311316 2.7949C0.4242 2.68241 0.563933 2.62616 0.730515 2.62616H8.96163C9.12821 2.62616 9.26775 2.68241 9.38024 2.7949C9.49312 2.90778 9.54957 3.04752 9.54957 3.2141C9.54957 3.38068 9.49312 3.52022 9.38024 3.63271C9.26775 3.74559 9.12821 3.80204 8.96163 3.80204H0.730515ZM0.730515 6.15379C0.563933 6.15379 0.4242 6.09734 0.311316 5.98446C0.198824 5.87197 0.142578 5.73243 0.142578 5.56585C0.142578 5.39927 0.198824 5.25953 0.311316 5.14665C0.4242 5.03416 0.563933 4.97791 0.730515 4.97791H8.96163C9.12821 4.97791 9.26775 5.03416 9.38024 5.14665C9.49312 5.25953 9.54957 5.39927 9.54957 5.56585C9.54957 5.73243 9.49312 5.87197 9.38024 5.98446C9.26775 6.09734 9.12821 6.15379 8.96163 6.15379H0.730515ZM0.730515 1.45029C0.563933 1.45029 0.4242 1.39404 0.311316 1.28155C0.198824 1.16867 0.142578 1.02893 0.142578 0.862351C0.142578 0.695769 0.198824 0.556036 0.311316 0.443152C0.4242 0.33066 0.563933 0.274414 0.730515 0.274414H8.96163C9.12821 0.274414 9.26775 0.33066 9.38024 0.443152C9.49312 0.556036 9.54957 0.695769 9.54957 0.862351C9.54957 1.02893 9.49312 1.16867 9.38024 1.28155C9.26775 1.39404 9.12821 1.45029 8.96163 1.45029H0.730515Z"
              fill="#2272AF"
            ></path>
          </svg>
        </div>
        <div id="container_svg-632913815_1344">
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-632913815_1344"
          >
            <path
              d="M6.84812 6.40476C6.1328 6.40476 5.50801 6.18193 4.97378 5.73628C4.43993 5.29023 4.10441 4.72914 3.96723 4.05301H1.55669C1.3901 4.05301 1.25057 3.99657 1.13808 3.88369C1.02519 3.77119 0.96875 3.63166 0.96875 3.46508C0.96875 3.29849 1.02519 3.15876 1.13808 3.04588C1.25057 2.93338 1.3901 2.87714 1.55669 2.87714H3.96723C4.10441 2.20101 4.43993 1.63992 4.97378 1.19387C5.50801 0.748219 6.1328 0.525391 6.84812 0.525391C7.56344 0.525391 8.18822 0.748219 8.72246 1.19387C9.25631 1.63992 9.59182 2.20101 9.72901 2.87714H12.1396C12.3061 2.87714 12.4457 2.93338 12.5582 3.04588C12.671 3.15876 12.7275 3.29849 12.7275 3.46508C12.7275 3.63166 12.671 3.77119 12.5582 3.88369C12.4457 3.99657 12.3061 4.05301 12.1396 4.05301H9.72901C9.59182 4.72914 9.25631 5.29023 8.72246 5.73628C8.18822 6.18193 7.56344 6.40476 6.84812 6.40476ZM6.84812 5.22889C7.33807 5.22889 7.75452 5.0574 8.09748 4.71444C8.44045 4.37148 8.61193 3.95502 8.61193 3.46508C8.61193 2.97513 8.44045 2.55867 8.09748 2.21571C7.75452 1.87275 7.33807 1.70126 6.84812 1.70126C6.35817 1.70126 5.94172 1.87275 5.59875 2.21571C5.25579 2.55867 5.08431 2.97513 5.08431 3.46508C5.08431 3.95502 5.25579 4.37148 5.59875 4.71444C5.94172 5.0574 6.35817 5.22889 6.84812 5.22889Z"
              fill="#304EB8"
            ></path>
          </svg>
        </div>
        <div id="container_svg-210850639_1329">
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-210850639_1329"
          >
            <path
              d="M6.84812 6.47959C6.1328 6.47959 5.50801 6.25676 4.97378 5.8111C4.43993 5.36506 4.10441 4.80397 3.96723 4.12784H1.55669C1.3901 4.12784 1.25057 4.0714 1.13808 3.95852C1.02519 3.84602 0.96875 3.70649 0.96875 3.5399C0.96875 3.37332 1.02519 3.23359 1.13808 3.1207C1.25057 3.00821 1.3901 2.95197 1.55669 2.95197H3.96723C4.10441 2.27584 4.43993 1.71475 4.97378 1.2687C5.50801 0.823048 6.1328 0.60022 6.84812 0.60022C7.56344 0.60022 8.18822 0.823048 8.72246 1.2687C9.25631 1.71475 9.59182 2.27584 9.72901 2.95197H12.1396C12.3061 2.95197 12.4457 3.00821 12.5582 3.1207C12.671 3.23359 12.7275 3.37332 12.7275 3.5399C12.7275 3.70649 12.671 3.84602 12.5582 3.95852C12.4457 4.0714 12.3061 4.12784 12.1396 4.12784H9.72901C9.59182 4.80397 9.25631 5.36506 8.72246 5.8111C8.18822 6.25676 7.56344 6.47959 6.84812 6.47959ZM6.84812 5.30371C7.33807 5.30371 7.75452 5.13223 8.09748 4.78927C8.44045 4.44631 8.61193 4.02985 8.61193 3.5399C8.61193 3.04996 8.44045 2.6335 8.09748 2.29054C7.75452 1.94758 7.33807 1.77609 6.84812 1.77609C6.35817 1.77609 5.94172 1.94758 5.59875 2.29054C5.25579 2.6335 5.08431 3.04996 5.08431 3.5399C5.08431 4.02985 5.25579 4.44631 5.59875 4.78927C5.94172 5.13223 6.35817 5.30371 6.84812 5.30371Z"
              fill="#304EB8"
            ></path>
          </svg>
        </div>
        <div id="container_svg1259031598_194">
          <svg
            width="774"
            height="4"
            viewBox="-1 -1 774 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg1259031598_194"
          >
            <line
              y1="0.968287"
              x2="783.15"
              y2="0.968287"
              stroke="#E5E5E5"
              stroke-width="0.862499"
            ></line>
          </svg>
        </div>
        <div id="container_svg809914610">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            id="svg809914610"
          >
            <path
              d="M 17 7 L 7 17 M 7 7 L 12.03 12.03 L 17 17"
              fill="transparent"
              stroke-width="2"
              stroke="var(--token-fbf0164e-dee2-4e19-9b25-5c9f4ebdcda6, rgb(91, 94, 118))"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-dasharray=""
            ></path>
          </svg>
        </div>
        <div id="container_svg1323200948_1342">
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg1323200948_1342"
          >
            <path
              d="M6.84812 6.86741C6.1328 6.86741 5.50801 6.64458 4.97378 6.19892C4.43993 5.75287 4.10441 5.19179 3.96723 4.51566H1.55669C1.3901 4.51566 1.25057 4.45922 1.13808 4.34633C1.02519 4.23384 0.96875 4.0943 0.96875 3.92772C0.96875 3.76114 1.02519 3.62141 1.13808 3.50852C1.25057 3.39603 1.3901 3.33978 1.55669 3.33978H3.96723C4.10441 2.66366 4.43993 2.10257 4.97378 1.65652C5.50801 1.21087 6.1328 0.988037 6.84812 0.988037C7.56344 0.988037 8.18822 1.21087 8.72246 1.65652C9.25631 2.10257 9.59182 2.66366 9.72901 3.33978H12.1396C12.3061 3.33978 12.4457 3.39603 12.5582 3.50852C12.671 3.62141 12.7275 3.76114 12.7275 3.92772C12.7275 4.0943 12.671 4.23384 12.5582 4.34633C12.4457 4.45922 12.3061 4.51566 12.1396 4.51566H9.72901C9.59182 5.19179 9.25631 5.75287 8.72246 6.19892C8.18822 6.64458 7.56344 6.86741 6.84812 6.86741ZM6.84812 5.69153C7.33807 5.69153 7.75452 5.52005 8.09748 5.17709C8.44045 4.83412 8.61193 4.41767 8.61193 3.92772C8.61193 3.43777 8.44045 3.02132 8.09748 2.67836C7.75452 2.33539 7.33807 2.16391 6.84812 2.16391C6.35817 2.16391 5.94172 2.33539 5.59875 2.67836C5.25579 3.02132 5.08431 3.43777 5.08431 3.92772C5.08431 4.41767 5.25579 4.83412 5.59875 5.17709C5.94172 5.52005 6.35817 5.69153 6.84812 5.69153Z"
              fill="#304EB8"
            ></path>
          </svg>
        </div>
        <div id="container_svg-1454463407_2730">
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-1454463407_2730"
          >
            <path
              d="M1.14262 3.23847C0.976042 3.23847 0.836505 3.18203 0.724013 3.06914C0.61113 2.95665 0.554688 2.81711 0.554688 2.65053V1.47466C0.554688 1.30807 0.61113 1.16834 0.724013 1.05546C0.836505 0.942965 0.976042 0.886719 1.14262 0.886719H2.3185C2.48508 0.886719 2.62481 0.942965 2.7377 1.05546C2.85019 1.16834 2.90644 1.30807 2.90644 1.47466V2.65053C2.90644 2.81711 2.85019 2.95665 2.7377 3.06914C2.62481 3.18203 2.48508 3.23847 2.3185 3.23847H1.14262ZM4.08231 3.23847C3.91573 3.23847 3.77619 3.18203 3.6637 3.06914C3.55081 2.95665 3.49437 2.81711 3.49437 2.65053V1.47466C3.49437 1.30807 3.55081 1.16834 3.6637 1.05546C3.77619 0.942965 3.91573 0.886719 4.08231 0.886719H10.5496C10.7162 0.886719 10.8557 0.942965 10.9682 1.05546C11.0811 1.16834 11.1376 1.30807 11.1376 1.47466V2.65053C11.1376 2.81711 11.0811 2.95665 10.9682 3.06914C10.8557 3.18203 10.7162 3.23847 10.5496 3.23847H4.08231ZM4.08231 6.17815C3.91573 6.17815 3.77619 6.12171 3.6637 6.00883C3.55081 5.89634 3.49437 5.7568 3.49437 5.59022V4.41434C3.49437 4.24776 3.55081 4.10803 3.6637 3.99514C3.77619 3.88265 3.91573 3.8264 4.08231 3.8264H10.5496C10.7162 3.8264 10.8557 3.88265 10.9682 3.99514C11.0811 4.10803 11.1376 4.24776 11.1376 4.41434V5.59022C11.1376 5.7568 11.0811 5.89634 10.9682 6.00883C10.8557 6.12171 10.7162 6.17815 10.5496 6.17815H4.08231ZM1.14262 6.17815C0.976042 6.17815 0.836505 6.12171 0.724013 6.00883C0.61113 5.89634 0.554688 5.7568 0.554688 5.59022V4.41434C0.554688 4.24776 0.61113 4.10803 0.724013 3.99514C0.836505 3.88265 0.976042 3.8264 1.14262 3.8264H2.3185C2.48508 3.8264 2.62481 3.88265 2.7377 3.99514C2.85019 4.10803 2.90644 4.24776 2.90644 4.41434V5.59022C2.90644 5.7568 2.85019 5.89634 2.7377 6.00883C2.62481 6.12171 2.48508 6.17815 2.3185 6.17815H1.14262ZM4.08231 9.11784C3.91573 9.11784 3.77619 9.0614 3.6637 8.94851C3.55081 8.83602 3.49437 8.69648 3.49437 8.5299V7.35403C3.49437 7.18745 3.55081 7.04771 3.6637 6.93483C3.77619 6.82234 3.91573 6.76609 4.08231 6.76609H10.5496C10.7162 6.76609 10.8557 6.82234 10.9682 6.93483C11.0811 7.04771 11.1376 7.18745 11.1376 7.35403V8.5299C11.1376 8.69648 11.0811 8.83602 10.9682 8.94851C10.8557 9.0614 10.7162 9.11784 10.5496 9.11784H4.08231ZM1.14262 9.11784C0.976042 9.11784 0.836505 9.0614 0.724013 8.94851C0.61113 8.83602 0.554688 8.69648 0.554688 8.5299V7.35403C0.554688 7.18745 0.61113 7.04771 0.724013 6.93483C0.836505 6.82234 0.976042 6.76609 1.14262 6.76609H2.3185C2.48508 6.76609 2.62481 6.82234 2.7377 6.93483C2.85019 7.04771 2.90644 7.18745 2.90644 7.35403V8.5299C2.90644 8.69648 2.85019 8.83602 2.7377 8.94851C2.62481 9.0614 2.48508 9.11784 2.3185 9.11784H1.14262Z"
              fill="#304EB8"
            ></path>
          </svg>
        </div>
        <div id="container_svg184620325_2718">
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg184620325_2718"
          >
            <path
              d="M1.14262 3.31342C0.976042 3.31342 0.836505 3.25698 0.724013 3.14409C0.61113 3.0316 0.554688 2.89206 0.554688 2.72548V1.54961C0.554688 1.38302 0.61113 1.24329 0.724013 1.13041C0.836505 1.01792 0.976042 0.96167 1.14262 0.96167H2.3185C2.48508 0.96167 2.62481 1.01792 2.7377 1.13041C2.85019 1.24329 2.90644 1.38302 2.90644 1.54961V2.72548C2.90644 2.89206 2.85019 3.0316 2.7377 3.14409C2.62481 3.25698 2.48508 3.31342 2.3185 3.31342H1.14262ZM4.08231 3.31342C3.91573 3.31342 3.77619 3.25698 3.6637 3.14409C3.55081 3.0316 3.49437 2.89206 3.49437 2.72548V1.54961C3.49437 1.38302 3.55081 1.24329 3.6637 1.13041C3.77619 1.01792 3.91573 0.96167 4.08231 0.96167H10.5496C10.7162 0.96167 10.8557 1.01792 10.9682 1.13041C11.0811 1.24329 11.1376 1.38302 11.1376 1.54961V2.72548C11.1376 2.89206 11.0811 3.0316 10.9682 3.14409C10.8557 3.25698 10.7162 3.31342 10.5496 3.31342H4.08231ZM4.08231 6.2531C3.91573 6.2531 3.77619 6.19666 3.6637 6.08378C3.55081 5.97129 3.49437 5.83175 3.49437 5.66517V4.48929C3.49437 4.32271 3.55081 4.18298 3.6637 4.07009C3.77619 3.9576 3.91573 3.90136 4.08231 3.90136H10.5496C10.7162 3.90136 10.8557 3.9576 10.9682 4.07009C11.0811 4.18298 11.1376 4.32271 11.1376 4.48929V5.66517C11.1376 5.83175 11.0811 5.97129 10.9682 6.08378C10.8557 6.19666 10.7162 6.2531 10.5496 6.2531H4.08231ZM1.14262 6.2531C0.976042 6.2531 0.836505 6.19666 0.724013 6.08378C0.61113 5.97129 0.554688 5.83175 0.554688 5.66517V4.48929C0.554688 4.32271 0.61113 4.18298 0.724013 4.07009C0.836505 3.9576 0.976042 3.90136 1.14262 3.90136H2.3185C2.48508 3.90136 2.62481 3.9576 2.7377 4.07009C2.85019 4.18298 2.90644 4.32271 2.90644 4.48929V5.66517C2.90644 5.83175 2.85019 5.97129 2.7377 6.08378C2.62481 6.19666 2.48508 6.2531 2.3185 6.2531H1.14262ZM4.08231 9.19279C3.91573 9.19279 3.77619 9.13635 3.6637 9.02346C3.55081 8.91097 3.49437 8.77144 3.49437 8.60485V7.42898C3.49437 7.2624 3.55081 7.12266 3.6637 7.00978C3.77619 6.89729 3.91573 6.84104 4.08231 6.84104H10.5496C10.7162 6.84104 10.8557 6.89729 10.9682 7.00978C11.0811 7.12266 11.1376 7.2624 11.1376 7.42898V8.60485C11.1376 8.77144 11.0811 8.91097 10.9682 9.02346C10.8557 9.13635 10.7162 9.19279 10.5496 9.19279H4.08231ZM1.14262 9.19279C0.976042 9.19279 0.836505 9.13635 0.724013 9.02346C0.61113 8.91097 0.554688 8.77144 0.554688 8.60485V7.42898C0.554688 7.2624 0.61113 7.12266 0.724013 7.00978C0.836505 6.89729 0.976042 6.84104 1.14262 6.84104H2.3185C2.48508 6.84104 2.62481 6.89729 2.7377 7.00978C2.85019 7.12266 2.90644 7.2624 2.90644 7.42898V8.60485C2.90644 8.77144 2.85019 8.91097 2.7377 9.02346C2.62481 9.13635 2.48508 9.19279 2.3185 9.19279H1.14262Z"
              fill="#304EB8"
            ></path>
          </svg>
        </div>
      </div>
    </body>
  );
}

export default Home;
