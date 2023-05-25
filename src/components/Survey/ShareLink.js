import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SurveyCompletion from "./SurveyCompletion";

function ShareLink() {
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
                      <span style={{ color: "rgb(38, 112, 255)" }}>
                        새로운 프로젝트{" "}
                      </span>
                      프로젝트를 성공적으로 만들었습니다.
                    </p>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-md-8 MuiGrid-grid-lg-12 css-1iqtsvr">
                  <div className="MuiBox-root css-bdnmmq">
                    <p className="MuiTypography-root MuiTypography-body1 css-qisfzi">
                      https://walla.my/survey/CyjDnGR5L51zKW1aOFB0
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
                      >
                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="QrCode2RoundedIcon"
                          >
                            <path d="M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM8 9H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm-3.5 7.5v3h3v-3h-3zM8 21H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm8.5-16.5v3h3v-3h-3zM20 9h-4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm-1 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"></path>
                          </svg>
                        </span>
                        <p className="MuiTypography-root MuiTypography-body1 css-awn6hr">
                          QR코드 저장
                        </p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth css-h5p8ty"
                        tabIndex="0"
                        type="button"
                      >
                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="EmailRoundedIcon"
                          >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path>
                          </svg>
                        </span>
                        <p className="MuiTypography-root MuiTypography-body1 css-awn6hr">
                          이메일로 공유
                        </p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth css-h5p8ty"
                        tabIndex="0"
                        type="button"
                        aria-label="카카오톡 미리보기는 아래 미리보기 설정과 동일하게 표시됩니다."
                      >
                        <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="ChatBubbleRoundedIcon"
                          >
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
                          </svg>
                        </span>
                        <p className="MuiTypography-root MuiTypography-body1 css-awn6hr">
                          카카오톡 공유
                        </p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                      <button
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
                      </button>
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
