import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { LI } from './DiaryProductItemStyle';
import CloseIcon from './CloseIcon';
import diarySelectors from '../../../redux/diary/diarySelectors';
import { deleteProductOperation } from '../../../redux/diary/diaryOperations';

const DiaryProductItem = ({ name, weight, cal, productId }) => {
    const dayId = useSelector(diarySelectors.getDayId);
  
    const dispatch = useDispatch();
console.log('productId', productId)


    const handleClick = (e) => {
      const currentProductId = e.currentTarget.id

      console.log('currentProductId', currentProductId)
        dispatch(
            deleteProductOperation({
                dayId,
                eatenProductId: currentProductId,
            }),
        );
    };

    return (
        <li>
            <span>{name}</span>
            <span>{weight} г</span>
            <span>
                {Math.round(cal)} <span>ккал</span>
            </span>
            <button onClick={handleClick} id={productId}>
                <CloseIcon />
            </button>
        </li>
    );
};

export default DiaryProductItem;
