import React, { Component } from 'react'

export class MessageSender extends Component {

  state = {
    message: ''
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.sendMessage(this.state.message);
      this.setState({message: ''});
  }

  handleChange = (e) => {
    this.setState({message: e.target.value});
  }

  render() {
    return (
        <form onSubmit={(event) => this.handleSubmit(event)} className="send-message-form">
            <input
            onChange={(event) => this.handleChange(event)}
            value={this.state.message}
            placeholder="Type your message"
            type="text" />
        </form>
    )
  }
}

export default MessageSender