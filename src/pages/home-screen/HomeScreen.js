import React from 'react';
import Banner from '../../components/banner/Banner';
import Nav from '../../components/Nav/Nav';
import './HomeScreen.css';

function HomeScreen() {
  return (
    <div className="home-screen">
      <Nav />

      <Banner />

      {/* Row */}
    </div>
  )
}

export default HomeScreen;
