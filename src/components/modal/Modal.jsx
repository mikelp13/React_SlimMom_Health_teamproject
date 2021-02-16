// import React from 'react';
// import DailyCalorieIntake from '../components/dailyCalorieIntake/DailyCalorieIntake';

import './Modal.css';

// const Modal = props => {
//     return (
//         <>
//             {/* <button type="button" onClick={() => setModal({ ...modal })}> */}
//             <button type="button" onClick={ }>
//                 Начать худеть
//             </button>
//             {/* <DailyCalorieIntake /> */}
//             <div className={`modalWrapper ${props.isOpen ? 'open' : 'close'}`}>
//                 <div className="modalBody">
//                     <div className="modalClose" onClick={props.onModalClose}>
//                         ❌
//                     </div>
//                     <h2>Текст модального окна</h2>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Modal;

import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';

const modal_root = document.querySelector('#modal-root');

export default class Modal extends Component {
    backdrop = createRef();

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = e => {
        console.log(e);
        if (e.code !== 'Escape') {
            return;
        }

        this.props.onClose();
    };

    onHandleBackdropClick = e => {
        if (this.backdrop.current && e.target !== this.backdrop.current) {
            return;
        }
        this.props.onClose();
    };

    render() {
        const { children } = this.props;
        return createPortal(
            <div
                className="modalWrapper"
                ref={this.backdrop}
                onClick={this.props.onClose}
                role="presentation"
            >
                <div className="modalBody">{children}</div>
            </div>,
            modal_root,
        );
    }
}
