import styled from '@emotion/styled';

export const Container = styled.nav`
    display: flex;
    align-items: center;
    height: 60px;
    top: 0;
    left: 0;
    padding-left: 20%;
    padding-top: 40px;
    margin-bottom: 30px;
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
        font-size: 20px;
	}
`;

export const StyledNavigationLogo = styled.a`
    color: white;
    font-size: 20px;
    margin-right: 15px;
`