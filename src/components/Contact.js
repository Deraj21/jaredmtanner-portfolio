import React from 'react';

export default function Contact(props) {

  let { email } = props;

  return (
    <div className="row blue">
      <div className="side-content"></div>
      <div className="main-content">
        <div className="content-header">
          <a className="anchor" name="contact"></a>
          <h2 className="white-text">Contact Me</h2>
        </div>
        <div className="contact content-body">
          <form method="POST" action={`https://formspree.io/${email}`}>
              <input type="hidden" name="_subject" value="Contact request from personal website" />
              <input type="email" name="_replyto" placeholder="Your email" required />
              <textarea name="message" placeholder="Your message" required></textarea>
              <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="side-content"></div>
    </div>
  );
}