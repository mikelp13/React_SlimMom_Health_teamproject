import styled from 'styled-components';

export const ButtonStyled = styled.button`
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 25px;
        margin: 0 auto;
    
        .plusIcon {
        fill: var(--light-text);
        display:flex;
        align-items:center;

        &:focus,
        &:hover {
            fill: var(--accent-color);
            transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }
    }
`;
