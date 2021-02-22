import styled from 'styled-components';

export const PageContainer = styled.section`
    width: 100%;

    @media (min-width: 768px) and (max-width: 1279px) {
        min-height: 944px;
        background-repeat: no-repeat;
        background-position: right bottom;
    }
    @media (min-width: 1280px) {
        min-height: 850px;
        background-repeat: no-repeat;
        background-position: right;
    }

    .mainPageWrapper {
        padding-top: 30px;

        @media (min-width: 768px) and (max-width: 1279px) {
            padding-top: 90px;
        }

        @media (min-width: 1280px) {
            padding-top: 250px;
            padding-bottom: 111px;
        }
    }

    .mainPageTitle {
        width: 290px;
        height: 74px;
        margin-bottom: 30px;
        font-family: 'Verdana', sans-serif;
        font-size: 18px;
        line-height: 1.444;
        font-weight: 700;

        @media (min-width: 768px) and (max-width: 1279px) {
            margin-bottom: 60px;
            width: 605px;
            font-size: 30px;
            line-height: 1.2;
        }

        @media (min-width: 1280px) {
            width: 605px;
            margin-bottom: 68px;
            font-size: 34px;
            line-height: 1.2;
        }
    }
`;
