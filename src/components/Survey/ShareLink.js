import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SurveyCompletion from "./SurveyCompletion";

function ShareLink(props) {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 객체 가져오기

  // 설문조사 만들기 버튼 클릭 시 /kakaq로 이동
  const handleCreateSurveyClick = () => {
    navigate("/kakaq");
  };

  // 나의 설문조사 버튼 클릭 시 /workspace로 이동
  const handleClick = () => {
    navigate("/workspace");
  };

  return (
    <div class="MuiContainer-root MuiContainer-maxWidthLg jss7 css-okglv3">
      <div tabindex="-1" style={{ outline: "none" }}>
        <div class="MuiContainer-root MuiContainer-maxWidthLg css-1qtp0is">
          <div class="MuiBox-root css-ip3vow">
            <div className="MuiBox-root css-0">
              <div className="MuiGrid-root MuiGrid-container css-sow6z2">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-we0np1">
                  <div className="MuiBox-root css-0">
                    <p className="MuiTypography-root MuiTypography-body1 css-zuj73s">
                      <span style={{ color: "rgb(250, 200, 0)" }}>
                        {props.surveyTitle}{" "}
                      </span>
                      프로젝트를 성공적으로 만들었습니다.
                    </p>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-8 MuiGrid-grid-lg-12 css-1iqtsvr">
                  <div className="MuiBox-root css-bdnmmq">
                    <p className="MuiTypography-root MuiTypography-body1 css-qisfzi">
                      설문조사 링크 넣기 https://
                    </p>
                    <div className="MuiBox-root css-149sczi">
                      <button
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                        tabIndex="0"
                        type="button"
                      >
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="ContentCopyRoundedIcon"
                        >
                          <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z"></path>
                        </svg>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      <button
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                        tabIndex="0"
                        type="button"
                      >
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="OpenInNewRoundedIcon"
                        >
                          <path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z"></path>
                        </svg>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="MuiGrid2-root MuiGrid2-container MuiGrid2-direction-xs-row css-9329ze">
              <div class="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-true css-1hoyqw5">
                <div class="ShareProjectSettings__ShareContentCard-sc-1713g9x-0 kpxJWt MuiBox-root css-1po3p4o">
                  <div className="MuiBox-root css-ldo4d5">
                    <div className="MuiBox-root css-fm00og">
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth css-h5p8ty"
                        tabIndex="0"
                        type="button"
                        onClick={handleCreateSurveyClick}
                      >
                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" 
                        viewBox="0 0 24 24"><path d="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z" /></svg>
                        </span>
                        <p className="MuiTypography-root MuiTypography-body1 css-awn6hr">
                          새로운 설문조사 만들기
                        </p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth css-h5p8ty"
                        tabIndex="0"
                        type="button"
                        onClick={handleClick}
                      >
                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" viewBox="0 0 24 24"><path d="M7 4C4.8 4 3 5.8 3 8S4.8 12 7 12 11 10.2 11 8 9.2 4 7 4M7 10C5.9 10 5 9.1 5 8S5.9 6 7 6 9 6.9 9 8 8.1 10 7 10M0 18C0 15.8 3.1 14 7 14C8.5 14 9.9 14.3 11 14.7V17C10.2 16.5 8.8 16 7 16C3.8 16 2 17.4 2 18H11V20H0V18M22 4H15C13.9 4 13 4.9 13 6V18C13 19.1 13.9 20 15 20H22C23.1 20 24 19.1 24 18V6C24 4.9 23.1 4 22 4M22 18H15V6H22V18Z" /></svg>
                        </span>
                        <p className="MuiTypography-root MuiTypography-body1 css-awn6hr">
                          나의 설문조사
                        </p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth css-h5p8ty"
                        tabIndex="0"
                        type="button"
                        onClick={handleClick}
                      >
                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" 
                        viewBox="0 0 24 24"><title>gesture-tap-button</title><path d="M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z" /></svg>
                        </span>
                        <p className="MuiTypography-root MuiTypography-body1 css-awn6hr">
                          설문조사 참여하기
                        </p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      {/* <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth  css-h5p8ty"
                        tabIndex="0"
                        type="button"
                      >
                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="CodeRoundedIcon"
                          >
                            <path d="M8.7 15.9 4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4a.9839.9839 0 0 0-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0 3.9-3.9-3.9-3.9a.9839.9839 0 0 1 0-1.4c.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0a.9839.9839 0 0 1 0-1.4z"></path>
                          </svg>
                        </span>
                        <p className="MuiTypography-root MuiTypography-body1 css-awn6hr">
                          코드 임베드
                        </p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button> */}
                    </div>
                  </div>
                  {/* <hr class="MuiDivider-root MuiDivider-fullWidth css-12vh8ky" /> */}
                  {/* 여기 추가 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareLink;
