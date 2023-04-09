import React, { useState } from 'react';
import { Container } from "react-bootstrap";

function LoginForm(props) {
    const [formData, setFormData] = useState({
        id: "", 
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        alert(formData.id + "님, 환영합니다!");
    };
    
    return (
        <Container className='login-header'>              
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div className="mb-3">
            <label>ID</label>
            <input
                id="id"
                name="id"
                type="id"
                className="form-control"
                placeholder="Enter ID"
                value={formData.id}
                onChange={handleInputChange}
            />
            </div>

            <div className="mb-3">
            <label>Password</label>
            <input
                id="pw"
                name="pw"
                type="pw"
                className="form-control"
                placeholder="Enter password"
                value={formData.pw}
                onChange={handleInputChange}
            />
            </div>

            <div className="mb-3">
            <div className="custom-control custom-checkbox">
                <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
                </label>
            </div>
            </div>

            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Login
            </button>
            </div>
            <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
            </p>
        </form>
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
