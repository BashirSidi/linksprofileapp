import React from 'react';
import './Profile.css';
import profilePic from '../assets/images/profile_pic.jpeg';

function Profile() {
  return (
    <>
      <img src={profilePic} id='profile__img' alt='profile_image'/>
      <p id='twitter'>Bashir Sidi</p>
      <p id='slack'>rashab</p>
    </>
  )
}

export default Profile