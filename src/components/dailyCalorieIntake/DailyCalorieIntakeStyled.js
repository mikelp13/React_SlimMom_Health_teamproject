import styled from 'styled-components';

const DailyCalorieIntakeStyled = styled.div`
    .ModalContentContainer {
        background-color: var(--main-background);
        display: block;
        height: 638px;
        width: 290px;
        margin: 0 auto;
    }

    .DailyCalorieIntakeTitle {
        display: block;
        margin: 0 auto;
        margin-top: 40px;
        padding-left: 15px;
        padding-right: 15px;
        width: 290px;
        height: 74px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 144%;
        color: var(--main-text);
    }

    .DailyCalorieIntakeKcal {
        margin-top: 40px;
        margin-bottom: 30px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        letter-spacing: 0.04em;
        color: var(--burger-background);
    }

    .DailyCalorieIntakeKcalText {
        font-size: 16px;
        margin-left: 10px;
        letter-spacing: normal;
    }

    .DailyCalorieIntakeProducts {
        max-width: 400px;
        margin: 0 auto;
        margin-top: 50px;
        font-family: Verdana;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.04em;
        display: block;
        color: var(--main-text);
        margin-bottom: 22px;
    }

    .DailyCalorieIntakeButton {
        cursor: pointer;
        width: 176px;
        height: 44px;
        left: 72px;
        top: 594px;
        border: none;
        background: var(--accent-color);
        box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
        border-radius: 30px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.04em;
        display: block;
        margin: 0 auto;
        color: var(--light-text);
    }

    .DailyCalorieIntakeButton:hover,
    .DailyCalorieIntakeButton:focus {
        background: var(--main-background);
        border: 2px solid var(--accent-color);
        border-radius: 30px;
        outline: none;
        color: var(--accent-color);
    }

    .DailyCalorieIntakeProductsItem {
        font-family: Verdana;
        font-style: normal;
        font-weight: lighter;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.04em;
        color: var(--secondary-text);
        &:not(:last-child) {
            margin-bottom: 14px;
        }
    }

    .DailyCalorieIntakeProductsList {
        margin-bottom: 40px;
        width: 290px;
        padding-left: 20px;
    }

    .line {
        margin-bottom: 20px;
        height: 0px;
        margin-right: 15px;
        margin-left: 15px;
        border: 1px solid var(--header-border);
    }

    @media (min-width: 768px) {
        .DailyCalorieIntakeProductsList {
            margin-left: auto;
            margin-right: auto;
            width: 400px;
            padding-left: 40px;
        }
        .ModalContentContainer {
            width: 594px;
            height: 580px;
        }
        .DailyCalorieIntakeTitle {
            margin-top: 28px;
            padding-left: 42px;
            padding-right: 42px;
            width: 509px;
            font-size: 26px;
            line-height: 32px;
            text-align: center;
        }
        .DailyCalorieIntakeKcal {
            margin-top: 22px;
            padding-left: 132px;
            padding-right: 132px;
        }
        .DailyCalorieIntakeProducts {
            margin-top: 12px;
            font-family: Verdana;
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.04em;
            color: var(--main-text);
            margin-bottom: 22px;
        }
        .line {
            width: 400px;
            margin: 0 auto;
            border: 1px solid var(--header-border);
            margin-bottom: 20px;
        }
    }

    @media (min-width: 1280px) {
        .ModalContentContainer {
            display: block;
            height: 580px;
            width: 690px;
            margin: 0 auto;
        }
        .DailyCalorieIntakeProductsList {
            margin-bottom: 40px;
            padding-left: 80px;
        }
        .DailyCalorieIntakeTitle {
            margin-top: 64px;
        }
        .line {
            margin-bottom: 12px;
        }

        .DailyCalorieIntakeProductsList {
            margin: 0 auto 40px;
            width: 440px;
        }
        .DailyCalorieIntakeKcal {
            margin-top: 22px;
        }
    }
`;

export default DailyCalorieIntakeStyled;
