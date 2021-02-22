import styled from 'styled-components';

const BurgerMenuStyled = styled.div`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);

    .overlay {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: fixed;
        top: 60px;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        z-index: 1;
        font-size: 24px;
        padding-top: 108px;

        @media (min-width: 768px) {
            top: 84px;
        }
    }
    .overlay .navlink {
        color: var(--secondary-text);
        font-size: 18px;
    }
    .overlay .navlinkActive {
        color: var(--accent-color);
    }
    .overlay .navlinkActive:hover {
        color: var(--accent-color);
    }
`;

export default BurgerMenuStyled;
