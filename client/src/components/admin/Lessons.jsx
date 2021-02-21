import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Operations } from '../../store/lessons/operations';

const Lessons = () => {
  const dispatch = useDispatch();
  const { isLoaded, items: lessons } = useSelector(({ lessons }) => lessons);

  React.useEffect(() => {
    dispatch(Operations.fetchLessons());
  }, []);

  if (isLoaded) {
    return <p>Loading...</p>;
  }

  return (<>
    
    <div className='admin__newItem'>
      <div className='admin__newItem-btn'>+</div>
      <div className='admin__newItem-modal'>Modal</div>
    </div>
    
    <table className="admin__lessons">
      <thead className="admin__lesson-wrap" >
            <tr className="admin__lesson">
              <th className="admin__lesson-number">№</th>
              <th>Title</th>
              <th>Level</th>
              <th>Practice</th>
              <th>Tutorial</th>
              <th>Controls</th>
            </tr>
          </thead>
      {lessons.map((lesson, i) => {
        const { _id: id, level, title, practiceUrl, tutorialUrl } = lesson;
        return (
          <tbody className="admin__lesson-wrap" key={id}>
            <tr className="admin__lesson">
              <td className="admin__lesson-number"><b>{i + 1}</b></td>
              <td>{title}</td>
              <td>{level}</td>
              <td className="admin__lesson-url">{practiceUrl}
                <div>
                  <button>Play</button>
                </div>              
              </td>
              <td className="admin__lesson-url">{tutorialUrl}
                <div>
                  <button>Play</button>
                </div>
              </td>
              <td>ControlsComponent</td>
            </tr>
            
          </tbody>
        );
      })}
      
    </table></>
  );
};

export default Lessons;
