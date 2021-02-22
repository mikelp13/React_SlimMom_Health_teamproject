import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { LI } from './DiaryProductItemStyle';
import CloseIcon from './CloseIcon';
import diarySelectors from '../../../redux/diary/diarySelectors';
import { deleteProductOperation } from '../../../redux/diary/diaryOperations';
import { LI } from './DiaryProductItemStyle';

const DiaryProductItem = ({ name, weight, cal, productId }) => {
    const dayId = useSelector(diarySelectors.getDayId);

    const dispatch = useDispatch();
    // console.log('productId', productId)


    const handleClick = (e) => {
        const currentProductId = e.currentTarget.id

        // console.log('currentProductId', currentProductId)
        dispatch(
            deleteProductOperation({
                dayId,
                eatenProductId: currentProductId,
            }),
        );
    };

    return (

        <LI className='listItem'>
            <span className='listName'>{name}</span>
            <span className='listWeight'>{weight} г</span>
            <span className='listCalories'>
                {Math.round(cal)} <span>ккал</span>
            </span>
            <button className='listButton' onClick={handleClick} id={productId}>
                <CloseIcon />
            </button>
        </LI>
    );
};

export default DiaryProductItem;
