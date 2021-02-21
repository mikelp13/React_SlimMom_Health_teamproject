import styled from 'styled-components';

export const UL = styled.div`

    list-style: none;
    max-height: 256px;
    overflow: hidden;
    overflow-y: scroll;
    margin-top: 31px;
    padding-right: 12px;
    @media screen and (min-width: 768px) {
        padding-right: 31px;
    }
    @media screen and (min-width: 1200px) {
        width: 650px;
        padding-right: 42px;
        max-height: 200px;
        padding-left: 40px;
    }

`;
