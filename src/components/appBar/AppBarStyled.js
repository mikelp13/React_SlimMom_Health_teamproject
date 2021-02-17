import styled from 'styled-components';
const AppBarStyled = styled.div`
display: flex;
justify-content: space-between;

.logo {
    display: flex;
    align-items: center; 
    text-decoration: none;  
  }
  .logo p {
    margin-left: 10px;
    font-family: 'Gotham Pro';
    font-size: 22px;
  }
  .logo p span {
    color: var(--accent-color)
  }
  @media screen and (min-width: 1280px) {
    .logo {
      align-items: baseline;
    } 
    .logo img {
        width: 70px;
        min-height: 66px;
    }
    .logo p {
      margin-left: -10px;
    }
    }
  button {
    border: none;
    background-color: transparent;
    outline: none;
  }
  `


export default AppBarStyled;