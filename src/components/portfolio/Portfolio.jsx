import React from 'react';
import './Portfolio.css';
import JPMC from '../../assests/afro.jpg';

const projects = [
{ 
    id: 1,
    image: JPMC,
    title: 'Afronex tech hub',
    position: 'Software Engineering Intern',
    date: 'Jun 2022 - Aug 2022',
    description: ''
},
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {projects.map((project) => {
            return (
                <article key={project.id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={project.image} alt={project.title} />
                    </div> 
                    <h3>{project.title}</h3>
                    <h5>{project.position}</h5>
                    <h6>{project.date}</h6>
                    <small className='portfolio__desc'>
                        {project.description}
                    </small>
               </article>
            )
            }) 
            }
        </div>
    </section>
  );
}

export default Portfolio;