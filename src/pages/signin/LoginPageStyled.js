import styled from 'styled-components';

import groupDesc from '../../assets/img/loginPage/GroupDesc.png';
import groupTabl from '../../assets/img/loginPage/GroupTabl.png';

const RegisterPageStyled = styled.section`
    /* outline: 1px solid red; */

    .wrapLoginPage {
        color: var(--secondary-text);
        margin-bottom: 60px;
    }

    @media screen and (max-width: 767px) {
        .wrapLoginPage {
            margin-top: 40px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media screen and (min-width: 768px) {
        min-height: 944px;
        background-image: url(${groupTabl});
        background-position: right bottom;
        background-repeat: no-repeat;

        .wrapLoginPage {
            margin-top: 190px;
            width: 382px;
            /* outline: 1px solid yellow; */
        }
    }
    @media screen and (min-width: 1280px) {
        min-height: 850px;
        background-image: url(${groupDesc});
        background-position: right bottom;
        background-repeat: no-repeat;
        .wrapLoginPage {
            margin-top: 362px;
        }
    }
`;
export default RegisterPageStyled;
