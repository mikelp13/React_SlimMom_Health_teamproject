import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getProductOperation,
    addProductOperation,
} from '../../redux/diary/diaryOperations';
import { getDate } from '../../redux/diary/diarySelectors';
import { DiaryFormWrapper } from './DiaryAddProductFormStyle';

const DiaryAddProductForm = () => {
    const [state, setState] = useState({
        date: '',
        product: '',
        gram: '',
    });
    const date = useSelector(getDate);
    const productId = useSelector(state=>state.diaryProducts.products[0]._id)
    const dispatch = useDispatch();

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
        setState(prev => ({
            ...prev,
            [name]: value,
        }));
        dispatch(getProductOperation(value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addProductOperation(date, productId, state.gram));
    };

    return (
        <DiaryFormWrapper>
            <form onSubmit={handleSubmit} className="formDairyAddProduct">
                <div className="inputBlockDairyAddProduct">
                    <label>
                        <input
                            type="text"
                            name="product"
                            value={state.product}
                            onChange={handleChange}
                            placeholder="Введите название продукта"
                            className="inputDairyAddProduct"
                        />
                    </label>
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
