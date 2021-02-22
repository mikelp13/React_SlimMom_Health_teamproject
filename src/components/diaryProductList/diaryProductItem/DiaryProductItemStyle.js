import styled from 'styled-components';

export const LI = styled.li`
      display: flex;
  list-style: none;
  font-family: 'Verdana';
  line-height: 17px;
  letter-spacing: 0.04em;
  /* align-items: center; */
  list-style: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  align-items: flex-end;
  transition: margin-left 0.3s linear, font-weight 0.2s linear, color 0.3s linear;
  -webkit-transition: margin-left 0.3s linear, font-weight 0.2s linear, color 0.3s linear;
  -moz-transition: margin-left 0.3s linear, font-weight 0.2s linear, color 0.3s linear;
  -o-transition: margin-left 0.3s linear, font-weight 0.2s linear, color 0.3s linear;
  -ms-transition: margin-left 0.3s linear, font-weight 0.2s linear, color 0.3s linear;
   &:hover {
     margin-left: 20px; 
}
  
    .listName {
  display: inline-block;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-right: 10px;
  border-bottom: 1px solid #e0e0e0;
  white-space: normal;
  flex: 3;
  color: var(--main-text);
  font-size: 14px;
}



.listWeight {
  text-align: center;
  display: inline-block;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-right: 10px;
  border-bottom: 1px solid #e0e0e0;
  white-space: nowrap;
  overflow: auto;
  flex: 1;
  color: var(--main-text);
  font-size: 14px;
}

.listCalories {
  text-align: center;
  display: inline-block;
  padding-top: 20px;
  padding-bottom: 8px;
  margin-right: 10px;
  border-bottom: 1px solid #e0e0e0;
  white-space: nowrap;
  overflow: auto;
  flex: 1.3;
  color: var(--main-text);
  font-size: 14px;
}
.ccal {
  font-size: 8px;
}

@media screen and (min-width: 650px) {
  .list {
    display: flex;
    list-style: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.214;
    letter-spacing: 0.04em;
    font-size: 14px;
  }

  .listName {
    display: inline-block;
    width: 137px;
    padding-top: 15px;
    padding-bottom: 19px;
    margin-right: 31px;
    border-bottom: 1px solid #e0e0e0;
    white-space: normal;
    overflow: auto;
    color: var(--main-text);
    font-size: 14px;
  }

  .listWeight {
    text-align: right;
    display: inline-block;
    width: 60px;
    padding-top: 15px;
    padding-bottom: 19px;
    margin-right: 31px;
    border-bottom: 1px solid #e0e0e0;
    white-space: nowrap;
    overflow: auto;
    color: var(--main-text);
    font-size: 14px;
  }

  .listCalories {
    text-align: right;
    display: inline-block;
    width: 60px;
    padding-top: 15px;
    padding-bottom: 19px;
    margin-right: 31px;
    border-bottom: 1px solid #e0e0e0;
    white-space: nowrap;
    color:var(--main-text);
    font-size: 14px;
  }
  .ccal {
    font-size: 12px;
  }
}

@media screen and (min-width: 1100px) {
  .list {
    display: flex;
    list-style: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.214;
    letter-spacing: 0.04em;
    font-size: 16px;
  }

  .listName {
    display: inline-block;
    width: 239px;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-right: 31px;
    border-bottom: 1px solid #e0e0e0;
    white-space: normal;
    overflow: auto;
    color: var(--main-text);
    font-size: 16px;
  }

  .listWeight {
    text-align: center;
    display: inline-block;
    width: 105px;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-right: 31px;
    border-bottom: 1px solid #e0e0e0;
    white-space: nowrap;
    overflow: auto;
    color: var(--main-text);
    font-size: 16px;
  }

  .listCalories {
    text-align: center;
    display: inline-block;
    width: 105px;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-right: 10px;
    border-bottom: 1px solid #e0e0e0;
    white-space: nowrap;
    color: var(--main-text);
    font-size: 16px;
  }
  .ccal {
    font-size: 12px;
  }
}

.listButton {
  display: block;
  padding-bottom: 15px;
  border: none;
  background:transparent;
  color: var(--secondary-text);
  cursor: pointer;
}
`;
