import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(
                'service_ynp102q', // Replace with your Service ID
                'template_8hdeiuf', // Replace with your Template ID
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                'BA_DgRXle-wL6BTuV' // Replace with your Public Key
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message sent successfully!');
                },
                (err) => {
                    console.log('FAILED...', err);
                    alert('Failed to send message, please try again later.');
                }
            );
    };
  return (
    <div className="contact-container flex justify-center items-center min-h-screen bg-gray-2000">
      <div className="form-container text-white p-10 rounded-lg shadow-lg w-full max-w-4xl flex">
        <div className="form-Items">
          <div className="form-Items1">
            <form onSubmit={handleSubmit} className="w-1/2 pr-6">
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 rounded"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
