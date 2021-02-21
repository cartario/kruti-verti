import React from 'react';
import {useSelector} from 'react-redux';

const Feedbacks = () => {
  const { feedbacks, mobileFeedbacks } = useSelector(({ main }) => main);

  return (<>
    <h3>Сайт</h3>
    <ul>
      {feedbacks.map((item, i) => (
        <li key={item._id}>
          <div className="admin__section-item">
            <p className="admin__section-item-number">
              <b>{i + 1 + '.'}</b>
            </p>
            <p>{item.feedback}</p>
            <p>
              <i>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'no-date'}</i>
            </p>
          </div>
        </li>
      ))}
    </ul>
    <h3>Приложение</h3>
    <ul>
      {mobileFeedbacks.map((item, i) => (
        <li key={i}>
          <div className="admin__section-item">
            <p className="admin__section-item-number">
              <b>{i + 1 + '.'}</b>
            </p>
            <p>{item.feedback}</p>
            <p>
              <i>no-date</i>
            </p>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
};

export default Feedbacks;
