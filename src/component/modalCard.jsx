import React from 'react';


const ModalCard = ({alert,index}) => {


return(
    <div className="modal-content-placement">
        <div className="alert-number">{index + 1}</div>
        <div key={index} className="alert-item">
            <h3 className="alert-subList">{alert.alert}</h3>
            <p className="alert-type" style={{ color: '#032F62' }}><span className="alert-type">Severity:</span> {alert.labels.severity}</p>
            <p className="alert-type" style={{ color: '#032F62' }}><span className="alert-type">Expression:</span> {alert.expr}</p>
            <p className="alert-type" style={{ color: '#032F62' }}><span className="alert-type">Summary:</span> {alert.annotations.summary}</p>
            <p className="alert-type" style={{ color: '#032F62' }}><span className="alert-type">Description:</span> {alert.annotations.description}</p>
            <p className="alert-type" style={{ color: '#032F62' }}><span className="alert-type">For:</span> {alert.for}</p>
        </div>
    </div>
)

}
export default ModalCard;