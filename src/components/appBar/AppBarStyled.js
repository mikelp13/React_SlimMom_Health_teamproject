
import styled from 'styled-components';

const AppBarStyled = styled.header`
    padding-top: 18px;
    border-bottom: #e0e0e0 solid 1px;
  
    @media screen and (max-width: 767px) {
     .container{
       width: 100%;
       padding: 0;
      margin: 0;
    }
  }

    @media screen and (min-width: 768px) and (max-width: 1279px) {
        border-bottom: #e0e0e0 solid 1px;
        padding-bottom: 20px;
    }

    @media screen and (min-width: 1280px) {
        
        border-bottom: none;
        position: absolute;
        padding-top: 67px;
        
        .container {
          padding-top: 35px;
        }
    }
`;

export default AppBarStyled;



/*width: 100%;
left: 90px;

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
