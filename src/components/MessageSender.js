import React from 'react';

const messageSender = (props) => {
    return (
        <form className="send-message-form">
            <input
            placeholder="Send Message"
            type="text" />
        </form>
    );
}

export default messageSender;