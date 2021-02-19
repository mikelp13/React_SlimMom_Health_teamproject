import styled from 'styled-components';
const MobileBarStyled = styled.div`

.upperPart {
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px; 
}
.bottomPart {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  height: 40px;
background-color: #EFF1F3 ;
}
.bottomPart div {
 
}
button {
 
  border: none;
  background-color: transparent;
  outline: none;
}  
    
  `


export default MobileBarStyled;

/*flex-direction: column; 

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
    } */