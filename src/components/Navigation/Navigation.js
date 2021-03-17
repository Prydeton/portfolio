import React from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
    StyledLink,
    StyledNavigationLogo,
    ExternalLinkLogos
} from './navigationStyle.js';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from '../../files/MaxwellReid-Resume.pdf'

const NavigationLogo = ({ to, icon}) => {
    return (
        <StyledNavigationLogo href={to}  target="_blank"><FontAwesomeIcon icon={icon} /></StyledNavigationLogo>
    );
} 

const Navigation = () => {
    return (
        <Container>
            <StyledLink title={"MAXWELL REID"}>
                <Link to="/">
                    <span>{"MAXWELL REID"}</span>
                </Link>
            </StyledLink>
                <StyledLink title={"RESUME"}>
                    <a href={resume} download="Maxwell Reid - Resume">
                        <span>{"RESUME"}</span>
                    </a>
                </StyledLink>
            <ExternalLinkLogos>
                <NavigationLogo to="https://www.linkedin.com/in/maxwellreid/" icon={faLinkedin} />
                <NavigationLogo to="https://github.com/Prydeton" icon={faGithub} />
            </ExternalLinkLogos>
        </Container>
    )
}

export default Navigation;
