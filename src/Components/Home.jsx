import React, { useState, useEffect } from 'react';
import './typing.css';

const Home = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 3); 
    }, 7000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home">
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 text-white bg-gray-900 overflow-hidden">
        
        {/* Background decorative lines */}
        <div className="absolute inset-0 bg-[url('/path/to/decorative-background.png')] bg-cover opacity-30"></div>

        {/* Profile Image */}
        <img 
          src="src/assets/WhatsApp Image 2024-09-12 at 17.22.54_637abcd4.jpg"
          alt="Your Name"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full object-cover mb-6 z-10 shadow-lg"
        />

        {/* Header Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-4 z-10 text-white drop-shadow-lg">
          Hi, I'm <span className="text-purple-500">Muheenudheen CT</span>
        </h1>

        {/* Typing Text */}
        <div className="text-center z-10">
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-4 ${step === 0 ? 'typing-container' : 'hidden'}`}>
            Hi, I'm a <span className="font-bold text-green-400">Full Stack Developer</span>.
          </p>
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-4 ${step === 1 ? 'typing-container' : 'hidden'}`}>
            Experienced in React, Redux, Express, MongoDB, and PostgreSQL.
          </p>
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-4 ${step === 2 ? 'typing-container' : 'hidden'}`}>
            I'm a Freelancer.
          </p>
        </div>

        {/* Button */}
        <a
          href="#projects"
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white px-6 py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-md transition duration-300 transform hover:scale-105 z-10"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
