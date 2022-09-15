import React from 'react';
import Header from './components/Header';
import ImageSwiper from './components/ImageSwiper';
import LoginModal from './components/LoginModal';
import SearchComponent from './components/SearchComponent';


function App() {
  return (
    <div>
      <div className="app-container">
        { 
          <div>
          
            <Header></Header>
          
            <ImageSwiper></ImageSwiper>

            <SearchComponent></SearchComponent>

            <LoginModal></LoginModal>
          </div>  
        }

      </div>
    </div>
  );
}

export default App;
