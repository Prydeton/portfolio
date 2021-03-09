import styled from '@emotion/styled';

export const Container = styled.div`
    margin-top: 40px;
    width: 100%;
    background-color: #1a1a1a;
    border-radius: 5px;
    heigh: 100px;
    display: flex;
    box-shadow: 5px 10px;
`

export const Left = styled.div`
    content-align: center;
    flex: 60%;
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

export const Right = styled.div`
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
`
