import React from 'react';
import './About.css';
import ME from '../../assests/me.jpg';
import {BiMedal, BiUser, BiFolder} from 'react-icons/bi';

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="Gedion Melaku"/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <BiMedal className='about__icon'/>
                        <h5>Experience</h5>
                        <small>1 Summer SWE Internships</small>
                    </article>
                    <article className='about__card'>
                        <BiUser className='about__icon'/>
                        <h5>Education</h5>
                        <small>Dire Dawa University <br/> software Engineering</small>
                    </article>
                    <article className='about__card'>
                        <BiFolder className='about__icon'/>
                        <h5>Hobbies</h5>
                        <small>Traveling, Reading, Football & Coding</small>
                    </article>
                </div>
                <p>
                    I am a senior Software Engineering Student at Dire Dawa University! I am currently pursuing a career as a Software
                    Engineer.I love to learn and I am always looking to learn and experiment with new technologies!
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  );
}

export default About;