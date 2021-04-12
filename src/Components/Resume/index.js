import React from 'react';
// import { Document, pdfjs } from 'react-pdf';
import resume from '../../helpers/images/liz_barnes_resume.pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <div className="page" id="resume-page">
      <h3 className="outro">Thank you for visiting my site and checking out my work! Please reach out! I would love to collaborate, talk code or anything in between.</h3>
      <div className="pdf-button-container">
        <a className="pdf-link" href={resume} target="_blank" rel="noreferrer">
            Click here to view/download my resume!
        </a>
      </div>
      {/* <Document className="pdf" file="https://www.cdc.gov/headsup/pdfs/youthsports/parent_athlete_info_sheet-a.pdf" onLoadError={console.error} /> */}
    </div>
  );
}
