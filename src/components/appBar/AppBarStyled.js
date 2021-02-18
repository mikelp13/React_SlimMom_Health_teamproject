import styled from 'styled-components';
const AppBarStyled = styled.div`
padding-top: 18px;
padding-bottom: 20px;

@media screen and (min-width: 768px) and max-width: (1279px) {
  border-bottom: #E0E0E0 solid 1px;
  }

@media screen and (min-width: 1280px) {
  padding-top: 82px;
  border-bottom: none;
  }
  `


export default AppBarStyled;


/*
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

    display: flex;
justify-content: space-between;
  }*/