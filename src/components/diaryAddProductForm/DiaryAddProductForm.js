import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import diaryActions from '../../redux/diary/diaryActions';
import {
    getProductOperation,
    addProductOperation,
} from '../../redux/diary/diaryOperations';
import diarySelectors from '../../redux/diary/diarySelectors';
import { DiaryFormWrapper } from './DiaryAddProductFormStyle';
import useWindowSize from '../../hooks/useWindowSize';

const DiaryAddProductForm = () => {
  const [state, setState] = useState({
    date: '',
    productName: '',
    gram: '',
    productId: '',
  });
  const date = useSelector(diarySelectors.getDate);
  // const productId = useSelector(
    //     state => state.diaryProducts?.products[0]?._id,
    // );
    
    const products = useSelector(diarySelectors.getDayProducts);
    const dispatch = useDispatch();
    const debounce = require('debounce');
    const size = useWindowSize();
    const location = useLocation();
    const match = useRouteMatch();
    const history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
        if (products.some(product => product.title.ru.includes(value))) {
            setState(prev => ({
                ...prev,
                productId: products.find(product => {
                    return product.title.ru === value;
                })?._id,
            }));
        } else {
            name === 'productName' &&
                debounce(
                    dispatch(getProductOperation(state.productName)),
                    1500,
                );
        }
    };

    const handleClick = e => {
        setState(prev => ({ ...prev, productId: e.target.id }));
    };


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addProductOperation(date, state.productId, state.gram));
        setState({
            date: '',
            productName: '',
            gram: '',
        });
        (location.pathname === "/diary/product") && history.goBack();
    };

 
    return (
        <DiaryFormWrapper>
            {(size.width > 768 ||
                location.pathname === `${match.url}/product`) && (
                <form onSubmit={handleSubmit} className="formDairyAddProduct">
                    <div className="inputBlockDairyAddProduct">
                        <input
                            list="browsers"
                            type="text"
                            name="productName"
                            value={state.productName}
                            onChange={handleChange}
                            placeholder="Введите название продукта"
                            className="inputDairyAddProduct"
                            id="fav"
                            autoComplete="off"
                        />
                        <datalist id="browsers">
                            {products.map(product => (
                                <option
                                    key={product._id}
                                    id={product._id}
                                    value={product.title.ru}
                                    onClick={handleClick}
                                >
                                    {product.title.ru}
                                </option>
                            ))}
                        </datalist>

                        <label>
                            <input
                                type="text"
                                name="gram"
                                value={state.gram}
                                onChange={handleChange}
                                placeholder="Граммы"
                                className="inputDairyAddProduct secondInputLength"
                            />
                        </label>
                    </div>
                    <button type="submit" className="buttonDairyAddProduct">
                        {size.width < 768 ? 'Добавить' : '+'}
                    </button>
                </form>
            )}
        </DiaryFormWrapper>
    );
};

export default DiaryAddProductForm;
