import React from "react";
import { Link } from "react-router-dom";

function OpenSurveyItem(props) {
  return (
    <div>
      <Link to={props.path}>
        <div
          className="MuiBox-root css-0"
          style={{ margin: "0px 24px 20px 0px" }}
        >
          <div
            className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1ohqwy3"
            width="265"
            minheight="160"
          >
            <div className="MuiCardContent-root css-67yy9o">
              <div className="MuiBox-root css-1yd9vr8">
                <div class="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" class="text-gray-500">
                    {props.startdate}
                  </time>
                  <time datetime="2020-03-16" class="text-gray-500">
                    {props.enddate}
                  </time>
                </div>
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
              <div className="MuiBox-root css-8atqhb" aria-label={props.text}>
                <div className="mt-4 MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-readOnly css-88ls20">
                  <input
                    readOnly
                    type="text"
                    className="MuiInputBase-input MuiInputBase-readOnly css-mnn31"
                    value={props.text}
                  />
                </div>
              </div>
              <div class="group relative">
                <div class="flex items-center gap-x-4 text-xs">
                  {props.label.map((label, index) => (
                    <a
                      key={index}
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <img
                  src={props.profile}
                  alt=""
                  class="h-10 w-10 rounded-full bg-gray-50"
                />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      {props.name}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default OpenSurveyItem;
