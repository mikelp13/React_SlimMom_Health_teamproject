import React from 'react';
// import uuid from 'react-uuid';
import { useHistory } from 'react-router-dom';
// import { createStore } from 'redux';
import DailyCalorieIntakeStyled from './DailyCalorieIntakeStyled';
import { useSelector } from 'react-redux';


const DailyCalorieIntake = () => {
    const history = useHistory();
    const calories = useSelector(state => state.user.userData.dailyRate);
    const notAllowedProducts = useSelector(
        state => state.user.userData.notAllowedProducts,
    );


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
                    Продукты, которые вам не рекомендуется употреблять
                </h2>

           
                <div >
                    <ol className="DailyCalorieIntakeProductsList">
                        {notAllowedProducts.map(product => (
                            <li
                                className="DailyCalorieIntakeProductsItem"
                                key={product}
                            >
                                {product}
                            </li>
                        ))}
                    </ol>
                </div>

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
