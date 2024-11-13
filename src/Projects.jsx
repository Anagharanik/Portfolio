import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Wanderlust",
      description: "Full Stack Project of  Accommodation Rental Platform",
      link: "https://major-project-1v4u.onrender.com/listings",
    },
    {
      title: "CineSphere",
      description: "Global Movie Search App",
      link:"https://cinesphereproject.netlify.app/",
    },
    {
      title: "Clone Website(Frontend Only)",
      description: "Online Shopping Platform",
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
