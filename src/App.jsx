import { useState } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import { askQuestion } from './services/api';
import './styles/tailwind.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateId = () => Date.now().toString() + Math.random().toString(36).substr(2, 9);

  const handleSendMessage = async (query) => {
    // Add user message
    const userMessage = {
      id: generateId(),
      sender: 'user',
      content: query,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await askQuestion(query);
      
      // Add assistant response
      const assistantMessage = {
        id: generateId(),
        sender: 'assistant',
        content: response.answer,
        sources: response.sources || [],
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      // Add error message
      const errorMessage = {
        id: generateId(),
        sender: 'assistant',
        content: `Sorry, I encountered an error: ${error.message}`,
        sources: [],
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <ChatHeader onClearChat={handleClearChat} />
      
      <ChatMessages messages={messages} isLoading={isLoading} />
      
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;