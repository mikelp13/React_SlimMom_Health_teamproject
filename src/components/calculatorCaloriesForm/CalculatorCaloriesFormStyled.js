import styled from 'styled-components';

export const FormContainer = styled.div`
    .caloriesForm {
        @media (min-width: 1280px) {
            width: 605px;
        }
    }

    .caloriesFormInputWrapper {
        margin-bottom: 40px;
        @media (min-width: 768px) {
            display: flex;
            margin-bottom: 60px;
        }
    }

    .caloriesFormInputContainer + .caloriesFormInputContainer {
        @media (min-width: 768px) {
            margin-left: 30px;
        }
    }

    .caloriesFormLabel {
        margin-bottom: 30px;

        @media (min-width: 768px) {
            margin-bottom: 0;
        }
    }

    .caloriesFormLabel + .caloriesFormLabel {
        @media (min-width: 768px) {
            margin-bottom: 0;
            margin-top: 40px;
        }
    }

    .caloriesFormLabel,
    .caloriesFormRadioTitle {
        display: flex;
        flex-direction: column;
        /* margin-bottom: 30px; */
        font-family: 'Verdana', sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: var(--secondary-text);
        line-height: 1.215;
        letter-spacing: 0.04em;
    }
    .caloriesFormInput {
        padding: 5px 0;
        font-family: 'Verdana', sans-serif;
        font-size: 14px;
        line-height: 1.215;
        letter-spacing: 0.04em;
        color: var(--secondary-text);
        width: 240px;
        border: none;
        border-bottom: 1px solid var(--header-border);
        background: transparent;
        outline: none;

        &:focus,
        &:hover {
            border-color: var(--accent-color);
            transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }
    }

    .caloriesFormRadioTitle {
        margin-bottom: 9px;
        @media (min-width: 768px) {
            margin-bottom: 19px;
            margin-top: 40px;
        }
    }

    .mainButton {
        margin: 0 auto;

        @media (min-width: 768px) and (max-width: 1279px) {
            margin: 0;
        }

        @media (min-width: 1280px) {
            margin: 0;
            margin-left: auto;
            margin-right: 80px;
        }
    }

    .radioButton {
        position: relative;
        /* margin: 20px 0; */
        cursor: pointer;
    }
    .radioButton + .radioButton {
        margin-left: 26px;
    }

    .radioButton input {
        position: absolute;
        margin: 5px;
        padding: 0;
        visibility: hidden;
    }
    .radioButton .labelVisible {
        margin-left: 2em;
        margin-bottom: 0;
    }
    .labelVisible {
        font-family: 'Verdana', sans-serif;
        font-size: 14px;
        color: var(--secondary-text);
    }

    input[type='radio']:checked + .labelVisible {
        color: var(--accent-color);
    }

    .fakeRadioButton {
        position: absolute;
        display: block;
        top: 0;
        left: 3px;
        width: 20px;
        height: 20px;
        border: 1px solid var(--header-border);
        background-color: var(--main-background);
    }
    .fakeRadioButton:after {
        content: '';
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background: var(--accent-color);
        transform: translateX(-50%) translateY(-50%);
    }

    .fakeRadioButton {
        border-radius: 50%;
    }
    .fakeRadioButton:after {
        border-radius: 50%;
    }

    input[type='radio']:checked + span .fakeRadioButton:after {
        display: block;
    }
`;
