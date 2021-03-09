import styled from '@emotion/styled';

export const Container = styled.nav`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    width: 100%;
    align-items: center;
    justify-items: center;
    height: 60px;
    top: 0;
    left: 0;
    padding-top: 35px;
    padding-bottom: 25px;
    margin: auto;
    margin-bottom: 25px;
    background-color: #1a1a1a;
    font-size: 1.5em;

    @media screen and (max-width: 650px) {
        font-size: 1em;
    }

    & > div:first-of-type {
       justify-self: start;
       margin-left: 20px;
       border-right: 2px solid white;
    }
`;

export const StyledLink = styled.div`
    margin-right: 10%;
    position: relative;
    overflow: hidden;
    > a {
        padding: 8px 10px;
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    > a span {
        margin: 0 8px;
        color: white;
        text-decoration: none;
        /*font-size: 20px;*/
	}

    > a span:hover {
        /*color: grey;*/
        text-decoration: underline;
    }
`;

export const StyledNavigationLogo = styled.a`
    color: white;
    font-size: 20px;
    margin-right: 15px;
`
