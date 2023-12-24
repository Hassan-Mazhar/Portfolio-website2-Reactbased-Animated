import {Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logos from '../../assets/images/logo-s.png'
import LogosSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logos} alt='logo'/>
            <img className="sub-logo" src={LogosSubtitle} alt='slobodan'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='white'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link "to="/about">
                <FontAwesomeIcon icon={faUser} color='white'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link "to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color='white'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='white'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a  target="blank" rel="noreferrer" href="https://www.linkedin.com/in/hassan-mazhar-94a0b22a6/">
                    <FontAwesomeIcon icon={faLinkedinIn} color='white'/>
                </a>
            </li>

            <li>
                <a  target="blank" rel="noreferrer" href="https://github.com/Hassan-Mazhar">
                    <FontAwesomeIcon icon={faGithub} color='white'/>
                </a>
            </li>

            <li>
                <a  target="blank" rel="noreferrer" href="https://www.youtube.com/@CyberShieldAcademy1">
                    <FontAwesomeIcon icon={faYoutube} color='white'/>
                </a>
            </li>

            <li>
                <a  target="blank" rel="noreferrer" href="https://www.instagram.com/learn_cyber_tech/">
                    <FontAwesomeIcon icon={faInstagram} color='white'/>
                </a>
            </li>

            


        </ul>


    </div>


)

export default Sidebar
