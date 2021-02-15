import styled from 'styled-components';
const AuthFormStyled = styled.div`
    @media (min-width: 768px) {
        max-width: 382px;
    }
    .authFormTitle {
        /* уточнить */
        font-family: Gotham Pro;
        margin-top: 0;
        margin-bottom: 60px;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.93;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #fc842d;

        @media (max-width: 767px) {
            text-align: center;
        }

        @media (min-width: 768px) and (max-width: 1279px) {
            margin-bottom: 40px;
        }
    }

    .authForm {
        display: flex;
        flex-direction: column;
    }
    .authFormFild {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }
    .authFormText {
        margin-bottom: 5px;
        font-family: Verdana;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.21;
        letter-spacing: 0.04em;

        color: #9b9faa;
    }
    .authFormInput {
        height: 20px;
        padding: 5px 0;
        border: none;
        border-bottom: 1px solid #e0e0e0;

        outline: none;
        &:focus,
        &:hover {
            border-color: #fc842d;
        }
    }

    .authFormBtn {
        margin: 0 auto;
    }
`;
export default AuthFormStyled;
