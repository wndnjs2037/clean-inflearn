import React from "react";
import styled from "styled-components";

//버튼 데이터
const SocialButton = [
  {
    id: 1,
    name: "kakao",
    src: ".\\img\\kakao.JPG",
    color: "#fae500",
  },
  {
    id: 2,
    name: "google",
    src: ".\\img\\google.JPG",
    color: "#f8f8f8",
  },
  {
    id: 3,
    name: "git",
    src: ".\\img\\github.JPG",
    color: "#3c4043",
  },
  {
    id: 4,
    name: "facebook",
    src: ".\\img\\facebook.JPG",
    color: "##325ca6",
  },
  {
    id: 1,
    name: "apple",
    src: ".\\img\\apple.JPG",
    color: "#ffffff",
  },
];

export default function SocialLoginButton(props) {
  return (
    <Modal>
      <div className="wrap">
        {SocialButton?.map((value, index) => {
          return (
            <div className="button-container">
              <img className="btn" src={SocialButton[index].src}></img>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}

const Modal = styled.div`
  .wrap {
    background-color: pink;
    width: 300px;
    text-align: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;

    .btn {
      float: left;
      width: 44px;
      height: 44px;
      background-color: pink;
      border-radius: 4px;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
      margin: 2px 8px 2px 8px;
    }
  }
`;
