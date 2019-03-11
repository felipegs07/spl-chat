import React, { Component } from 'react'
import ChatKit from '@pusher/chatkit-client';
import MessageList from '../components/MessageList';
import ChannelList from '../components/ChannelList';
import MessageSender from '../components/MessageSender';
import NewChannel from '../components/NewChannel';

import { tokenUrl, instanceLocator } from '../config';

export class chat extends Component {

  componentDidMount() {
    const chatManager = new ChatKit.ChatManager({
      instanceLocator,
      userId: 'felipegs07',
      tokenProvider: new ChatKit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect()
    .then(currentUser => {

      currentUser.fetchMultipartMessages({
        roomId: '19386955',
        direction: 'older',
        limit: 10,
      })
        .then(messages => {
          console.log(messages);
        })
        .catch(err => {
          console.log(`Error fetching messages: ${err}`)
        })
    });
  }

  render() {
    return (
      <div className="app">
        <ChannelList />
        <MessageList />
        <MessageSender />
        <NewChannel />
      </div>
    )
  }
}
export default chat
