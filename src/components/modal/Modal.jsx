import React, { useEffect } from 'react';
import DailyCalorieIntake from '../dailyCalorieIntake/DailyCalorieIntake';
import IconBack from '../modal/svg/IconBack';
import IconCross from '../modal/svg/IconCross';
// import './Modal.css';
import ModalStyled from './ModalStyled';

const Modal = ({ openModal, onHandelClick, calories, notAllowedProducts }) => {
    // const [onClick, setOnClick] = useState(false);

    // const [openModal, setOpenModal] = useState(false);
    // const isAuth = useSelector(state => state.auth.user.isAuth);
    // const onHandelClick = () => setoNClick(!onClick);
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
                            <button
                                onClick={onHandelClick}
                                className="modalBtn"
                                type="button"
                            >
                                {window.innerWidth < 768 ? (
                                    <IconBack />
                                ) : (
                                    <IconCross />
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
