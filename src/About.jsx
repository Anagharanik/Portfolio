import { useState, useEffect } from "react";
import anagha_photo from "/src/anagha_photo.jpg";
import "./About.css";

const typingText = ["Frontend  Developer", "React Developer", "Web Developer"];

const About = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const handleTyping = () => {
      const currentText = typingText[textIndex];

      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % typingText.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, charIndex, isDeleting, textIndex]);

  return (
    <section id="about" className="about-section">
      <img src={anagha_photo} alt="Profile" className="rounded-image" />
      <div className="about-content">
        <h3>{displayText}</h3>
        <p>
          I'm Anagha ,a passionate developer eager to create innovative
          solutions and bring ideas to life. I love working with JavaScript and
          exploring new technologies.
        </p>
        <a href="/Anagharani_CV.pdf" download="Anagharani_CV.pdf">
          Download My CV
        </a>
      </div>
    </section>
  );
};

export default About;
