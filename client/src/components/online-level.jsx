import React from 'react';
import Session from './online-session';

const Level = ({ title, sessions, disabled }) => {
  return (
    <article className={disabled ? 'online__level online--disabled' : 'online__level'}>
      <h2>
        <span>Level {title}</span>
      </h2>

      <ul className="online__session">
        {sessions &&
          sessions.map((session, index) => (
            <Session
              index={index}
              key={session.title}
              title={session.title}
              levelTitle={title}
              id={session._id}
              backgroundColor={session.backgroundColor}
              backgroundImage={session.backgroundImage}
            />
          ))}
      </ul>
    </article>
  );
};

export default Level;
