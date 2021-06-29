import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-icons-container'>
            <a
              href='https://www.linkedin.com/in/lizmbarnes/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin' aria-hidden='true'></i>
            </a>
            <a
              href='https://github.com/liz-barnes'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github' aria-hidden='true'></i>
            </a>
            <a href='mailto: embarnes95@gmail.com'>
              <i
                className='fa fa-envelope'
                id='envelope'
                aria-hidden='true'
              ></i>
            </a>
      </div>
    </footer>
  );
}
