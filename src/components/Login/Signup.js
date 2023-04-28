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

        // if (formData.password !== formData.confirmPassword) {
        //     setTimeout(() => {
        //         setError(null);
        //     }, 3000);
        //     setError("비밀번호가 일치하지 않습니다.");
        //     return;
        // }

        // 회원가입 처리 로직
        axios.post("/api/user/register", {
            username: formData.username,
            email: formData.email,
            password: formData.password,
        }).then(function (response) {
            console.log(response);
            if (response.data == 0) {//이메일 중복없고 db에 올림
                alert(formData.username + "님, 환영합니다!");
                navigate("/login")
            } else {
                if (response.data == 10000) {//이메일에 중복 있음
                    alert("User email is duplicated. Please enter a different email");
                }
            }
        }).catch(function (error) {
            console.log(error);
            if (error.response && error.response.status === 500) {
                alert('이미 가입된 이메일입니다.');
            }
        });

    };

    return (
        <Container fluid className="signup-header">
            <Container>
                <br />
                <form onSubmit={handleSubmit}>
                    <h1>회원가입</h1><br />
                    <div className="mb-3 ">
                        <label htmlFor="username" class="text-lg">사용자 이름</label>&nbsp;&nbsp;
                        <input type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={nameInputChange}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required />
                            {/* class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> */}
                    </div>
                    <br /> <br />
                    <div className="mb-3">
                        <label htmlFor='email' class="text-lg">이메일</label>&nbsp;&nbsp;
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
                        <label htmlFor="password" class="text-lg">비밀번호</label>&nbsp;&nbsp;
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
                        <label htmlFor="confirmPassword" class="text-lg">비밀번호 확인</label>&nbsp;&nbsp;
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={cfpwdInputChange}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password check" required />
                    </div>
                    <br /> <br />
                    {/* <div className='error-box'>{error}</div> */}
                    {/* { error && (
                        <div className='error-box'>
                            <p>{error}</p>
                        </div>
                    )} */}
                    <br /> <br />
                    <button type="submit" disabled={!(isData.username && isData.email && isData.password && isData.confirmPassword)}>회원가입</button>
                </form>
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
