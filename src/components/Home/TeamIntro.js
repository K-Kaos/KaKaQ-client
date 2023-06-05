import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import AOS from "aos";
import seobin from "../../Assets/Profile/seobin.png";
import soyeon from "../../Assets/Profile/soyeon.png";
import sohyun from "../../Assets/Profile/sohyun.png";
import jueun from "../../Assets/Profile/jueun.png";
import yekyeong from "../../Assets/Profile/yekyeong.png";

function TeamIntro(props) {
  const isLogin = props.isLogin;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <Container>
      <div
        class="framer-11q8487"
        data-framer-component-type="RichTextContainer"
        data-projection-id="522"
        style={{
          outline: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flexShrink: 0,
          transform: "none",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              K-Kaos의 멤버
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              K-Kaos의 멤버들을 소개합니다.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <Card
                data-aos="fade-up"
                className="p-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-center gap-x-6">
                  <img className="h-24 w-24 rounded-full" src={seobin} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      Seobin Lee
                    </h3>
                    <p
                      className="text-base font-semibold leading-6 "
                      style={{ color: "#FADC5F" }}
                    >
                      PM / Front-end
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li>
              <Card
                data-aos="fade-up"
                className="p-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-center gap-x-6">
                  <img className="h-24 w-24 rounded-full" src={soyeon} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      Soyeon You{" "}
                    </h3>
                    <p
                      className="text-base font-semibold leading-6 "
                      style={{ color: "#FADC5F" }}
                    >
                      Database
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li>
              <Card
                data-aos="fade-up"
                className="p-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-center gap-x-6">
                  <img className="h-24 w-24 rounded-full" src={sohyun} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      Sohyun Lee
                    </h3>
                    <p
                      className="text-base font-semibold leading-6 "
                      style={{ color: "#FADC5F" }}
                    >
                      Back-end
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li>
              <Card
                data-aos="fade-up"
                className="p-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-center gap-x-6">
                  <img className="h-24 w-24 rounded-full" src={jueun} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      Jueun Yoon
                    </h3>
                    <p
                      className="text-base font-semibold leading-6 "
                      style={{ color: "#FADC5F" }}
                    >
                      Front-end
                    </p>
                  </div>
                </div>
              </Card>
            </li>
            <li>
              <Card
                data-aos="fade-up"
                className="p-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-24 w-24 rounded-full"
                    src={yekyeong}
                    alt=""
                  />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      Yekyeong Jang
                    </h3>
                    <p
                      className="text-base font-semibold leading-6 "
                      style={{ color: "#FADC5F" }}
                    >
                      Back-end
                    </p>
                  </div>
                </div>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default TeamIntro;
