import styled from 'styled-components';


const NavigationStyled = styled.ul`
display: flex;
align-items: center;
li {
  marin-right: 15px;

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
  color: var(--main-text);
}


`


export default NavigationStyled;