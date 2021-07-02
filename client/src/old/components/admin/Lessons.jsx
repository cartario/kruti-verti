import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Operations } from '../../../store/lessons/operations';
import AdminNewItem from '../admin/NewItem';
import Player from '../admin/Player';
import AdminLessonControls from '../admin/LessonControl';

const Lessons = () => {
  const dispatch = useDispatch();
  const { isLoaded, items: lessons, mobileItems: mobileLessons } = useSelector(({ lessons }) => lessons);

  React.useEffect(() => {
    dispatch(Operations.fetchLessons());
  }, [dispatch]);

  if (isLoaded) {
    return <p>Loading...</p>;
  }

  return (<>    
    <AdminNewItem />

    <h4>На сайте:</h4>
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
                <Player url={practiceUrl}/>             
              </td>
              <td className="admin__lesson-url">{tutorialUrl}
                <Player url={tutorialUrl}/>
              </td>
              <td className="admin__lesson-controls-row">
                <AdminLessonControls lesson={lesson}/>
              </td>
            </tr>
            
          </tbody>
        );
      })}
      
    </table>

    <h4>В приложении:</h4>
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
      {mobileLessons.map((lesson, i) => {
        const { id, level, title, practiceUrl, tutorialUrl } = lesson;
        return (
          <tbody className="admin__lesson-wrap" key={id}>
            <tr className="admin__lesson">
              <td className="admin__lesson-number"><b>{i + 1}</b></td>
              <td>{title}</td>
              <td>{level}</td>
              <td className="admin__lesson-url">{practiceUrl}
                <Player url={practiceUrl}/>             
              </td>
              <td className="admin__lesson-url">{tutorialUrl}
                <Player url={tutorialUrl}/>
              </td>
              <td className="admin__lesson-controls-row">
                <AdminLessonControls lesson={lesson}/>
              </td>
            </tr>
            
          </tbody>
        );
      })}
      
    </table>
    
    </>
  );
};

export default Lessons;
