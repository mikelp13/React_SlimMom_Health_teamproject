import styled from 'styled-components';

const NavigationItemStyled = styled.li`
    list-style: none;

    @media (max-width: 1279px) {
        padding: 10px;
    }

    .navlink {
        text-decoration: none;
        font-family: 'Gotham Pro';
        font-size: 14px;
        font-weight: 700;
        margin-right: 15px;
        color: var(--secondary-text);
    }
    .navlinkActive {
        color: var(--accent-color);
    }
`;

export default NavigationItemStyled;
