import React, { useState } from 'react';
import SignUpPage from '../sign-up/SignUp';

import './LoginPage.css';

function LoginPage() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login-page">
      <div className="login-page-bg">
        <img
          className="login-page-logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
          alt="my background"
        />
        <button className="login-button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginPage-gradient" />
      </div>

      <div className="loginPage-body">
        {signIn ? (
          <SignUpPage />
        ) : (
          <>
            <h1>Unlimited movies, TV <br /> shows, and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="loginPage-input">
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                />
                <button className="loginPage-btn" onClick={() => setSignIn(true)}>GET STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginPage;
