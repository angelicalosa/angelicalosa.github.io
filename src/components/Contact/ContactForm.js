import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    const reloadPage = () => {
      setTimeout(() => {
        window.location.reload();
      }, 2500); // 3000 milliseconds = 3 seconds
    };

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        () => {
          /*
          eslint no-alert: 0
          */
          toast.success('The message has been successfully sent!');
          reloadPage();
        },
        () => {
          toast.error('Failed to send message. Please check your connection.');
        },
      );
  };

  return (
    <>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <input placeholder="Name" type="text" name="name" required />
            <input
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              required
            />
            <input type="submit" className="flat-button" value="SEND" />
            <ToastContainer position="bottom-right" autoClose={2500} hideProgressBar theme="light" />
          </ul>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
