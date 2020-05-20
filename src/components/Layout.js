import React from 'react';
import { Link } from 'gatsby';
import styles from './Layout.module.css';
import Box from './Box';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <header className={styles.headerHome}>
        <h1>
          <Link to={`/`}>signal lantern</Link>
        </h1>
      </header>
    );
  } else {
    header = (
      <header className={styles.header}>
        <h1>
          <Link to={`/`}>signal lantern</Link>
        </h1>
      </header>
    );
  }
  return (
    <div className={styles.pageWrapper}>
      <Box>{header}</Box>
      <main>{children}</main>

      <nav className={styles.siteNav}>
        <Box>
          <ul>
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
