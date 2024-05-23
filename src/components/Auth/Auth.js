import styles from './Auth.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '../../common/Button/Button';
import { ReactComponent as Cross } from '../../assets/images/crossIcon.svg';
import { authLogin, authRegistration } from '../../services/AuthService';
import { logout, setUser } from '../../reducers/userSlice';
import { Toaster, toast } from 'sonner';
import 'react-toastify/dist/ReactToastify.css';
import { Title } from '../../common/Title/Title';

export const Auth = ({ auth, setAuth }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  const [flag, setFlag] = useState(false);
  const { isAuth, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const password = watch('password');

  useEffect(() => {
    if (password && password.length >= 5) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }, [password]);

  const onSubmit = async (data) => {
    try {
      if (flag) {
        if (data.password === data.passwordConfirm) {
          await authRegistration(data.email, data.password);
          setFlag(!flag);
          reset();
          toast.success('User was successfully registered!');
        } else {
          reset();
          toast.error(`The passwords don't match!`);
        }
      } else if (!flag) {
        const response = await authLogin(data.email, data.password);
        dispatch(setUser(response.data.user));
        localStorage.setItem('token', response.data.token);
        toast.success('User was successfully logged in !');
        reset();
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  const handleErrors = (error) => {
    if (error.response && error.response.status === 400) {
      toast.error('Invalid email or password!');
    } else {
      toast.error('Something went wrong... Try again later.');
    }
  };

  const emailRegex = (value) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(value);
  };

  return (
    <div
      className={auth ? [styles.container, styles.active].join(' ') : styles.container}
      onClick={() => isAuth && setAuth(false)}
    >
      {!isAuth ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.modalContainer}>
            <div className={styles.crossContainer}>
              <Cross className={styles.cross} onClick={() => setAuth(false)} />
            </div>
            <h3 className={styles.title}>{flag ? 'SIGN UP' : 'LOGIN'}</h3>
            <div className={styles.inputBlock}>
              <label className={styles.label} htmlFor="email">
                Email:
              </label>
              <input
                className={styles.input}
                id="email"
                type="text"
                {...register('email', {
                  required: 'This field is required.',
                  validate: (value) => emailRegex(value) || 'Please provide a valid email address.',
                  maxLength: { value: 30, message: 'Max length is 30 characters.' },
                })}
              />
            </div>
            <div className={styles.error}>
              {errors?.email && (
                <p>{errors.email.message || 'Please provide a valid email address.'}</p>
              )}
            </div>
            <div className={styles.inputBlock}>
              <label className={styles.label} htmlFor="password">
                Password:
              </label>
              <input
                id="password"
                type="password"
                className={[styles.passwordInput, styles.input].join(' ')}
                {...register('password', {
                  required: true,
                  minLength: { value: 5, message: 'Minimum length is 5 characters.' },
                  maxLength: { value: 20, message: 'Max length is 20 characters.' },
                })}
              />
            </div>
            <div className={styles.error}>
              {errors?.password && (
                <p>{errors.password.message || 'Minimum length is 5 characters.'}</p>
              )}
            </div>
            {flag && (
              <div style={{ marginBottom: '10px' }} className={styles.inputBlock}>
                <label className={styles.label} htmlFor="passwordConfirm">
                  Confirm the password:
                </label>
                <input
                  id="passwordConfirm"
                  type="password"
                  disabled={!isPasswordValid}
                  className={[styles.passwordInput, styles.input].join(' ')}
                  {...register('passwordConfirm', {
                    required: true,
                  })}
                />
              </div>
            )}
            <Button
              disabled={!isValid}
              addStyles={!isValid ? [styles.disabled, styles.button].join(' ') : styles.button}
            >
              {flag ? 'Sign Up' : 'Login'}
            </Button>
            <div className={styles.notRegisteredCont}>
              <span>{flag ? 'Already have an account? ' : `Don't have an account yet? `}</span>
              <span
                className={styles.createText}
                onClick={() => {
                  setFlag(!flag);
                  reset();
                }}
              >
                {flag ? 'Sign in' : ' Register Now'}
              </span>
            </div>
          </form>
          <Toaster richColors />
        </>
      ) : (
        <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
          <Title title="Профиль" />
          <span>{user.email}</span>
          <Button addStyles={styles.button} onClick={() => dispatch(logout())}>
            Выйти
          </Button>
        </div>
      )}
    </div>
  );
};
