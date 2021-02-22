import React, { useEffect } from 'react';
import DailyCalorieIntake from '../dailyCalorieIntake/DailyCalorieIntake';
import sprite from '../../assets/sprite.svg';
import ModalStyled from './ModalStyled';

const Modal = ({ openModal, onHandelClick, calories, notAllowedProducts }) => {

    useEffect(() => {
        document.addEventListener('keyup', handleKeyPress);
        return () => {
            document.removeEventListener('keyup', handleKeyPress);
        };
        // eslint-disable-next-line
    }, []);

    const handleKeyPress = e => {
        if (e.code === 'Escape') {
            onHandelClick();
        }
    };

    const onOverlayClick = () => {
        onHandelClick();
    };

    return (
        <>
            {openModal && (
                <ModalStyled >
                    <div className="overlay" onClick={onOverlayClick}>
                        <div className="modalBody ">
                            <button
                                onClick={onHandelClick}
                                className="modalBtn"
                                type="button"
                            >
                                {window.innerWidth < 768 ? (
                                      <svg 
                                      width="15"
                                      height="9"
                                      viewBox="0 0 15 9"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <path
                                          d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
                                          stroke="black"
                                          strokeWidth="2"
                                      />
                                  </svg>
                                ) : (
                                    <svg 
                                        className="crossIcon"
                                        width="12px"
                                        height="12px"
                                    >
                                        <use href={sprite + '#icon-cross'} />
                                    </svg>
                                )}
                            </button>
                            <DailyCalorieIntake
                                dailyRate={calories}
                                products={notAllowedProducts}
                            />
                        </div>
                    </div>
                </ModalStyled>
            )}
        </>
    );
};

export default Modal;
