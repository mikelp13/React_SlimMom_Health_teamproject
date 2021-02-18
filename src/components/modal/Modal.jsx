import React, { useEffect, useState } from 'react';
import NavigationItem from '../navigation/NavigationItem';
import DailyCalorieIntake from '../dailyCalorieIntake/DailyCalorieIntake';
import mainRoutes from '../../routes/routes';
import BurgerIcon from '../icon/BurgerIcon';
import Cross from '../icon/CrossIcon';
// import './Modal.css';
import ModalStyled from './ModalStyled';

const Modal = ({ openModal, onHandelClick, calories, productsList }) => {
    const [click, setClick] = useState(false);

    // const [openModal, setOpenModal] = useState(false);
    // const isAuth = useSelector(state => state.auth.user.isAuth);
    // const onHandelClick = () => setClick(!click);
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
                        {mainRoutes.map(route => (
                            <NavigationItem {...route} key={route.path} />
                        ))}
                        <div className="modalBody ">
                            <button onClick={onHandelClick}>
                                {click ? (
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
