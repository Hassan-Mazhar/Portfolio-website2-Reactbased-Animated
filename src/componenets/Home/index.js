import {useEffect,  useState } from 'react';
import logoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import Logo from './my-logo';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['H','a','s','s','a','n','','M','a','z','h','a','r']
    const jobArray = ['w','e','b','','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12` }>i,</span>
                    <br/> 
                    <span className={`${letterClass} _13` }>I</span>
                    <span className={`${letterClass} _14` }>'m</span>
                    <img src={logoTitle} alt="developer" />
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                     />
                    <br/>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} 
                    />
                    </h1>
                    <h2> Full Stack developer / Cyber Security Expert / Youtuber / ML Expert</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
               <Logo />
            </div>
            <Loader type="pacman"/>
        </>
);
}

export default Home