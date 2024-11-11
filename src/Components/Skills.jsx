import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);
  const codingSkillsRef = useRef(null);
  const communicationSkillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once the element is visible
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    if (codingSkillsRef.current) {
      observer.observe(codingSkillsRef.current);
    }
    if (communicationSkillsRef.current) {
      observer.observe(communicationSkillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
      if (codingSkillsRef.current) {
        observer.unobserve(codingSkillsRef.current);
      }
      if (communicationSkillsRef.current) {
        observer.unobserve(communicationSkillsRef.current);
      }
    };
  }, []);

  // Skill data with corresponding percentages
  const codingSkillsData = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 80 },
    { name: 'React', percentage: 70 },
    { name: 'Redux', percentage: 75 },
  ];

  const communicationSkillsData = [
    { name: 'Time Management', percentage: 85 },
    { name: 'Decision Making', percentage: 90 },
    { name: 'Team Work', percentage: 95 },
    { name: 'Communication Skill', percentage: 90 },
    { name: 'Listening', percentage: 88 },
    { name: 'Reading', percentage: 85 },
  ];

  return (
    <section id='skills'>    <div className="min-h-screen bg-gray-200 text-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-12">
        <h2
          ref={skillsRef}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center transition-transform duration-1000 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'} text-dark-blue border-b-4 border-dark-blue pb-2 underline underline-offset-8`}
          style={{ color: '#003366' }} // Dark blue color
        >
          My Skills
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Coding Skills */}
          <div
            ref={codingSkillsRef}
            className={`flex-1 transition-transform duration-1000 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'}`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-dark-blue">
              Coding Skills
            </h3>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <ul className="space-y-4">
                {codingSkillsData.map((skill) => (
                  <li key={skill.name} className="text-base sm:text-lg md:text-xl lg:text-2xl">
                    {skill.name}
                    <div className="w-full bg-gray-200 rounded-full mt-2 relative">
                      <div
                        className={`h-4 bg-dark-blue text-xs font-medium text-white text-center p-0.5 leading-none rounded-full ${isVisible ? `animate-fill-${skill.percentage}` : 'w-0'}`}
                        style={{ width: `${skill.percentage}%` }}
                      >
                        {`${skill.percentage}%`}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Communication Skills */}
          <div
            ref={communicationSkillsRef}
            className={`flex-1 transition-transform duration-1000 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'}`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-dark-blue">
              Communication Skills
            </h3>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <ul className="space-y-4">
                {communicationSkillsData.map((skill) => (
                  <li key={skill.name} className="text-base sm:text-lg md:text-xl lg:text-2xl">
                    {skill.name}
                    <div className="w-full bg-gray-200 rounded-full mt-2 relative">
                      <div
                        className={`h-4 bg-dark-blue text-xs font-medium text-white text-center p-0.5 leading-none rounded-full ${isVisible ? `animate-fill-${skill.percentage}` : 'w-0'}`}
                        style={{ width: `${skill.percentage}%` }}
                      >
                        {`${skill.percentage}%`}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    


      <style >{`
        @keyframes fill90 {
          from { width: 0%; }
          to { width: 90%; }
        }
        @keyframes fill85 {
          from { width: 0%; }
          to { width: 85%; }
        }
        @keyframes fill95 {
          from { width: 0%; }
          to { width: 95%; }
        }
        @keyframes fill80 {
          from { width: 0%; }
          to { width: 80%; }
        }
        @keyframes fill75 {
          from { width: 0%; }
          to { width: 75%; }
        }
        @keyframes fill70 {
          from { width: 0%; }
          to { width: 70%; }
        }
        @keyframes fill88 {
          from { width: 0%; }
          to { width: 88%; }
        }
        .animate-fill-90 { animation: fill90 2s ease-in-out forwards; } /* Slowed animation */
        .animate-fill-85 { animation: fill85 2s ease-in-out forwards; } /* Slowed animation */
        .animate-fill-95 { animation: fill95 2s ease-in-out forwards; } /* Slowed animation */
        .animate-fill-80 { animation: fill80 2s ease-in-out forwards; } /* Slowed animation */
        .animate-fill-75 { animation: fill75 2s ease-in-out forwards; } /* Slowed animation */
        .animate-fill-70 { animation: fill70 2s ease-in-out forwards; } /* Slowed animation */
        .animate-fill-88 { animation: fill88 2s ease-in-out forwards; } /* Slowed animation */
        .bg-dark-blue {
          background-color: #003366; // Dark blue color
        }
      `}</style>
    </div>
    </section>
  );
};

export default Skills;
