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
                    <a href={srccode}  target="_blank" rel="noreferrer"><Button> Source Code </Button></a>
                    <a href={live}  target="_blank" rel="noreferrer"><Button> Live Version </Button></a>
                </ButtonGroup>
            </ProjectDetails>
        </Container>
    )
}

export default ProjectListing
