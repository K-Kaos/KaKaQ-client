import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SurveyCompletion from "./SurveyCompletion";

function FindRespondent() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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
                                    어떤 분들에게 어느 지역에 배포하고 싶나요?
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
                                        
                                        onClick={handleTogglePublic}
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
                                      <div class={`MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAccordion-root css-1degz5g ${!isPublic ? 'disabled' : ''}`}
                                      onClick={handleToggleGPS}
                                      disabled={!isPublic}>
                                        <div
                                          class={`MuiButtonBase-root MuiAccordionSummary-root css-eb9lrn`}
                                          tabindex="0"
                                          role="button"
                                          aria-expanded="false"
                                          
                                        >
                                          <div className="MuiAccordionSummary-content css-1n11r91">
                                            <p
                                              className="MuiTypography-root MuiTypography-body1 css-qisfzi"
                                              style={{ fontWeight: "400" }}
                                            >
                                              GPS 사용 여부
                                            </p>
                                          </div>
                                          <div className="MuiAccordionSummary-expandIconWrapper css-1fx8m19">
                                            <span className="MuiSwitch-root MuiSwitch-sizeMedium css-1mgt3ei">
                                              <span className={`MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary css-1sf64yn ${isGPS ? 'Mui-checked' : ''}`}>
                                                <input
                                                  className="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"
                                                  type="checkbox"
                                                  value={isGPS && isPublic}
                                                  disabled={!isPublic}
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
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div> */}
                                      </div>
                                      <div class="MuiBox-root css-197dogp"></div>
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
                                      </div>
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
                                              시작일
                                            </p>
                                          </div>
                                          <div className="MuiAccordionSummary-expandIconWrapper css-1fx8m19">
                                            <span
                                              className="MuiSwitch-root MuiSwitch-sizeMedium css-1mgt3ei"
                                              style={{
                                                width: "150px",
                                                height: "50px",
                                                paddingBottom: "8px",
                                              }}
                                            >
                                              <input
                                                type="date"
                                                value={startDate}
                                                onChange={handleStartDateChange}
                                              />
                                            </span>
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
                                              마감일
                                            </p>
                                          </div>
                                          <div className="MuiAccordionSummary-expandIconWrapper css-1fx8m19">
                                            <span
                                              className="MuiSwitch-root MuiSwitch-sizeMedium css-1mgt3ei"
                                              style={{
                                                width: "150px",
                                                height: "50px",
                                                paddingTop: "8px",
                                              }}
                                            >
                                              <input
                                                type="date"
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
