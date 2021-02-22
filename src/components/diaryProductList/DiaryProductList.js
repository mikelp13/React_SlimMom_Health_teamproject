import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import diarySelectors from '../../redux/diary/diarySelectors';
import DiaryProductItem from './diaryProductItem/DiaryProductItem';
import { UL } from './DiaryProductListStyle';

const DiaryProductList = () => {

    const productsList = useSelector(diarySelectors.getDayEatenProducts)


    return (
        <UL className='productList'>
            <TransitionGroup>
                {
                    productsList && productsList.map(product => {
                        return (
                            <CSSTransition key={product.id} classNames='listani' timeout={250}>
                                <DiaryProductItem
                                    key={product.id}
                                    name={product.title}
                                    weight={product.weight}
                                    cal={product.kcal}
                                    productId={product.id}
                                />
                            </CSSTransition>
                        );
                    })}
            </TransitionGroup>
        </UL>
    );
};

export default DiaryProductList;
