import React from 'react'
import Message from './Message';

const messageList = (props) => (
    <div className="message-list">
        {
            props.messages.map((message, index) => {
                return (
                    <Message key={message.id} text={message.text} userId={message.senderId}></Message>
                )
            })
        }
    </div>
)

export default messageList;
