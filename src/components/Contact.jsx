import React from 'react';
import "./contact.css";
import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    formData.append("access_key", "b845b3fb-84dd-4d4f-a107-266a52400342");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    
    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message was sent successfully",
        icon: "success"
      });

      // Reset the form after successful submission
      event.target.reset();
    }
  };

  return (
    <section id="contact" className="contact">
      <form onSubmit={onSubmit} className="contact-form">
        <h2>Contact Us</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className='field' placeholder='Enter your name!' name="name" required/>
        </div>
        <div className="input-box">
          <label>Phone Number</label>
          <input type="tel" className='field' placeholder='Enter your phone number!' name="phone-number" required/>
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className='field' placeholder='Enter your email!' name="email" required/>
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea className='field mess' placeholder='Enter your message' name="message" required></textarea>
        </div>
        <button type='submit' className="submit-btn">SUBMIT</button>
      </form>
    </section>
  );
};

export default Contact;
