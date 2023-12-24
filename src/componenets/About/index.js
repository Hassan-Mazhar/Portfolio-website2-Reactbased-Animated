import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect,  useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
const About = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

    }, [])
    
    
    return (
      <>  
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t','','M','e']}
                idx={15}
                />
                </h1>
                <h2> A Three-Act Play of Code, Security, and Storytelling</h2>
                <p>
                Act I: Building Castles in the Digital Realm: My hands dance across the keyboard, weaving front-end magic and back-end muscle. Full-stack development is my playground, where I craft immersive websites and robust applications, brick by digital brick. Whether it's a sleek user interface or a secure server, I'm the architect, ensuring every project stands tall and proud.
                </p>
                <p>
                Act II: Guardian of the Digital Domain: But the web is a wild frontier, rife with lurking threats. Cybersecurity is my shield, protecting the digital fortresses I build. I wear many hats - a vigilant hacker, a code detective, a master of encryption. My passion lies in keeping data safe, users secure, and the bad guys locked out.    
                </p> 
                <p>
                Act III: Sharing the Stage with Technology: Knowledge craves to be shared, and YouTube is my platform. As a tech enthusiast, I ignite curious minds with engaging videos, demystifying the complexities of code, security, and AI. Whether it's a coding tutorial or a deep dive into machine learning, I bring the fascinating world of technology to life, one click at a time.    
                </p>                
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                        
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                        
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                        
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
       </> 
    )

}

export default About