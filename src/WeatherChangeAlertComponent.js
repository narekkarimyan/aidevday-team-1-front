import React, {useState} from 'react';

const AlertComponent = ({ startDate, endDate, weather }) => {
    // state to control the display of the modal
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Show Alert</button>

            {showModal && (
                <div
                    className="modal"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <div className="alert" style={{backgroundColor: 'white', padding: '20px'}}>
                        <h1>Alert</h1>
                        <p>Start Date: {startDate}</p>
                        <p>End Date: {endDate}</p>
                        <p>Weather: {weather}</p>
                        <button onClick={() => setShowModal(false)}>Close Alert</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AlertComponent;