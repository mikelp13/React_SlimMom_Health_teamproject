import styled from "styled-components";

export const ToggleStyled = styled.div`
  @media screen and (min-width: 320px) {
    .toggleWrapper {
  position: absolute;
  top: 40px;
  right: 15px;
  overflow: hidden;
  padding: 10px 10px;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1;
  
  input {
    position: absolute;
    left: -99em;
  }
 }
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  .toggleWrapper {
    top: 65px;
    right: 90px;
  }
}

@media screen and (min-width: 1280px) {
  .toggleWrapper {
    top: 55px;
    right: 55px;
  }
}

.toggle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 50px;
  height: 25px;
  background-color: #83D8FF;
  border-radius: 84px;
  transition: background-color 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.toggle__handler {
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 1px;
  left: 2px;
  width: 23px;
  height: 23px;
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
    top: 12px;
    left: 5px;
    width: 3px;
    height: 3px;
  }
  
  .crater--2 {
    top: 13px;
    left: 12px;
    width: 5px;
    height: 5px;
  }
  
  .crater--3 {
    top: 3px;
    left: 12px;
    width: 7px;
    height: 7px;
  }
}

.star {
  position: absolute;
  background-color: #ffffff;
  transition: all 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
}

.star--1 {
  top: 4px;
  left: 16px;
  z-index: 0;
  width: 25px;
  height: 2px;
}

.star--2 {
  top: 8px;
  left: 15px;
  z-index: 1;
  width: 25px;
  height: 2px;
}

.star--3 {
  top: 13px;
  left: 19px;
  z-index: 0;
  width: 25px;
  height: 2px;
}
    
.star--4,
.star--5,
.star--6 {
  opacity: 0;
  transition: all 600ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.star--4 {
  top: 19px;
  left: 11px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px,0,0);
}

.star--5 {
  top: 14px;
  left: 6px;
  z-index: 0;
  width: 3px;
  height: 3px;
  transform: translate3d(3px,0,0);
}

.star--6 {
  top: 16px;
  left: 18px;
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
      transform: translate3d(23px, -0.5px, 0) rotate(0);
  
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