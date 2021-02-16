import React from 'react';
import CalculatorCaloriesForm from '../../components/calculatorCaloriesForm/CalculatorCaloriesForm';
import { PageContainer } from './HomePageStyled';

const HomePage = () => (
    <PageContainer className="mainPage">
        <section className="mainPageSection">
            <div className="container">
                <h2 className="mainPageTitle">
                    Просчитай свою суточную норму калорий прямо сейчас
                </h2>
                <CalculatorCaloriesForm />
            </div>
        </section>
    </PageContainer>
);

export default HomePage;
