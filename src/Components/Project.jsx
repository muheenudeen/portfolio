import React from 'react';

const projectsData = [
  {
    title: 'Project 1',
    imageUrl: 's3.png', // Replace with your image URL
  },
  {
    title: 'Project 2',
    imageUrl: 's1.png', // Replace with your image URL
  },
  {
    title: 'Project 3',
    imageUrl: 's2.png', // Replace with your image URL
  },
  {
    title: 'Project 4',
    imageUrl: 's4.png', // Replace with your image URL
  },
  {
    title: 'Project 5',
    imageUrl: 's5.png', // Replace with your image URL
  },
  {
    title: 'Project 6',
    imageUrl: 'Screenshot 2024-06-02 145236.png', // Replace with your image URL
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-dark-blue">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-72 md:h-80 lg:h-96 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
