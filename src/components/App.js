import React, { useState } from 'react';
import Modal from '../components/modal/Modal';

function App() {
    const [modal, setModal] = useState();
    return (
        <div>
            <h2> HEALTH </h2>
            <Modal
                title={'Modal title'}
                isOpen={true}
                onModalClose={() => setModal({ ...modal, modal: false })}
            />
        </div>
    );
}

export default App;
