import { useState } from 'react';

const useModal = () => {
    const [openModal, setOpenModal] = useState(false);

    function onHandelClick() {
        setOpenModal(!openModal);
    }

    return {
        openModal,
        onHandelClick,
    };
};

export default useModal;
