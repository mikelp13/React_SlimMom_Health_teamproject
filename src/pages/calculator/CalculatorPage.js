import React from 'react';
import CalculatorCaloriesForm from '../../components/calculatorCaloriesForm/CalculatorCaloriesForm';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import { PageContainer } from './CalculatorPageStyled';

const CalculatorPage = () => {
    return (
        <PageContainer className="calculatorPageSection">
            <div className="calculatorPageWrapper">
                <h2 className="calculatorPageTitle">
                    Узнай свою суточную норму калорий
                </h2>
                <CalculatorCaloriesForm />
            </div>
            {/* <RightSideBar /> */}
        </PageContainer>
    );
};

export default CalculatorPage;
