import React from 'react';
// import uuid from 'react-uuid';
import { useHistory } from 'react-router-dom';
// import { createStore } from 'redux';
import DailyCalorieIntakeStyled from './DailyCalorieIntakeStyled';
import authReducers from '../../redux/auth/authReducers';
import { useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';

const DailyCalorieIntake = () => {
    const history = useHistory();
const calories = useSelector(state => state.user.userData.dailyRate)
const notAllowedProducts = useSelector(state => state.user.userData.notAllowedProducts)
console.log(notAllowedProducts);
    // let store = createStore(authReducers);
    // const dailyRate = store.getState().user.userData.dailyRate;
    // console.log(store.getState().user.userData.dailyRate);

    // const notAllowedProducts = store.getState().user.userData
    //     .notAllowedProducts;
    // console.log(store.getState().user.userData.notAllowedProducts);

    // const products = notAllowedProducts.map(product => (
    //     <li className="DailyCalorieIntakeProductsItem" key={product}>
    //         {product}
    //     </li>
    // ));

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

                {/* <List height={150} itemCount={1000} itemSize={35} width={300}>
                <ol className="DailyCalorieIntakeProductsList">{products}</ol>
                </List> */}

  {/* <ol className="DailyCalorieIntakeProductsList">{products.map(product => ( <li className="DailyCalorieIntakeProductsItem" key={product}>{product}</li>))}
  </ol>
    */}

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
