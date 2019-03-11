import React from 'react';

const newChannel = (props) => {
    return (
        <div className="new-room-form">
            <form>
                <input type="text"
                 placeholder="Create a new channel"
                 required />
                 <button id="create-room-btn" type="submit">+</button>
            </form>
        </div>
    );
}

export default newChannel;