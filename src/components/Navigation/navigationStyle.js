import styled from '@emotion/styled';

export const Container = styled.nav`
    display: grid;
    grid-template-columns: 5fr 1fr 2fr;
    align-items: center;
    justify-items: center;
    top: 0;
    left: 0;
    padding: 25px 15%;
    margin: auto;
    background-color: #1a1a1a;
    font-size: 1.5em;

    @media screen and (max-width: 650px) {
        font-size: 1em;
        padding: 15px 5%;
    }

    & > div:first-of-type {
       justify-self: start;
       margin-left: 20px;
       border-right: 2px solid white;
    }
`;

export const StyledLink = styled.div`
    margin-right: 15%;
    position: relative;
    overflow: hidden;
    > a {
        padding: 8px 10px;
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: background .2s ease-in
    }

    > a span {
        margin: 0 8px;
        color: white;
        text-decoration: none;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 600;
        -webkit-transition: color 0.3s; /* For Safari 3.0 to 6.0 */
        transition: color 0.3s; /* For modern browsers */
	}

    > a span:hover {
        color: #597df5;
    }
`;

export const StyledNavigationLogo = styled.a`
    color: white;
    font-size: 20px;
    margin-right: 15px;

    & > :hover {
        color: #597df5;
    }
`

export const ExternalLinkLogos = styled.div`
    padding-left: 40px;
`
