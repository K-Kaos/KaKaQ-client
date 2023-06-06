import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";


function SummaryResult(props) { 
    return (
        <>
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
                                    {props.survey.title}
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
                                                    value={props.startDate}
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
                                                    value={props.endDate}
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
                                    
                                    {/* <div className="ant-picker ant-picker-range css-diro6f MuiBox-root css-rk138a"> */}
                                        {/* // style={{ padding: "0px", backgroundColor: "white" }}> */}
                                            {/* <p></p> */}
                                        {/* <div
                                            className="MuiBox-root css-0"
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                backgroundColor: "white"
                                            }}
                                        > */}
                                        <p className="text-gray-700 text-1xl font-normal" style={{ paddingTop: "10px"}}>
                                        설문조사의 정보와 설문 참여자의 정보를 확인하세요!</p>        
                                        {/* </div> */}
                                    {/* </div> */}
                                    
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
                                                                    {props.survey.creator}
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
                                                                    {props.survey.city}
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
                                                                    {props.count}
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
                                                            <BarChart width={500} height={200} data={props.data}>
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
        </>
    );
}

export default SummaryResult;