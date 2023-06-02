import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SurveyCompletion from "./SurveyCompletion";
import Collapse from "@mui/material/Collapse";
import SelectCity from "./SelectCity";
import { Menu, MenuItem, ListItemText } from '@mui/material';
import { MenuList } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function FindRespondent() {

  const date = new Date();
  const defaultStartDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

  const futureDate = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000); // 7일 후의 날짜를 계산
  const defaultEndDate = `${futureDate.getFullYear()}-${(futureDate.getMonth() + 1).toString().padStart(2, '0')}-${futureDate.getDate().toString().padStart(2, '0')}T${futureDate.getHours().toString().padStart(2, '0')}:${futureDate.getMinutes().toString().padStart(2, '0')}`;

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [isPublic, setIsPublic] = useState(false);
  const [isGPS, setIsGPS] = useState(false);
  const [city, setCity] = useState("");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleTogglePublic = () => {
    setIsPublic(!isPublic);

    if (isGPS) {
      setIsGPS(false)
    }
  };

  const handleToggleGPS = () => {

    if (isPublic === false) {
      setIsGPS(false);
    }
    else {
      setIsGPS(!isGPS);
    }

  };

  // 1차 지역과 2차 지역 데이터
  const categories = [
    '서울특별시',
    '부산광역시',
    '대구광역시',
    '인천광역시',
    '광주광역시',
    '대전광역시',
    '울산광역시',
    '세종시',
    '경기도',
    '강원도',
    '충청북도',
    '충청남도',
    '전라북도',
    '전라남도',
    '경상북도',
    '경상남도',
    '제주특별자치도',
  ];

  const subCategories = {
    서울특별시: ['전체'],
    부산광역시: ['전체'],
    대구광역시: ['전체'],
    인천광역시: ['전체'],
    광주광역시: ['전체'],
    대전광역시: ['전체'],
    울산광역시: ['전체'],
    세종시: ['전체'],
    경기도: ['수원시', '고양시', '용인시', '성남시', '부천시', '화성시', '안산시', '남양주시', '안양시', '평택시', '시흥시', '파주시', '의정부시', '김포시', '광주시', '광명시', '군포시', '하남시', '오산시', '양주시', '이천시', '구리시', '안성시', '포천시', '의왕시', '양평군', '여주시', '동두천시', '가평군', '과천시', '연천군'],
    강원도: ['춘천시', '원주시', '강릉시', '동해시', '속초시', '삼척시', '태백시', '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '고성군', '양양군'],
    충청북도: ['청주시', '충주시', '제천시', '보은군', '옥천군', '영동군', '증평군', '진천군', '괴산군', '음성군', '단양군'],
    충청남도: ['천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시', '금산군', '부여군', '서천군', '청양군', '홍성군', '예산군', '태안군'],
    전라북도: ['전주시', '익산시', '군산시', '정읍시', '완주군', '김제시', '남원시', '고창군', '부안군', '임실군', '순창군', '진안군', '장수군', '무주군'],
    전라남도: ['목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '곡성군', '구례군', '고흥군', '보성군', '화순군', '장흥군', '강진군', '해남군', '영암군', '무안군', '함평군', '영광군', '장성군', '완도군', '진도군', '신안군'],
    경상북도: ['포항시', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시', '문경시', '경산시', '군위군', '의성군', '청송군', '영양군', '영덕군', '청도군', '고령군', '성주군', '칠곡군', '예천군', '봉화군', '울진군', '울릉군'],
    경상남도: ['창원시', '김해시', '진주시', '양산시', '거제시', '통영시', '사천시', '밀양시', '함안군', '거창군', '창녕군', '고성군', '하동군', '합천군', '남해군', '함양군', '산청군', '의령군', '함양군'],
    제주도: ['제주시', '서귀포시'],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    console.log(category)
    setSelectedCategory(category);
  };

  const handleCityChange = (city) => {
    console.log(city)
    setCity(city);
  };
    

  return (
    <>
      <div class="MuiContainer-root MuiContainer-maxWidthLg jss1 css-okglv3">
        <div tabindex="-1" style={{ outline: "none" }}>
          <div class="MuiContainer-root MuiContainer-maxWidthLg jss1 css-okglv3">
            <div
              class="MuiBox-root css-0"
              style={{ minHeight: "100vh" }} /*display: "flex" */
            >
              <div
                class="MuiBox-root css-0"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "40px",
                  gap: "40px",
                }}
              >
                <div class="MuiBox-root css-69i1ev">
                  <div className="MuiBox-root css-0">
                    <p
                      className="mb-2 MuiTypography-root MuiTypography-body1 css-1u8f7it"
                      style={{ textAlign: "start" }}
                    >
                      응답자 찾기
                    </p>
                    <p className="MuiTypography-root MuiTypography-body1 css-qisfzi">
                      KaKaQ를 통해 프로젝트에 적합한 응답자를 찾아보세요.
                    </p>
                  </div>
                  <a
                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                    tabIndex="0"
                    href="https://home.walla.my/blog/about-walla-panel"
                    target="_blank"
                    aria-label="왈라 응답자 찾기란?"
                  >
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="HelpRoundedIcon"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88c.43-1.47 1.68-2.59 3.23-2.83 1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z"></path>
                    </svg>
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </a>
                </div>
                <div
                  class="MuiBox-root css-0"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "55px",
                    padding: "0px",
                  }}
                >
                  <div
                    class="MuiBox-root css-0"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "18px",
                      padding: "0px",
                    }}
                  >
                    <form class="css-1clav2i">
                      <div class="RESPONDER_TARGETING MuiBox-root css-1i4hy4j">
                        <div class="MuiGrid-root MuiGrid-container css-1r5l695">
                          <div
                            className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAccordion-root Mui-expanded MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-8v46es"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              width: "100%",
                              gap: "32px",
                            }}
                          >
                            <div
                              className="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded css-yf00de"
                              tabIndex={0}
                              role="button"
                              aria-expanded="true"
                            >
                              <div className="MuiAccordionSummary-content Mui-expanded css-1n11r91">
                                <div
                                  className="MuiBox-root css-0"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    gap: "4px",
                                  }}
                                >
                                  <p className="MuiTypography-root MuiTypography-body1 css-1ihaftk">
                                    응답 대상자 설정하기
                                  </p>
                                  <p className="MuiTypography-root MuiTypography-body1 css-1bl4xcr">
                                    어느 지역의 어떤 분들에게 응답 받고 싶나요?
                                  </p>
                                </div>
                              </div>
                              <div className="MuiAccordionSummary-expandIconWrapper Mui-expanded css-1fx8m19">
                                <div></div>
                              </div>
                            </div>
                            <div
                              class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr"
                              style={{ minHeight: "0px" }}
                            >
                              <div class="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                <div class="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                  <div
                                    role="region"
                                    class="MuiAccordion-region"
                                  >
                                    <div class="MuiBox-root css-a8gnbf">
                                      <div
                                        class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAccordion-root css-1degz5g"
                                        style={{ width: "100%" }}

                                      >
                                        <div
                                          class="MuiButtonBase-root MuiAccordionSummary-root css-eb9lrn"
                                          tabindex="0"
                                          role="button"
                                          aria-expanded="false"

                                          onClick={handleTogglePublic}
                                        >
                                          <div className="MuiAccordionSummary-content css-1n11r91">
                                            <p
                                              className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                                              style={{ fontWeight: "400" }}
                                            >
                                              공개 여부
                                            </p>
                                          </div>


                                          <div className="MuiAccordionSummary-expandIconWrapper css-1fx8m19">
                                            <span className="MuiSwitch-root MuiSwitch-sizeMedium css-1mgt3ei">
                                              <span class={`MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary css-1sf64yn ${isPublic ? 'Mui-checked' : ''}`}>
                                                <input
                                                  className="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"
                                                  type="checkbox"
                                                  value={isPublic}
                                                />
                                                <span className="MuiSwitch-thumb css-19gndve"></span>
                                              </span>
                                              <span className="MuiSwitch-track css-1ju1kxc"></span>
                                            </span>
                                          </div>
                                        </div>
                                        {/* <div
                                          class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-a0y2e3"
                                          style={{ minHeight: "0px" }}
                                        >
                                          <div class="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                            <div class="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                              <div
                                                role="region"
                                                class="MuiAccordion-region"
                                              >
                                                <div className="MuiAccordionDetails-root css-1f3ze44">
                                                  <div
                                                    className="MuiFormGroup-root css-1h7anqn"
                                                    style={{
                                                      flexDirection: "row",
                                                    }}
                                                  >
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.male"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        공개 O
                                                      </span>
                                                    </label>
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.female"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        공개 X
                                                      </span>
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div> */}
                                      </div>
                                      <div class="MuiBox-root css-197dogp"></div>
                                      <div class={`MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAccordion-root ${isGPS ? 'Mui-expanded' : ""} css-1degz5g ${!isPublic ? 'disabled' : ''}`}
                                        disabled={!isPublic}>
                                        <div
                                          class={`MuiButtonBase-root MuiAccordionSummary-root ${isGPS ? 'Mui-expanded' : ""} css-eb9lrn`}
                                          tabindex="0"
                                          role="button"
                                          aria-expanded={isGPS}
                                          onClick={handleToggleGPS}

                                        >
                                          <div className={`MuiAccordionSummary-content ${isGPS ? 'Mui-expanded' : ""} css-1n11r91`}>
                                            <p
                                              className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                                              style={{ fontWeight: "400" }}
                                            >
                                              GPS 사용 여부
                                            </p>
                                          </div>
                                          <div className={`MuiAccordionSummary-expandIconWrapper css-1fx8m19`}>
                                            <span className="MuiSwitch-root MuiSwitch-sizeMedium css-1mgt3ei">
                                              <span className={`MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary css-1sf64yn ${isGPS ? 'Mui-checked' : ''}`}>
                                                <input
                                                  className="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"
                                                  type="checkbox"
                                                  value={isGPS}
                                                  disabled={!isPublic}
                                                />
                                                <span className="MuiSwitch-thumb css-19gndve"></span>
                                              </span>
                                              <span className="MuiSwitch-track css-1ju1kxc"></span>
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          class={`MuiCollapse-root MuiCollapse-vertical ${isGPS ? 'MuiCollapse-entered' : "MuiCollapse-hidden"} ${isGPS ? 'css-c4sutr' : 'css-a0y2e3'}`}
                                          style={isGPS ? { minHeight: '0px', height: 'auto', transitionDuration: '395ms' } : { minHeight: "0px" }}
                                        >
                                          <div class="MuiCollapse-wrapper MuiCollapse-vertical MuiCollapse-entered css-hboir5">
                                            <div class="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                              <div
                                                role="region"
                                                class="MuiAccordion-region"
                                              >
                                                <div className="MuiAccordionDetails-root css-1f3ze44">
                                                  <div
                                                    className="MuiFormGroup-root css-1h7anqn"
                                                    style={{
                                                      flexDirection: "row",
                                                    }}
                                                  >
                                                    <div style={{ display: 'flex' }}>
                                                      <div style={{ marginRight: '10px' }}>
                                                        {categories.map((category) => (
                                                          <div
                                                            key={category}
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => handleCategoryClick(category)}
                                                          >
                                                            {category}
                                                          </div>
                                                        ))}
                                                      </div>
                                                      {selectedCategory && (
                                                        <div>
                                                          {subCategories[selectedCategory].map((subCategory) => (
                                                            <div key={subCategory} value={subCategory} onClick={() => handleCityChange(subCategory)}>{subCategory}</div>
                                                          ))}
                                                        </div>
                                                      )}
                                                    </div>
                                                    {/* <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.male"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        GPS 사용 O
                                                      </span>
                                                    </label>
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.female"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        GPS 사용 X
                                                      </span>
                                                    </label> */}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* <div class="MuiBox-root css-197dogp"></div>
                                      <div
                                        class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAccordion-root css-1degz5g"
                                        style={{ width: "100%" }}
                                      >
                                        <div
                                          class="MuiButtonBase-root MuiAccordionSummary-root css-eb9lrn"
                                          tabindex="0"
                                          role="button"
                                          aria-expanded="false"
                                        >
                                          <div className="MuiAccordionSummary-content css-1n11r91">
                                            <p
                                              className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                                              style={{ fontWeight: "400" }}
                                            >
                                              GPS 허용 지역
                                            </p>
                                          </div>
                                          <div className="MuiAccordionSummary-expandIconWrapper css-1fx8m19">
                                            <span className="MuiSwitch-root MuiSwitch-sizeMedium css-1mgt3ei">
                                              <span className="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary css-1sf64yn">
                                                <input
                                                  className="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"
                                                  type="checkbox"
                                                  value="off"
                                                />
                                                <span className="MuiSwitch-thumb css-19gndve"></span>
                                              </span>
                                              <span className="MuiSwitch-track css-1ju1kxc"></span>
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-a0y2e3"
                                          style={{ minHeight: "0px" }}
                                        >
                                          <div class="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                            <div class="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                              <div
                                                role="region"
                                                class="MuiAccordion-region"
                                              >
                                                <div className="MuiAccordionDetails-root css-1f3ze44">
                                                  <div
                                                    className="MuiFormGroup-root css-1h7anqn"
                                                    style={{
                                                      flexDirection: "row",
                                                    }}
                                                  >
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.male"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        서울
                                                      </span>
                                                    </label>
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.female"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        부산
                                                      </span>
                                                    </label>
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.others"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        대구
                                                      </span>
                                                    </label>
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.noChoice"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        광주
                                                      </span>
                                                    </label>
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.others"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        인천
                                                      </span>
                                                    </label>
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.others"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        대전
                                                      </span>
                                                    </label>
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.others"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        울산
                                                      </span>
                                                    </label>
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.others"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        경기
                                                      </span>
                                                    </label>
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.others"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        강원
                                                      </span>
                                                    </label>
                                                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1jaw3da">
                                                      <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-8bvb0y">
                                                        <input
                                                          className="PrivateSwitchBase-input css-1m9pwf3"
                                                          name="genderConfig.others"
                                                          type="checkbox"
                                                          data-indeterminate="false"
                                                          value="true"
                                                        />
                                                        <img
                                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNGQUZCRkMiIHN0cm9rZT0iI0RGRTFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="
                                                          alt="unchecked-checkbox"
                                                        />
                                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                      </span>
                                                      <span
                                                        className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-qisfzi"
                                                        style={{
                                                          fontSize: "14px",
                                                        }}
                                                      >
                                                        제주
                                                      </span>
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="MuiBox-root css-1ykdma4">
                        <div class="MuiBox-root css-1yn0cho"></div>
                      </div>
                      <div class="RESPONDER_TARGETING MuiBox-root css-1i4hy4j">
                        <div class="MuiGrid-root MuiGrid-container css-1r5l695">
                          <div
                            className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAccordion-root Mui-expanded MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-8v46es"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              width: "100%",
                              gap: "32px",
                            }}
                          >
                            <div
                              className="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded css-yf00de"
                              tabIndex={0}
                              role="button"
                              aria-expanded="true"
                            >
                              <div className="MuiAccordionSummary-content Mui-expanded css-1n11r91">
                                <div
                                  className="MuiBox-root css-0"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    gap: "4px",
                                  }}
                                >
                                  <p className="MuiTypography-root MuiTypography-body1 css-1ihaftk">
                                    응답 기간 설정하기
                                  </p>
                                  <p className="MuiTypography-root MuiTypography-body1 css-1bl4xcr">
                                    언제부터 배포하고 싶나요?
                                  </p>
                                </div>
                              </div>
                              <div className="MuiAccordionSummary-expandIconWrapper Mui-expanded css-1fx8m19">
                                <div></div>
                              </div>
                            </div>
                            <div
                              class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr"
                              style={{ minHeight: "0px" }}
                            >
                              <div class="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                <div class="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                  <div
                                    role="region"
                                    class="MuiAccordion-region"
                                  >
                                    <div class="MuiBox-root css-a8gnbf">
                                      <div
                                        class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAccordion-root css-1degz5g"
                                        style={{ width: "100%" }}
                                      >
                                        <div
                                          class="MuiButtonBase-root MuiAccordionSummary-root css-eb9lrn"
                                          tabindex="0"
                                          role="button"
                                          aria-expanded="false"
                                        >
                                          <div className="MuiAccordionSummary-content css-1n11r91">
                                            <p
                                              className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                                              style={{ fontWeight: "400" }}
                                            >
                                              배포 시작일
                                            </p>
                                          </div>
                                          <div className="MuiAccordionSummary-expandIconWrapper css-1fx8m19">
                                            <div class="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-lvanhh">
                                              <span
                                                className="MuiSwitch-root MuiSwitch-sizeMedium css-1mgt3ei"
                                                style={{
                                                  width: "auto",
                                                }}
                                              >
                                                <input
                                                  aria-invalid="false"
                                                  id="startDate"
                                                  placeholder="YYYY-MM-DD"
                                                  type="datetime-local"
                                                  class="MuiInputBase-input css-mnn31"
                                                  value={startDate}
                                                  onChange={handleStartDateChange}
                                                />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="MuiBox-root css-197dogp"></div>
                                      <div class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAccordion-root css-1degz5g">
                                        <div
                                          class="MuiButtonBase-root MuiAccordionSummary-root css-eb9lrn"
                                          tabindex="0"
                                          role="button"
                                          aria-expanded="false"
                                        >
                                          <div className="MuiAccordionSummary-content css-1n11r91">
                                            <p
                                              className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                                              style={{ fontWeight: "400" }}
                                            >
                                              배포 마감일
                                            </p>
                                          </div>
                                          <div className="MuiAccordionSummary-expandIconWrapper css-1fx8m19">
                                            <div class="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-lvanhh">
                                              <span
                                                className="MuiSwitch-root MuiSwitch-sizeMedium css-1mgt3ei"
                                                style={{
                                                  width: "auto",
                                                }}
                                              >
                                                <input
                                                  aria-invalid="false"
                                                  id="endDate"
                                                  placeholder="YYYY-MM-DD"
                                                  type="datetime-local"
                                                  class="MuiInputBase-input css-mnn31"
                                                  value={endDate}
                                                  onChange={handleEndDateChange}
                                                />
                                              </span>
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
                    </form>
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

export default FindRespondent;
