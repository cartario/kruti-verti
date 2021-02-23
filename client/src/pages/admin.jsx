import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ActionCreators } from '../store/user/actions';
import Login from '../components/Login';
import Loader from '../components/Loader';
import AdminSection from '../components/admin/section';
import Feedbacks from '../components/admin/Feedbacks';
import Lessons from '../components/admin/Lessons';

const Admin = () => {
  const { isAuth, isLoaded, errors } = useSelector(({ user }) => user);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  const handleLogout = () => {
    localStorage.removeItem('krutiData');
    window.location.reload(); //temporary
  };

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('krutiData'));
    if (data && data.token) {
      dispatch(ActionCreators.setAuth()); //TODO fix checking token
    }
  }, [dispatch]);

  return (
    <div className="admin">
      <p className="offer-page__nav" onClick={handleClick}>
        Назад
      </p>

      {!isAuth ? (
        <Login />
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>

          <AdminSection title={'Feedbacks'}>
            <Feedbacks />
          </AdminSection>

          <AdminSection title={'Lessons'}>            
            <Lessons />
          </AdminSection>

          <AdminSection title={'User'}>
            <p>User</p>
          </AdminSection>          
        </>
      )}

      {errors.length ? <p>что-то пошло не так</p> : ''}
      {isLoaded && <Loader />}
    </div>
  );
};

export default Admin;
