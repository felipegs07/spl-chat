import React, { Component } from 'react'
import ChatKit from '@pusher/chatkit-client';
import MessageList from '../components/MessageList';
import ChannelList from '../components/ChannelList';
import MessageSender from '../components/MessageSender';
import NewChannel from '../components/NewChannel';

import { tokenUrl, instanceLocator } from '../config';

export class chat extends Component {

  state = {
    messages: [],
    channelsToJoin: [],
    channelsJoined: []
  }

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
      this.currentUser = currentUser;

      this.handleSubscribeToRoom('19387426');
      this.handleGetRooms();
      
    });
  }

  handleGetRooms = () => {
    this.currentUser.getJoinableRooms()
      .then(channels => {
        this.setState({
          channelsToJoin: channels,
          channelsJoined: this.currentUser.rooms
        });
      })
      .catch(err => {
        console.log(`Error getting joinable rooms: ${err}`);
      });
      
  }
  

  handleSubscribeToRoom = (id) => {
    this.setState({
      messages: []
    });
    this.currentUser.subscribeToRoomMultipart({
      roomId: id,
      hooks: {
          onMessage: message => {
            const msg = {
              id: message.id,
              text: message.parts[0].payload.content,
              senderId: message.senderId
            }

            this.setState({
              messages:[...this.state.messages, msg]
            });
          }
        },
        messageLimit: 10
    });
  }

  handleSendMessage = (msg) => {
    this.currentUser.sendSimpleMessage({
      roomId: '19387426',
      text: msg
    })
    .catch(err => {
      console.log(`Error adding message: ${err}`);
    });
  }

  render() {
    return (
      <div className="app">
        <ChannelList channels={[...this.state.channelsToJoin, ...this.state.channelsJoined]} subscribeToRoom={this.handleSubscribeToRoom}/>
        <MessageList messages={this.state.messages} />
        <MessageSender sendMessage={this.handleSendMessage} />
        <NewChannel />
      </div>
    )
  }
}
export default chat
