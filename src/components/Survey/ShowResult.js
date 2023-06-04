import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SurveyCompletion from "./SurveyCompletion";
import BarChart from "./BarChart";
import SummaryResult from "./SummaryResult";

function ShowResult() {

  const [activeTab, setActiveTab] = useState('summary');
  const [receiveResponse, setReceiveResponse] = useState(false);
  const [survey, setSurvey] = useState([]);
  const [responses, setResponses] = useState([]);

  const [surveyCategory, setSurveyCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSurveyCategorySelect = (event) => {
    const selectedOption = event.target.value;
    setSurveyCategory(selectedOption);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateRangeChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const getSelectedDates = () => {
    const selectedDates = [];
    if (startDate && endDate) {
      const currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        selectedDates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
    return selectedDates;
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(nextMonth);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleReceiveResponse = () => {
    setReceiveResponse((prev) => !prev);
  };

  let data = [];
  const keys = ['라이언','어피치','무지','콘','춘식이'];

  function processData(options, responses) {
    const data = options.map((option) => {
      const optionData = {
        option: option,
      };
  
      for (const response of responses) {
        if (response.value === option) {
          optionData[response.answererRole] = response.count;
        } else {
          optionData[response.answererRole] = 0;
        }
      }
  
      return optionData;
    });

    return data.reverse();
  }

  const { id } = useParams();
  const [whoLoggedIn, setWhoLeggedIn] = useState(null); // 사용자 이메일(아이디) 저장
  useEffect(() => {
    const LoggedInUser = sessionStorage.getItem('whoLoggedIn');
    if (LoggedInUser === null) {
      alert("로그인 후 이용해 주세요");
      window.location.href = "/login";
    } else {
      setWhoLeggedIn(LoggedInUser);

      axios.get(("/api/surveys/get/" + id))
      .then(function (response) {
        const surveyInfos = response.data;
        console.log(response.data);
        setSurvey(surveyInfos);

        // 다음 요청을 실행
        return axios.get(("/api/mypage/created/" + id + "/responses"));
      })
      .then(function (response) {
        const surveyResponses = response.data;
        setResponses(surveyResponses);
      })
      .catch(function (error) {
        console.log(error);
      });
      // fetch('/api/surveys/get/' + id)
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log('서버 응답:', data);

      //   })
      //   .catch(error => console.error('오류 발생:', error));
    }
  }, []);

  return (
    <>
      <div class="MuiContainer-root jss2 css-1fbzopa">
        <div tabindex="-1" style={{ outline: "none" }}>
          <div class="MuiBox-root css-10d4xjj">
            <div class="MuiBox-root css-1kkyquz" style={{ position: "sticky", top: "0" }}>
              <div class="MuiBox-root css-1rr4qq7"></div>
              <div className="MuiBox-root css-1todmcq">
                <div className="MuiTabs-root css-orq8zk">
                  <div
                    className="MuiTabs-scroller MuiTabs-fixed css-1anid1y"
                    style={{ overflow: "hidden", marginBottom: "0px" }}
                  >
                    <div
                      aria-label="lab API tabs example"
                      className="MuiTabs-flexContainer css-k008qs"
                      role="tablist"
                    >
                      <button
                        className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary ${activeTab === 'summary' ? 'Mui-selected' : ''
                          } css-1b8ypoz`}
                        tabIndex="0"
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'summary'}
                        aria-controls="mui-p-29865-P-Summary"
                        id="mui-p-29865-T-Summary"
                        onClick={() => handleTabChange('summary')}
                      >
                        요약 보기
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      <button
                        className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary ${activeTab === 'responses' ? 'Mui-selected' : ''
                          } css-1b8ypoz`}
                        tabIndex="-1"
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'responses'}
                        aria-controls="mui-p-29865-P-Responses"
                        id="mui-p-29865-T-Responses"
                        onClick={() => handleTabChange('responses')}
                      >
                        응답 확인하기
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                    </div>
                    <span
                      className="MuiTabs-indicator css-eu9d1t"
                      style={{ left: "0px", width: "90px" }}
                    //style={activeTab === 'summary' ? { left: '0px', width: '90px' } : {}}
                    ></span>
                  </div>
                </div>
              </div>

              <div className="css-167kglg">
                <p className="MuiTypography-root MuiTypography-body2 css-1n3sce8">
                  응답 받기
                </p>
                <span className="MuiSwitch-root MuiSwitch-sizeMedium css-1mgt3ei">
                  <span className="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked Mui-checked css-1sf64yn">
                    <input
                      className="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"
                      type="checkbox"
                    />
                    <span className="MuiSwitch-thumb css-19gndve"></span>
                  </span>
                  <span className="MuiSwitch-track css-1ju1kxc"></span>
                </span>
              </div>
            </div>
            {activeTab === 'summary' && (
              <div>
                <SummaryResult />
              </div>
            )}

            {activeTab === 'responses' && (
              <>
                <div class="MuiBox-root css-u244mv">
                  <div
                    class="MuiTabPanel-root css-1pyy37n"
                    role="tabpanel"
                    aria-labelledby="mui-p-29865-T-Summary"
                    id="mui-p-29865-P-Summary"
                  >
                    <div class="css-1dfoqio">
                      <div class="MuiContainer-root MuiContainer-maxWidthXl css-1ekb41w">
                        <div class="MuiBox-root css-6r2fzw">
                          <div className="MuiBox-root css-69i1ev">
                            <p className="MuiTypography-root MuiTypography-body1 css-1u8f7it">
                              {survey.title}
                            </p>
                            <div className="MuiBox-root css-0">
                              <div
                                className="MuiBox-root css-0"
                                style={{
                                  backgroundColor: "rgba(9, 30, 66, 0.04)",
                                  borderRadius: "12px",
                                  padding: "4px 4px 0px",
                                  cursor: "pointer",
                                  position: "relative",
                                }}
                              >
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-luvl9n"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="MoreHorizIcon"
                                >
                                  <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="MuiBox-root css-kl5uk3">
                            <div>
                              <div className="ant-picker ant-picker-range css-diro6f MuiBox-root css-rk138a">
                                <div className="ant-picker-input ant-picker-input-active">
                                  <input
                                    readOnly
                                    placeholder="Start date"
                                    size="12"
                                    autoComplete="off"
                                    value="2023-05-23"
                                  />
                                </div>
                                <div className="ant-picker-range-separator">
                                  <span
                                    aria-label="to"
                                    className="ant-picker-separator"
                                  >
                                    <span
                                      role="img"
                                      aria-label="swap-right"
                                      className="anticon anticon-swap-right"
                                    >
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        focusable="false"
                                        data-icon="swap-right"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"></path>
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="ant-picker-input">
                                  <input
                                    readOnly
                                    placeholder="End date"
                                    size="12"
                                    autoComplete="off"
                                    value="2023-05-25"
                                  />
                                </div>
                                <div
                                  className="ant-picker-active-bar"
                                  style={{
                                    left: "0px",
                                    width: "150px",
                                    position: "absolute",
                                  }}
                                ></div>
                                <span className="ant-picker-suffix">
                                  <span
                                    role="img"
                                    aria-label="calendar"
                                    className="anticon anticon-calendar"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      data-icon="calendar"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="ant-picker ant-picker-range css-diro6f MuiBox-root css-rk138a"
                              style={{ padding: "0px", backgroundColor: "white" }}>
                              <div
                                className="MuiBox-root css-0"
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  backgroundColor: "white"
                                }}
                              >
                                <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-kl5uk3 css-4m3kxx">
                                  <div
                                    className="MuiInputBase-root MuiFilledInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-hiddenLabel css-b4zgsm"
                                    style={{
                                      width: "fit-content",
                                      backgroundColor: "white"
                                    }}
                                  >
                                    <select
                                      value={surveyCategory}
                                      onChange={handleSurveyCategorySelect}
                                      tabIndex="0"
                                      role="button"
                                      aria-expanded={isOpen ? "true" : "false"}
                                      aria-haspopup="listbox"
                                      aria-labelledby="select-color"
                                      id="select-color"
                                      className="MuiSelect-select MuiSelect-filled MuiInputBase-input MuiFilledInput-input MuiInputBase-inputHiddenLabel css-19tmo23"
                                    >
                                      <option value="">
                                        {surveyCategory === ""
                                          ? "전체"
                                          : surveyCategory}
                                      </option>
                                      <option value="라이언">라이언</option>
                                      <option value="어피치">어피치</option>
                                      <option value="무지">무지</option>
                                      <option value="콘">콘</option>
                                      <option value="춘식이">춘식이</option>
                                    </select>
                                  </div>
                                </div>
                              </div></div>
                            <button
                              className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1y1p9da"
                              tabIndex="0"
                              type="button"
                            >
                              <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="SearchIcon"
                                >
                                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </svg>
                              </span>
                              조회하기
                              <span className="MuiTouchRipple-root css-w0pj6f"></span>
                            </button>
                          </div>
                          <div className="MuiBox-root css-iat7r2" style={{ textAlign: 'left' , marginLeft: '20px'}}>
                            {survey.questions.map((question, index) => (
                              <div className="tremor-Card-root relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg" key={question.question_id}>
                                <p className="MuiTypography-root MuiTypography-body1 css-1u8f789">
                                  Q{index + 1}. {question.text}
                                </p>
                                {question.type.name === '객관식' && (
                                  <div>
                                    <BarChart data={processData(question.options, responses[question.question_id])} keys={keys} />
                                  </div>
                                )}
                                {question.type.name === '찬부식' && (
                                  <div>
                                    <BarChart data={processData(question.options, responses[question.question_id])} keys={keys} />
                                  </div>
                                )}
                                {question.type.name === '서술형' && (
                                  <div>
                                   {responses[question.question_id].map((response, index) => (
                                     <div
                                     style={{ marginBottom: "15px" }}>
                                     <p>답변 {index+1}&nbsp;:&nbsp;{response.value}</p>
                                     </div>
                                   ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      </div>

    </>
  );
}

export default ShowResult;
