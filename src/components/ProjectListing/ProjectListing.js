import React from "react"

import {
    Container,
    ImageContainer,
    ProjectDetails,
    Title,
    Description,
    Button,
    ButtonGroup
} from "./projectListingStyle"

const ProjectListing = ({img, title, desc, srccode, live}) => {
    return (
        <Container>
            <ImageContainer>
                <img src={img} alt='project screenshot'/>
            </ImageContainer>
            <ProjectDetails>
                <Title>
                    {title}
                </Title>
                <Description>
                    {desc}
                </Description>
                <ButtonGroup>
                    <a href={srccode}><Button> Source Code </Button></a>
                    <a href={live}><Button> Live Version </Button></a>
                </ButtonGroup>
            </ProjectDetails>
        </Container>
    )
}

export default ProjectListing
