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
        <h2>Angelica Losa</h2>
        <p><a href="mailto:losaangelica52@gmail.com">losaangelica52@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Greetings, you can call me Ange. I hold a background in elementary education and have
        accumulated over a year of experience in junior sales executive role. I am enthusiastic
        about transitioning into freelance teaching as a professional endeavor.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Angelica Losa <Link to="/">angelicalosa.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
