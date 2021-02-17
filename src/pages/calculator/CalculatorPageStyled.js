import styled from 'styled-components';

export const PageContainer = styled.div`

    @media (min-width: 1280px) {
        display: flex;
    }

    .calculatorPageWrapper {
        padding: 40px 15px 60px;

        @media (min-width: 768px) and (max-width: 1279px) {
            padding: 100px 70px 74px;
        }

        @media (min-width: 1280px) {
            padding: 292px 0 111px 100px;
        }
    }

    .calculatorPageTitle {
        width: 290px;
        font-family: 'Verdana', sans-serif;
        font-size: 18px;
        color: var(--main-text);
        line-height: 1.444;
        font-weight: 700;

        @media (max-width: 767px) {
            margin-bottom: 40px;
        }
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
