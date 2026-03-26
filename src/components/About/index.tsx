import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

// About page component to describe yourself.
// You are free to replace the p component content
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const aboutArray: string[] = 'About me'.split("");

    useEffect(
        () => {
            setTimeout(
                () => {
                    setLetterClass('text-animate-hover')
                },
                3000
            )
        }
    )

    return <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutArray} idx={15} />
                </h1>
                <p>
                    Backend developer with a solid foundation in electronic and telecommunications engineering,
                    experience in process automation, data analysis and systems integration. Hands-on experience in Python, Flask,
                    Fastapi, SQL, Power BI and both Oracle and Postgres databases, contributing to operational efficiency
                    and improved performance of corporate systems.
                </p>
                <p>
                    Recognized for my proactivity, logical thinking, and focus on results. I am excelled developing solutions
                    for business environments and technology projects using agile methodologies.
                </p>
                <p>
                    I'm fully passionate with technology, always looking for improvement in backend development field. Nowadays I am
                    building some projects using React in order to upgrade both backend and frontend skills. My hobbies are playing
                    video games🎮, coding💻, going out🙍‍♂️, working out💪 and seeking knowledge🧠.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#e3be1b' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#e3be1b' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
                    </div>
                </div>
            </div>
        </div>

        <Loader type='pacman' active={true} />
    </>
};

export default About;