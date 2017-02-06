import React from 'react';
import {Link} from 'react-router';

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          6 years of professional IT experience, currently working as Technology Lead @ NorthwesternMutual Insurance.
        </li>
        <li>
          As part of my work experience in various Fortune 500 companies, donned the role of Web Developer, Technology Lead and Offshore-Onsite Coordinator spanning across multiple technologies.
        </li>
        <li>
          Technology enthusiast and mastered the treasures of various Javascript frameworks like React.js & Backbone, HTML5/CSS3, Node.js alongside the traditional ASP.NET MVC & Java.
        </li>
        <li>
          Specialties: React.js, ASP.NET(MVC), Node.js, Backbone, Java Web Services.
        </li>
      </ul>
      <h1>Contact me</h1>
      <ul>
        <li>
          <a href="mailto:ranjith2112@gmail.com">EMail</a>
        </li>
        <li>
          <a href="https://github.com/RanjithNair">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ranjith-nair-7b540242">LinkedIn</a>
        </li>
      </ul>
      <Link to="/" activeClassName="active">Go to Home</Link>
    </div>
  );
};

export default AboutPage;
