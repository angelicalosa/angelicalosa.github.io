import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Portfolio/Cell';
import data from '../data/portfolio';

const Projects = () => (
  <Main
    title="Portfolio"
    description="Learn about AL's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/portfolio">Portfolio</Link></h2>
          <p>A Portfolio of Projects I&apos;m proud of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
