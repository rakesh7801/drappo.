import axios from 'axios';
import { useState } from 'react';

const ChatBox = () => {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/chat", {
        message: input,
      });
      setReply(response.data.reply);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
      <p>AI Reply: {reply}</p>
    </div>
  );
};

export default ChatBox;
