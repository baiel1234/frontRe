import React, { useState } from 'react';
import './chat.css';

const ChatComponent = () => {
  const [chats, setChats] = useState([
    { id: 1, name: 'Alice', messages: [], profilePic: '/images/user.png' },
    { id: 2, name: 'Bob', messages: [], profilePic: '/images/user.png' },
    { id: 3, name: 'Charlie', messages: [], profilePic: '/images/user.png' },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [inputMessage, setInputMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '' && selectedChat) {
      const newMessage = {
        id: selectedChat.messages.length + 1,
        sender: 'You',
        text: inputMessage.trim(),
        timestamp: new Date().toLocaleTimeString(),
      };

      const updatedChats = chats.map(chat =>
        chat.id === selectedChat.id
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      );

      setChats(updatedChats);
      setSelectedChat({ ...selectedChat, messages: [...selectedChat.messages, newMessage] });
      setInputMessage('');
    }
  };

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chat-container">
      <div className="sidebar">
        <h3>Chats</h3>
        <input
          type="text"
          placeholder="Search chats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <ul className="chat-list">
          {filteredChats.map(chat => (
            <li
              key={chat.id}
              onClick={() => handleChatSelection(chat)}
              className={selectedChat && selectedChat.id === chat.id ? 'selected-chat-item' : 'chat-item'}
            >
              <img src={chat.profilePic} alt={`${chat.name}'s profile`} className="chat-profile-pic" />
              {chat.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        {selectedChat ? (
          <>
            <div className="header">
              {selectedChat.name}
            </div>
            <div className="messages-container">
              {selectedChat.messages.map((message, index) => (
                <div key={index} className="message">
                  <strong>{message.sender}:</strong> {message.text}
                  <span className="timestamp">{message.timestamp}</span>
                </div>
              ))}
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                className="input-field"
              />
              <button onClick={handleSendMessage} className="send-button">Send</button>
            </div>
          </>
        ) : (
          <div className="no-chat-selected">Select a chat to start messaging</div>
        )}
      </div>
    </div>
  );
};

export default ChatComponent;
