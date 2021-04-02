import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-icons-container'>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/lizmbarnes/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/liz-barnes'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='mailto: embarnes95@gmail.com'>
              <i
                className='fa fa-envelope'
                id='envelope'
                aria-hidden='true'
              ></i>
            </a>
          </li>
          {/* <div className="d-flex justify-content-center align-items-center resumeIcon">
            <MyResume />
          </div> */}
        </ul>
      </div>
    </footer>
  );
}
