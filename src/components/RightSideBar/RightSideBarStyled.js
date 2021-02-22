import styled from 'styled-components';
import tabletImg from '../../assets/img/rightSideBar/tablet-bg-img.png';
import desktopImg from '../../assets/img/rightSideBar/desktop-bg-img.png';

export const SideBarContainer = styled.div`
    padding: 40px 15px 50px 15px;
    min-height: 100vh;

    @media (min-width: 768px) and (max-width: 1279px) {
        padding: 90px 0;
        background-image: url(${tabletImg});
        background-repeat: no-repeat;
        background-position: right bottom;
    }
    @media (min-width: 1280px) {
        padding-top: 250px;
        padding-bottom: 111px;
        width: 535px;
        margin-left: auto;
        background-image: url(${desktopImg});
        background-repeat: no-repeat;
        background-position: right;
    }

    .rightSideBar {
        display: flex;
        margin: 0 auto;
        max-width: 550px;

        @media screen and (min-width: 320px) and (max-width: 767px) {
            flex-direction: column;
        }

        @media screen and (min-width: 1280px) {
            flex-direction: column;
            width: 270px;
        }
    }

    .rightBarList {
        display: flex;
        flex-direction: column;
    }

    .rightBarItem {
        display: flex;
        justify-content: space-between;
    }

    .rightBarItem:not(:last-child),
    .rightBarProductsItem:not(:last-child) {
        margin-bottom: 20px;
    }

    .rightBarTitle {
        margin-top: 0;
        font-family: 'Verdana';
        font-weight: 700;
        font-style: normal;
        font-size: 14px;
        line-height: 17px;
        @media screen and (min-width: 320px) and (max-width: 767px) {
            margin-bottom: 25px;
        }
        @media screen and (min-width: 768px) and (max-width: 1279px) {
            margin-bottom: 45px;
        }
        @media screen and (min-width: 1280px) {
            margin-bottom: 45px;
        }
    }

    .rightBarValue,
    .rightBarProductsItem {
        font-family: 'Verdana';
        font-weight: 400;
        font-size: 14px;
        line-height: 1.25;
        color: var(--secondary-text);
    }

    .rightBarSummary {
        @media screen and (min-width: 320px) and (max-width: 767px) {
            margin-bottom: 40px;
        }
        @media screen and (min-width: 768px) and (max-width: 1279px) {
            margin-right: 60px;
            width: 252px;
        }
        @media screen and (min-width: 1280px) {
            margin-bottom: 60px;
        }
    }
`;
