import styled from 'styled-components';
const NavBarStyled = styled.div`
display: flex;
flex-direction: column; 

@media screen and (min-width: 768px) {
  flex-direction: row-reverse; 
  div {
      margin-right: 100px
  } 
} 

  @media screen and (min-width: 1280px) {
    flex-direction: initial; 
    div {
        margin-left: 100px
    } 
    } 
    
  `


export default NavBarStyled;