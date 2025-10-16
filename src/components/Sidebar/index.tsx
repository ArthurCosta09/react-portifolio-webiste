import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SideBar = () => {
    return (
        <>
            <div className='nav-bar'>
                <Link className='logo' to='/'>
                    <img src={LogoS} alt='logo'></img>
                </Link>

                <nav>
                    <NavLink  className='home-link' to='/'>
                        <FontAwesomeIcon icon={faHome} color='#ffffff'/>
                    </NavLink>

                    <NavLink  className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color='#ffffff'/>
                    </NavLink>

                    <NavLink  className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='#ffffff'/>
                    </NavLink>

                </nav>

                <ul>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/arthur-naz%C3%A1rio-da-costa-6478601a1/'>
                            <FontAwesomeIcon icon={faLinkedin} color='#ffffff'/>
                        </a>
                    </li>

                    <li>
                        <a target='_blank' rel='noreferrer' href='https://github.com/ArthurCosta09'>
                            <FontAwesomeIcon icon={faGithub} color='#ffffff'/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default SideBar;