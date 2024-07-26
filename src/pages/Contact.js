import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact AAK via email @ angeloaaronkalaw@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
          <p>Feel free to reach out and send me a direct message
            if you need any assistance. I&apos;ll be happy to help.
          </p>
          <ContactForm />
        </div>
      </header>
      <div className="email-at">
        <p>You also have the option to reach me by email at:</p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
