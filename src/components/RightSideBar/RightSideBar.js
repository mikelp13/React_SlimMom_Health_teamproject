import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
// import diarySelectors from '../../redux/diary/diarySelectors';
import { SideBarContainer } from './RightSideBarStyled';
import { getCurrentDayInfo } from '../../redux/dailyRate/dailyRateSelectors';

const RightSideBar = () => {
    const {
        date,
        kcalLeft,
        kcalConsumed,
        dailyRate,
        percentsOfDailyRate,
    } = useSelector(getCurrentDayInfo);

    const productsList = useSelector(state =>
        state.user.userData.notAllowedProducts
            ? state.user.userData.notAllowedProducts.slice(0, 5)
            : [],
    );
    console.log(productsList);

    return (
        <SideBarContainer className="sideBarContainer">
            <div className="rightSideBar">
                <div className="rightBarSummary">
                    <p className="rightBarTitle">
                        Сводка за {moment(date).format('DD.MM.YYYY')}
                    </p>
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
                                {Math.round(percentsOfDailyRate)} %
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
                            <ul className="productList">
                                {productsList.map((product, idx) => (
                                    <li key={idx}>{product}</li>
                                ))}
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
