import React from 'react';
import './DailyCaloriesIntake.css';

const DailyCalorieIntake = () => {
    return (
        <div className="ModalContentContainer">
            <p className="DailyCalorieIntakeTitle">
                Ваша рекомeндуемая суточная норма калорий составляет
            </p>

            <p className="DailyCalorieIntakeKcal">
                2800<span className="DailyCalorieIntakeKcalText">ккал</span>
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
                <li className="DailyCalorieIntakeProductsItem">Красное мясо</li>
                <li className="DailyCalorieIntakeProductsItem">Копчености</li>
            </ol>
            {/* <ol>
                {products.map(product => (
                    <li className="DailyCalorieIntakeProductsItem">
                        {product}
                    </li>
                ))}
            </ol> */}

            <button className="DailyCalorieIntakeButton" onClick={() => {}}>
                Начать худеть
            </button>
        </div>
    );
};

export default DailyCalorieIntake;
