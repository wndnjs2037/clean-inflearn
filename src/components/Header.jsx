import React from 'react';
import './Header.css';

export default function Header(props) {
    return ( 
        <div className="wrap">
            <div className='top-header'>
                <img className="learn-img" src=".\img\top_header.JPG"></img>
                
                <div className='join-btn'>
                    <span className='join'>지식공유 참여</span>
                </div>
            </div>

            <hr></hr>

            <div className='under-header'>
                <div className='logo'>
                    <img src=".\img\logo.JPG"></img>
                </div>

                <div className='nav-menu'>
                    <a className='nav-item'>
                        <span>강의</span>
                    </a>
                    <a className='nav-item'>
                        <span>로드맵</span>
                    </a>
                    <a className='nav-item'>
                        <span>멘토링</span>
                    </a>
                    <a className='nav-item'>
                        <span>커뮤니티</span>
                    </a>
                    <a className='nav-item'>
                        <span>인프런</span>
                    </a>
                </div>

                
                <div className='search-box'>
                    <input type="text"/>
                    <img></img>
                </div>

                <div className="sign-box"> 
                    <a role="button" className="sign-in">로그인</a>
                    <a className="sign-up">회원가입</a>
                </div>



            </div>


        

        </div>
    
    
    )
}

<style></style>