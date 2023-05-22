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
              {/* <div
                className="MuiBox-root css-0"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgb(239, 249, 255)",
                  borderRadius: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    fontSize: "20px",
                  }}
                >
                  {props.profile}
                </span>
              </div>
              <p class="font-semibold text-gray-900">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  {props.name}
                </a>
              </p> */}
            </div>
          </div>
        </div>
        {/* <article class="flex max-w-full flex-col items-start justify-between">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time datetime="2020-03-16" class="text-gray-500">{props.startdate}</time>
                        <time datetime="2020-03-16" class="text-gray-500">{props.enddate}</time>
                    </div>
                    
                    <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                {props.text}
                            </a>
                        </h3>
                        <div class="flex items-center gap-x-4 text-xs">
                            {props.label.map((label, index) => (
                                <a key={index} href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <img src={props.profile} alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-gray-900">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    {props.name}
                                </a>
                            </p>
                        </div>
                    </div><br />
                </article> */}
      </Link>
    </div>
  );
}

export default OpenSurveyItem;
