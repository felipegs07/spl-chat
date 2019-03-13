import React from 'react';

const message = (props) => {
    return (
        <div className="message">
            <div className="message-username">{props.userId}</div>
            <div className="message-text">{props.text}</div>
        </div>
    );
}

export default message;