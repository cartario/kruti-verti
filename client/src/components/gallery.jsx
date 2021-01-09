import React from 'react';

const Gallery = ({ title, bgColor, colorTitle, galleryData, children, autoPlay=true }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if(autoPlay){
      setInterval(handleIncrementCount, 3000 * (1 + Math.random()));
    }
  }, [autoPlay]);

  const handleIncrementCount = () => {
    setCount((prev) => {
      if (prev === 3) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handleIDecrementCount = () => {
    setCount((prev) => {
      if (prev === 0) {
        return 3;
      }
      return prev - 1;
    });
  };

  return (
    <div
      className="gallery"
      style={{ backgroundColor: bgColor || 'white', color: colorTitle || 'black' }}
    >
      <h2>{title}</h2>
      <div className="gallery__slider">
        <ul className="gallery__slides" style={{ transform: `translateX(-${320 * count}px)` }}>
          <li
            className="gallery__slide"
            style={{ backgroundImage: `url(${galleryData && galleryData[0].url})` }}
          ></li>

          <li
            className="gallery__slide"
            style={{ backgroundImage: `url(${galleryData && galleryData[1].url})` }}
          >
            {children}
          </li>

          <li
            className="gallery__slide"
            style={{ backgroundImage: `url(${galleryData && galleryData[2].url})` }}
          ></li>

          <li
            className="gallery__slide"
            style={{ backgroundImage: `url(${galleryData && galleryData[3].url})` }}
          ></li>

          <li
            className="gallery__slide"
            style={{ backgroundImage: `url(${galleryData && galleryData[4].url})` }}
          ></li>
        </ul>
        <div className="gallery__controls">
          <button onClick={handleIDecrementCount}></button>
          <button onClick={handleIncrementCount}></button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
