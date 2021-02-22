import styled from 'styled-components';
const MobileBarStyled = styled.div`

body {
  overflow-y: ${props=> props.click ? "hidden" : "scroll"};
}
    .upperPart {
        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }
    .bottomPart {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-left: 15px;
        padding-right: 15px;
        height: 40px;
    }
    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        outline: none;
    }
`;

export default MobileBarStyled;
