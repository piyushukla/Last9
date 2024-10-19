import React from 'react';
import CopyBtn from '../copy-btn.svg'


const ModalCard = ({ alert, index }) => {

    const handleCopy = () => {
        const textToCopy = `
          ${alert.alert}
          Severity: ${alert.labels.severity}
          Expression: ${alert.expr}
          Summary: ${alert.annotations.summary}
          Description: ${alert.annotations.description}
          For: ${alert.for}
        `;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Content copied');  // Check if copy succeeds
                window.alert('Content copied to clipboard!');  // Shows alert to user
            })
            .catch(err => {
                console.error('Failed to copy: ', err);  // Log any error
            });
    };

    return (
        <div className="modal-content-placement">
            <div className="alert-number">{index + 1}</div>
            <div> <h3 className="alert-subList">{alert.alert}</h3>

                <div key={index} className="alert-item">
                    <img className='copy-btn' src={CopyBtn} onClick={handleCopy} />
                    <p className="alert-type" style={{ color: '#032F62' }}><span className="alert-type">Severity:</span> {alert.labels.severity}</p>
                    <p className="alert-type" style={{ color: '#032F62' }}><span className="alert-type">Expression:</span> {alert.expr}</p>
                    <p className="alert-type" style={{ color: '#032F62' }}><span className="alert-type">Summary:</span> {alert.annotations.summary}</p>
                    <p className="alert-type" style={{ color: '#032F62' }}><span className="alert-type">Description:</span> {alert.annotations.description}</p>
                    <p className="alert-type" style={{ color: '#032F62' }}><span className="alert-type">For:</span> {alert.for}</p>
                </div>
            </div>

        </div>
    )

}
export default ModalCard;