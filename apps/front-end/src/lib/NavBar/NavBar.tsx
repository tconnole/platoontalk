import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Menu, MenuItem } from '@mui/material';
import { display } from '@mui/system';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './NavBar.module.scss';

/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  const [searchParams] = useSearchParams();
  const authenticated =
    searchParams.get('authenticated') === 'true' ? true : false;

  const [rosterAnchor, setRosterAnchor] = React.useState<null | HTMLElement>(
    null
  );
  const [userAnchor, setUserAnchor] = React.useState<null | HTMLElement>(null);
  const rosterOpen = Boolean(rosterAnchor);
  const userOpen = Boolean(userAnchor);

  const handleClick = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    menu === 'roster'
      ? setRosterAnchor(event.currentTarget)
      : setUserAnchor(event.currentTarget);
  };
  const handleClose = (menu: string) => {
    menu === 'roster' ? setRosterAnchor(null) : setUserAnchor(null);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['link-row']}>
        <Link
          className={styles['link']}
          to={`home${authenticated ? '?authenticated=true' : ''}`}
        >
          <h3 style={{ fontWeight: 'bold', color: 'black' }}>PlatoonTalk</h3>
        </Link>
        {authenticated ? (
          <h3
            onClick={(event) => handleClick(event, 'roster')}
            tabIndex={0}
            className={styles['link-menu']}
          >
            Roster
            <ArrowDropDownIcon />
          </h3>
        ) : (
          <></>
        )}
        {/* put menu drop down here */}
        {authenticated ? (
          <Link
            className={styles['link']}
            to={`files${authenticated ? '?authenticated=true' : ''}`}
          >
            <h3>Files</h3>
          </Link>
        ) : (
          <></>
        )}
        {authenticated ? (
          <Link
            className={styles['link']}
            to={`posts${authenticated ? '?authenticated=true' : ''}`}
          >
            <h3>Posts</h3>
          </Link>
        ) : (
          <></>
        )}
      </div>
      {authenticated ? (
        <h3
          tabIndex={0}
          onClick={(event) => handleClick(event, 'user')}
          className={styles['link-menu']}
        >
          SGT Joshua Hutfless
          <ArrowDropDownIcon />
        </h3>
      ) : (
        <div className={styles['link-row']}>
          <Link className={styles['link']} to={'login'}>
            <h3>Login</h3>
          </Link>
          <Link className={styles['link']} to={'login'}>
            <h3>Register</h3>
          </Link>
        </div>
      )}
      <Menu
        id={'roster-menu'}
        anchorEl={rosterAnchor}
        open={rosterOpen}
        onClose={() => handleClose('roster')}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: '15rem',
          }}
        >
          <Link
            className={styles['menu-item']}
            to={`roster/1${authenticated ? '?authenticated=true' : ''}`}
            onClick={() => handleClose('roster')}
          >
            Headquarters
          </Link>
          <Link
            className={styles['menu-item']}
            to={`roster/2${authenticated ? '?authenticated=true' : ''}`}
            onClick={() => handleClose('roster')}
          >
            1st Platoon
          </Link>
        </div>
      </Menu>

      <Menu
        id={'user-menu'}
        anchorEl={userAnchor}
        open={userOpen}
        onClose={() => handleClose('user')}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: '15rem',
          }}
        >
          <Link
            className={styles['menu-item']}
            to={`profile${authenticated ? '?authenticated=true' : ''}`}
            onClick={() => handleClose('user')}
          >
            Profile
          </Link>
          <Link
            className={styles['menu-item']}
            to={'login'}
            onClick={() => handleClose('user')}
          >
            Log out
          </Link>
        </div>
      </Menu>
    </div>
  );
}

export default NavBar;
