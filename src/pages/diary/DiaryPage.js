import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import DiaryDateCalendar from '../../components/diaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/diaryAddProductForm/DiaryAddProductForm';
import DiaryProductList from '../../components/diaryProductList/DiaryProductList';
import RightSideBar from '../../components/rightSideBar/RightSideBar';
import useWindowSize from '../../hooks/useWindowSize';
import sprite from '../../assets/sprite.svg';
import { PageContainer } from '../calculator/CalculatorPageStyled';
import { ButtonStyled } from './DiaryPageStyle';

const DiaryPage = () => {
    const match = useRouteMatch();
    const location = useLocation();
    const windowSize = useWindowSize();

    return (
        <PageContainer className="calculatorPage">
            <div className="calculatorPageWrapper">
                {location.pathname !== '/diary/product' && (
                    <DiaryDateCalendar />
                )}
                <DiaryAddProductForm />
                {location.pathname !== '/diary/product' && <DiaryProductList />}

                {windowSize.width < 768 &&
                    location.pathname !== '/diary/product' && (
                        <ButtonStyled
                            type="button"
                            className="mainButton roundButton"
                        >
                            <Link to={`${match.url}/product`}>
                                <svg
                                    className="plusIcon"
                                    width="25px"
                                    height="25px"
                                >
                                    <use href={sprite + '#icon-plus'} />
                                </svg>
                            </Link>
                        </ButtonStyled>
                    )}
            </div>
            {location.pathname !== '/diary/product' && <RightSideBar />}
        </PageContainer>
    );
};

export default DiaryPage;
