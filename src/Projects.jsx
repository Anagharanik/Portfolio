import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: " Full Stack Project of Accomodation Rental Platform",
      description: "A responsive web application built with React.",
      link: "https://major-project-1v4u.onrender.com/listings",
    },
    {
      title: "CineSphere",
      description: "A REST API built with Node.js and Express.",
      link:"https://cinesphereproject.netlify.app/",
    },
    {
      title: "Clone Website(Frontend Only)",
      description: "A REST API built with Node.js and Express.",
      link: "https://ecomm-amazon-clone.netlify.app/",
    },

  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => ( 
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
