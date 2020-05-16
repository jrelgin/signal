import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to={`/`}>Signal Lantern</Link>
      </h1>
    );
  } else {
    header = (
      <h1>
        <Link to={`/`}>Signal Lantern</Link>
      </h1>
    );
  }
  return (
    <div>
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
