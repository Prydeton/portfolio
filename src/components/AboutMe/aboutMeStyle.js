import styled from '@emotion/styled';

export const Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1.5fr;
    column-gap: 15px;

    @media only screen and (max-width: 750px) {
        grid-template-columns: 1fr !important;
        column-gap: 5px;
    }

    @media only screen and (min-width: 960px) and (max-width: 1100px) {
        grid-template-columns: 1fr 2fr !important;
    }

    @media only screen and (min-width: 1100px ) {
        grid-template-columns: 1fr 3fr !important;
    }
`

export const AboutMeImage = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 5px;
    img {
        width: 100%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
    }
`

export const Portrait = styled.img`
    height: auto;
    border-radius: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
export const AboutMeContent = styled.div`
    padding: 70px 10px;

    @media only screen and (max-width: 750px) {
        padding: 10px 10px;
    }
`

export const Title = styled.div`
    font-size: 1.2em;
    color: white;
    margin-bottom: 10px;
`

export const Connect = styled.div`
    
    font-size: 0.8em;

    > a {
        color: #00FFFF;
        text-decoration: none;
    }
`

export const Blurb = styled.div`
    color: white;
    font-size: 0.8em;
    width: 90%;
    margin-bottom: 70px;

    @media only screen and (max-width: 750px) {
        padding: 10px 0px;
        margin-bottom: 10px;
    }
`
