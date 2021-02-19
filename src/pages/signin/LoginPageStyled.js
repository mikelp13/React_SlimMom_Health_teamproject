import styled from 'styled-components';

const RegisterPageStyled = styled.section`
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
        background-position: right bottom;
        background-repeat: no-repeat;

        .wrapLoginPage {
            margin-top: 190px;
            width: 382px;
        }
    }
    @media screen and (min-width: 1280px) {
        min-height: 850px;
        background-position: right bottom;
        background-repeat: no-repeat;
        .wrapLoginPage {
            margin-top: 362px;
        }
    }
`;
export default RegisterPageStyled;
