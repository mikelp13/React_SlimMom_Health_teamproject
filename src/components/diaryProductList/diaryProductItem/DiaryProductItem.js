import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEatenProduct } from '../../../redux/diaryProductsListItem/itemOperations';
// import { LI } from './DiaryProductItemStyle';
import CloseIcon from './CloseIcon';
import diarySelectors from '../../../redux/diary/diarySelectors';


const DiaryProductItem = ({ name, weight, cal, productId }) => {
    const dayId = useSelector(diarySelectors.getDayProductId);
    const date = useSelector(diarySelectors.getDate);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            deleteEatenProduct(
                {
                    dayId,
                    productId,
                },
                date,
            ),
        );
    };

    return (
        <li>
            <span>{name}</span>
            <span>{weight} г</span>
            <span>
                {Math.round(cal)} <span>ккал</span>
            </span>
            <button onClick={handleClick}>
                <CloseIcon />
            </button>
        </li>
    );
};

export default DiaryProductItem;
