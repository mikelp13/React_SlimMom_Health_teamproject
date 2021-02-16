import React from 'react';
import CalculatorCaloriesForm from '../../components/calculatorCaloriesForm/CalculatorCaloriesForm';
import { PageContainer } from './CalculatorPageStyled';

const CalculatorPage = () => (
    <PageContainer className="calculatorPage">
        <section className="calculatorPageSection">
            <div className="container">
                <h2 className="calculatorPageTitle">
                    Узнай свою суточную норму калорий
                </h2>
                <CalculatorCaloriesForm />
            </div>
        </section>
    </PageContainer>
);

export default CalculatorPage;
