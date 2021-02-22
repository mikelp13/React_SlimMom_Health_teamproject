import styled from 'styled-components';

const AppBarStyled = styled.header`
    padding-top: 8px;
    border-bottom: var(--header-border) solid 1px;

    @media screen and (max-width: 767px) {
        .container {
            width: 100%;
            padding: 0;
            margin: 0;
        }
    }

    @media screen and (min-width: 768px) {
        padding-top: 20px;
        width: 100%;
    }

    @media screen and (min-width: 768px) and (max-width: 1279px) {
        border-bottom: var(--header-border) solid 1px;
        padding-bottom: 20px;
    }

    @media screen and (min-width: 1280px) {
        border-bottom: none;
        position: absolute;
        padding-top: 67px;

        .container {
            padding-top: 35px;
        }
    }
`;

export default AppBarStyled;
