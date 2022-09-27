import React from "react";
import ImageSwiper from "../components/ImageSwiper";
import LoginModal from "../components/LoginModal";
import SearchComponent from "../components/SearchComponent";
import { useState } from "react";

export default function Main(props) {

  return (
    <div className="wrap">
      <ImageSwiper></ImageSwiper>

      <SearchComponent></SearchComponent>

      
    </div>
  );
}
