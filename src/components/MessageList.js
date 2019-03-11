import React from 'react'
import Message from './Message';

const DUMMY_DATA = [
    {
        senderId: 'felipe',
        text: 'Olá, tudo bem?'
    },
    {
        senderId: 'bot',
        text: 'Olá, tudo e vc?'
    },
    {
        senderId: 'felipe',
        text: 'Certo'
    }
]

const messageList = (props) => (
    <div className="message-list">
        {
            DUMMY_DATA.map((message, index) => {
                return (
                    <Message text={message.text} id={message.senderId}></Message>
                )
            })
        }
    </div>
)

export default messageList;
