import React from "react"

import {
	Container,
    AboutMeImage,
    AboutMeContent,
    Blurb,
    Title,
    Portrait,
    Connect
} from './aboutMeStyle.js';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import portrait from "../../img/AboutMeImage.jpg"

const AboutMe = () => {
    return (
        <Container>
            <AboutMeImage>
                <Portrait src={portrait}/>
            </AboutMeImage>
            <AboutMeContent>
                <Title>
                    Hey! I'm <span style={{color: "#597df5"}}>Max</span>
                </Title>
                <Blurb>
                    I'm a Computer Science student in my second year at the Royal Melbourne Institute of Technology. I spend most of my time studying, working on side projects, playing dungeons and dragons and listing to EDM. 
                </Blurb>
                <Connect>
                <a href="https://github.com/Prydeton" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> Judge my GitHub</a>
                <br/>
                <a href="https://www.linkedin.com/in/maxwellreid/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> Connect with me on LinkedIn</a>
                <br/>
                <a href = "mailto:contact@maxwellreid.tech" ><FontAwesomeIcon icon={faEnvelope} /> Send me an email</a>
                <br/>
                <a href="/#" download><FontAwesomeIcon icon={faFile} /> Check out my resume</a>
                </Connect>
            </AboutMeContent>
        </Container>
    )
}

export default AboutMe;
