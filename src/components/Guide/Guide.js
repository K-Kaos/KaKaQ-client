import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import guidePic from "../../Assets/Projects/survey.png";
import { Link } from "react-router-dom";
import GuideIntro from "../Guide/GuideIntro";

function Guide(props) {
  const isLogin = props.isLogin;
  return (
    <Container fluid className="guide-header">
      <Row>
        <Col md={5} style={{ paddingBottom: 20 }}>
          <img
            src={guidePic}
            alt="home pic"
            className="img-fluid"
            style={{ maxHeight: "450px" }}
          />
        </Col>
        <Col md={7} >
          <section class="dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:t-white">문서를 만드는 것만큼 쉬운 온라인 양식 만들기</h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                여러 질문 유형 중에서 쉽게 선택하고, 질문을 작성하고, 값을 사용자 지정할 수 있습니다.</p>
              <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link to="/survey" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-blue-900" style={{ textDecoration: "none" }}>
                  설문조사
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
                {isLogin ?
                  <Link to="/signup" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" style={{ textDecoration: "none" }}>
                    회원가입
                  </Link> :
                  <Link to="/chatbot" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" style={{ textDecoration: "none" }}>
                    챗봇 설문조사
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </Link>
                }
              </div>
            </div>
          </section>
        </Col>
      </Row>
      <GuideIntro />
    </Container>
  );
}

export default Guide;
