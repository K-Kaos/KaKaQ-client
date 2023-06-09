import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function TermofUseForm() {
  const [allCheck, setAllCheck] = useState(false);
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  //유효성 검사
  const [isData, setIsData] = useState({
    checkOne: false,
    checkTwo: false,
    checkThree: false,
  });

  const allBtnEvent = () => {
    if (allCheck == false) {
      setAllCheck(true);
      setCheckOne(true);
      setCheckTwo(true);
      setCheckThree(true);
    } else {
      setAllCheck(false);
      setCheckOne(false);
      setCheckTwo(false);
      setCheckThree(false);
    }
  };

  const checkOneBtn = () => {
    if (checkOne == false) {
      setCheckOne(true);
    } else {
      setCheckOne(false);
    }
  };

  const checkTwoBtn = () => {
    if (checkTwo == false) {
      setCheckTwo(true);
    } else {
      setCheckTwo(false);
    }
  };

  const checkThreeBtn = () => {
    if (checkThree == false) {
      setCheckThree(true);
    } else {
      setCheckThree(false);
    }
  };

  useEffect(() => {
    if (checkOne == true && checkTwo == true && checkThree == true) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [checkOne, checkTwo, checkThree]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (disabled !== true) {
      alert("모든 약관에 동의해주세요.");
    } else {
      alert("이용약관 동의함");
      navigate("/signup");
    }
  };

  return (
    <Container
      fluid
      className="signup-header mx-md"
      class="flex flex-col items-center justify-center px-2 py-2 "
    >
      <Container
        fluid
        className="signup-header mx-md"
        class="flex flex-col items-center justify-center px-2 py-2 "
        style={{ maxWidth: "830px" }}
      >
        <form onSubmit={handleSubmit}>
          <div
            className="p-20 px-10 space-y-4 md:space-y-6 sm:p-8"
            style={{ alignItems: "center" }}
          >
            <div className="w-auto md:w-auto isolate px-36 py-2 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  KaKaQ 이용약관
                </h2>
              </div>
              <br />
              <section className="all-check flex mt-4">
                <input
                  type="checkbox"
                  className="form-check-input mt-1"
                  name="check-all"
                  id="check-all"
                  checked={allCheck}
                  onChange={allBtnEvent}
                />
                <label for="check-all">
                  <strong>
                    KaKaQ 이용약관, 개인정보 수집 및 이용, 위치기반서비스
                    이용약관(필수)에 모두 동의합니다.
                  </strong>
                </label>
              </section>
              <section className="one-check mt-4">
                <div className="flex ">
                  <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    name="check-one"
                    id="check-one"
                    checked={checkOne}
                    onChange={checkOneBtn}
                  />
                  <label for="check-one">
                    <p class="text-xl">KaKaQ 이용약관 동의(필수) </p>
                  </label>
                </div>
                <div className="text-sm bg-white item-start w-full h-30 shadow-sm px-3.5 py-2.5 border-slate-500">
                  KaKaQ 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서
                  감사합니다. 본 약관은 다양한 KaKaQ 서비스의 이용과 관련하여
                  KaKaQ 서비스를 제공하는 K-Kaos와 이를 이용하는 KaKaQ 서비스
                  회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러
                  여러분의 KaKaQ 서비스 이용에 도움이 될 수 있는 유익한 정보를
                  포함하고 있습니다.
                </div>
              </section>
              <section className="two-check mt-4">
                <div className="flex ">
                  <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    name="check-two"
                    id="check-two"
                    checked={checkTwo}
                    onChange={checkTwoBtn}
                  />
                  <label for="check-two">
                    <p class="text-xl">개인정보 수집 및 이용 동의(필수) </p>
                  </label>
                </div>
                <div className="text-sm bg-white w-full h-25 shadow-sm px-3.5 py-2.5 border-slate-500">
                  개인정보보호법에 따라 KaKaQ에 회원가입 신청하시는 분께
                  수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적,
                  개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시
                  불이익이 있을 수 있습니다.
                </div>
              </section>
              <section className="three-check mt-4">
                <div className="flex ">
                  <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    name="check-three"
                    id="check-three"
                    checked={checkThree}
                    onChange={checkThreeBtn}
                  />
                  <label for="check-three">
                    <p class="text-xl">위치기반서비스 이용약관 동의(필수) </p>
                  </label>
                </div>
                <div className="text-sm bg-white w-full h-15 shadow-sm px-3.5 py-2.5 border-slate-500">
                  KaKaQ는 이용자가 본 서비스의 위치기반서비스 이용에 대해 동의한
                  경우에만 위치정보를 이용합니다. KaKaQ는 위치정보를 수집할
                  경우에는 사전에 이용자에게 해당 사실을 고지하고 이용자의
                  동의를 받습니다.
                </div>
              </section>
              <div className="mt-10">
                <button
                  type="submit"
                  className={`block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 
                                ${
                                  !(
                                    isData.checkOne &&
                                    isData.checkTwo &&
                                    isData.checkThree
                                  )
                                    ? "disabled"
                                    : ""
                                }`}
                  style={{
                    backgroundColor: !(
                      checkOne == true &&
                      checkTwo == true &&
                      checkThree == true
                    )
                      ? "#ccc"
                      : "rgb(250, 220, 95)",
                  }}
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </form>
        <br />
      </Container>
    </Container>
  );
}

function TermofUse() {
  return (
    <div>
      <TermofUseForm title="이용약관" />
    </div>
  );
}

export default TermofUse;
