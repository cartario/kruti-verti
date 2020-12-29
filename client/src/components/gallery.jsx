import React from 'react';

const Gallery = ({ title, bgColor, colorTitle }) => {
  return (
    <div
      className="gallery"
      style={{ backgroundColor: bgColor || 'white', color: colorTitle || 'black' }}
    >
      <h2>{title}</h2>
      <ul className="gallery__slides">
        <li className="gallery__slide">1</li>

        <li className="gallery__slide">2</li>

        <li className="gallery__slide">3</li>

        <li className="gallery__slide">4</li>

        <li className="gallery__slide">5</li>
      </ul>
    </div>
  );
};

export default Gallery;
