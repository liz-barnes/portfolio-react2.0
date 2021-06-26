import emailjs from 'emailjs-com';
import React from 'react';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio-email', e.target, 'user_mrPjVznhseFKGnMxxdWii')
      .then((result) => {
        console.warn(result.text);
      }, (error) => {
        console.warn(error.text);
      });
    e.target.reset();
  }

  // TO DO: Submit success pop up

  return (
    <div className="Contact page">
      <h1>Get in touch!</h1>
      <div class="contact-form">
        <form id="contact-form" onSubmit={sendEmail}>
            <input name="name" type="text" className="form-control" placeholder="Name" required />
            <input name="email" type="text" className="form-control" placeholder="Email" required />
            <input name="subject" type="text" className="form-control" placeholder="Subject" required />
            <textarea name="message" type="text" className="form-control" placeholder="Message" rows="8" required></textarea><br/>
            <button type="submit" className='submit-button'>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}
