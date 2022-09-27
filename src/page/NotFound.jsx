import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound({ setIsNotFound }) {
  const navigate = useNavigate();

  useEffect(() => {
    setIsNotFound(true);
  }, []);

  return (
    <Wrap>
      <div className="wrap">
        <div className="error-msg">
          <img className="logo" src=".\img\logo.JPG"></img>
          <h1>404 ERROR</h1>
          <h3>페이지를 찾을 수 없습니다.</h3>

          <p>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</p>
        </div>

        <div className="button-container">
          <div className="go-to-prev">
            <button onClick={() => navigate(-1)}>이전 페이지로 이동</button>
          </div>

          <div className="go-to-main">
            <Link to="/">
              <button>메인 페이지로 이동</button>
            </Link>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 20px;
  text-align: center;
  transform: translateY(60%);

  .logo {
    width: 180px;
  }

  .button-container {
    display: flex;
    justify-content: center;

    .go-to-prev {
      margin: 5px 10px 5px 10px;
    }

    .go-to-main {
      margin: 5px 10px 5px 10px;
    }
  }
`;
