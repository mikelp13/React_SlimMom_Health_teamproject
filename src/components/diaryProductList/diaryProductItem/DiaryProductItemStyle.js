import styled from 'styled-components';

export const LI = styled.li`
    margin-bottom: 20px;
    display: flex;
    @media screen and (min-width: 768px) {
        margin-bottom: 15.5px;
    }
    .listDairyProduct {
        display: flex;
        list-style: none;
    }
    .itemDairyProduct {
        margin-right: 10px;
        padding-bottom: 10px;
        font-family: Verdana;
        font-style: normal;
        font-size: 14px;
        line-height: 1.21;
        letter-spacing: 0.04em;
        color: #212121;
        border-bottom: 1px solid #e0e0e0;
        @media screen and (min-width: 768px) {
            margin-right: 31px;
        }
    }
    .itemDairyProduct:first-child {
        min-width: 137px;
        @media screen and (min-width: 768px) {
            min-width: 239px;
        }
    }
    .itemDairyProduct:nth-child(2) {
        min-width: 50px;
        text-align: right;
        @media screen and (min-width: 768px) {
            min-width: 104px;
        }
    }
    .itemDairyProduct:last-child {
        min-width: 60px;
        text-align: right;
        @media screen and (min-width: 768px) {
            min-width: 104px;
        }
    }
    .buttonDairyProduct {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border-color: transparent;
        &:hover,
        &:focus {
            border: 2px solid #fc842d;
            border-radius: 20px;
        }
    }
`;
