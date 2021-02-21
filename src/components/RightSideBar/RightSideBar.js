import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { SideBarContainer } from './RightSideBarStyled';
import dailyRateSelectors from '../../redux/dailyRate/dailyRateSelectors';
import diarySelectors from '../../redux/diary/diarySelectors';
import getRandomElements from '../../utils/getRandomElements';

const RightSideBar = () => {
    const {
        kcalLeft,
        kcalConsumed,
        dailyRate,
        percentsOfDailyRate,
    } = useSelector(dailyRateSelectors.getCurrentDayInfo);

    const date = useSelector(diarySelectors.getDate);
    const notAllowedProducts = useSelector(diarySelectors.notAllowedProducts);
    const productsList = notAllowedProducts.length ? getRandomElements(notAllowedProducts, 5):[];

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
                                {kcalLeft ? Math.round(kcalLeft) : "000"} ккал
                            </span>
                        </li>
                        <li className="rightBarItem">
                            <span className="rightBarValue">Употреблено</span>
                            <span className="rightBarValue">
                                {kcalConsumed ? Math.round(kcalConsumed) : "000"} ккал
                            </span>
                        </li>
                        <li className="rightBarItem">
                            <span className="rightBarValue">Дневная норма</span>
                            <span className="rightBarValue">
                                {dailyRate ? Math.round(dailyRate) : "000"} ккал
                            </span>
                        </li>
                        <li className="rightBarItem">
                            <span className="rightBarValue">n% от нормы</span>
                            <span className="rightBarValue">
                                {percentsOfDailyRate ? Math.round(percentsOfDailyRate) : "0"} %
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
                            <ul className="rightBarProductsList">
                                {productsList.map((product, idx) => (
                                    <li key={idx} className="rightBarProductsItem" >{product}</li>
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
