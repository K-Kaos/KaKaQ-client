import React, { useEffect, useState } from "react";

function SummaryResult() {
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

    return (
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
                                        새로운 프로젝트
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
                                <div className="MuiBox-root css-iat7r2">
                                    <div class="tremor-Grid-root grid grid-cols-3 gap-6">
                                        <div className="tremor-Card-root relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg">
                                            <div className="tremor-Flex-root flex w-full flex-row justify-between items-start">
                                                <p className="text-gray-500 text-sm font-normal">
                                                    총 조회수
                                                </p>
                                                <span className="tremor-BadgeDelta-root w-max flex-shrink-0 inline-flex justify-center items-center cursor-default rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-0.5 text-sm">
                                                    <svg
                                                        className="tremor-BadgeDelta-icon -ml-1 mr-1.5 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path
                                                            fill="currentColor"
                                                            d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
                                                        ></path>
                                                    </svg>
                                                    <p className="tremor-BadgeDelta-text text-sm whitespace-nowrap">
                                                        50%
                                                    </p>
                                                </span>
                                            </div>
                                            <div className="tremor-Flex-root flex w-full flex-row justify-start items-baseline truncate space-x-3">
                                                <p className="text-gray-700 text-3xl font-semibold">
                                                    3
                                                </p>
                                            </div>
                                        </div>
                                        <div class="tremor-Col-root col-span-1 md:col-span-3 lg:col-span-2">
                                            <div class="tremor-Card-root relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg pl-0 pr-10">
                                                <div class="w-full mt-4 h-80">
                                                    <div
                                                        className="recharts-responsive-container"
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            minWidth: "0px",
                                                        }}
                                                    >
                                                        <div
                                                            className="recharts-wrapper"
                                                            role="region"
                                                            style={{
                                                                position: "relative",
                                                                cursor: "default",
                                                                width: "561px",
                                                                height: "320px",
                                                            }}
                                                        >
                                                            <svg
                                                                className="recharts-surface"
                                                                width="561"
                                                                height="320"
                                                                viewBox="0 0 561 320"
                                                            >
                                                                <title></title>
                                                                <desc></desc>
                                                                <defs>
                                                                    <clipPath id="recharts156-clip">
                                                                        <rect
                                                                            x="61"
                                                                            y="45"
                                                                            height="240"
                                                                            width="495"
                                                                        ></rect>
                                                                    </clipPath>
                                                                </defs>
                                                                <g className="recharts-cartesian-grid">
                                                                    <g className="recharts-cartesian-grid-horizontal">
                                                                        <line
                                                                            strokeDasharray="3 3"
                                                                            stroke="#ccc"
                                                                            fill="none"
                                                                            x="61"
                                                                            y="45"
                                                                            width="495"
                                                                            height="240"
                                                                            offset="[object Object]"
                                                                            x1="61"
                                                                            y1="285"
                                                                            x2="556"
                                                                            y2="285"
                                                                        ></line>
                                                                        <line
                                                                            strokeDasharray="3 3"
                                                                            stroke="#ccc"
                                                                            fill="none"
                                                                            x="61"
                                                                            y="45"
                                                                            width="495"
                                                                            height="240"
                                                                            offset="[object Object]"
                                                                            x1="61"
                                                                            y1="225"
                                                                            x2="556"
                                                                            y2="225"
                                                                        ></line>
                                                                        <line
                                                                            strokeDasharray="3 3"
                                                                            stroke="#ccc"
                                                                            fill="none"
                                                                            x="61"
                                                                            y="45"
                                                                            width="495"
                                                                            height="240"
                                                                            offset="[object Object]"
                                                                            x1="61"
                                                                            y1="165"
                                                                            x2="556"
                                                                            y2="165"
                                                                        ></line>
                                                                        <line
                                                                            strokeDasharray="3 3"
                                                                            stroke="#ccc"
                                                                            fill="none"
                                                                            x="61"
                                                                            y="45"
                                                                            width="495"
                                                                            height="240"
                                                                            offset="[object Object]"
                                                                            x1="61"
                                                                            y1="105"
                                                                            x2="556"
                                                                            y2="105"
                                                                        ></line>
                                                                        <line
                                                                            strokeDasharray="3 3"
                                                                            stroke="#ccc"
                                                                            fill="none"
                                                                            x="61"
                                                                            y="45"
                                                                            width="495"
                                                                            height="240"
                                                                            offset="[object Object]"
                                                                            x1="61"
                                                                            y1="45"
                                                                            x2="556"
                                                                            y2="45"
                                                                        ></line>
                                                                    </g>
                                                                </g>
                                                                <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                                                                    <g className="recharts-cartesian-axis-ticks">
                                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                                            <text
                                                                                orientation="bottom"
                                                                                width="495"
                                                                                height="30"
                                                                                x="71"
                                                                                y="293"
                                                                                stroke="none"
                                                                                fill="#666"
                                                                                transform="translate(0, 6)"
                                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                textAnchor="middle"
                                                                                style={{
                                                                                    fontSize: "12px",
                                                                                    color: "red",
                                                                                }}
                                                                            >
                                                                                <tspan x="71" dy="0.71em">
                                                                                    2023-05-23
                                                                                </tspan>
                                                                            </text>
                                                                        </g>
                                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                                            <text
                                                                                orientation="bottom"
                                                                                width="495"
                                                                                height="30"
                                                                                x="528.22265625"
                                                                                y="293"
                                                                                stroke="none"
                                                                                fill="#666"
                                                                                transform="translate(0, 6)"
                                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                textAnchor="middle"
                                                                                style={{
                                                                                    fontSize: "12px",
                                                                                    color: "red",
                                                                                }}
                                                                            >
                                                                                <tspan
                                                                                    x="528.22265625"
                                                                                    dy="0.71em"
                                                                                >
                                                                                    2023-05-25
                                                                                </tspan>
                                                                            </text>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                                <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                                                                    <g className="recharts-cartesian-axis-ticks">
                                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                                            <text
                                                                                width="56"
                                                                                orientation="left"
                                                                                height="240"
                                                                                x="53"
                                                                                y="285"
                                                                                stroke="none"
                                                                                fill="#666"
                                                                                transform="translate(-3, 0)"
                                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                textAnchor="end"
                                                                                style={{ fontSize: "12px" }}
                                                                            >
                                                                                <tspan x="53" dy="0.355em">
                                                                                    0
                                                                                </tspan>
                                                                            </text>
                                                                        </g>
                                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                                            <text
                                                                                width="56"
                                                                                orientation="left"
                                                                                height="240"
                                                                                x="53"
                                                                                y="225"
                                                                                stroke="none"
                                                                                fill="#666"
                                                                                transform="translate(-3, 0)"
                                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                textAnchor="end"
                                                                                style={{ fontSize: "12px" }}
                                                                            >
                                                                                <tspan x="53" dy="0.355em">
                                                                                    0.5
                                                                                </tspan>
                                                                            </text>
                                                                        </g>
                                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                                            <text
                                                                                width="56"
                                                                                orientation="left"
                                                                                height="240"
                                                                                x="53"
                                                                                y="165"
                                                                                stroke="none"
                                                                                fill="#666"
                                                                                transform="translate(-3, 0)"
                                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                textAnchor="end"
                                                                                style={{ fontSize: "12px" }}
                                                                            >
                                                                                <tspan x="53" dy="0.355em">
                                                                                    1
                                                                                </tspan>
                                                                            </text>
                                                                        </g>
                                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                                            <text
                                                                                width="56"
                                                                                orientation="left"
                                                                                height="240"
                                                                                x="53"
                                                                                y="105"
                                                                                stroke="none"
                                                                                fill="#666"
                                                                                transform="translate(-3, 0)"
                                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                textAnchor="end"
                                                                                style={{ fontSize: "12px" }}
                                                                            >
                                                                                <tspan x="53" dy="0.355em">
                                                                                    1.5
                                                                                </tspan>
                                                                            </text>
                                                                        </g>
                                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                                            <text
                                                                                width="56"
                                                                                orientation="left"
                                                                                height="240"
                                                                                x="53"
                                                                                y="45"
                                                                                stroke="none"
                                                                                fill="#666"
                                                                                transform="translate(-3, 0)"
                                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                                textAnchor="end"
                                                                                style={{ fontSize: "12px" }}
                                                                            >
                                                                                <tspan x="53" dy="0.355em">
                                                                                    2
                                                                                </tspan>
                                                                            </text>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="indigo"
                                                                        x1="0"
                                                                        y1="0"
                                                                        x2="0"
                                                                        y2="1"
                                                                    >
                                                                        <stop
                                                                            offset="5%"
                                                                            stopColor="#6366f1"
                                                                            stopOpacity="0.4"
                                                                        ></stop>
                                                                        <stop
                                                                            offset="95%"
                                                                            stopColor="#6366f1"
                                                                            stopOpacity="0"
                                                                        ></stop>
                                                                    </linearGradient>
                                                                </defs>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="fuchsia"
                                                                        x1="0"
                                                                        y1="0"
                                                                        x2="0"
                                                                        y2="1"
                                                                    >
                                                                        <stop
                                                                            offset="5%"
                                                                            stopColor="#d946ef"
                                                                            stopOpacity="0.4"
                                                                        ></stop>
                                                                        <stop
                                                                            offset="95%"
                                                                            stopColor="#d946ef"
                                                                            stopOpacity="0"
                                                                        ></stop>
                                                                    </linearGradient>
                                                                </defs>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="cyan"
                                                                        x1="0"
                                                                        y1="0"
                                                                        x2="0"
                                                                        y2="1"
                                                                    >
                                                                        <stop
                                                                            offset="5%"
                                                                            stopColor="#06b6d4"
                                                                            stopOpacity="0.4"
                                                                        ></stop>
                                                                        <stop
                                                                            offset="95%"
                                                                            stopColor="#06b6d4"
                                                                            stopOpacity="0"
                                                                        ></stop>
                                                                    </linearGradient>
                                                                </defs>
                                                                <g className="recharts-layer recharts-area">
                                                                    <g className="recharts-layer">
                                                                        <path
                                                                            name="views"
                                                                            fill="url(#indigo)"
                                                                            strokeWidth="2"
                                                                            fillOpacity="0.6"
                                                                            width="495"
                                                                            height="240"
                                                                            stroke="none"
                                                                            className="recharts-curve recharts-area-area"
                                                                            d="M71,45L546,165L546,285L71,285Z"
                                                                        ></path>
                                                                        <path
                                                                            name="views"
                                                                            stroke="#6366f1"
                                                                            fill="none"
                                                                            strokeWidth="2"
                                                                            fillOpacity="0.6"
                                                                            width="495"
                                                                            height="240"
                                                                            className="recharts-curve recharts-area-curve"
                                                                            d="M71,45L546,165"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                                <g className="recharts-layer recharts-area">
                                                                    <g className="recharts-layer">
                                                                        <path
                                                                            name="starts"
                                                                            fill="url(#fuchsia)"
                                                                            strokeWidth="2"
                                                                            fillOpacity="0.6"
                                                                            width="495"
                                                                            height="240"
                                                                            stroke="none"
                                                                            className="recharts-curve recharts-area-area"
                                                                            d="M71,165L546,285L546,285L71,285Z"
                                                                        ></path>
                                                                        <path
                                                                            name="starts"
                                                                            stroke="#d946ef"
                                                                            fill="none"
                                                                            strokeWidth="2"
                                                                            fillOpacity="0.6"
                                                                            width="495"
                                                                            height="240"
                                                                            className="recharts-curve recharts-area-curve"
                                                                            d="M71,165L546,285"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                                <g className="recharts-layer recharts-area">
                                                                    <g className="recharts-layer">
                                                                        <path
                                                                            name="submits"
                                                                            fill="url(#cyan)"
                                                                            strokeWidth="2"
                                                                            fillOpacity="0.6"
                                                                            width="495"
                                                                            height="240"
                                                                            stroke="none"
                                                                            className="recharts-curve recharts-area-area"
                                                                            d="M71,285L546,285L546,285L71,285Z"
                                                                        ></path>
                                                                        <path
                                                                            name="submits"
                                                                            stroke="#06b6d4"
                                                                            fill="none"
                                                                            strokeWidth="2"
                                                                            fillOpacity="0.6"
                                                                            width="495"
                                                                            height="240"
                                                                            className="recharts-curve recharts-area-curve"
                                                                            d="M71,285L546,285"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <div
                                                                className="recharts-legend-wrapper"
                                                                style={{
                                                                    position: "absolute",
                                                                    width: "551px",
                                                                    height: "40px",
                                                                    left: "5px",
                                                                    top: "5px",
                                                                }}
                                                            >
                                                                <div className="flex items-center justify-end">
                                                                    <ol className="tremor-Legend-root flex flex-wrap overflow-hidden truncate">
                                                                        <li className="tremor-Legend-legendItem termor-elem inline-flex items-center truncate text-gray-500 mr-2.5">
                                                                            <svg
                                                                                className="termor-elem flex-none text-indigo-500 h-2 w-2 mr-1.5"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 8 8"
                                                                            >
                                                                                <circle
                                                                                    cx="4"
                                                                                    cy="4"
                                                                                    r="4"
                                                                                ></circle>
                                                                            </svg>
                                                                            <p className="termor-elem whitespace-nowrap truncate text-sm font-normal">
                                                                                views
                                                                            </p>
                                                                        </li>
                                                                        <li className="tremor-Legend-legendItem termor-elem inline-flex items-center truncate text-gray-500 mr-2.5">
                                                                            <svg
                                                                                className="termor-elem flex-none text-fuchsia-500 h-2 w-2 mr-1.5"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 8 8"
                                                                            >
                                                                                <circle
                                                                                    cx="4"
                                                                                    cy="4"
                                                                                    r="4"
                                                                                ></circle>
                                                                            </svg>
                                                                            <p className="termor-elem whitespace-nowrap truncate text-sm font-normal">
                                                                                starts
                                                                            </p>
                                                                        </li>
                                                                        <li className="tremor-Legend-legendItem termor-elem inline-flex items-center truncate text-gray-500 mr-2.5">
                                                                            <svg
                                                                                className="termor-elem flex-none text-cyan-500 h-2 w-2 mr-1.5"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 8 8"
                                                                            >
                                                                                <circle
                                                                                    cx="4"
                                                                                    cy="4"
                                                                                    r="4"
                                                                                ></circle>
                                                                            </svg>
                                                                            <p className="termor-elem whitespace-nowrap truncate text-sm font-normal">
                                                                                submits
                                                                            </p>
                                                                        </li>
                                                                    </ol>
                                                                </div>
                                                            </div>

                                                            <div
                                                                tabIndex="-1"
                                                                role="dialog"
                                                                className="recharts-tooltip-wrapper"
                                                                style={{
                                                                    pointerEvents: "none",
                                                                    visibility: "hidden",
                                                                    position: "absolute",
                                                                    top: "0px",
                                                                    left: "0px",
                                                                    outline: "none",
                                                                    transform: "translate(395.234px, 0px)",
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tremor-Col-root col-span-1 md:col-span-3 lg:col-span-1">
                                            <div className="tremor-Card-root relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg h-full">
                                                <p className="text-gray-700 text-3xl font-semibold">
                                                    Rate
                                                </p>
                                                <ul className="tremor-List-root w-full overflow-hidden divide-y text-gray-500 divide-gray-200 mt-4 flex flex-col justify-between">
                                                    <li className="tremor-ListItem-root w-full flex justify-between items-center truncate tabular-nums py-2 text-sm">
                                                        <div className="w-full py-3">
                                                            <p className="text-gray-500 text-sm font-normal">
                                                                응답률
                                                            </p>
                                                            <div className="flex justify-between">
                                                                <div className="tremor-ProgressBar-root flex items-center w-full">
                                                                    <div className="tremor-ProgressBar-progressBarWrapper relative flex items-center w-full bg-blue-100 h-2 rounded-lg">
                                                                        <div
                                                                            className="tremor-ProgressBar-progressBar bg-blue-500 flex-col h-full rounded-lg"
                                                                            style={{
                                                                                width: "0%",
                                                                                transition: "all 2s ease 0s",
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                    <div className="tremor-ProgressBar-labelWrapper w-16 truncate text-right text-gray-700 ml-2">
                                                                        <p className="tremor-ProgressBar-label shrink-0 whitespace-nowrap truncate text-sm font-normal">
                                                                            0%
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span className="tremor-BadgeDelta-root w-max flex-shrink-0 inline-flex justify-center items-center cursor-default rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-0.5 text-sm ml-10">
                                                                    <svg
                                                                        className="tremor-BadgeDelta-icon -ml-1 mr-1.5 w-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        width="24"
                                                                        height="24"
                                                                    >
                                                                        <path
                                                                            fill="none"
                                                                            d="M0 0h24v24H0z"
                                                                        ></path>
                                                                        <path
                                                                            fill="currentColor"
                                                                            d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
                                                                        ></path>
                                                                    </svg>
                                                                    <p className="tremor-BadgeDelta-text text-sm whitespace-nowrap">
                                                                        0%
                                                                    </p>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="tremor-ListItem-root w-full flex justify-between items-center truncate tabular-nums py-2 text-sm">
                                                        <div className="w-full py-3">
                                                            <p className="text-gray-500 text-sm font-normal">
                                                                완료율
                                                            </p>
                                                            <div className="flex justify-between">
                                                                <div className="tremor-ProgressBar-root flex items-center w-full">
                                                                    <div className="tremor-ProgressBar-progressBarWrapper relative flex items-center w-full bg-blue-100 h-2 rounded-lg">
                                                                        <div
                                                                            className="tremor-ProgressBar-progressBar bg-blue-500 flex-col h-full rounded-lg"
                                                                            style={{
                                                                                width: "0%",
                                                                                transition: "all 2s ease 0s",
                                                                            }}
                                                                        ></div>
                                                                    </div>
                                                                    <div className="tremor-ProgressBar-labelWrapper w-16 truncate text-right text-gray-700 ml-2">
                                                                        <p className="tremor-ProgressBar-label shrink-0 whitespace-nowrap truncate text-sm font-normal">
                                                                            0%
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span className="tremor-BadgeDelta-root w-max flex-shrink-0 inline-flex justify-center items-center cursor-default rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-0.5 text-sm ml-10">
                                                                    <svg
                                                                        className="tremor-BadgeDelta-icon -ml-1 mr-1.5 w-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        width="24"
                                                                        height="24"
                                                                    >
                                                                        <path
                                                                            fill="none"
                                                                            d="M0 0h24v24H0z"
                                                                        ></path>
                                                                        <path
                                                                            fill="currentColor"
                                                                            d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
                                                                        ></path>
                                                                    </svg>
                                                                    <p className="tremor-BadgeDelta-text text-sm whitespace-nowrap">
                                                                        0%
                                                                    </p>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
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