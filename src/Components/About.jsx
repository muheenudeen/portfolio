import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const firstParagraphRef = useRef(null);
  const secondParagraphRef = useRef(null);
  const roleHeadingRef = useRef(null);
  const roleParagraphRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once the element is visible
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    if (firstParagraphRef.current) {
      observer.observe(firstParagraphRef.current);
    }
    if (secondParagraphRef.current) {
      observer.observe(secondParagraphRef.current);
    }
    if (roleHeadingRef.current) {
      observer.observe(roleHeadingRef.current);
    }
    if (roleParagraphRef.current) {
      observer.observe(roleParagraphRef.current);
    }
    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      if (firstParagraphRef.current) {
        observer.unobserve(firstParagraphRef.current);
      }
      if (secondParagraphRef.current) {
        observer.unobserve(secondParagraphRef.current);
      }
      if (roleHeadingRef.current) {
        observer.unobserve(roleHeadingRef.current);
      }
      if (roleParagraphRef.current) {
        observer.unobserve(roleParagraphRef.current);
      }
      if (detailsRef.current) {
        observer.unobserve(detailsRef.current);
      }
    };
  }, []);

  return (
    <section id='about'>    <div className="min-h-screen bg-gray-300 text-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-12">
        <h1
          ref={headingRef}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center transition-transform duration-1500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'} text-dark-blue border-b-4 border-dark-blue pb-2`}
          style={{ color: '#003366' }} // Dark blue color
        >
          About Me
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div
            ref={imageRef}
            className={`relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 transition-transform duration-1500 ease-in-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'} rounded-lg overflow-hidden shadow-lg bg-white`}
          >
            <img
              src="src/assets/WhatsApp Image 2024-09-12 at 17.22.54_637abcd4.jpg" // Ensure correct path
              alt="Your Name"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 lg:ml-8 mt-6 lg:mt-0">
            <p
              ref={firstParagraphRef}
              className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl mb-6 transition-transform duration-1500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'}`}
            >
              Hi, <span className="font-bold text-blue-600">I'm Muheenudheen,</span> a passionate MERN stack developer with expertise in building full-stack applications using MongoDB, Express, React, and Node.js. I excel at developing efficient, scalable web solutions and enjoy tackling complex problems with modern technologies.</p>
            <p
              ref={secondParagraphRef}
              className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl transition-transform duration-1500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'}`}
            >
              When I'm not coding, I enjoy exploring new technologies, working on personal projects, and staying updated with the latest trends in the tech world. Feel free to reach out if you're interested in collaborating or discussing all things tech!            </p>
            <h2
              ref={roleHeadingRef}
              className={`text-2xl sm:text-3xl md:text-4xl font-semibold mt-8 mb-4 transition-transform duration-1500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'} text-dark-blue`}
              style={{ color: '#003366' }} // Dark blue color
            >
              UI/UX Designer & MERN Stack Developer
            </h2>
            <p
              ref={roleParagraphRef}
              className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl transition-transform duration-1500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'}`}
            >
              I emphasize creating visually appealing, user-friendly interfaces that offer seamless experiences. I leverage my skills in front-end frameworks like React and Tailwind CSS to transform design concepts into functional digital products. Working closely with designers, product managers, and back-end teams, I ensure cohesive integration across the stack to deliver high-quality, engaging applications.            </p>
            <div
              ref={detailsRef}
              className={`mt-8 transition-transform duration-1500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'}`}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-dark-blue" style={{ color: '#003366' }}>
                Contact Details
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li className={`transition-transform duration-1500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/muheenudheen-ct-9aa9452a0/" className="text-blue-600 underline">https://www.linkedin.com/in/muheenudheen-ct-9aa9452a0/</a></li>
                <li className={`transition-transform duration-1500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}><strong>Phone:</strong> 9188585859</li>
                <li className={`transition-transform duration-1500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}><strong>City:</strong> Malappuram</li>
                <li className={`transition-transform duration-1500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}><strong>Qualification:</strong> BA</li>
                <li className={`transition-transform duration-1500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}><strong>Email:</strong> <a href="midhunofficial7994@gmail.com" className="text-blue-600 underline">muheenudeenct@gmail.com</a></li>
                <li className={`transition-transform duration-1500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}><strong>Freelance:</strong> Available for freelance projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

  );
};

export default About;
