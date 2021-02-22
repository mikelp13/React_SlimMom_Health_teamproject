import React from 'react';
import { useHistory } from 'react-router-dom';
import DailyCalorieIntakeStyled from './DailyCalorieIntakeStyled';
import { useSelector } from 'react-redux';
import getRandomElements from '../../utils/getRandomElements';
import dailyRateSelectors from '../../redux/dailyRate/dailyRateSelectors';

const DailyCalorieIntake = () => {
    const history = useHistory();
    const calories = useSelector(dailyRateSelectors.getCalories);
    const notAllowedProducts = useSelector(dailyRateSelectors.getNotAllowedProducts);
    
    const products = notAllowedProducts.length
        ? getRandomElements(notAllowedProducts, 5)
        : [];

    return (
        <DailyCalorieIntakeStyled>
            <div className="ModalContentContainer">
                <p className="DailyCalorieIntakeTitle">
                    Ваша рекомeндуемая суточная норма калорий составляет
                </p>

                <p className="DailyCalorieIntakeKcal">
                    {calories}
                    <span className="DailyCalorieIntakeKcalText">ккал</span>
                </p>

                <div className="line"></div>
                <h2 className="DailyCalorieIntakeProducts">
                    Продукты, которые вам <br/> не рекомендуется употреблять
                </h2>

                <ol className="DailyCalorieIntakeProductsList">
                    {products.map(product => (
                        <li
                            className="DailyCalorieIntakeProductsItem"
                            key={product}
                        >
                            {product}
                        </li>
                    ))}
                </ol>

                <button
                    className="DailyCalorieIntakeButton"
                    onClick={() => {
                        history.push('/signup');
                    }}
                >
                    Начать худеть
                </button>
            </div>
        </DailyCalorieIntakeStyled>
    );
};

export default DailyCalorieIntake;
