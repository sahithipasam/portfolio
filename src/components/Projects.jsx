import React from 'react';
import "../Projects.css";
import projects from '../ProjectsData';
import { useScrollReveal } from '../useScrollReveal';

const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section className="projects reveal" ref={ref}>
      <h2>Featured Projects</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <div key={i} className="card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
