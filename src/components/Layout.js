import React from 'react';
import { Link } from 'gatsby';
import styles from './Layout.module.css';
import Box from './Box';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <div className={styles.pageWrapper}>
      <Box>
        <header className={location.pathname === rootPath ? styles.headerHome : styles.header}>
          <h1>
            <Link to={`/`}>
              signal lantern <span className={styles.period}>.</span>
            </Link>
          </h1>
        </header>
      </Box>
      <main>{children}</main>

      <nav className={styles.siteNav}>
        <Box>
          <ul>
            {location.pathname !== rootPath && (
              <li>
                <Link activeClassName={styles.active} to={'/'}>
                  Home
                </Link>
              </li>
            )}
            <li>
              <Link activeClassName={styles.active} to={'/about'}>
                About
              </Link>
            </li>
            {/*<li>*/}
            {/*  <Link to="/writing">Writing</Link>*/}
            {/*</li>*/}
          </ul>
        </Box>
      </nav>
    </div>
  );
};

export default Layout;
