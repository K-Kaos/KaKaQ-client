import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";
import Checkbox from "./CheckBox";
import CheckboxGroup from "./CheckboxGroup";
import InputBox from "./InputBox";
import Card from "react-bootstrap/Card";
import Question from "./Question";
import { CardGroup, ProgressBar, Spinner } from "react-bootstrap";

function TestStart(props) {
    let whoLoggedIn = null;
    useEffect(() => {
        whoLoggedIn = sessionStorage.getItem('whoLoggedIn');
        if (whoLoggedIn === null) {
            alert("로그인 후 이용해 주세요");
            window.location.href = "/login";
        }
    }, []);
    const [pages, setPages] = React.useState(["home"]);
    const [message, setMessage] = React.useState('');

    return (
        <Container fluid className="survey-header max-w-3xl mx-auto">
            <Container className="m-auto mx-10">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Thank you for submitting ${e.target.firstName.value} ${e.target.lastName.value}! `);
                    setMessage(`Thank you for submitting ${e.target.firstName.value} ${e.target.lastName.value}! `);
                    return true;
                }}>
                    <h1 className="project-heading">
                        캐릭터 <strong className="yellow">유형 테스트 </strong>
                    </h1>
                    <p >
                        평소에 습관적으로 하는 것을 체크하시면 됩니다
                    </p>
                    <section className='one-check mt-2'>
                        <div className="text-sm bg-white item-start w-full h-30 shadow-sm px-3.5 py-2.5 border-slate-500">
                            유형 테스트에 대한 설명이 들어갈 것임.
                            어떤 성격 기반으로 만들어졌는지 등
                        </div>
                    </section>
                    <div className="items-end flex justify-center mt-3">
                        <button to="signup" type="submit" className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >설문 시작하기</button><br />
                    </div>
                </form>
            </Container>
        </Container>
    );
}

export default TestStart;