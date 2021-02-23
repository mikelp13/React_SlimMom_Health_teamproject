import styled from 'styled-components';
const LogoStyled = styled.div`

.logo {
    display: flex;
    align-items: center; 
    text-decoration: none;  
  }
  .logo p {
    margin: 0;
    margin-left: 10px;
    font-family: 'Gotham Pro';
    font-size: 22px;

  }
  .logo p span {
    color: var(--accent-color)
  }
  @media screen and (min-width: 1280px) {
    .logo img {
        margin-top: -40px;
        width: 70px;
        min-height: 66px;
    }
    .logo p {
      margin-left: -25px;
    }
    }
 
  `

export default LogoStyled;