import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"AAK's personal website.  "
    + '.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            A beautifully responsive statically generated
            React application written in modern JavaScript.
          </p>
        </div>
      </header>
      <p> Welcome to my website! Feel free to review more <Link to="/about">about me</Link>,
        explore {' '}
        <Link to="/resume">my resume</Link>, {' '}
        check out <Link to="/projects">my projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">get in touch with me</Link>.
      </p>
      <p> Source code is available <a href="https://github.com/aakalaw/aakalaw.github.io">here</a>.</p>
    </article>
  </Main>
);

export default Index;
