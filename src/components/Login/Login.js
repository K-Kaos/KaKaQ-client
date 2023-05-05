import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import kakaologo from "../../Assets/Logo/kakaologo.png";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import moment from 'moment';

function LoginForm(props) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [isRemember, setIsRemember] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);
    const expires = moment().add('7', 'days').toDate(); // 쿠키 만료일 7일

    useEffect(() => {
        if (cookies.rememberEmail !== undefined) {
            setFormData((prevData) => ({ ...prevData, email: cookies.rememberEmail }));
            setIsRemember(true);
        }
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const checkHandler = (event) => {
        setIsRemember(!isRemember);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        //로그인 처리 로직
        axios.post("/api/user/login", {
            email: formData.email,
            password: formData.password,
        },).then(response => {
            const url = response.data;
            const username = url.split('/')[0];
            if (url.includes("/home")) {
                if (isRemember == true) {
                    setCookie('rememberEmail', formData.email, expires);
                } else {
                    removeCookie('rememberEmail');
                }
                sessionStorage.setItem("isLoggedIn", 'true');
                sessionStorage.setItem("whoLoggedIn", formData.email);
                alert(username + "님, 환영합니다!");
                window.location.href = "/";
            } else if (url === "/login") {
                alert("비밀번호를 확인해주세요");
            }
        }).catch(function (error) {
            const url = error.data;
            console.log(error);
            if (error.response.status === 403) {
                alert("가입된 이메일이 아닙니다.")
            }
            if (error.response && error.response.status === 500) {
                alert('로그인 실패');
            }
        });
    };

    return (
        <Container style={{ background: "#fffacd" }}>
            <section className="bg-gray-50">
                <div
                    className="flex flex-col items-center justify-center px-4 mx-auto md:h-screen lg:py-0 sm:p-8"
                    style={{ background: "#fffacd" }}>
                    <div
                        className="w-full rounded-lg shadow md:mt-4 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1
                                className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form clasName="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        for="id"
                                        className="block mb-2 text-sm font-medium text-gray-900 ">
                                        이메일
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="" />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        className="mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        비밀번호
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        class="form-control bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="" />
                                </div>
                                <div class=" mt-3 flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                checked={isRemember}
                                                onChange={(e) => checkHandler(e)}
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label
                                                for="remember"
                                                className="text-gray-500 dark:text-gray-300">로그인 상태 유지</label>
                                        </div>
                                    </div>
                                    <a href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">비밀번호 찾기</a>
                                </div>
                                <button
                                    type="submit"
                                    className="mt-2 w-full flex items-center justify-center bg-white-50 border border-gray-300 rounded-lg hover:bg-gray-100 font-medium p-2 text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    로그인
                                </button>
                                <div className="mt-2 items-center grid gap-2">
                                    <button className="flex items-center justify-center bg-white-50 border border-gray-300 rounded-lg hover:bg-gray-100 font-medium p-2">
                                        <img className="w-5 h-5 mr-2" src={kakaologo} alt="kakaoLogo" />
                                        카카오톡 로그인</button>
                                </div>
                                <p className="mt-2 text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? &nbsp;
                                    <a href="/termofuse"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

function Login() {
    return (
        <div>
            <LoginForm title="Login" />
        </div>
    );
}

export default Login;