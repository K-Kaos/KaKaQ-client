import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function TermofUseForm() {
    const [allCheck, setAllCheck] = useState(false);
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    const [checkThree, setCheckThree] = useState(false);
    const [checkFour, setCheckFour] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const allBtnEvent = () => {
        if (allCheck == false) {
            setAllCheck(true);
            setCheckOne(true);
            setCheckTwo(true);
            setCheckThree(true);
            setCheckFour(true);
        } else {
            setAllCheck(false);
            setCheckOne(false);
            setCheckTwo(false);
            setCheckThree(false);
            setCheckFour(false);
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
    const checkFourBtn = () => {
        if (checkFour == false) {
            setCheckFour(true);
        } else {
            setCheckFour(false);
        }
    };

    useEffect(() => {
        if (checkOne == true && checkTwo == true && checkThree == true && checkFour == true) {
            setAllCheck(true);
        } else {
            setAllCheck(false);
        }
    }, [checkOne, checkTwo, checkThree, checkFour]);


    useEffect(() => {
        if (checkOne == true && checkTwo == true && checkThree == true) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [checkOne, checkTwo, checkThree]);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("이용약관 동의함");
    };

    return (
        <Container fluid className="signup-header mx-md" class="flex flex-col items-center justify-center px-2 py-2 ">
            <Container fluid className="signup-header mx-md" class="flex flex-col items-center justify-center px-2 py-2 " style={{ maxWidth: "830px" }}>
                <form onSubmit={handleSubmit}>
                    <div class="p-20 px-10 space-y-4 md:space-y-6 sm:p-8" style={{ alignItems: "center" }}>
                        <div class="w-auto md:w-auto isolate px-36 py-2 sm:py-32 lg:px-8">
                            <div class="mx-auto max-w-2xl text-center">
                                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">이용약관</h2>
                                <p class="mt-2 text-lg leading-8 text-gray-600">KaKaQ 이용약관, 개인정보 수집 및 이용, 위치기반 서비스 이용약관에 모두 동의합니다. </p>
                            </div>
                            <br />
                            <section className='all-check'>
                                <input type='checkbox' name='check-all' id='check-all' checked={allCheck} onChange={allBtnEvent} />
                                <label for='check-all'>
                                    <span className='all-check-text'>
                                        <strong>네이버 이용약관, 개인정보 수집 및 이용, 위치기반서비스 이용약관(선택), 프로모션 정보 수신(선택)에 모두 동의합니다.</strong>
                                    </span>
                                </label>
                            </section>
                            <div class="mt-10">
                                <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${!(isData.username && isData.email && isData.password && isData.confirmPassword) ? 'disabled' : ''}">회원가입</button>
                                {/* style={{ backgroundColor: !(isData.username && isData.email && isData.password && isData.confirmPassword) ? '#ccc' : '' }}>회원가입</button> */}
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
