import React, { useState } from "react";
import seobin from "/Users/seobi/Documents/GitHub/KaKaQ-client/src/assets/images/avatars/seobin.png";
import jueun from "/Users/seobi/Documents/GitHub/KaKaQ-client/src/assets/images/avatars/seobin.png";
import sohyun from "/Users/seobi/Documents/GitHub/KaKaQ-client/src/assets/images/avatars/seobin.png";
import soyeon from "/Users/seobi/Documents/GitHub/KaKaQ-client/src/assets/images/avatars/seobin.png";
import yekyeong from "/Users/seobi/Documents/GitHub/KaKaQ-client/src/assets/images/avatars/seobin.png";
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import CIcon from "@coreui/icons-react";
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from "@coreui/icons";

import avatar1 from "src/assets/images/avatars/1.jpg";
import avatar2 from "src/assets/images/avatars/2.jpg";
import avatar3 from "src/assets/images/avatars/3.jpg";
import avatar4 from "src/assets/images/avatars/4.jpg";
import avatar5 from "src/assets/images/avatars/5.jpg";
import avatar6 from "src/assets/images/avatars/6.jpg";

import WidgetsBrand from "../widgets/WidgetsBrand";
import WidgetsDropdown from "../widgets/WidgetsDropdown";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Dashboard = (props) => {
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const progressExample = [
    { title: "Visits", value: "29.703 Users", percent: 40, color: "success" },
    { title: "Unique", value: "24.093 Users", percent: 20, color: "info" },
    {
      title: "Pageviews",
      value: "78.706 Views",
      percent: 60,
      color: "warning",
    },
    { title: "New Users", value: "22.123 Users", percent: 80, color: "danger" },
    {
      title: "Bounce Rate",
      value: "Average Rate",
      percent: 40.15,
      color: "primary",
    },
  ];

  const progressGroupExample1 = [
    { title: "Monday", value1: 34, value2: 78 },
    { title: "Tuesday", value1: 56, value2: 94 },
    { title: "Wednesday", value1: 12, value2: 67 },
    { title: "Thursday", value1: 43, value2: 91 },
    { title: "Friday", value1: 22, value2: 73 },
    { title: "Saturday", value1: 53, value2: 82 },
    { title: "Sunday", value1: 9, value2: 69 },
  ];

  const progressGroupExample2 = [
    { title: "Male", icon: cilUser, value: 53 },
    { title: "Female", icon: cilUserFemale, value: 43 },
  ];

  const progressGroupExample3 = [
    { title: "Organic Search", icon: cibGoogle, percent: 56, value: "191,235" },
    { title: "Facebook", icon: cibFacebook, percent: 15, value: "51,223" },
    { title: "Twitter", icon: cibTwitter, percent: 11, value: "37,564" },
    { title: "LinkedIn", icon: cibLinkedin, percent: 8, value: "27,319" },
  ];

  const tableExample = [
    {
      avatar: { src: avatar1, status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        new: true,
        registered: "Jan 1, 2021",
      },
      country: { name: "USA", flag: cifUs },
      usage: {
        value: 50,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "success",
      },
      payment: { name: "Mastercard", icon: cibCcMastercard },
      activity: "10 sec ago",
    },
    {
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios",
        new: false,
        registered: "Jan 1, 2021",
      },
      country: { name: "Brazil", flag: cifBr },
      usage: {
        value: 22,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "info",
      },
      payment: { name: "Visa", icon: cibCcVisa },
      activity: "5 minutes ago",
    },
    {
      avatar: { src: avatar3, status: "warning" },
      user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2021" },
      country: { name: "India", flag: cifIn },
      usage: {
        value: 74,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "warning",
      },
      payment: { name: "Stripe", icon: cibCcStripe },
      activity: "1 hour ago",
    },
    {
      avatar: { src: avatar4, status: "secondary" },
      user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2021" },
      country: { name: "France", flag: cifFr },
      usage: {
        value: 98,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "danger",
      },
      payment: { name: "PayPal", icon: cibCcPaypal },
      activity: "Last month",
    },
    {
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        new: true,
        registered: "Jan 1, 2021",
      },
      country: { name: "Spain", flag: cifEs },
      usage: {
        value: 22,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "primary",
      },
      payment: { name: "Google Wallet", icon: cibCcApplePay },
      activity: "Last week",
    },
    {
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        new: true,
        registered: "Jan 1, 2021",
      },
      country: { name: "Poland", flag: cifPl },
      usage: {
        value: 43,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "success",
      },
      payment: { name: "Amex", icon: cibCcAmex },
      activity: "Last week",
    },
  ];
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {/* <WidgetsDropdown /> */}
      {/* <body
        id="page-top"
        data-spy="scroll"
        data-target=".navbar-fixed-top"
        data-new-gr-c-s-check-loaded="14.1108.0"
        data-gr-ext-installed=""
      > */}
      <div id="root">
        <div>
          <CCard className="mb-4 ">
            <div class="intro">
              <div class="overlay">
                <div class="container">
                  <div class="row">
                    <div class="col-md-8 col-md-offset-2 intro-text">
                      <h1>
                        Share Your Opinion<span></span>
                      </h1>
                      <p>KaKaQ로 의견을 나누고 친구들을 만나보세요.</p>
                      <a
                        href="#features"
                        class="btn btn-custom btn-lg page-scroll"
                      >
                        설문조사 시작
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CCard>
          <CCard className="mb-4">
            <div id="features" class="text-center">
              <div class="container">
                <div class="col-md-10 col-md-offset-1 section-title">
                  <h2>Features</h2>
                </div>
                <div class="row">
                  <div class="col-xs-6 col-md-3">
                    {" "}
                    <i class="fa fa-comments-o"></i>
                    <h3>Lorem ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet placerat facilisis felis mi in
                      tempus eleifend pellentesque natoque etiam.
                    </p>
                  </div>
                  <div class="col-xs-6 col-md-3">
                    <i class="fa fa-bullhorn"></i>
                    <h3>Lorem ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet placerat facilisis felis mi in
                      tempus eleifend pellentesque natoque etiam.
                    </p>
                  </div>
                  <div class="col-xs-6 col-md-3">
                    <i class="fa fa-group"></i>
                    <h3>Lorem ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet placerat facilisis felis mi in
                      tempus eleifend pellentesque natoque etiam.
                    </p>
                  </div>
                  <div class="col-xs-6 col-md-3">
                    {" "}
                    <i class="fa fa-magic"></i>
                    <h3>Lorem ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet placerat facilisis felis mi in
                      tempus eleifend pellentesque natoque etiam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CCard>
          <CCard className="mb-4">
            <div id="about">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-md-6">
                    <img src="#" class="img-responsive" alt="" />{" "}
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div class="about-text">
                      <h2>About Us</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                      <h3>Why Choose Us?</h3>
                      <div class="list-style">
                        <div class="col-lg-6 col-sm-6 col-xs-12">
                          <ul>
                            <li>Lorem ipsum dolor</li>
                            <li>Tempor incididunt</li>
                            <li>Lorem ipsum dolor</li>
                            <li>Incididunt ut labore</li>
                          </ul>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12">
                          <ul>
                            <li> Aliquip ex ea commodo</li>
                            <li> Lorem ipsum dolor</li>
                            <li> Exercitation ullamco</li>
                            <li> Lorem ipsum dolor</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CCard>
          <CCard className="mb-4">
            <div id="services" class="text-center">
              <div class="container">
                <div class="section-title">
                  <h2>챗봇 기반 설문 제작 웹서비스</h2>
                  <p>
                    업무용이나 프로젝트 진행을 위해 주로 사용되었던 기존의 설문
                    제작 폼 서비스와 다르게 보다 자유로운 용도로 쉽고 편리하게
                    이용 가능한 설문 제작 서비스
                  </p>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <i class="fa fa-wordpress"></i>
                    <div class="service-desc">
                      <h3>Chat GPT 사용</h3>
                      <p>
                        Chat GPT를 이용한 설문지 자동 생성 입력란에 주제를 입력
                        시, 관련 입력에 대한 설문지가 자동으로 생성 직접 질문과
                        옵션을 생성하지 않아도 되는 편리함을 제공함
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <i class="fa fa-cart-arrow-down"></i>
                    <div class="service-desc">
                      <h3>연관 질문 자동 생성</h3>
                      <p>
                        Chat GPT를 이용한 사용자 입력 질문지 연관질문 자동 생성
                        가능 질문 입력창에 질문을 입력하면 챗봇이 연관 질문
                        예시를 추천
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <i class="fa fa-cloud-download"></i>
                    <div class="service-desc">
                      <h3>GPS 서비스</h3>
                      <p>
                        GPS를 이용한 특정 지역 이용자 대상 설문 제한 기능
                        사용자의 위치 정보를 통해 특정 지역 범위 안에 있는
                        사용자만 설문 참여 가능
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <i class="fa fa-language"></i>
                    <div class="service-desc">
                      <h3>유형 테스트</h3>
                      <p>
                        Chat GPT를 이용한 유형 테스트 질문지 자동 생성 기능
                        회원가입 시 진행하는 성격 유형 테스트를 통하여
                        사용자에게 즐거움을 제공
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CCard>
          {/* Connect to Us  */}
          <CCard className="mb-4">
            <CCardBody>
              <div className="col-md-8">
                <div className="row">
                  <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p>
                      Please fill out the form below to send us an email and we
                      will get back to you as soon as possible.
                    </p>
                  </div>
                  <form name="sentMessage" validate onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            required
                            onChange={handleChange}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required
                            onChange={handleChange}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="4"
                        placeholder="Message"
                        required
                        onChange={handleChange}
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <button type="submit" className="btn btn-custom btn-lg">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-3 col-md-offset-1 contact-info">
                <div className="contact-item">
                  <h3>Contact Info</h3>
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Address
                    </span>
                    {props.data ? props.data.address : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Phone
                    </span>{" "}
                    {props.data ? props.data.phone : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {props.data ? props.data.email : "loading"}
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="social">
                    <ul>
                      <li>
                        <a href={props.data ? props.data.facebook : "/"}>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href={props.data ? props.data.twitter : "/"}>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={props.data ? props.data.youtube : "/"}>
                          <i className="fa fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CCardBody>
          </CCard>
        </div>
      </div>

      {/* </body> */}

      {/* 팀 소개 */}
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </CCol>
            <CCol>
              <div className="about-text">
                <h2>About Us</h2>
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
                            <p className="text-base font-semibold leading-6 text-indigo-600">
                              PM / Front-end
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
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
                            <p className="text-base font-semibold leading-6 text-indigo-600">
                              Database
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
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
                            <p className="text-base font-semibold leading-6 text-indigo-600">
                              Back-end
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
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
                            <p className="text-base font-semibold leading-6 text-indigo-600">
                              Front-end
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
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
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      
      {/* Connect to Us  */}
      <CCard className="mb-4">
        <CCardBody>
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-medium-emphasis">
                January - July 2021
              </div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {["Day", "Month", "Year"].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === "Month"}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: "300px", marginTop: "40px" }}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: hexToRgba(getStyle("--cui-info"), 10),
                  borderColor: getStyle("--cui-info"),
                  pointHoverBackgroundColor: getStyle("--cui-info"),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: "My Second dataset",
                  backgroundColor: "transparent",
                  borderColor: getStyle("--cui-success"),
                  pointHoverBackgroundColor: getStyle("--cui-success"),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: "My Third dataset",
                  backgroundColor: "transparent",
                  borderColor: getStyle("--cui-danger"),
                  pointHoverBackgroundColor: getStyle("--cui-danger"),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress
                  thin
                  className="mt-2"
                  color={item.color}
                  value={item.percent}
                />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      <WidgetsBrand withCharts />

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {" & "} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">
                          New Clients
                        </div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          Recurring Clients
                        </div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">
                          {item.title}
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          Pageviews
                        </div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          Organic
                        </div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}%
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{" "}
                          <span className="text-medium-emphasis small">
                            ({item.percent}%)
                          </span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Country
                    </CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Payment Method
                    </CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={item.avatar.src}
                          status={item.avatar.status}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? "New" : "Recurring"}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          size="xl"
                          icon={item.country.flag}
                          title={item.country.name}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">
                              {item.usage.period}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={item.usage.color}
                          value={item.usage.value}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">
                          Last login
                        </div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
