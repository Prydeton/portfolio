import React from "react"

import {ProjectListing} from "../";

import { Container } from "./projectStyle.js"

import stevent from "../../img/stevent.png"
import amazing from "../../img/aMazeing.png"
import cardGame from "../../img/cardGame.png"

const Projects = () => {
    return (
        <>
            <Container>
                <ProjectListing img={stevent} title="Stevent" desc="The club and event management platform for students by students" srccode="https://github.com/csitsociety/stevent" live=""/>
                <ProjectListing img={amazing} title="A-Maze-Ing" desc="Python maze generator and solver using Pygame" srccode="https://github.com/Prydeton/A-maze-ing" live=""/>
                <ProjectListing img={cardGame} title="42 Card Game" desc="A card game created using Java and JavaFX" srccode="" live=""/>
            </Container>
        </>
    )
}

export default Projects;