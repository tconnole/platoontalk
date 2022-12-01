import { Button, Checkbox, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.scss';

/* eslint-disable-next-line */
export interface LoginPageProps {}



export function LoginPage(props: LoginPageProps) {
  const navigate = useNavigate();

  const login = () => {
    navigate('home?authenticated=true');
  };

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>Login</div>
      <div className={styles['login-form']}>
        <div className={styles['login-form-inputs']}>
        <div className={styles['login-form-row']}>
        <a> E-Mail Address </a>
          <TextField />
        </div>
        <div className={styles['login-form-row']}>
          <a> Password </a>
          <TextField />
        </div>
        </div>
        <div>
        <Checkbox />
        Remember Me
        </div>
        <div className={styles['login-form-row']} style={{flexDirection: 'column', gap: '1rem'}}>
        <Button variant={'contained'} onClick={login}>Login</Button>
        <Link to={'login'}>Forget Your Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
