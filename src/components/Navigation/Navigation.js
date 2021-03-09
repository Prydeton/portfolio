import React from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
    StyledLink,
    StyledNavigationLogo
} from './navigationStyle.js';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationItem = ({ to, label, ...rest}) => {
    return (
        <StyledLink title={label}>
            <Link to={to} {...rest}>
            <span>{label}</span>
            </Link>
        </StyledLink>
    );
};

const NavigationLogo = ({ to, icon}) => {
    return (
        <StyledNavigationLogo href={to}><FontAwesomeIcon icon={icon} /></StyledNavigationLogo>
    );
} 

const Navigation = () => {
    return (
        <Container>
            <NavigationItem to="/" label="Maxwell Reid" />
            <NavigationItem to="/about" label="About" />
            <NavigationItem to="/resume" label="Resume" />
            <NavigationLogo to="https://www.linkedin.com/in/maxwellreid/" icon={faLinkedin} />
            <NavigationLogo to="https://github.com/Prydeton" icon={faGithub} />
        </Container>
    )
}

export default Navigation;
