import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <header className="banner" style={{ backgroundImage: `url('https://i.imgur.com/e1hLQ2m.png')`,
    backgroundSize: "cover" ,
    backgroundPosition: "center center"}}>
      <div className="banner-content">
        <h1 className="banner-title">
          Movies Name
        </h1>
        <div className="banner-buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
      </div>
    </header>
  )
}

export default Banner;
