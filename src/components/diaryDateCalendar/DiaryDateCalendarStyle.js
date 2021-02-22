import styled from 'styled-components';

export const CalendarWrapper = styled.div`
    margin-bottom: 30px;

    .inputDiaryDateCalendar {
        width: 138px;
        border: none;
        background: transparent;
        outline: none;
        font-family: Verdana;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 1.22;
        color: var(--main-text);

        @media screen and (min-width: 768px) {
            width: 250px;
            font-size: 34px;
            line-height: 1.2;
        }
    }

    .labelDatePicker {
        height: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
     

        @media screen and (min-width: 768px) {
            width: 300px;

            height: 38px;
        }

        & svg {
            fill: var(--secondary-text);
            transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        &:hover svg,
        &:focus svg {
            fill: var(--accent-color);
        }
    }
    .iconDateCalendar {
        height: 20px;
        width: 18px;
    }
    .react-datepicker__input-container {
        position: static;
    }
`;
