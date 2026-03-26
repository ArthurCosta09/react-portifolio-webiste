import { Link } from 'react-router-dom';
import letterA from '../../assets/images/letra-a.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

// Home page component
const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray: string[] = "thur".split("")
    const jobArray: string[] = "Backend Developer".split("")

    useEffect(
        () => {
            setTimeout(
                () => {
                    setLetterClass('text-animate-hover')
                },
                4000
            )
        }
    )

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={letterA} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
                    </h1>

                    <h2>Backend Developer | Automation and Systems Integration | Python & BI</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
            </div>

            <Loader type='pacman' active={true} />
        </>
    )
};

export default Home;