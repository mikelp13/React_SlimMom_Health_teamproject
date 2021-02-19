import React, { useEffect, useState } from 'react';
import DailyCalorieIntake from '../dailyCalorieIntake/DailyCalorieIntake';
import BurgerIcon from '../icon/BurgerIcon';
import Cross from '../icon/CrossIcon';
// import './Modal.css';
import ModalStyled from './ModalStyled';

const Modal = ({ openModal, onHandelClick, calories, productsList }) => {
    const [onClick, setOnClick] = useState(false);

    // const [openModal, setOpenModal] = useState(false);
    // const isAuth = useSelector(state => state.auth.user.isAuth);
    // const onHandelClick = () => setOnClick(!onClick);
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const handleKeyPress = e => {
        if (e.code === 'Escape') {
            onHandelClick();
        }
    };

    const onOverlayClick = e => {
        onHandelClick();
    };

    return (
        <>
            {openModal && (
                <ModalStyled>
                    <div className="overlay" onClick={onOverlayClick}>
                       
                        <div className="modalBody ">
                            <button onClick={onHandelClick}>
                                {onClick ? (
                                    <Cross width={25} />
                                ) : (
                                    <BurgerIcon width={30} />
                                )}
                                </button>
                            <DailyCalorieIntake
                                kcalQuantity={calories}
                                products={productsList}
                            />
                        </div>
                    </div>
                </ModalStyled>
            )}
        </>
    );
};

export default Modal;
