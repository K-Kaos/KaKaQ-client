import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import guidePic from "../../Assets/Projects/survey.png";
import { Link } from "react-router-dom";

function Guide() {
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
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Create an online form as easy as creating a document</h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Easily select from multiple question types,
                create questions, and customize values.</p>
              <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link to="/survey" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ textDecoration: "none" }}>
                  Make Survey
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
                <Link to="/signup" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" style={{ textDecoration: "none" }}>
                  Sign up
                </Link>
              </div>
            </div>
          </section>
        </Col>
      </Row>
      <div class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">챗봇 기반 설문 제작 웹서비스</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">설문 제작자와 응답자 모두 <br />‘
              쉽고’, ‘편하고’, ‘재미있게’ 사용</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">업무용이나 프로젝트 진행을 위해 주로 사용되던 기존의 설문 제작 폼 서비스와 다르게 보다 자유로운 용도로 쉽고 편리하게 이용이 가능한 설문 제작 서비스</p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </div>
                  Use Chat GPT
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Chat GPT를 이용한 설문지 자동 생성<br />
                  입력 란에 주제 또는 요구사항 입력 시 관련 입력에 대한 설문지가 자동으로 생성<br />
                  직접 질문과 옵션을 생성하지 않아도 되는 편리함을 제공함</dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  GPS Service
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">GPS를 이용한 특정 지역 이용자 대상 설문 제한 기능<br />
                  사용자의 위치 정보를 통해 특정 지역 범위에 안에 있는 사용자만 설문에 참여 </dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  Associated Questions
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Chat GPT를 이용한 사용자 입력 질문지 연관질문 자동생성 기능<br />
                  질문 입력창에 질문을 입력하면 챗봇이 연관 질문 예시를 추천</dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                    </svg>
                  </div>
                  Type Test
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Chat GPT를 이용한 유형테스트 질문지 자동생성 기능<br />회원가입 시 진행하는 성격 유형 테스트를 통하여 사용자에게 즐거움을 제공</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

    </Container>
  );
}

export default Guide;
