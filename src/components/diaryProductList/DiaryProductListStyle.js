import styled from 'styled-components';

export const UL = styled.ul`
    width: 100%;
    margin-bottom: 60px;

    @media screen and (min-width: 768px) {
        padding-right: 3px;
        height: 210px;
        overscroll-behavior: contain;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .listani-enter-active {
        animation: task 250ms ease-in alternate-reverse;
    }

    .listani-exit-active {
        animation: back 250ms ease-in;
    }

    @keyframes task {
        0% {
            transform: translateX(0);
        }

        30% {
            opacity: 0.7;
            transform: translateX(30px);
        }

        100% {
            opacity: 0;
            transform: translateX(-200px);
        }
    }

    @keyframes back {
        0% {
            transform: translateX(0);
        }

        30% {
            opacity: 0.7;
            transform: translateX(30px);
        }

        100% {
            opacity: 0;
            transform: translateX(-200px);
        }
    }

    .scrollbar {
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        scrollbar-width: thin;
        scrollbar-color: var(--burger-background) var(--secondary-background);
    }

    .scrollbar::-webkit-scrollbar {
        width: 6px;
    }
    .scrollbar::-webkit-scrollbar-track {
        background-color: var(--secondary-background);
    }
    .scrollbar::-webkit-scrollbar-thumb {
        background-color: var(--burger-background);
        border-radius: 0px;
    }

    .scrollbar::-webkit-scrollbar-thumb:vertical {
        min-height: 1.5rem;
    }
    .scrollbar::-webkit-scrollbar-thumb:horizontal {
        min-width: 1.5rem;
    }

    .SmallLoaderContainer {
        position: absolute;

        left: 120px;
    }
    @media screen and (min-width: 650px) {
        .productList {
            padding-right: 30px;
            width: 594px;
            height: 240px;
        }
    }
    @media screen and (min-width: 1100px) {
        .productList {
            padding-right: 40px;
            width: 600px;
            height: 269px;
        }
    }
`;
