import React from "react"

import {Container, Left, Right, Title, Description, Button} from "./projectListingStyle"

const ProjectListing = ({img, title, desc, srccode, live}) => {
    return (
        <>
        <Container>
            <Left>
                <img src={img}/>
            </Left>
            <Right>
                <Title>
                    {title}
                </Title>
                <Description>
                    {desc}
                </Description>
                <Button>
                    <btn href={srccode}>Source Code</btn>
                </Button>
                <Button>
                    <btn href={live}>Live Version</btn>
                </Button>
            </Right>
        </Container>
        </>
    )
}

export default ProjectListing