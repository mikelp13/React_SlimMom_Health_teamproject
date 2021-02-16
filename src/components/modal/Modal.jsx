import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import DailyCalorieIntake from '../dailyCalorieIntake/DailyCalorieIntake';
import './Modal.css';

const modal_root = document.querySelector('#modal-root');

export default class Modal extends Component {
    // openModal = e => {
    //     this.setState({
    //         isModalOpen: true,
    //
    //     });
    // };
    // state = {
    //     isModalOpen: true,
    // };
    // closeModal = () => {
    //     this.setState({ isModalOpen: false });
    // };

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
        return createPortal(
            <>
                <div
                    className="modalWrapper"
                    ref={this.backdrop}
                    onClick={this.props.onClose}
                    role="presentation"
                >
                    <div className="modalBody">
                        <button
                            type="button"
                            className="modalBtn"
                            onClick={this.closeModal}
                        ></button>
                        <DailyCalorieIntake />
                    </div>
                </div>
            </>,
            modal_root,
        );
    }
}
