import styled from 'styled-components';

import groupDesc from '../../assets/img/loginPage/GroupDesc.png';
import groupTabl from '../../assets/img/loginPage/GroupTabl.png';

const LoginPageStyled = styled.section`
    /* outline: 1px solid red; */

    .wrapLoginPage {
        color: var(--secondary-text);
        margin-bottom: 60px;
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

    .labelLoginPage {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.04em;
        font-weight: 700;
        width: 290px;
    }
    .inputLoginPage {
        outline: none;
        border: none;
        border-bottom: 1px solid var(--header-border);
    }
    @media screen and (max-width: 767px) {
        button {
            margin-left: auto;
            margin-right: auto;
        }
        .mainButton {
            margin-bottom: 20px;
        }
        .wrapLoginPage {
            margin-top: 40px;
            width: 320px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media screen and (min-width: 768px) {
        min-height: 944px;
        background-image: url(${groupTabl});
        background-position: right bottom;
        background-repeat: no-repeat;
        .titleLoginPage {
            text-align: left;
        }
        .wrapLoginPage {
            margin-top: 200px;
            width: 382px;
            height: 287px;
            /* outline: 1px solid yellow; */
        }
        .inputLoginPage {
            max-width: 240px;
        }
        .wrapForm {
            margin-bottom: 60px;
        }
        .wrapBtn {
            display: flex;
        }
        .mainButton {
            margin-right: 30px;
        }
    }
    @media screen and (min-width: 1280px) {
        min-height: 850px;
        background-image: url(${groupDesc});
        background-position: right bottom;
        background-repeat: no-repeat;
        .wrapLoginPage {
            margin-top: 362px;
            width: 382px;
            height: 298px;
        }
    }
`;
export default LoginPageStyled;
