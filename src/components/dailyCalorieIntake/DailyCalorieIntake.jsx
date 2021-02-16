import React from 'react';

const DailyCalorieIntake = () => {
    return (
        <>
            <h1 className="DailyCalorieIntakeTitle">
                Ваша рекомндуемая суточная норма калорий составляет
            </h1>
            <div>
                <p className="DailyCalorieIntakeCcal">ккал</p>
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
                <a className="DailyCalorieIntakeButton" href="/">
                    Начать худеть
                </a>
            </div>
        </>
    );
};

export default DailyCalorieIntake;
