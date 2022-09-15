import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import "./LoginModal.css";
import SocialLoginButton from "./SocialLoginButton";

// 테스트용 더미데이터
const User = {
  email: "test@ex.com",
  pw: "test123#",
};

export default function LoginModal(props) {
  const [email, setEmail] = useState(""); //입력받는 값을 email 값으로 사용하기 위함
  const [pw, setPw] = useState(""); //입력받는 값을 pw 값으로 사용하기 위함

  const [emailVaild, setEmailValid] = useState(false); //이메일 유효성 체크용
  const [pwVaild, setPwValid] = useState(false); //패스워드 유효성 체크용
  const [notAllow, setNotAllow] = useState(false); //이메일, 비밀번호 valid 체크용

  const handleEmail = (e) => {
    setEmail(e.target.value);

    /** 정규표현식 */
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    //정규표현식으로 테스트 해보았을 때
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    // 입력된 email과 pw가 User안의 값과 동일하면 성공했다고 알림
    console.log('test');
    if (email === User.email && pw === User.pw) {
      alert("로그인에 성공 했습니다.");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  useEffect(() => {
    if (emailVaild && pwVaild) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailVaild, pwVaild]);

  return (
    <Modal>
      <div className="background-container">
        <div className="body-container">
          <div className="modal-container">
            <div className="closed-button">X</div>

            <div className="logo">
              <img src=".\img\logo.JPG"></img>
            </div>

            <div className="inputWrap">
              <input
                type="text"
                className="input"
                placeholder="이메일"
                value={email}
                onChange={handleEmail} //사용자가 입력한 값으로 세팅
              ></input>
            </div>

            <div className="inputWrap">
              <input
                type="password"
                className="input"
                placeholder="비밀번호"
                value={pw}
                onChange={handlePw}
              ></input>
            </div>

            <div className="login-button-container">
              <button
                className="login-button"
                onClick={onClickConfirmButton}
                disabled={notAllow}
              >
                로그인
              </button>
            </div>

            <div className="info-container">
              <span>비밀번호 찾기</span>|<span>회원가입</span>
            </div>

            <div className="social-login">
              <p className="simple-text">간편로그인 </p>

              <div className="social-btn">
                <SocialLoginButton></SocialLoginButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1;

  /* display: flex; */

  .background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.78);
    overflow: hidden;
    z-index: 21;
  }

  .modal-container {
    padding: 24px;
    margin: auto;
    width: 360px !important;
    height: 432px;
    background-color: #fff;
    border-radius: 6px;
    z-index: 10;

    text-align: center;

    .closed-button {
      text-align: right;
    }

    .logo {
      align-items: center;

      img {
        width: 40%;
      }
    }

    .input {
      padding: 13px 12px;
      width: 300px;
      height: 22px;
      line-height: 1.47;
      font-size: 15px;
      border: 1px solid #dee2e6;
      letter-spacing: -0.3px;
      border-radius: 4px;
      background-color: #fff;
      margin: 12px 0 10px 0;
    }

    .login-button {
      width: 326px;
      background-color: #00c471;
      line-height: 1.43;
      font-size: 14px;
      letter-spacing: -0.3px;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      line-height: 1.47;
      font-weight: 500;
      cursor: pointer;
      -webkit-appearance: none;
      padding: 0 12px;
      height: 50px;
      border: 1px solid;
      color: #fff;
      margin: 12px 0 10px 0;
    }

    .info-container {
      line-height: 1.38;
      letter-spacing: -0.3px;
      font-size: 13px;
      font-weight: 400;
      color: #616568;
      border-bottom: 1px solid #e8eaeb;
      cursor: pointer;
      padding: 10px 0 20px 0;

      span {
        margin: 0 5px 0 5px;
      }
    }

    .social-login {
      position: relative;

      .simple-text {
        position: absolute;
        color: #454545;
        font-size: 0.5rem;
        font-weight: 400;
        line-height: 1.5;
        display: inline-block;
        background-color: #fff;
        bottom: -5px;
        left: 160px;
      }
    }
  }
`;
