import React from 'react';

const channelList = (props) => {
    return (
        <div className="rooms-list">
            <ul>
                <h3>Your channels:</h3>
                {
                    props.channels.map(channel => {
                        return (
                            <li onClick={() => { props.subscribeToRoom(channel.id) }} key={channel.id} className="room">
                                <p># {channel.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default channelList;