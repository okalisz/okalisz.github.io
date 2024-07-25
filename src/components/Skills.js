import React from 'react';
import './Skills.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Azure',
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="content">
        <h2>My Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
