import React from 'react';
import '../styles/Profile.css';

export default function ProfileImage() {
  return (
    <div className="image-wrapper-center">
      <div className="image-card">
        {/* Efecto de resplandor trasero */}
        <div className="image-glow"></div>

        {/* Marco e imagen */}
        <div className="image-frame">
          <img
            // Asegúrate de tener esta imagen en la carpeta public
            src="/professional-profile-photo-of-developer.jpg" 
            alt="Efren David Alarcon Muñoz"
            className="profile-img"
          />
        </div>
      </div>
    </div>
  );
}