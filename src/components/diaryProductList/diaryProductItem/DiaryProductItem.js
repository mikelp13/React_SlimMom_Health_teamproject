import React from 'react';
import { LI } from './DiaryProductItemStyle';
import CloseIcon from './CloseIcon';

const DiaryProductItem = () => {
    return (
        <>
            <LI>
                <ul className="listDairyProduct">
                    <li className="itemDairyProduct">Водка</li>
                    <li className="itemDairyProduct">100 г</li>
                    <li className="itemDairyProduct">100 ккал</li>
                </ul>
                <button className="buttonDairyProduct">
                    <CloseIcon />
                </button>
            </LI>
            <LI>
                <ul className="listDairyProduct">
                    <li className="itemDairyProduct">Сало</li>
                    <li className="itemDairyProduct">100 г</li>
                    <li className="itemDairyProduct">100 ккал</li>
                </ul>
                <button className="buttonDairyProduct">
                    <CloseIcon />
                </button>
            </LI>
            <LI>
                <ul className="listDairyProduct">
                    <li className="itemDairyProduct">Печенье</li>
                    <li className="itemDairyProduct">100 г</li>
                    <li className="itemDairyProduct">100 ккал</li>
                </ul>
                <button className="buttonDairyProduct">
                    <CloseIcon />
                </button>
            </LI>
        </>
    );
};

export default DiaryProductItem;
