import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h6>Angelo Aaron Kalaw</h6>
        <p><a href="mailto:angeloaaronkalaw@gmail.com">angeloaaronkalaw@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, you can call me AA. I am an undergraduate student in Computer Engineering with over
        four years of work experience in CAD Operations. I am eager to
        shift gears and enter the realm of Full Stack Development.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Angelo Aaron Kalaw <Link to="/">aakalaw.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
