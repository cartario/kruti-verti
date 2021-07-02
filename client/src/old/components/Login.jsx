import React from 'react';
import {useDispatch} from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classnames from 'classnames';
import {Operations} from '../../store/user/operations';

const schema = yup.object().shape({
  email: yup.string().email().required('email обязательное поле'),
  password: yup.string().min(6, 'минимум 6 символов').max(40).required(),
});

const Login = () => {
  const dispatch = useDispatch();
      
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const obj = watch();
    dispatch(Operations.login(obj));   
  };

  return (
    <div className="auth">      
      <div className="auth__header">
        <h2>Войти в аккаунт администратора</h2>
        <p>Пожалуйста войдите в аккаунт администратора</p>
      </div>
      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <div          
          className={classnames({
            auth__field: true,
            invalid: !!errors.email,
            valid: !errors.email && watch().email,          
          })        
        }
        >
          <input name="email" type="email" placeholder="Введите email" ref={register}/>
          <p className="auth__error">{errors.email?.message}</p>
        </div>

        <div          
          className={classnames({
            auth__field: true,
            invalid: !!errors.password,
            valid: !errors.password && watch().password,            
          })}
        >
          <input name="password" type="password" placeholder="Введите пароль" ref={register}/>
          <p className="auth__error">{errors.password?.message}</p>
        </div>
        <div className="auth__controls">
          <button tabIndex="0" className="auth__login" type="submit">
            Войти 
          </button>  
         
          <a href="/">На главную</a>       
        </div>
      </form>
    </div>
  );
};

export default Login;
