import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getProductOperation,
    addProductOperation,
} from '../../redux/diary/diaryOperations';
import diarySelectors from '../../redux/diary/diarySelectors';
import { DiaryFormWrapper } from './DiaryAddProductFormStyle';
// import { debounce } from 'debounce';

const DiaryAddProductForm = () => {
    const [state, setState] = useState({
        date: '',
        productName: '',
        gram: '',
    });
    const date = useSelector(diarySelectors.getDate);
    const productId = useSelector(
        state => state.diaryProducts?.products[0]?._id,
    );

    const products = useSelector(state => state.diaryProducts.products);
    const dispatch = useDispatch();
    const debounce = require('debounce');
    const size = useWindowSize();

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener('resize', handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener('resize', handleResize);
        }, []); // Empty array ensures that effect is only run on mount

        return windowSize;
    }

    const handleChange = e => {
        const { name, value } = e.target;
        console.log(value);
        setState(prev => ({ ...prev, [name]: value }));
        if (products.some(product => product.title.ru.includes(value))) {
            setState(prev => ({
                ...prev,
                productId: products.find(product => {
                    return product.title.ru === value;
                })?._id,
            }));
        } else {
            debounce(dispatch(getProductOperation(state.productName)), 1500);
        }
        console.log(state);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addProductOperation(date, productId, state.gram));
        setState({
            date: '',
            productName: '',
            gram: '',
        });
    };

    return (
        <DiaryFormWrapper>
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
                    />
                    <datalist id="browsers">
                        {products.map(product => (
                            <option key={product._id} value={product.title.ru}>
                                {product.title.ru}
                            </option>
                        ))}
                    </datalist>

                    <label>
                        <input
                            type="number"
                            name="gram"
                            value={state.gram}
                            onChange={handleChange}
                            placeholder="Граммы"
                            className="inputDairyAddProduct secondInputLength"
                        />
                    </label>
                </div>
                <select className="selectDairyAddProduct">
                    <option></option>
                </select>
                <button type="submit" className="buttonDairyAddProduct">
                    {size.width < 768 ? 'Добавить' : '+'}
                </button>
            </form>
        </DiaryFormWrapper>
    );
};

export default DiaryAddProductForm;
