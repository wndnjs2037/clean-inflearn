import React from 'react';
import './ImageSwiper.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper/core";
import "swiper/css"
import "swiper/css/pagination";

SwiperCore.use([Pagination, Navigation]);

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
      </main>
    
    )
}