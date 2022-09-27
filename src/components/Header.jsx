import React from "react";
import "./Header.css";
import { useState } from "react";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Header(props) {
  const [loginModalIsSeen, setLoginModalIsSeen] = useState(false);
//   const navigate = useNavigate();



  return (
    <div className={props.isNotFound ? 'not-found' : 'Wrap'}>
      <div className="top-header">
        <img className="learn-img" src=".\img\top_header.JPG"></img>

        <div className="join-btn">
          <span className="join">지식공유 참여</span>
        </div>
      </div>

      <hr></hr>

      <div className="under-header">
        <div className="logo">
          <img src=".\img\logo.JPG"></img>
        </div>

        <div className="nav-menu">
          <a className="nav-item">
            <span>강의</span>
          </a>
          <a className="nav-item">
            <span>로드맵</span>
          </a>
          <a className="nav-item">
            <span>멘토링</span>
          </a>
          <a className="nav-item">
            <span>커뮤니티</span>
          </a>
          <a className="nav-item">
            <span>인프런</span>
          </a>
        </div>

        <div className="search-box">
          <input type="text" />
          <img></img>
        </div>

        <div className="sign-box">
          <button onClick={() => setLoginModalIsSeen(true)} className="sign-in">
            로그인
          </button> 
          {/* <Link to='/sign-up'>회원가입</Link> */}
          <button className="sign-up" >회원가입</button>
        </div>
      </div>

      {loginModalIsSeen && (
        <LoginModal
          loginModalIsSeen={loginModalIsSeen}
          setLoginModalIsSeen={setLoginModalIsSeen}
        ></LoginModal>
      )}
    </div>
  );
}

<style></style>;
