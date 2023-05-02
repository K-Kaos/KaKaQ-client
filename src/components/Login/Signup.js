import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function SignupForm(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    //유효성 검사
    const [isData, setIsData] = useState({
        username: false, //2자 이상 5자 이하
        email: false, //이메일 형식
        password: false, //영문+숫자+특수문자 8자이상 25자 이하
        confirmPassword: false, //비밀번호 일치
    });

    //비밀번호 일치 err
    // const [error, setError] = useState("");

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({ ...prevData, [name]: value }));
    // };

    const nameInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        if (event.target.value.length < 2 || event.target.value.length > 5) {
            setIsData((prevData) => ({ ...prevData, [name]: false }));
        } else {
            setIsData((prevData) => ({ ...prevData, [name]: true }));
        }
    };

    const mailInputChange = (event) => {
        const { name, value } = event.target;
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        if (!emailRegex.test(event.target.value)) {
            setIsData((prevData) => ({ ...prevData, [name]: false }));
        } else {
            setIsData((prevData) => ({ ...prevData, [name]: true }));
        }
    };

    const pwdInputChange = (event) => {
        const { name, value } = event.target;
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        if (!passwordRegex.test(event.target.value)) {
            setIsData((prevData) => ({ ...prevData, [name]: false }));
        } else {
            setIsData((prevData) => ({ ...prevData, [name]: true }));
        }
    };

    const cfpwdInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        if (formData.password === event.target.value) {
            setIsData((prevData) => ({ ...prevData, [name]: true }));
        } else {
            setIsData((prevData) => ({ ...prevData, [name]: false }));
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // 회원가입 처리 로직
        axios.post("/api/user/register", {
            username: formData.username,
            email: formData.email,
            password: formData.password,
        }).then(function (response){
            console.log(response);
            const url = response.data;
            if (url.includes("/login")) {
                alert(formData.username + "님, 환영합니다!");
                window.location.href = "/login";
            } else if (url.includes("/duplicate")) {
                alert("이미 가입된 메일입니다.");
            }
        }).catch(function (error) {
            console.log(error);
            alert("회원가입 오류");
        });

    };

    return (
        <Container fluid className="signup-header mx-md" class="flex flex-col items-center justify-center px-2 py-2 ">
            <Container fluid className="signup-header mx-md" class="flex flex-col items-center justify-center px-2 py-2 " style={{ maxWidth: "830px" }}>
                <form onSubmit={handleSubmit}>
                    <div class="p-20 px-10 space-y-4 md:space-y-6 sm:p-8" style={{ alignItems: "center" }}>
                        <div class="w-auto md:w-auto isolate px-36 py-2 sm:py-32 lg:px-8">
                            <div class="mx-auto max-w-2xl text-center">
                                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">회원가입</h2>
                                <p class="mt-2 text-lg leading-8 text-gray-600">KaKaQ에 가입하여 여러 편리한 설문조사 기능을 이용해보세요.</p>
                            </div>
                            <br />
                            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div class="sm:col-span-2">
                                    <div class="flex flex-col sm:flex-row items-center">
                                        <label for="username" class="block text-sm font-semibold leading-6 text-gray-900 sm:w-1/4 mb-2 sm:mb-0 sm:mr-4 sm:text-right">사용자 이름</label>
                                        <div class="flex-1">
                                            <input type="text"
                                                id="username"
                                                name="username"
                                                value={formData.username}
                                                onChange={nameInputChange}
                                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="username" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                <div class="flex flex-col sm:flex-row items-center">
                                    <label for="company" class="block text-sm font-semibold leading-6 text-gray-900 sm:w-1/4 mb-2 sm:mb-0 sm:mr-4 sm:text-right">이메일</label>
                                    <div class="flex-1">
                                        <input type="text"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={mailInputChange}
                                            class="block leading-3 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="email" required />
                                    </div>
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                <div class="flex flex-col sm:flex-row items-center">
                                    <label for="company" class="block text-sm font-semibold leading-6 text-gray-900 sm:w-1/4 mb-2 sm:mb-0 sm:mr-4 sm:text-right">비밀번호</label>
                                    <div class="flex-1">
                                        <input type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={pwdInputChange}
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="password" required />
                                    </div>
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                <div class="flex flex-col sm:flex-row items-center">
                                    <label for="email" class="block text-sm font-semibold leading-6 text-gray-900 sm:w-1/4 mb-2 sm:mb-0 sm:mr-4 sm:text-right">비밀번호 확인</label>
                                    <div class="flex-1">
                                        <input type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={cfpwdInputChange}
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="comfirm password" required />
                                    </div>
                                    </div>
                                </div>
                                <div class="flex gap-x-4 sm:col-span-2">
                                    <div class="flex h-6 items-center">
                                        <button type="submit"
                                            disabled={!(isData.username && isData.email && isData.password && isData.confirmPassword)}
                                            class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                                            <span class="sr-only">Agree to policies</span>

                                            <span aria-hidden="true" class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                                        </button>
                                    </div>
                                    <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
                                        By selecting this, you agree to our
                                        <a href="#" class="font-semibold text-indigo-600">&nbsp;privacy&nbsp;policy</a>.
                                    </label>
                                </div>
                            </div>
                            <div class="mt-10">
                                <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${!(isData.username && isData.email && isData.password && isData.confirmPassword) ? 'disabled' : ''}"
                                    style={{ backgroundColor: !(isData.username && isData.email && isData.password && isData.confirmPassword) ? '#ccc' : '' }}>회원가입</button>
                            </div>
                        </div>
                    </div>
                    {/* ============= */}
                    {/* <div class="isolate px-6 py-2 sm:py-32 lg:px-8">
                    <div class="mx-auto max-w-2xl text-center">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">회원가입</h2>
                        <p class="ml-2 text-lg leading-8 text-gray-600">KaKaQ에 회원 가입하여 여러 편리한 설문조사 기능을 이용해보세요!</p>
                    </div>
                    <div class="w-full mb-5 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div class="sm:col-span-2">
                        <label for="username" class="block text-sm font-semibold leading-6 text-gray-900">사용자 이름</label>&nbsp;
                            <input type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={nameInputChange}
                                class="block w-1/2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required />
                        </div>
                    </div>
                    <br /> <br />
                    <div className="mb-5">
                    <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">이메일</label>&nbsp;
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={mailInputChange}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
                    </div>
                    <br /><br />
                    <div className="mb-3">
                    <label for="password" class="block text-sm font-semibold leading-6 text-gray-900">비밀번호</label>&nbsp;
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={pwdInputChange}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
                    </div>
                    <br /> <br />
                    <div className="mb-3">
                    <label for="confirmPassword" class="block text-sm font-semibold leading-6 text-gray-900">비밀번호 확인</label>&nbsp;
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={cfpwdInputChange}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password check" required />
                    </div>
                    <div class="flex gap-x-4 sm:col-span-2">
                        <div class="flex h-6 items-center">
                            <button type="submit"
                                disabled={!(isData.username && isData.email && isData.password && isData.confirmPassword)}
                                class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                                <span class="sr-only">Agree to policies</span>

                                <span aria-hidden="true" class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                            </button>
                        </div>
                        <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
                            By selecting this, you agree to our
                            <a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={!(isData.username && isData.email && isData.password && isData.confirmPassword)}
                        className={`w-full flex items-center justify-center bg-white-50 border border-gray-300 rounded-lg hover:bg-gray-100 font-medium p-2 text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${!(isData.username && isData.email && isData.password && isData.confirmPassword) ? 'disabled' : ''}`}
                        style={{ backgroundColor: !(isData.username && isData.email && isData.password && isData.confirmPassword) ? '#ccc' : '' }}
                    >
                        회원가입
                    </button>  
                </div> */}
                </form>
                <br />
            </Container>
        </Container>
    );
}

function Signup() {
    return (
        <div>
            <SignupForm title="회원가입" />
        </div>
    );
}

export default Signup;
