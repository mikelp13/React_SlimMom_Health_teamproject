import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        transition: all 0.50s linear;
    }

    h2 {
        color: ${({ theme }) => theme.rightBarTitle};
        transition: all 0.50s linear;
    }

    .logo p {
        color: ${({ theme }) => theme.title};
        transition: all 0.50s linear;
    }

    input {
        color: ${({ theme }) => theme.title};
        transition: all 0.50s linear;
    }

    .rightBarTitle {
        color: ${({ theme }) => theme.rightBarTitle};
        transition: all 0.50s linear;
    }

    .sideBarContainer {
        background-color: ${({ theme }) => theme.rightBarBg};
        transition: all 0.50s linear;
    }

    .userName {
        color: ${({ theme }) => theme.title};
        transition: all 0.50s linear;
    }

    .overlay {
        background-color: ${({ theme }) => theme.burgerBg};
        transition: all 0.50s linear;
    }

    .bottomPart {
        background-color: ${({ theme }) => theme.bottomPart};
        transition: all 0.50s linear;
    }

    .inputDiaryDateCalendar {
        color: ${({ theme }) => theme.rightBarTitle};
        transition: all 0.50s linear;
    }

    .productList li {
        color: ${({ theme }) => theme.title};
        transition: all 0.50s linear;
    }

    @media (min-width: 1280px) {
        .sectionLoginPage {
            background-image: ${({ theme }) => theme.loginBgImageDesk};
            transition: all 0.50s linear;
        }

        .mainPageSection {
            background-image: ${({ theme }) => theme.homeBgImageDesk};
            transition: all 0.50s linear;
        }
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        .sectionLoginPage {
            background-image: ${({ theme }) => theme.loginBgImageTabl};
            transition: all 0.50s linear;
        }
        .mainPageSection {
            background-image: ${({ theme }) => theme.homeBgImageTabl};
            transition: all 0.50s linear;
        }
    }

    .productList .listItem  .listName {
        color: ${({ theme }) => theme.list};
    }
    .productList .listItem  .listWeight {
        color: ${({ theme }) => theme.list};
    }
    .productList .listItem  .listCalories {
        color: ${({ theme }) => theme.list};
    }
  .labelDatePicker .react-datepicker-wrapper .react-datepicker__input-container .inputDiaryDateCalendar {
        color: ${({ theme }) => theme.calendar};
    }

    .navList  .navlink {
        color: ${({ theme }) => theme.navlink};
    }
    .navList  .navlinkActive {
        color: ${({ theme }) => theme.navlinkActive};
    }
    .overlay .burgerNavList .navlink { 
        color: ${({ theme }) => theme.navlinkBurger};
    }
    .overlay .burgerNavList  .navlinkActive {
        color: ${({ theme }) => theme.navlinkActiveBurger};
    }
    .rightSide .burger svg {
        fill: ${({ theme }) => theme.title};
    }
  

    ::-webkit-scrollbar-thumb{
      background-color: ${({ theme }) => theme.scrollColor};
    }

`;
