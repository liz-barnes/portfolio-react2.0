import React from 'react';

export default function About() {
  return (
    <div id="about-page" className="page">
      <div id="intro">
        <h1>I'm Liz,</h1>
        <p>a software developer</p>
      </div>
          <img
            id="headshot"
            src="https://peterhurley.com/sites/default/files/styles/big/public/photos/2015/02/37/kearrancpeterhurley.jpg?itok=PZbogs-G"
            alt=""
          />
          <p id="about-me-blurb">
            I take on side projects like it's my job. I have experience creating
            graphics, logos, wireframes and websites- I'm all about the visuals.
            I am an athlete, avid adventurer, feminist and a lifelong learner.
            Coding gives me the opportunity to express my creativty, while
            meeting a challenge every step of the way. This is why I choose
            development!
          </p>
    </div>
  );
}
