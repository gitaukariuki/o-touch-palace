// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      {/* Contact Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="md:col-span-2 p-3 border rounded"
          required
        />
        <button
          type="submit"
          className="md:col-span-2 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Newsletter Subscription */}
      <div className="bg-gray-100 p-6 rounded mb-10">
        <h3 className="text-xl font-semibold mb-3">Subscribe to Our Newsletter</h3>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-3 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Google Map Embed */}
      <div className="aspect-w-16 aspect-h-9">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.532628511062!2d37.356278810713576!3d-0.6856659352620822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1826210c3a972bff%3A0x81e868489691060e!2sCLUB%20O&#39;TOUCH-MWEA!5e0!3m2!1sen!2ske!4v1747034697763!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Contact;
