import React from 'react';
import { useSelector } from 'react-redux';
import diarySelectors from '../../redux/diary/diarySelectors';
import { SideBarContainer } from './RightSideBarStyled';

const RightSideBar = () => {
    const {
        date,
        kcalLeft,
        kcalConsumed,
        dailyRate,
        percentsOfDailyRate,
    } = useSelector(diarySelectors.getDayInfo);
    
    console.log('date', diarySelectors.getDayInfo)

    const productsList = useSelector(
        state => state.auth.user.userData.notAllowedProducts,
    );
    return (
        <SideBarContainer className="sideBarContainer">
            <div className="rightSideBar">
                <div className="rightBarSummary">
                    <p className="rightBarTitle">Сводка за {date}</p>
                    <ul className="rightBarList">
                        <li className="rightBarItem">
                            <span className="rightBarValue">Осталось</span>
                            <span className="rightBarValue">
                                {kcalLeft} ккал
                            </span>
                        </li>
                        <li className="rightBarItem">
                            <span className="rightBarValue">Употреблено</span>
                            <span className="rightBarValue">
                                {kcalConsumed} ккал
                            </span>
                        </li>
                        <li className="rightBarItem">
                            <span className="rightBarValue">Дневная норма</span>
                            <span className="rightBarValue">
                                {dailyRate} ккал
                            </span>
                        </li>
                        <li className="rightBarItem">
                            <span className="rightBarValue">n% от нормы</span>
                            <span className="rightBarValue">
                                {percentsOfDailyRate} ккал
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="rightBarRestrictions">
                    {productsList.length ? (
                        <>
                            <p className="rightBarTitle">
                                Нерекомендуемые продукты
                            </p>
                            <ul>
                                <li>{productsList[0]}</li>
                                <li>{productsList[1]}</li>
                                <li>{productsList[2]}</li>
                            </ul>
                        </>
                    ) : (
                        <p className="rightBarValue">
                            Здесь будет отображаться Ваш
                            <br />
                            рацион
                        </p>
                    )}
                </div>
            </div>
        </SideBarContainer>
    );
};

export default RightSideBar;
