import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-box">
          <h3>Front-End</h3>
          <div className="skills-list">
            <button className="skill-button">HTML</button>
            <button className="skill-button">CSS</button>
            <button className="skill-button">JavaScript</button>
            <button className="skill-button">React</button>
            <button className="skill-button">Bootstrap</button>
            <button className="skill-button">Responsive Design</button>

          </div>
        </div>
        <div className="skill-box">
          <h3>Back-End</h3>
          <div className="skills-list">
            <button className="skill-button">Node.js</button>
            <button className="skill-button">Express</button>
            <button className="skill-button">MongoDB</button>
            <button className="skill-button">SQL</button>
            <button className="skill-button">REST APIs</button>
            <button className="skill-button">DOM</button>
          </div>
        </div>
        <div className="skill-box">
          <h3>Others</h3>
          <div className="skills-list">
            <button className="skill-button">Git</button>
            <button className="skill-button">Github</button>
            <button className="skill-button">Visual Studio </button>
            <button className="skill-button">OOPs </button>
            <button className="skill-button">MVC Architecture</button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
