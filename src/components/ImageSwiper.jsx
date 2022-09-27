import React from 'react';
import './ImageSwiper.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper/core";
import "swiper/css"
import "swiper/css/pagination";

SwiperCore.use([Pagination, Navigation]); //스와이퍼 사용하기 위함

export default function ImageSwiper(props) {
    return ( 
        <main className="ExampleComponent">
          <div className="main-wrap">
            <Swiper
              style={{
                width: "100%",
                height: "250px",
                backgroundColor: "skyblue",
              }}
              spaceBetween={8}
              initialSlide={1}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              Navigation
            >
              <SwiperSlide><img src=".\img\banner_1.png"></img></SwiperSlide>
              <SwiperSlide><img src=".\img\banner_2.gif"></img></SwiperSlide>
              <SwiperSlide><img src=".\img\banner_3.png"></img></SwiperSlide>
              
            </Swiper>
          </div>
{/* 
          <div className='pagination-container'>
            <div className='container'>
            <div className='swiper-pagination-controller'>
                  <div className='index-wrapper'>
                    <span className='current-index'>
                      1
                    </span>
                    <span>/</span>
                    <span className='total-count'>
                      3
                    </span>
                  </div>

                  <div className='controll-wrapper'>
                    <button type='button' className='previous-btn'></button>
                    <button type='button' className='pause-btn'></button>
                    <button type='button' className='next-btn'></button>
                  </div>

                  

            </div>
            <div className='divider'>
            </div>

            <div className='swiper-pagination-wrapper'>
              <span className='swiper-pagination-bullet'>2022 추석위크</span>
              <span className='swiper-pagination-bullet'>test</span>
            </div>
            

            </div>
          </div>*/}
      </main>
    
    )
}