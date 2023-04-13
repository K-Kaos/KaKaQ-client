import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

function SignupForm(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setTimeout(() => {
                setError(null);
            }, 3000);
            setError("비밀번호가 일치하지 않습니다.");
            return;
        }
        // 회원가입 처리 로직
        axios.post("/http/signup", {
            username:formData.username,
            email:formData.email,
            password:formData.password,
        }).then(function (response){
            console.log(response);
            if(response.data ==0){//이메일 중복없고 db에 올림
                alert(formData.username+ "님, 환영합니다!");
            } else{
                if(response.data ==10000){//이메일에 중복 있음
                    alert("User email is duplicated. Please enter a different email");
                }
            }
        }).catch(function (error){
            console.log(error);
            if (error.response && error.response.status === 500) {
                alert('이미 가입된 이메일입니다.');
            }
        });
        
    };
    

    return (
        <Container fluid className="signup-header">
            <Container>
                <br/>
                <form onSubmit={handleSubmit}>
                    <h1>회원가입</h1>
                    <div className="mb-3">
                        <label htmlFor="username">사용자 이름</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <br /> <br /> 
                    <div className="mb-3">
                        <label htmlFor='email'>이메일</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <br /><br /> 
                    <div className="mb-3">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <br /> <br /> 
                    <div className="mb-3">
                        <label htmlFor="confirmPassword">비밀번호 확인</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                    </div>
                    <br /> <br />
                    {/* <div className='error-box'>{error}</div> */}
                    { error && (
                        <div className='error-box'>
                            <p>{error}</p>
                        </div>
                    )}
                    <br /> <br /> 
                    <button type="submit">회원가입</button>
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
