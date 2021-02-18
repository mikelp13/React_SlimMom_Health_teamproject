import styled from "styled-components";

export const ToggleStyled = styled.div`
  @media screen and (min-width: 320px) {
    .toggleWrapper {
  position: absolute;
  top: 40px;
  right: -20px;
  overflow: hidden;
  padding: 10px 10px;
  transform: translate3d(-50%, -50%, 0);
  
  input {
    position: absolute;
    left: -99em;
  }
 }
}

@media screen and (min-width: 768px) {
  .toggleWrapper {
    top: 80px;
    right: -40px;
  }
}

@media screen and (min-width: 1280px) {
  .toggleWrapper {
    top: 45px;
    right: -40px;
  }
}

.toggle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 70px;
  height: 35px;
  background-color: #83D8FF;
  border-radius: 84px;
  transition: background-color 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.toggle__handler {
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 2px;
  left: 3px;
  width: 31px;
  height: 31px;
  background-color: #FFCF96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0,0,0,.3);
  transition: all 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform:  rotate(-45deg);
  
  .crater {
    position: absolute;
    background-color: #E8CDA5;
    opacity: 0;
    transition: opacity 400ms ease-in-out;
    border-radius: 100%;
  }
  
  .crater--1 {
    top: 13px;
    left: 9px;
    width: 4px;
    height: 4px;
  }
  
  .crater--2 {
    top: 20px;
    left: 17px;
    width: 6px;
    height: 6px;
  }
  
  .crater--3 {
    top: 7px;
    left: 19px;
    width: 8px;
    height: 8px;
  }
}

.star {
  position: absolute;
  background-color: #ffffff;
  transition: all 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
}

.star--1 {
  top: 5px;
  left: 23px;
  z-index: 0;
  width: 30px;
  height: 3px;
}

.star--2 {
  top: 13px;
  left: 23px;
  z-index: 1;
  width: 25px;
  height: 3px;
}

.star--3 {
  top: 20px;
  left: 33px;
  z-index: 0;
  width: 25px;
  height: 3px;
}
    
.star--4,
.star--5,
.star--6 {
  opacity: 0;
  transition: all 600ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.star--4 {
  top: 16px;
  left: 11px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px,0,0);
}

.star--5 {
  top: 27px;
  left: 17px;
  z-index: 0;
  width: 3px;
  height: 3px;
  transform: translate3d(3px,0,0);
}

.star--6 {
  top: 28px;
  left: 28px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px,0,0);
}

input:checked {
  + .toggle {
    background-color: #749DD6;
  
    &:before {
      color: #749ED7;
    }

    &:after {
      color: #ffffff;
    }
    
    .toggle__handler {
      background-color: #FFE5B5;
      transform: translate3d(33px, 0, 0) rotate(0);
  
      .crater { opacity: 1; }
    }
    
    .star--1 {
      width: 2px;
      height: 2px;
    }
    
    .star--2 {
      width: 4px;
      height: 4px;
      transform: translate3d(-5px, 0, 0);
    }
    
    .star--3 {
      width: 2px;
      height: 2px;
      transform: translate3d(-7px, 0, 0);
    }
    
    .star--4,
    .star--5,
    .star--6 {
      opacity: 1;
      transform: translate3d(0,0,0);
    }
    .star--4 {
      transition: all 600ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    .star--5 {
      transition: all 600ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    .star--6 {
      transition: all 600ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  }
}`
    ;