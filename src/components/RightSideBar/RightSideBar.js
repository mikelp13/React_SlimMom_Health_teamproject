import React from 'react';
import './RightSideBar.css';

function RightSideBar() {
    return (
        <div className="rightSideBar">
            <div className="rightBarSummary">
            <p className="rightBarTitle">Сводка за 20.06.2020</p>
                <ul className="rightBarList">
                    <li className="rightBarItem">
                        <span className="rightBarValue">Осталось</span>
                        <span className="rightBarValue">000 ккал</span>
                    </li>
                    <li className="rightBarItem">
                        <span className="rightBarValue">Употреблено</span>
                        <span className="rightBarValue">000 ккал</span>
                    </li>
                    <li className="rightBarItem">
                        <span className="rightBarValue">Дневная норма</span>
                        <span className="rightBarValue">000 ккал</span>
                    </li>
                    <li className="rightBarItem">
                        <span className="rightBarValue">n% от нормы</span>
                        <span className="rightBarValue">000 ккал</span>
                    </li>
                </ul>
            </div>
            <div className="rightBarRestrictions">
                <p className="rightBarTitle">Нерекомендуемые продукты</p>
                <p className="rightBarValue">Здесь будет отображаться Ваш<br />рацион</p>
            </div>
        </div>
    )
}

export default RightSideBar;