import React from "react"
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Container
} from "./footerStyle"

const Footer  = () => {
    return (
        <Container>
            <p>I'm probably listening to my <a href="https://open.spotify.com/user/31jtpbvmijwzaudmypya6ergvhla"  target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faSpotify} color={"#597df5"}/> </a> playlist</p>
            <p>Maxwell Reid</p>
        </Container>
    );
}

export default Footer
