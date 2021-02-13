import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Nav.css';

function Nav() {
  const history = useHistory();

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <div className="nav_content">
          <img
            onClick={() => history.push('/')}
            className='nav-logo'
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix logo"
          />

        <img 
          onClick={() => history.push('/profile')}
          className='nav-avatar'
          src="http://unsplash.it/100/100?gravity=center"
          alt="random photo"
        />
      </div>
    </div>
  )
}

export default Nav;
