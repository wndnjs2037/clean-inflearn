import React from 'react';
import Header from './components/Header';
import ImageSwiper from './components/ImageSwiper';


function App() {
  return (
    <div>
      <div className="app-container">
        {
          <Header></Header>
        }
        
        {
          <ImageSwiper></ImageSwiper>
        }

      </div>
    </div>
  );
}

export default App;
