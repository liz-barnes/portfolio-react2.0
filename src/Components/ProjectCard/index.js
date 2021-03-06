import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ projectData }) {
//   const [project, setProject] = useState(projectData);
  return (
      <div
        id={projectData.id}
        className="project-card"
        style={{ backgroundImage: `url(${projectData.screenshot})` }}
      >
        <div className="hover-content">
          <p className="project-type">{projectData.type}</p>
          <h6 className="project-title">{projectData.title}</h6>
          <div className="project-btn-container mt-4">
          <Link
            to={`/work/${projectData.id}`} params={{ project: projectData }} className="project-btn"
            >
              view project
          </Link>
            <a
              href={projectData.url}
              target="_blank"
              rel="noreferrer"
              className="outline project-btn visit-site-btn"
            //   id={projectData.id}
            >
              visit site
            </a>
          </div>
        </div>
        {/* <div className="project-background" style={{ backgroundImage: `url(${projectData.screenshot})` }}>
        </div> */}
        {/* <img src={projectData.screenshot} alt="screenshot of project" /> */}
      </div>
  );
}

// import projectData from '../helpers/data/_projectsData';
// // import projectView from './_projectView';

// const buildProjects = () => {
//   projectData.getProjects().then((response) => {
//     response.forEach((project) => {
//       if (project.available === 'true') {
//         $('#projectsContainer').append(`
//         <div id="project-${project.firebaseKey}" class="project-card-container" style="background-image: url(${project.screenshot})">
//           <div class="project-card">
//             <div class="hover-content">
//               <p class="project-type">${project.type}</p>
//               <h6 class="project-title">${project.title}</h6>
//               <p>${project.description}</p>
//               <div class="project-btn-container mt-4">
//                 <a href="${project.url}" target="_blank" class="outline project-btn visit-site-btn" id="${project.firebaseKey}">visit site</a>
//               </div>
//               </div>
//           </div>
//         </div>
//         `);
//       }
