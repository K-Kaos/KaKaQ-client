import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SurveyCompletion from "./SurveyCompletion";
import BarChart from "./BarChart";
import SummaryResult from "./SummaryResult";

function ShowResult() {

  const [activeTab, setActiveTab] = useState('summary');
  const [receiveResponse, setReceiveResponse] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleReceiveResponse = () => {
    setReceiveResponse((prev) => !prev);
  };

  const data = [
    { country: 'France', 'hot dog': 10, burger: 20, sandwich: 15, kebab: 30, fries: 25, donut: 20 },
    { country: 'Germany', 'hot dog': 15, burger: 10, sandwich: 5, kebab: 25, fries: 30, donut: 15 },
    { country: 'Italy', 'hot dog': 20, burger: 15, sandwich: 10, kebab: 30, fries: 20, donut: 10 },
    { country: 'Spain', 'hot dog': 25, burger: 30, sandwich: 20, kebab: 10, fries: 15, donut: 20 },
    { country: 'USA', 'hot dog': 30, burger: 25, sandwich: 30, kebab: 15, fries: 10, donut: 25 }
  ];

  return (
    <>
      <div class="MuiContainer-root jss2 css-1fbzopa">
        <div tabindex="-1" style={{ outline: "none" }}>
          <div class="MuiBox-root css-10d4xjj">
            <div class="MuiBox-root css-1kkyquz">
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
              <div className="css-167kglg">
                <BarChart data={data} />
              </div>
            )}

          </div>
        </div>
      </div>

    </>
  );
}

export default ShowResult;
