import styled from 'styled-components';

export const DiaryFormWrapper = styled.div`
    @media screen and (max-width: 767px) {
        position: relative;
    }

    @media screen and (min-width: 768px) {
        margin-top: 0;
        margin-bottom: 60px;
        margin-top: 80px;
    }

    .inputBlockDairyAddProduct {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (min-width: 768px) {
            flex-direction: row;
        }
    }

    .inputDairyAddProduct {
        padding-top: 10px;
        padding-bottom: 10px;
        width: 289px;
        font-family: 'Verdana', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.21;
        letter-spacing: 0.04em;
        color: var(--secondary-text);
        border: none;
        border-bottom: 1px solid var(--header-border);
        background: transparent;
        outline: none;

        @media screen and (min-width: 768px) {
            width: 265px;
        }
        @media screen and (max-width: 767px) {
            margin-bottom: 30px;
        }
    }

    .secondInputLength {
        @media screen and (min-width: 768px) {
            width: 105px;
            margin-left: 31px;
            text-align: right;
        }
    }
    .selectDairyAddProduct {
        padding: 10px;
        width: 289px;
        border: 1px solid var(--header-border);
        border-radius: 30px;
        font-family: Verdana;
        background: transparent;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.21;
        letter-spacing: 0.04em;
        color: var(--secondary-text);
    }

      .buttonDairyAddProduct {
        padding: 13px 46px;
        width: 176px;
        font-family: Verdana;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.21;
        text-align: center;
        letter-spacing: 0.04em;
        background-color: var(--accent-color);
        border-color: transparent;
        box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
        border-radius: 30px;
        color: var(--light-text);
        cursor: pointer;

        @media screen and (min-width: 768px) {
            vertical-align: top;
            margin-left: 70px;
            width: 50px;
            height: 50px;
            padding: 0;
            border-radius: 50px;
            font-size: 22px;
            font-weight: 400;
        }

        @media screen and (max-width: 767px) {
            margin-top: 30px;
        }

        &:hover,
        &:focus {
            background-color: var(--light-text);
            border: 2px solid;
            color: var(--accent-color);
            outline: none;
        }
    }

    .diaryFormError {
        color: #e11616;
        font-size: 12px;
        font-weight: 400;
    }
`;
