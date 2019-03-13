import React from 'react';

const channelList = (props) => {
    return (
        <div className="rooms-list">
            <ul>
                <h3>Your channels:</h3>
                {
                    props.channels.map(channel => {
                        return (
                            <li key={channel.id} className="room">
                                <button># {channel.name}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default channelList;