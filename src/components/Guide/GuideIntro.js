import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import makesurvey from "../../Assets/Guide/makesurvey.png";
import share from "../../Assets/Guide/share.png";
import participate from "../../Assets/Guide/participate.png";
import result from "../../Assets/Guide/result.png";

function GuideIntro(props) {
  const isLogin = props.isLogin;
  return (
    <Container fluid className="guide-header">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-semibold leading-7">KaKaQ가 처음이신가요?</h2>
            <p className="mt-6 text-base font-bold tracking-tight text-gray-700 sm:text-base">아래 가이드를 따라 진행해보세요.  <br /></p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <article className="flex max-w-xl flex-col items-center justify-between">
              <div className="flex items-center ">
                <img src={makesurvey} alt="" className="h-40 w-40 rounded-xl bg-gray-50" />
              </div>
              <div className="group relative ">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0"></span>
                  1. 설문 조사 생성하기
                </h3>
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-gray-600">설문조사 직접 생성 / 챗봇을 이용한 설문조사를 이용하여 생성합니다.</p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-center justify-between">
              <div className="flex items-center ">
                <img src={share} alt="" className="h-40 w-40 rounded-xl bg-gray-50" />
              </div>
              <div className="group relative">
                <h3 className="mt-6 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0"></span>
                  2. 생성된 설문조사 공유하기
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">생성한 설문조사를 친구 / 동료들과 링크로 공유하세요.</p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-center justify-between">
              <div className="flex items-center ">
                <img src={participate} alt="" class="h-40 w-40 rounded-xl bg-gray-50" />
              </div>
              <div className="group relative">
                <h3 className="mt-6 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0"></span>
                  3. 원하는 설문 참여하기
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">자신이 위치한 지역을 대상으로 하는 설문조사에 참여하세요. </p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-center justify-between">
              <div className="flex items-center ">
                <img src={result} alt="" className="h-40 w-40 rounded-xl bg-gray-50" />
              </div>
              <div className="group relative">
                <h3 className="mt-6 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0"></span>
                  4. 설문조사 결과 확인하기
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">자신이 참가한, 생성한 설문조사의 결과를 확인하세요. </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-base font-semibold leading-7 text-indigo-600">챗봇 기반 설문 제작 웹서비스</p>
            <h2 className="mt-2 font-bold tracking-tight text-gray-900 sm:text-4xl">설문 제작자와 응답자 모두 <br />
              쉽고’, ‘편하고’, ‘재미있게’ 사용</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">업무용이나 프로젝트 진행을 위해 주로 사용되던 기존의 설문 제작 폼 서비스와 다르게 보다 자유로운 용도로 쉽고 편리하게 이용이 가능한 설문 제작 서비스</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </div>
                  Chat GPT 사용
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Chat GPT를 이용한 설문지 자동 생성<br />
                  입력 란에 주제 또는 요구사항 입력 시 관련 입력에 대한 설문지가 자동으로 생성<br />
                  직접 질문과 옵션을 생성하지 않아도 되는 편리함을 제공함</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  GPS 서비스
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">GPS를 이용한 특정 지역 이용자 대상 설문 제한 기능<br />
                  사용자의 위치 정보를 통해 특정 지역 범위에 안에 있는 사용자만 설문에 참여 </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  연관 질문 생성
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Chat GPT를 이용한 사용자 입력 질문지 연관질문 자동생성 기능<br />
                  질문 입력창에 질문을 입력하면 챗봇이 연관 질문 예시를 추천</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                    </svg>
                  </div>
                  유형 테스트
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Chat GPT를 이용한 유형테스트 질문지 자동생성 기능<br />회원가입 시 진행하는 성격 유형 테스트를 통하여 사용자에게 즐거움을 제공</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default GuideIntro;