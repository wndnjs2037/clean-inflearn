import React from "react";
import Header from "./components/Header";
import Main from "./page/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./page/SignUp";
import NotFound from "./page/NotFound";
import { useState } from "react";
import styled from "styled-components";
// import "/assets/font.css"
// import "../public/assets/font.css"
import "./index.css"

function App() {
  const [isNotFound, setIsNotFound] = useState(false); //404 에러 페이지 상태 체크용

  return (
    <AppWrap>
    <div>
      <div className="app-container">
        {
          <div>
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
            <Header></Header>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/not" element={<NotFound />} />
                <Route path="/sign-up" element={<SignUp />} />

                <Route path="/*" element={<NotFound setIsNotFound={setIsNotFound}/>}/>
              </Routes>
            </BrowserRouter>
          </div>
        }
      </div>
    </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  font-family: 'Pretendard-Regular';

`
