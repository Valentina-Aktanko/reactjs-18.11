import './Messenger.css';

import React, { Component } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends Component {
  state = {
    messages: [
    ],
  };

  interval = null;

  componentDidUpdate() {
    let author = this.state.messages[this.state.messages.length - 1].author;
    if (author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{ text: 'Привет, ' + author + '! Бот на связи! Я не понимаю вас!', author: 'Bot' }]),
        });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleMessageSend = (message) => {
    this.setState({
      messages: this.state.messages.concat(message),
    });
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="messenger">
        <MessagesList items={messages} />
        <MessageForm onSend={this.handleMessageSend} />
      </div>
    )
  }
}