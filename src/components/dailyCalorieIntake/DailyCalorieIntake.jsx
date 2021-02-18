import React from 'react';
import { useHistory } from 'react-router-dom';
// import './DailyCaloriesIntake.css';
import DailyCalorieIntakeStyled from './DailyCalorieIntakeStyled';

const DailyCalorieIntake = ({ kcalQuantity, products }) => {
    const history = useHistory();
    return (
        <DailyCalorieIntakeStyled>
            <div className="ModalContentContainer">
                <p className="DailyCalorieIntakeTitle">
                    Ваша рекомeндуемая суточная норма калорий составляет
                </p>

                <p className="DailyCalorieIntakeKcal">
                    {kcalQuantity}
                    <span className="DailyCalorieIntakeKcalText">ккал</span>
                </p>

                <div className="line"></div>
                <h2 className="DailyCalorieIntakeProducts">
                    Продукты, которые вам не рекомендуется употреблять
                </h2>
                <ol className="DailyCalorieIntakeProductsList">
                    <li className="DailyCalorieIntakeProductsItem">
                        Мучные продукты
                    </li>
                    <li className="DailyCalorieIntakeProductsItem">Молоко</li>
                    <li className="DailyCalorieIntakeProductsItem">
                        Красное мясо
                    </li>
                    <li className="DailyCalorieIntakeProductsItem">
                        Копчености
                    </li>
                </ol>
                {/* <ol className="DailyCalorieIntakeProductsList">
                {products.map(product => (
                    <li className="DailyCalorieIntakeProductsItem">
                        {product}
                    </li>
                ))}
            </ol> */}

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
