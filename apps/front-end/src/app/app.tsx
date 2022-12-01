// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import NavBar from '../lib/NavBar/NavBar';
import styles from './app.module.scss';

export function App() {
  const [searchParams] = useSearchParams();
  const authenticated = searchParams.get('authenticated') === 'true' ? true : false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate('login');
    }
  }, [authenticated]);

  return (
    <div className={styles['app']}>
      <div className={styles['header']}>
        <NavBar />
      </div>
      <div className={styles['body']}><Outlet /></div>
    </div>
  );
}

export default App;
