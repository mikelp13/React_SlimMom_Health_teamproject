import styled from 'styled-components';

export const PageContainer = styled.div`
    @media (min-width: 768px) and (max-width: 1279px) {
    }
    @media (min-width: 1280px) {
    }

    .calculatorPageSection {
        padding-top: 40px;
        padding-bottom: 60px;

        @media (min-width: 768px) and (max-width: 1279px) {
            padding-top: 100px;
            padding-bottom: 74px;
        }

        @media (min-width: 1280px) {
            padding-top: 150px;
            padding-bottom: 111px;
        }
    }

    .calculatorPageTitle {
        width: 290px;
        margin-bottom: 40px;
        font-family: 'Verdana', sans-serif;
        font-size: 18px;
        color: var(--main-text);
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
