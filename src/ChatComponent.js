import React, { useState } from 'react';

const ChatComponent = () => {
  const [chats, setChats] = useState([
    { id: 1, name: 'Alice', messages: [] },
    { id: 2, name: 'Bob', messages: [] },
    { id: 3, name: 'Charlie', messages: [] },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [inputMessage, setInputMessage] = useState('');

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Create a new message object
      const newMessage = {
        id: selectedChat.messages.length + 1,
        sender: 'You', // For simplicity, assuming the sender is always the current user
        text: inputMessage.trim(),
      };

      // Update the messages state of the selected chat with the new message
      setSelectedChat({
        ...selectedChat,
        messages: [...selectedChat.messages, newMessage],
      });

      // Clear the input field
      setInputMessage('');
    }
  };

  return (
    <div className="chat-container" style={{ backgroundColor: '#E6F2FF', display: 'flex' }}>
      {/* Left Sidebar with Chats */}
      <div className="sidebar" style={{ backgroundColor: '#3B5998', color: '#FFFFFF', padding: '20px' }}>
        <h3>Chats</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {chats.map(chat => (
            <li key={chat.id} onClick={() => handleChatSelection(chat)} style={{ cursor: 'pointer', marginBottom: '10px' }}>
              {chat.name}
            </li>
          ))}
        </ul>
      </div>
      {/* Main Content Area for Chat */}
      <div className="main-content" style={{ flex: 1, padding: '20px' }}>
        {selectedChat && (
          <>
            <div className="header" style={{ backgroundColor: '#3B5998', color: '#FFFFFF', padding: '10px', marginBottom: '20px' }}>
              {selectedChat.name}
            </div>
            <div className="messages-container" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {/* Render the list of messages */}
              {selectedChat.messages.map((message, index) => (
                <div key={index} className="message" style={{ marginBottom: '10px' }}>
                  <strong>{message.sender}:</strong> {message.text}
                </div>
              ))}
            </div>
            {/* Input field to type messages */}
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              style={{ marginTop: '20px', padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #3B5998' }}
            />
            {/* Button to send messages */}
            <button onClick={handleSendMessage} style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#3B5998', color: '#FFFFFF', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatComponent;
