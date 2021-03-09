import React from "react"
import { Link } from 'react-router-dom'
import { faSpotify, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Container
} from "./footerStyle"

const Footer  = () => {
    return (
        <Container>
            <p>I'm probably listing to my <a href="https://open.spotify.com/user/31jtpbvmijwzaudmypya6ergvhla"  target="_blank"> <FontAwesomeIcon icon={faSpotify} color={"#0e42eb"}/> </a> playlist</p>
            <p>Maxwell Reid</p>
        </Container>
    );
}

export default Footer