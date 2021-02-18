import React from 'react';
import CalculatorCaloriesForm from '../../components/calculatorCaloriesForm/CalculatorCaloriesForm';
import { PageContainer } from './HomePageStyled';

const HomePage = () => (
        <PageContainer className="mainPageSection">
            <div className="container">
              <div className="mainPageWrapper">
                <h2 className="mainPageTitle">
                    Просчитай свою суточную норму калорий прямо сейчас
                </h2>
                <CalculatorCaloriesForm />
                </div>
            </div>
        </PageContainer>
);

export default HomePage;
