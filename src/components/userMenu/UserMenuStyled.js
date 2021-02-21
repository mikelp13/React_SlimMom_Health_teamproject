import styled from 'styled-components';
const UserMenuStyled = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: 'Gotham Pro';
    font-weight: 700;
    p {
        align-self: center;
        margin: 0;
        margin-right: 15px;
    }

    img {
        align-self: baseline;
        margin-bottom: -10px;
        margin-right: 15px;
    }
    button {
        margin: 0;
        align-self: center;
        font-family: 'Gotham Pro';
        font-weight: 700;
        font-size: 14px;
        color: var(--secondary-text);
        border: none;
        padding: 0;
        text-decoration: none;
        background-color: transparent;
        cursor: pointer;
    }

    @media screen and (max-width: 1279px) {
        width: 100%;
    }

    @media screen and (min-width: 1280px) {
        img {
            align-self: center;
        }
    }
    .userContainer {
        display: flex;
        @media screen and (max-width: 1279px) {
       margin-left: auto
    }

    }
`;
export default UserMenuStyled;
