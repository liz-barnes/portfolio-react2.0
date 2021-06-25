import React from 'react';
import headshot from '../../helpers/images/headshot.png';

export default function About() {
  return (
    <div id="about-page" className="page">
      <div id="intro">
        <h1 className="heading">I'm Liz,</h1>
        <p className="title">a software developer</p>
      </div>
      <img id="headshot" src={headshot} alt="" />
      <p id="about-me-blurb">
        My passion first fixated on design while making graphics for my sports
        team in 2018. Since then I have explored and been completely captivated
        by UX/UI and web development. Coding gives me the opportunity to express
        my creativity, while meeting a challenge every step of the way. This is
        why I choose development!
      </p>
    </div>
  );
}
