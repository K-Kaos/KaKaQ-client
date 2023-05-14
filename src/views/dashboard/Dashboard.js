import React, { useState } from "react";
import { Link } from "react-router-dom";
import seobin from "/Users/seobi/Documents/GitHub/KaKaQ-client/src/assets/images/avatars/seobin.png";
import jueun from "/Users/seobi/Documents/GitHub/KaKaQ-client/src/assets/images/avatars/seobin.png";
import sohyun from "/Users/seobi/Documents/GitHub/KaKaQ-client/src/assets/images/avatars/seobin.png";
import soyeon from "/Users/seobi/Documents/GitHub/KaKaQ-client/src/assets/images/avatars/seobin.png";
import yekyeong from "/Users/seobi/Documents/GitHub/KaKaQ-client/src/assets/images/avatars/seobin.png";
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import CIcon from "@coreui/icons-react";
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from "@coreui/icons";

const Dashboard = (props) => {
  return (
    <>
      <div id="root">
        <div>
          <CCard className="mb-4 py-4 text-center ">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Share Your Opinion.
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              KaKaQ와 의견을 나누고 <br />
              친구들을 만나보세요.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
                to="#"
                class="inline-flex justify-center items-center py-3 px-5 m-1 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
                style={{ textDecoration: "none" }}
              >
                설문조사 시작
              </Link>

              <Link
                to="#"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
                style={{ textDecoration: "none" }}
              >
                더 알아보기
              </Link>
            </div>
          </CCard>
          <CCard className="mb-4 py-4 text-center"></CCard>
          <CCard className="mb-4 py-4 text-center"></CCard>
        
        </div>
      </div>
    </>
  );
};

export default Dashboard;
