import React from 'react';
import { useSelector } from 'react-redux';
import diarySelectors from '../../redux/diary/diarySelectors';
import DiaryProductItem from './diaryProductItem/DiaryProductItem';

const DiaryProductList = () => {

 const productsList = useSelector(diarySelectors.getDayEatenProducts)


 console.log('productsList', productsList)
 
    return (

        <ul>
        {
       productsList && productsList.map(product => {
                return (
                    <DiaryProductItem
                        key={product.id}
                        name={product.title}
                        weight={product.weight}
                        cal={product.kcal}
                        productId={product.id}
                    />
                );
            })}
    </ul>
    );
};

export default DiaryProductList;
