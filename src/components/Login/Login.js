import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import logo from "../../Assets/Logo/logo.png";
import axios from 'axios';

function LoginForm(props) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        //로그인 처리 로직
        axios.post("/api/user/login", {
            email:formData.email,
            password:formData.password,
        },)
        .then(response => {
            const url = response.data;
            console.log(url);
            const username = url.split('/')[0];
            const userid = url.split('/')[1];
            if(url.includes("/home")){
                sessionStorage.setItem("isLoggedIn",'true');
                sessionStorage.setItem("whoLoggedIn",username);
                sessionStorage.setItem("IdLoggedIn", userid);
                // sessionStorage.setItem("idLoggedIn", )
                alert(username+"님, 환영합니다!");
                window.location.href = "/";
            }else if(url === "/login"){
                alert("비밀번호를 확인해주세요");
            }
        }).catch(function (error){
            const url = error.data;
            console.log(error);
            if(error.response.status===403){
                alert("가입된 이메일이 아닙니다.")
            }
            if (error.response && error.response.status === 500) {
                alert('로그인 실패');
            }
        });
        //alert(formData.username + "님, 환영합니다!");
    };

    return (
        <Container style={{ background: "#fffacd" }}>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div
                    class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
                    style={{ background: "#fffacd" }}
                >
                    <div
                        class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1
                                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        for="id"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                    />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label
                                                for="remember"
                                                class="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button
                                    type="submit"
                                    class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p
                                    class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? 
                                    <a
                                        href="/signup"
                                        class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Container>

    );
}

function Login() {
    return (
        <div>
            <LoginForm title="Login" />
        </div>
    );
}

export default Login;