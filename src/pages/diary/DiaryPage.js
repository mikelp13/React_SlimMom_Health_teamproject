import React from 'react';
import DiaryDateCalendar from '../../components/diaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/diaryAddProductForm/DiaryAddProductForm';
import DiaryProductList from '../../components/diaryProductList/DiaryProductList';
import { PageContainer } from './DiaryPageStyle';

const DiaryPage = () => (
    <PageContainer className="calculatorPage">
        <section className="calculatorPageSection">
            <div className="container">
                <DiaryDateCalendar />
                <DiaryAddProductForm />
                <DiaryProductList />
            </div>
        </section>
    </PageContainer>
);

export default DiaryPage;
