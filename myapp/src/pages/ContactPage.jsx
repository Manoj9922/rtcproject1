import React from 'react'
import '../App.css';

function ContactPage() {
  return (
     <div className="css-093">
      <h1 className="css-094">Contact Us</h1>
      <p className="css-095">
        If you have any questions or feedback, please feel free to reach out to us using the form below.
      </p>

      <form className="css-096">
        <div className="css-097">
          <label htmlFor="name" className="css-098">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="css-099"
            placeholder="Your Name"
          />
        </div>

        <div className="css-100">
          <label htmlFor="email" className="css-101">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="css-102"
            placeholder="Your Email"
          />
        </div>

        <div className="css-103">
          <label htmlFor="message" className="css-104">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="css-105"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="css-106"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactPage
