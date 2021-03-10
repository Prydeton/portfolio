import styled from '@emotion/styled';
<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&display=swap');
</style>


export const AppContainer = styled.div`
    background-color: #0e42eb;

    * {
        box-sizing: border-box !important;
    }
`

export const PageContainer = styled.nav`
    background-color: #121212;
    padding: 0px 18%;

    @media only screen and (max-width: 150px) {
        padding: 0px 9%;
      }
`
