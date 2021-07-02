import React from 'react';

const Player = ({ url }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="admin__lesson-player">
      <button onClick={() => setVisible(!visible)}>{visible ? 'Скрыть видео' : 'Видео'}</button>
      {visible && (
        <div>
          <video src={url} controls width="150" height="auto"></video>
        </div>
      )}
    </div>
  );
};

export default Player;
