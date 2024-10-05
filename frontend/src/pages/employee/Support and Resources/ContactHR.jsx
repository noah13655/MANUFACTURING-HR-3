import React from 'react';

const ContactHR = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact HR</h2>
      <p className="mb-4">Have a question or concern about your equity or personal information? Contact our HR department using the form below:</p>
      <form className="space-y-4">
        <div>
          <label className="label" htmlFor="name">Name:</label>
          <input type="text" id="name" className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="label" htmlFor="email">Email:</label>
          <input type="email" id="email" className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="label" htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="label" htmlFor="message">Message:</label>
          <textarea id="message" className="textarea textarea-bordered w-full" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default ContactHR;
