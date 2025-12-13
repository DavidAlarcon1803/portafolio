import React from 'react';
import '../styles/Profile.css';

export default function ProfileImage() {
  return (
    <div className="image-wrapper-center">
      <div className="image-card">
        <div className="image-glow"></div>
        <div className="image-frame">
          <img
            src="/professional-profile-photo-of-developer.jpg" 
            alt="Efren David Alarcon Muñoz"
            className="profile-img"
          />
        </div>
      </div>
    </div>
  );
}
