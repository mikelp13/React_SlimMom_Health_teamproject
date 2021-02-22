import styled from 'styled-components';

const ModalStyled = styled.div`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);

    .modalBody {
        margin: 0 auto;
        overflow-x: hidden;
        outline: 0;
        background-color: var(--main-background);

        @media (max-width: 767px) {
            height: 100vh;
            width: 100%;
            transform: translateY(60px);
            overflow-y: scroll;
            pointer-events: initial;
            padding-bottom: 40px;
        }

        @media (min-width: 768px) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1050;
        }
    }

    .overlay {
        z-index: 1200;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        z-index: 1040;
        width: 100vw;
        height: 100vh;
        background: transparent;

        @media (max-width: 767px) {
            pointer-events: none;
        }

        @media (min-width: 768px) {
            background-color: rgba(33, 33, 33, 0.12);
        }
    }

    .modalBtn {
        padding-left: 0;
        padding-right: 0;
        border: none;
        outline: none;
        height: 12px;
        width: 12px;
        cursor: pointer;

        @media (max-width: 767px) {
            width: 100%;
            padding: 18px;
            display: flex;
            align-items: center;
        }
    }
    .overlay .navlink {
        color: var(--secondary-text);
    }
    .overlay .navlinkActive {
        color: var(--light-text);
    }
    .overlay .navlinkActive:hover {
        color: var(--light-text);
    }

    .modal_overlay {
        background-color: var(--main-text);
        opacity: 0.5;
    }
    .modal_header {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        z-index: 1040;
        width: 100vw;
        height: 100vh;
        background: transparent;
        background-color: rgba(33, 33, 33, 0.12);
    }
    .overlay .navlink {
        color: var(--secondary-text);
    }
    .overlay .navlinkActive {
        color: var(--light-text);
    }
    .overlay .navlinkActive:hover {
        color: var(--light-text);
    }

    @media (min-width: 767px) {
        .modalBtn {
            margin: 24px 24px 0 540px;
            background: transparent;
        }
        .modal_overlay {
            background-color: var(--main-text);
            opacity: 0.5;
        }
        .modal_header {
            display: flex;
            justify-content: flex-end;
        }
        .modal_wrapper {
            transform: translate(-50%, -50%);
        }
        .modalBody {
            width: 594px;
            box-sizing: content-box;
        }
    }

    @media (min-width: 1024px) {
        .modalBody {
            width: 690px;
        }
        .list {
            margin-left: 160px;
        }
        .modalBtn {
            margin: 24px 24px 0 635px;
        }
    }
`;

export default ModalStyled;
