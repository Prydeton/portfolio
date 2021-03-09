import styled from '@emotion/styled';

export const Container = styled.div`
    display: grid;
    width: 100%;
    margin-top: 40px;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;

    background-color: #1a1a1a;
    border-radius: 5px;
    box-shadow: 5px 10px;

    @media only screen and (max-width: 750px) {
        grid-template-columns: 1fr !important;
    }
`

export const ImageContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    flex: 60%;
    padding: 10px;
    img {
        width: 100%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
    }
`

export const ProjectDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 40%;
    color: white;
`

export const Title = styled.div`
    font-size: 1.2em;
    margin-bottom: 10px
`

export const Description = styled.div`
    font-size: 0.8em;
    margin-bottom: 10px
`

export const Button = styled.button`
    background-color: #00FFFF;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 5px;
    cursor: pointer;
    color: #121212;
    font-weight: bold;
    width: 80%;
`

export const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 80%;
    justify-items: center;
    padding: 10px;

    @media only screen and (max-width: 750px) {
        grid-template-columns: 1fr 1fr;
    }

    & > a {
        width: 100%;
        text-align: center;
    }
`
