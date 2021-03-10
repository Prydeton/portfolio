import styled from '@emotion/styled';

export const Container = styled.div`
    display: grid;
    width: 100%;
    margin-top: 15px;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    padding-top: 10px;
    background-color: #1a1a1a;
    border-radius: 5px;
    box-shadow: 2.5px 5px;
    padding: 10px;

    animation: fadeIn ease 2s;
    -webkit-animation: fadeIn ease 2s;
    -moz-animation: fadeIn ease 2s;
    -o-animation: fadeIn ease 2s;
    -ms-animation: fadeIn ease 2s;

    @media only screen and (max-width: 750px) {
        grid-template-columns: 1fr !important;
    }

    @keyframes fadeIn {
        0% {
          opacity:0;
        }
        100% {
          opacity:1;
        }
      }
      
      @-moz-keyframes fadeIn {
        0% {
          opacity:0;
        }
        100% {
          opacity:1;
        }
      }
      
      @-webkit-keyframes fadeIn {
        0% {
          opacity:0;
        }
        100% {
          opacity:1;
        }
      }
      
      @-o-keyframes fadeIn {
        0% {
          opacity:0;
        }
        100% {
          opacity:1;
        }
      }
      
      @-ms-keyframes fadeIn {
        0% {
          opacity:0;
        }
        100% {
          opacity:1;
      }

    @media only screen and (max-width: 750px) {
        grid-template-columns: 1fr !important;
    }
`



export const ImageContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    color: white;
`

export const Title = styled.div`
    font-size: 1.2em;
    margin-bottom: 10px;
    font-weight: bold;
`

export const Description = styled.div`
    font-size: 0.8em;
    margin-bottom: 10px;
    text-align: center;
`

export const Button = styled.button`
    background-color: #0e42eb;
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

    @media only screen and (max-width: 550px) {
        grid-template-columns: 1fr;
    }

    & > a {
        width: 100%;
        text-align: center;
    }
`
