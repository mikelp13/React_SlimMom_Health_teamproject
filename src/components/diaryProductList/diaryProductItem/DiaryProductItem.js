import React from 'react';
import { LI } from './DiaryProductItemStyle';
import CloseIcon from './CloseIcon';

const DiaryProductItem = () => {
    return (
        <>
            <LI>
                <ul className="listDairyProduct">
                    <li className="itemDairyProduct">Вода</li>
                    <li className="itemDairyProduct">200 г</li>
                    <li className="itemDairyProduct">470 ккал</li>
                </ul>
                <button className="buttonDairyProduct">
                    <CloseIcon />
                </button>
            </LI>
            <LI>
                <ul className="listDairyProduct">
                    <li className="itemDairyProduct">Шоколад</li>
                    <li className="itemDairyProduct">200 г</li>
                    <li className="itemDairyProduct">1594 ккал</li>
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
