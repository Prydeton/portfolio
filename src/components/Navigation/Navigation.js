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
        <StyledNavigationLogo href={to}  target="_blank"><FontAwesomeIcon icon={icon} /></StyledNavigationLogo>
    );
} 

const Navigation = () => {
    return (
        <Container>
            <NavigationItem to="/" label="MAXWELL REID" />
            <NavigationItem to="/resume" label="RESUME" />
            <ExternalLinkLogos>
                <NavigationLogo to="https://www.linkedin.com/in/maxwellreid/" icon={faLinkedin} />
                <NavigationLogo to="https://github.com/Prydeton" icon={faGithub} />
            </ExternalLinkLogos>
        </Container>
    )
}

export default Navigation;
