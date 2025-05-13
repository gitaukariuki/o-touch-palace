import React from 'react';

const Header = ({ title, subtitle, bgImage, logo }) => {
  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute top-8 left-8">
        <img src={logo} alt="Logo" className="w-24 h-auto animate-bounce" />
      </div>
      
      <div className="bg-black bg-opacity-50 p-8 rounded text-center animate__animated animate__fadeIn">
        <h1 className="text-3xl md:text-5xl text-white font-bold animate__animated animate__fadeIn animate__delay-1s">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white mt-2 text-lg animate__animated animate__fadeIn animate__delay-2s">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
