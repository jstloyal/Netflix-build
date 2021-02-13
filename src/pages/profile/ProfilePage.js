import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/features/userSlice';
import Nav from '../../components/Nav/Nav';
import { auth } from '../../firebase';

import './ProfilePage.css';

function ProfilePage() {
  const user = useSelector(selectUser);

  return (
    <div className="profile-page">
      <Nav />
      <div className="profilePage-body">
        <h1>Edit Profile</h1>
        <div className="profilePage-info">
          <img 
            src="http://unsplash.it/100/100?gravity=center" alt=""
          />

          <div className="profilePage-details">
            <h2>{user.email}</h2>
            <div className="profilePage-plans">
              <h3>Plans</h3>
              <button onClick={() => auth.signOut()} className="profilePage-signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
