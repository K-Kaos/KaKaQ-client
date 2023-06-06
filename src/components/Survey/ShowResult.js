import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BarChart from "./BarChart";
import SummaryResult from "./SummaryResult";
import NavbarProfile from "../../NavbarProfile";

function ShowResult() {
  const [activeTab, setActiveTab] = useState('summary');
  const [receiveResponse, setReceiveResponse] = useState(false);
  const [survey, setSurvey] = useState([]);
  const [responses, setResponses] = useState([]);
  const [users, setUsers] = useState([]);
  const [username,setUsername] = useState("");

  const [surveyCategory, setSurveyCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [count, setCount] = useState("");
  const [lion, setLion] = useState(0);
  const [con, setCon] = useState(0);
  const [apeach, setApeach] = useState(0);
  const [chun, setChun] = useState(0);
  const [mu, setMu] = useState(0);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleReceiveResponse = () => {
    setReceiveResponse((prev) => !prev);
  };

  const p_data = [
    {
      name: "라이언",
      num: lion
    },
    {
      name: "콘",
      num: con
    },
    {
      name: "어피치",
      num: apeach
    },
    {
      name: "춘식이",
      num: chun
    }
    ,
    {
      name: "무지",
      num: mu
    }
  ];

  let data = [];
  const keys = ['라이언','어피치','무지','콘','춘식이'];

  function processData(options, responses) {
    const data = options.map((option) => {
      const optionData = {
        option: option,
      };
  
      for (const response of responses) {
        if (response.value === option) {
          if (optionData[response.answererRole]) {
            optionData[response.answererRole] += response.count;
          } else {
            optionData[response.answererRole] = response.count;
          }
        } else {
          if (!optionData[response.answererRole]) {
            optionData[response.answererRole] = 0;
          }
        }
      }
  
      return optionData;
    });

    return data.reverse();
  }

  function calculateOptionCounts(question, responses) {
    const optionCounts = {};
    
    for (const option of question.options) {
      optionCounts[option] = 0;
    }
  
    if (responses[question.question_id]) {
      for (const response of responses[question.question_id]) {
        const { value, count } = response;
        optionCounts[value] += count;
      }
    }
    
    return optionCounts;
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
        setUsername(response.data.creator);
        setStartDate(response.data.startDate.substring(0, response.data.startDate.indexOf("T")));
        setEndDate(response.data.endDate.substring(0, response.data.endDate.indexOf("T")));

        // 다음 요청을 실행
        return axios.get(("/api/mypage/created/" + id + "/responses"));
      })
      .then(function (response) {
        const surveyResponses = response.data;
        setResponses(surveyResponses);
        return axios.get(("/api/surveys/participant/"+id)
        ).then(function(res){
            setCount(res.data.length);
            setUsers(res.data);
            for (let i=0; i<res.data.length; i++){
                if(res.data[i].role=="라이언") setLion(prevMu => prevMu + 1);
                else if(res.data[i].role=="춘식이") setChun(prevMu => prevMu + 1);
                else if(res.data[i].role=="콘") setCon(prevMu => prevMu + 1);
                else if(res.data[i].role=="어피치") setApeach(prevMu => prevMu + 1);
                else if(res.data[i].role=="무지") setMu(prevMu => prevMu + 1);
            }
        })
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, []);

  const [siData, setsiData] = useState();
  const [geoData, setgeoData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      //현재위치 가져오기
      setgeoData((prevData) => ({
        ...prevData,
        ["latitude"]: pos.coords.latitude,
        ["longitude"]: pos.coords.longitude,
      }));
    });
  }, []);

  useEffect(() => {
    axios
      .post("/api/mypage/gps", {
        //서버에 좌표 주고 시 받아오기
        latitude: geoData.latitude,
        longitude: geoData.longitude,
      })
      .then(function (response) {
        setsiData(response.data);
        console.log(siData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [geoData]);

  return (
    <>
      <div class="MuiContainer-root jss2 css-1fbzopa">
      <NavbarProfile 
            username={username}
            whoLoggedIn={whoLoggedIn}
            siData={siData}/>
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
              <div class="MuiBox-root css-u244mv">
                <SummaryResult survey={survey} responses={responses} startDate={startDate} endDate={endDate} data={p_data} count={count}/>
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
                                  <p className="text-gray-500 text-sm font-normal" style={{ paddingTop: '20px', paddingRight: '20px' }}>
                                    설문 기간
                                  </p>
                                  <input
                                    readOnly
                                    placeholder="Start date"
                                    size="12"
                                    autoComplete="off"
                                    value={startDate}
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
                                    value={endDate}
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
                            <p className="text-gray-700 text-1xl font-normal" style={{ paddingTop: "10px"}}>
                                        설문조사의 결과와 유형별 그래프를 확인하세요!</p>   
                          </div>
                          <div className="MuiBox-root css-iat7r2" style={{ textAlign: 'left' , marginLeft: '20px'}}>
                            {survey.questions.map((question, index) => (
                              <div className="tremor-Card-root relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg" key={question.question_id}>
                                <p className="MuiTypography-root MuiTypography-body1 css-1u8f789">
                                  Q{index + 1}. {question.text}
                                </p>
                                {question.type.name === '객관식' && (
                                  <>
                                  <ul>
                                    {question.options.map((option, index) => {
                                      const optionCounts = calculateOptionCounts(question, responses);
                                      const count = optionCounts[option];
                                      return (
                                        <li key={index} style={{ marginTop: '10px' }}>
                                          {index + 1})&nbsp;&nbsp;{option} ({count})
                                        </li>
                                      );
                                    })}
                                  </ul>
                                  <div>
                                    {responses[question.question_id] ? (
                                      <BarChart data={processData(question.options, responses[question.question_id])} keys={keys} />
                                    ) : (<ul>
                                      <li>설문에 대한 응답이 없습니다.</li>
                                      </ul>
                                    )}
                                  </div>
                                  </>
                                )}
                                {question.type.name === '찬부식' && (
                                  <>
                                  <ul>
                                    {question.options.map((option, index) => {
                                      const optionCounts = calculateOptionCounts(question, responses);
                                      const count = optionCounts[option];
                                      return (
                                        <li key={index} style={{ marginTop: '10px' }}>
                                          {index + 1})&nbsp;&nbsp;{option} ({count})
                                        </li>
                                      );
                                    })}
                                  </ul>
                                  <div>
                                    {responses[question.question_id] ? (
                                      <BarChart data={processData(question.options, responses[question.question_id])} keys={keys} />
                                    ) : (
                                      <ul>
                                      <li>설문에 대한 응답이 없습니다.</li>
                                      </ul>
                                    )}
                                  </div>
                                  </>
                                )}
                                {question.type.name === '서술형' && (
                                  <>
                                  <ul>
                                    {responses[question.question_id] ? (
                                      responses[question.question_id].map((response, index) => (
                                        <li style={{ marginTop: '15px' }}>답변 {index + 1}&nbsp;:&nbsp;{response.value}</li>
                                      ))
                                    ) : (
                                      <p>설문에 대한 응답이 없습니다.</p>
                                    )}
                                  </ul>
                                  </>
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
