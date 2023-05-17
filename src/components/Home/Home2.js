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

function Home(props) {
  const isLogin = props.isLogin;
  const homeSectionRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);

  const members = [
    { name: "서빈", image: seobin },
    { name: "소연", image: soyeon },
    { name: "소현", image: sohyun },
    { name: "주은", image: jueun },
    { name: "예경", image: yekyeong },
  ];
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
  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.2, // 0~1 사이 값. 관찰 대상이 뷰포트에서 보이는 비율
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setFadeIn(true);
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, options);

  //   observer.observe(homeSectionRef.current);
  // }, []);

  return (
    <Container className="home-content">
      <section
        ref={homeSectionRef}
        className={`py-2 px-4 mx-auto max-w-screen-xl text-center justify-center items-center lg:py-16 ${
          fadeIn ? "fade-in" : ""
        }`}
      >
        <div className="w-full py-2 px-4 mx-auto max-w-screen-xl text-center justify-center items-center lg:py-16">
          <h1 className="mx-auto mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            Share Your Opinion.
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            KaKaQ와 의견을 나누고 <br />
            친구들을 만나보세요.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            {isLogin ? (
              <Link
                to="/login"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-blue-900"
                style={{ textDecoration: "none" }}
              >
                설문조사 시작
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            ) : (
              <Link
                to="/survey"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-blue-900"
                style={{ textDecoration: "none" }}
              >
                설문조사 시작
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            )}
            <Link
              to="/guide"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              style={{ textDecoration: "none" }}
            >
              더 알아보기
            </Link>
          </div>
        </div>
      </section>
      {/* <img
        src={homeLogo}
        alt="home pic"
        className="img-fluid"
        style={{ maxHeight: "450px" }}
      /> */}
      {/* 동영상 넣기 */}
      {/* <div>
      <video autoPlay loop muted>
        <source src="/Users/seobi/Documents/GitHub/KaKaQ-client/src/Assets/Guide/video3.mov" type="video/mov" />
      </video>
    </div> */}
      <GuideIntro />

      <div className="py-24 sm:py-32">
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
                className="p-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-center gap-x-6">
                  <img className="h-24 w-24 rounded-full" src={seobin} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      Seobin Lee
                    </h3>
                    <p className="text-base font-semibold leading-6 text-indigo-600">
                      PM / Front-end
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li>
              <Card
                className="p-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-center gap-x-6">
                  <img className="h-24 w-24 rounded-full" src={soyeon} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      Soyeon You{" "}
                    </h3>
                    <p className="text-base font-semibold leading-6 text-indigo-600">
                      Database
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li>
              <Card
                className="p-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-center gap-x-6">
                  <img className="h-24 w-24 rounded-full" src={sohyun} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      Sohyun Lee
                    </h3>
                    <p className="text-base font-semibold leading-6 text-indigo-600">
                      Back-end
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li>
              <Card
                className="p-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-center gap-x-6">
                  <img className="h-24 w-24 rounded-full" src={jueun} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      Jueun Yoon
                    </h3>
                    <p className="text-base font-semibold leading-6 text-indigo-600">
                      Front-end
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li>
              <Card
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
                    <p className="text-base font-semibold leading-6 text-indigo-600">
                      Back-end
                    </p>
                  </div>
                </div>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Home;
