import styled from 'styled-components';


const ModalStyled = styled.div `
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);

  .modalBody {
    position: fixed;
    width: 320px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -44%);
    z-index: 1050;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background-color: var(--main-background);
}
 
  .overlay {
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 8%;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: var(--burger-background);
   
    font-size: 24px;
    padding-top: 108px; */

    z-index: 1200;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background: transparent;
    background-color: rgba(33, 33, 33, 0.12);
  }  
  .overlay .navlink {
    color: var(--secondary-text);
  }
  .overlay .navlinkActive {
    color: var(--light-text);
  }
.overlay .navlinkActive:hover {
    color: var(--light-text);
  }

  @media (min-width: 767px) {
    .modalBtn {
        margin: 24px 24px 0 540px;
        background: url('./svg/icon-cross.svg') no-repeat scroll 0 0 transparent;
    }
    .modal_overlay {
        background-color: var(--main-text);
        opacity: 0.5;
    }
    .modal_header {
        display: flex;
        justify-content: flex-end;
    }
    .modal_wrapper {
        transform: translate(-50%, -50%);
    }
    .modalBody {
        margin-top: 222px;
        width: 594px;
        box-sizing: content-box;
    }
}

@media (min-width: 1024px) {
    .modalBody {
        width: 690px;
    }
    .list {
        margin-left: 160px;
    }
    .modalBtn {
        margin: 24px 24px 0 635px;
    }
}


`


export default ModalStyled;