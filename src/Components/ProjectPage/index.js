import React from 'react';
import ProjectCard from '../ProjectCard';
// import projectData from '../../helpers/data/projectData';
import projects from '../../helpers/data/projectData';

export default function Work() {
  const availableProjects = projects.filter((project) => project.available);
  return (
    <div className="projects-container">
      {availableProjects ? (
        availableProjects.map((project) => (
          <ProjectCard key={project.id} projectData={project} />
        ))
      ) : (
        <div>Work is currently not availabe</div>
      )}
    </div>
  );
}
