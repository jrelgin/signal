import React from 'react';
import { Link } from 'gatsby';
import styles from './Layout.module.css';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1 className={styles.headerHome}>
        <Link to={`/`}>signal lantern</Link>
      </h1>
    );
  } else {
    header = (
      <h1 className={styles.header}>
        <Link to={`/`}>signal lantern</Link>
      </h1>
    );
  }
  return (
    <div className={styles.pageWrapper}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
