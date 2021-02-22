import styled from 'styled-components';

export const LI = styled.li`
    color: red;
    display: flex;
    list-style: none;
    font-family: 'Verdana';
    line-height: 17px;
    letter-spacing: 0.04em;
    list-style: none;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    align-items: flex-end;

    .listName,
    .listWeight,
    .listCalories {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover .listName,
    &:hover .listWeight,
    &:hover .listCalories {
        color: var(--accent-color);
    }

    .listName {
        display: inline-block;
        padding-top: 20px;
        padding-bottom: 10px;
        margin-right: 10px;
        border-bottom: 1px solid #e0e0e0;
        white-space: normal;
        flex: 3;
        color: var(--main-text);
        font-size: 14px;

        @media screen and (max-width: 768px) {
            margin-right: 5px;
            font-weight: 13px;
            letter-spacing: 1.214;
        }
    }

    .listWeight {
        text-align: center;
        display: inline-block;
        padding-top: 20px;
        padding-bottom: 10px;
        margin-right: 10px;
        border-bottom: 1px solid #e0e0e0;
        white-space: nowrap;
        overflow: auto;
        flex: 1;
        color: var(--main-text);
        font-size: 14px;

        @media screen and (max-width: 768px) {
            margin-right: 5px;
        }

        @media screen and (min-width: 768px) {
            white-space: nowrap;
        }
    }

    .listCalories {
        text-align: center;
        display: inline-block;
        padding-top: 20px;
        padding-bottom: 8px;
        margin-right: 10px;
        border-bottom: 1px solid #e0e0e0;

        overflow: auto;
        flex: 1.3;
        color: var(--main-text);
        font-size: 14px;

        @media screen and (max-width: 768px) {
            white-space: nowrap;
            margin-right: 0;
            span {
                font-size: 10px;
            }
        }
    }
    .ccal {
        font-size: 8px;
    }

    @media screen and (min-width: 650px) {
        .list {
            display: flex;
            list-style: none;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 1.214;
            letter-spacing: 0.04em;
            font-size: 14px;
        }

        .listName {
            display: inline-block;
            width: 137px;
            padding-top: 15px;
            padding-bottom: 19px;
            margin-right: 31px;
            border-bottom: 1px solid #e0e0e0;
            white-space: normal;
            overflow: auto;
            color: var(--main-text);
            font-size: 14px;
        }

        .listWeight {
            text-align: right;
            display: inline-block;
            width: 60px;
            padding-top: 15px;
            padding-bottom: 19px;
            margin-right: 31px;
            border-bottom: 1px solid #e0e0e0;
            white-space: nowrap;
            overflow: auto;
            color: var(--main-text);
            font-size: 14px;
        }

        .listCalories {
            text-align: right;
            display: inline-block;
            width: 60px;
            padding-top: 15px;
            padding-bottom: 19px;
            margin-right: 31px;
            border-bottom: 1px solid #e0e0e0;
            white-space: nowrap;
            color: var(--main-text);
            font-size: 14px;
        }
        .ccal {
            font-size: 12px;
        }
    }

    @media screen and (min-width: 1100px) {
        .list {
            display: flex;
            list-style: none;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 1.214;
            letter-spacing: 0.04em;
            font-size: 16px;
        }

        .listName {
            display: inline-block;
            width: 239px;
            padding-top: 20px;
            padding-bottom: 10px;
            margin-right: 31px;
            border-bottom: 1px solid #e0e0e0;
            white-space: normal;
            overflow: auto;
            color: var(--main-text);
            font-size: 16px;
        }

        .listWeight {
            text-align: center;
            display: inline-block;
            width: 105px;
            padding-top: 20px;
            padding-bottom: 10px;
            margin-right: 31px;
            border-bottom: 1px solid #e0e0e0;
            white-space: nowrap;
            overflow: auto;
            color: var(--main-text);
            font-size: 16px;
        }

        .listCalories {
            text-align: center;
            display: inline-block;
            width: 105px;
            padding-top: 20px;
            padding-bottom: 10px;
            margin-right: 10px;
            border-bottom: 1px solid #e0e0e0;
            white-space: nowrap;
            color: var(--main-text);
            font-size: 16px;
        }
        .ccal {
            font-size: 12px;
        }
    }

    .listButton {
        display: block;
        padding-bottom: 15px;

        border: none;
        background: transparent;
        color: var(--secondary-text);
        cursor: pointer;

        @media screen and (max-width: 767px) {
            padding-bottom: 6px;
        }
        @media screen and (min-width: 768px) {
            padding-right: 30px;
        }

        svg {
            stroke: var(--secondary-text);
            transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        &:hover svg,
        &:focus svg {
            stroke: var(--accent-color);
            transform: scale(1.3);
        }
    }
`;
