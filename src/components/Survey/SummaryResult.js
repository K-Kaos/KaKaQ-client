import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import logo from "../../Assets/Logo/logo.png";


function SummaryResult() { 
    const [surveyCategory, setSurveyCategory] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [survey, setSurvey] = useState([]);
    const [surveytitle, setSurveyTitle] = useState([]);
    const { id } = useParams();
    const [whoLoggedIn, setWhoLeggedIn] = useState(null);
    const [count, setCount] = useState([]);
    const [surveyCreator, setSurveyCreator] = useState([]);
    const [city, setCity] = useState([]);
    const [users, setUsers] = useState([]);
    const [lion, setLion] = useState(0);
    const [con, setCon] = useState(0);
    const [apeach, setApeach] = useState(0);
    const [chun, setChun] = useState(0);
    const [mu, setMu] = useState(0);
    const [showProfile, setShowProfile] = useState(false);

    const data = [
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
    useEffect(() => {
        
        const LoggedInUser = sessionStorage.getItem('whoLoggedIn');
        if (LoggedInUser === null) {
            alert("로그인 후 이용해 주세요");
            window.location.href = "/login";
        } else {
            setWhoLeggedIn(LoggedInUser);
            // console.log(id);
            axios.get(("/api/surveys/get/"+id)
            ).then(function(res){
                const surveyinfo = res.data;
                console.log(surveyinfo);
                setSurveyTitle(surveyinfo.title);
                setStartDate(surveyinfo.startDate.split("T")[0]);
                setEndDate(surveyinfo.endDate.split("T")[0]);
                setSurveyCreator(surveyinfo.creator);
                if(!surveyinfo.city) setCity("False");
                else setCity(surveyinfo.city)
                setMu(0);
                setLion(0);
                setApeach(0);
                setCon(0);
                setChun(0);
                //응답한 모든 유저들 가져오기
                return axios.get(("/api/surveys/participant/"+id)
                ).then(function(res){
                    
                    console.log(res);
                    setCount(res.data.length);
                    setUsers(res.data);
                    for (let i=0; i<res.data.length; i++){
                        if(res.data[i].role=="라이언") setLion(prevMu => prevMu + 1);
                        else if(res.data[i].role=="춘식이") setChun(prevMu => prevMu + 1);
                        else if(res.data[i].role=="콘") setCon(prevMu => prevMu + 1);
                        else if(res.data[i].role=="어피치") setApeach(prevMu => prevMu + 1);
                        else if(res.data[i].role=="무지") setMu(prevMu => prevMu + 1);
                    }
                    console.log(lion);
                    // console.log(users[0]);
                })
            }).catch(function (error) {
                console.log(error);
              });
            
        }


    }, []);
    const handleSurveyCategorySelect = (event) => {
        const selectedOption = event.target.value;
        setSurveyCategory(selectedOption);
    };


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

    const handleClickProfile = () => {
        setShowProfile(true);
      };
    
      const handleCloseProfile = () => {
        setShowProfile(false);
      };
      
    return (
        <>
            <div class="MuiBox-root css-u244mv">
            <header
              class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-1jrh10h"
              style={{
                boxShadow: "none",
                borderBottomWidth: "2px",
                borderBottomStyle: "solid",
                borderBottomColor: "rgb(238, 238, 238)",
              }}
            >
              <div
                class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-i6s8oy"
                style={{
                  height: "100%",
                  minHeight: "56px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  class="MuiBox-root css-0"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexGrow: "1",
                    flexShrink: "1",
                    flexBasis: "0%",
                  }}
                >
                  <div
                    class="MuiBox-root css-12kkxif"
                    aria-label="Back to dashboard"
                  >
                    <img
                      src={logo}
                      alt="KAKAQ-logo"
                      style={{ height: "18px" }}
                    />
                  </div>
                  <div class="MuiBox-root css-0">
                    <div
                      class="MuiBox-root css-0"
                      style={{
                        display: "flex",
                        paddingLeft: "20px",
                        alignItems: "center",
                        top: "18px",
                        position: "absolute",
                        flexDirection: "row",
                      }}
                    >
                      <div class="MuiBox-root css-191gqa8">
                        <p class="MuiTypography-root MuiTypography-body1 css-qt1p9i">
                          내 프로젝트
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="MuiBox-root css-0"></div>
                </div>
                <div class="MuiBox-root css-tzmmb1">
                  <div class="MuiBox-root css-1gmwkzf">
                    <a
                      class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                      tabindex="0"
                      href="가이드"
                      target="_blank"
                      aria-label="프로젝트 가이드 보러가기"
                    >
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="HelpRoundedIcon"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88c.43-1.47 1.68-2.59 3.23-2.83 1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z"></path>
                      </svg>
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </a>
                  </div>
                  <button
                    class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-148fdm8"
                    tabindex="0"
                    type="button"
                    aria-label="설정"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "16px",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      class="MuiAvatar-root MuiAvatar-circular css-1kavoh2"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <img
                        alt="profile_image"
                        src="https://lh3.googleusercontent.com/a/AGNmyxYCL1L24exss9DNiVXadg4hyk22I6p-ygUS50-mVx0=s96-c"
                        class="MuiAvatar-img css-1hy9t21"
                        onClick={handleClickProfile}
                      />
                    </div>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </div>
              </div>
            </header>
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
                                    {surveytitle}
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
                                            
                                        </div></div>
                                    
                                </div>
                                <div className="MuiBox-root css-iat7r2">
                                    <div class="tremor-Grid-root grid grid-cols-3 gap-6">
                                        <div className="tremor-Card-root relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg">
                                            <div className="tremor-Flex-root flex w-full flex-row justify-between items-start">
                                                <p className="text-gray-500 text-sm font-normal">
                                                    설문조사 정보
                                                </p>
                                            </div>
                                            <div className="tremor-Flex-root flex w-full flex-row justify-start items-baseline truncate space-x-3">
                                                <ul className="tremor-List-root w-full overflow-hidden divide-y text-gray-500 divide-gray-200 mt-4 flex flex-col justify-between">
                                                    <li className="tremor-ListItem-root w-full flex justify-between items-center truncate tabular-nums py-2 text-sm">
                                                        <div className="w-full py-3">
                                                            <p className="text-gray-500 text-sm font-normal">
                                                                작성자
                                                            </p>
                                                        </div>
                                                        <div className="w-full py-3">
                                                            <p>
                                                                <span style={{ color: "black"}}>
                                                                    {surveyCreator}
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="tremor-ListItem-root w-full flex justify-between items-center truncate tabular-nums py-2 text-sm">
                                                        <div className="w-full py-3">
                                                            <p className="text-gray-500 text-sm font-normal">GPS 여부</p>
                                                        </div>
                                                        <div className="w-full py-3">
                                                            <p>
                                                                <span style={{ color: "black"}}>
                                                                    {city}
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="tremor-ListItem-root w-full flex justify-between items-center truncate tabular-nums py-2 text-sm">
                                                        <div className="w-full py-3">
                                                            <p className="text-gray-500 text-sm font-normal">응답자 수</p>
                                                        </div>
                                                        <div className="w-full py-3">
                                                            <p>
                                                                <span style={{ color: "black"}}>
                                                                    {count}
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </li>
                                                    
                                                </ul>                                          
                                                
                                            </div>
                                        </div>
                                        <div class="tremor-Col-root col-span-1 md:col-span-3 lg:col-span-2">
                                            <div class="tremor-Card-root relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg pl-0 pr-10">
                                                <div className="tremor-Flex-root flex w-full flex-row justify-between items-start">
                                                    <p className="text-gray-500 text-sm font-normal">
                                                        참여자 유형 정보
                                                    </p>
                                                </div>
                                                <div class="w-full mt-4 h-80">
                                                    <div
                                                        className="recharts-responsive-container"
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            minWidth: "0px",
                                                        }}>
                                                        <div
                                                            className="recharts-wrapper"
                                                            role="region"
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "row",
                                                                backgroundColor: "white"
                                                            }}
                                                        >
                                                            <BarChart width={500} height={200} data={data}>
                                                                <Bar dataKey="num" fill="#8884d8" />
                                                                    <XAxis dataKey="name" />
                                                                <YAxis />
                                                            </BarChart>
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
                </div>
            </div>
        </>
    );
}

export default SummaryResult;