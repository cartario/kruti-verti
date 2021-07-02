import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Operations } from '../../../store/main/operations';

const AdminSection = ({title, children}) => {
  const { isLoaded } = useSelector(({ main }) => main);
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  }

  React.useEffect(() => {
    dispatch(Operations.fetchFeedbacks());
  }, [dispatch]);

  return (
    <>
      <section className="admin__section">
        <h2 onClick={handleVisible}>
          {!isLoaded && <span>...</span>}
          {title} <span className={`admin__section-title-arrow ${visible && 'hide'}`}></span>
        </h2>
        {visible && children}
      </section>
    </>
  );
};

export default AdminSection;
