import React from "react"

import {ProjectListing} from "../";

import { Container } from "./projectStyle.js"

import stevent from "../../img/stevent.png"
import amazing from "../../img/aMazeing.png"
import cardGame from "../../img/cardGame.png"
import learn2Read from "../../img/learn2read.png"
import growingup from "../../img/growingup.png"
const Projects = () => {
    return (
        <>
            <Container>
                <ProjectListing img={stevent} title="Stevent" desc="The club and event management platform for students by students" srccode="https://github.com/csitsociety/stevent" live="https://stevent.club/"/>
                <ProjectListing img={amazing} title="A-Maze-Ing" desc="Python maze generator and solver using Pygame" srccode="https://github.com/Prydeton/A-maze-ing" live="https://repl.it/talk/share/A-maze-ing/127182"/>
                <ProjectListing img={cardGame} title="42 Card Game" desc="A card game created using Java and JavaFX" srccode="https://github.com/Prydeton/FP-COSC2391-Assignment2" live="https://repl.it/@Prydeton/FP-COSC2391-Assignment2#Readme.txt"/>
                <ProjectListing img={learn2Read} title="learn2read" desc="Simple interactive command line tool to teach you binary, octal and hexadecimal" srccode="https://github.com/Prydeton/learn2read" live="https://replit.com/@Prydeton/learn2read#main.cpp"/>
                <ProjectListing img={growingup} title="Growing Up" desc="Rythm game created for Ludum Dare 47" srccode="https://github.com/giraugh/LD46" live="http://growingup.avrami.me"/>
            </Container>
        </>
    )
}

export default Projects;