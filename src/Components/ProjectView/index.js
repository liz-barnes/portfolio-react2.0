import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../helpers/data/projectData';

export default function ProjectView({ props }) {
  const { id } = useParams();
  const project = projects.filter((proj) => proj.id === id);
  console.warn('id', id);
  console.warn('proj', project);
  //   console.warn('proj', project);
  //   const projectId = this.value.location.pathname.id;
  //   console.warn('id', this.props);
  //   const project = projects.filter((proj) => proj.id === projectId);
  return (
    <div>
      <div id="project-view-container" className="page">
        <h3 className="project-title">{project[0].title}</h3>
        <h6>demo</h6>
        <p className="project-description">{project[0].description}</p>
        <div className="project-demo">
          <img
            src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"
            alt="Project demo gif"
          />
        </div>
        <p>{project[0].typeOfProject}</p>
        <h6>role</h6>
        <p className="project-role">{project[0].role}</p>
        <h6>tools</h6>
        <p className="project-tools">{project[0].technologiesUsed}</p>
        <div className="view-code-link-container">
            <a
            href={project[0].githubProject}
            target="_blank"
            rel="noreferrer"
            className="view-code-link"
            //   id={projectData.id}
            >
            view code
            </a>
        </div>
      </div>
      {/* {console.warn('id', useParams)} */}
    </div>
  );
}
