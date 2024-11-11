const sendMail = (e) => {
    e.preventDefault(); // Prevent default form submission
  
    const serviceID = 'service_0n1o8ve'; // Replace with your actual Service ID
    const templateID = 'template_t368e9i'; // Replace with your actual Template ID
    const userID = 'user_1234567890abcdef'; // Replace with your actual User ID (Public Key)
  
    emailjs.send(serviceID, templateID, formData, userID)
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
  