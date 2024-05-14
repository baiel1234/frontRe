import React, { useState, useEffect } from 'react';
import { Chat, Channel, ChannelHeader, MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';

const ChatComponent = () => {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const initializeChat = async () => {
      // Initialize Stream Chat client
      const chatClient = new StreamChat('dz5f4d5kzrue');
      // Set user details
      chatClient.setUser(
        {
          id: 'little-dream-4',
          name: 'John Doe',
        },
        // Set user token
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibGl0dGxlLWRyZWFtLTQiLCJleHAiOjE3MTU2ODI2Mjh9.Bn67oOzYJPRnQa3k4eSBc5SfK2eBOupy5X5_MBJnrHg'
      );
      setClient(chatClient);
      // Create or select the channel
      const selectedChannel = chatClient.channel('messaging', 'general');
      await selectedChannel.watch();
      setChannel(selectedChannel);
    };

    initializeChat();
  }, []);

  return (
    <div className="App">
      {client && channel && (
        <Chat client={client} theme="messaging light">
          <Channel channel={channel}>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Channel>
        </Chat>
      )}
    </div>
  );
};

export default ChatComponent;
