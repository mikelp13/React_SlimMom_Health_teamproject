import styled from 'styled-components';
const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: 'Gotham Pro';
  font-weight: 700;
  p{
      margin-right: 15px;
     
  }
  span {
    margin-right: 15px;
  }
  button{
      border: none;
      text-decoration: none;
      background-color: transparent;
  }
  @media screen and (min-width: 768px){
    .logo {
      align-items: flex-end ;
    }
`;
export default UserMenuStyled;