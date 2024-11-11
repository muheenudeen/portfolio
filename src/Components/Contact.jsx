import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = (e) => {
    e.preventDefault();

    const serviceID = 'service_0n1o8ve'; // Replace with your actual Service ID
    const templateID = 'template_t368e9i'; // Replace with your actual Template ID
    const userID = 'wmLjfu3qE9t9aqnSH'; // Replace with your actual User ID (Public Key)

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,  
      subject: formData.subject,    
      message: formData.message,
      to_name: 'Recipient Name'    
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((res) => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setStatus('Your message was sent successfully!');
        console.log('Email sent successfully:', res);
      })
      .catch((err) => {
        setStatus('Failed to send message. Please check the console for details.');
        console.error('Email sending failed:', err);
      });
  };

  return (
    <section className="contacts py-16 bg-cover bg-center" style={{ backgroundImage: 'url(/s6.jpg)' }} id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black">Contact Me</h2>
        </div>
        <div className="flex justify-center">
          <form onSubmit={sendMail} className="w-full max-w-lg bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2 text-gray-700">
                Enter your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input mt-1 block w-full rounded-md border-gray-300 bg-transparent text-gray-800 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-700">
                Enter your E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input mt-1 block w-full rounded-md border-gray-300 bg-transparent text-gray-800 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Enter your E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-lg font-medium mb-2 text-gray-700">
                Enter the subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input mt-1 block w-full rounded-md border-gray-300 bg-transparent text-gray-800 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Enter the subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2 text-gray-700">
                Enter Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea mt-1 block w-full rounded-md border-gray-300 bg-transparent text-gray-800 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Leave a comment here"
                style={{ height: '150px' }}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              >
                Send Message
              </button>
            </div>
            {status && (
              <div className="text-center mt-4 text-lg">
                <p>{status}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
