import styled from 'styled-components';

const LoginPageStyled = styled.div`
    outline: 1px solid red;
    @media screen and (max-width: 767px) {
        max-width: 290px;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 10px;
        button {
            margin-left: auto;
            margin-right: auto;
        }
        .mainButton {
            margin-bottom: 20px;
        }
    }
    .titleLoginPage {
        color: var(--accent-color);
        text-align: center;
        font-weight: bold;
        font-size: 14px;
        line-height: 13px;
        letter-spacing: 0.04em;
        margin-bottom: 60px;
    }
    .formLoginPage {
        /* display: flex;
        flex-direction: column; */
        color: var(--secondary-text);
        margin-bottom: 60px;
    }
    .labelLoginPage {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.04em;
        font-weight: 700;
    }
    .inputLoginPage {
        outline: none;
        border: none;
        border-bottom: 1px solid var(--header-border);
    }

    @media screen and (min-width: 768px) {
        .titleLoginPage {
            text-align: left;
        }
        .inputLoginPage {
            max-width: 240px;
        }

        .btnWrapLoginPage {
            display: flex;
        }
        .mainButton {
            margin-right: 30px;
        }

        max-width: 382px;
        height: 287px;
        background-image: url('../../assets/img/loginPage/tabl/vector.png'),
            url('../../assets/img/loginPage/tabl/banan.png'),
            url('../../assets/img/loginPage/tabl/strawberry.png'),
            url('../../assets/img/loginPage/tabl/green.png');
        background-size: 80px, 100px, 150px, 130px, cover;
        background-position: top 120px right 130px, top 270px left 130px, center,
            100px 60px, center;
        background-repeat: no-repeat;
    }
    @media screen and (min-width: 1280px) {
        background-image: url('../../assets/img/loginPage/desc/Group 4.png');
    }

    /* .mainButton {
        display: flex;
        align-items: center;
        padding: 13px 26px;
        width: 176px;
        height: 44px;
        background: var(--accent-color);
        box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
        border-radius: 30px;
        font-family: inherit;
        font-size: 14px;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 0.04em;
        color: var(--light-text);
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    } */
`;
export default LoginPageStyled;
