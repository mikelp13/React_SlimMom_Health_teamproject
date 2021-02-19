import React from 'react';
import { useSelector } from 'react-redux';
import diarySelectors from '../../redux/diary/diarySelectors';
import DiaryProductItem from './diaryProductItem/DiaryProductItem';
// import { UL } from './DiaryProductListStyle';

const DiaryProductList = () => {

 const productsList = useSelector(diarySelectors.getDayEatenProduct)
 
    return (
        // <UL>
        //     <DiaryProductItem />
        // </UL>
        // className={`${styles.productList} ${styles.scrollbar}`
        <ul>
        {!!productsList.length &&
            productsList.map(product => {
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
