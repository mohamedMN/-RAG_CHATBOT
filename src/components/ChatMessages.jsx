import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

const TypingIndicator = () => (
  <div className="flex justify-start mb-4">
    <div className="flex items-start space-x-2">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
        <div className="w-4 h-4 text-gray-600">🤖</div>
      </div>
      <div className="bg-gray-100 rounded-2xl px-4 py-3">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
        </div>
      </div>
    </div>
  </div>
);

const ChatMessages = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
  
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
      {messages.length === 0 && !isLoading && (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to RAG Assistant</h2>
          <p className="text-gray-500 max-w-md">
            Ask me questions about your documents and I'll provide answers with relevant sources.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-2 w-full max-w-md">
            <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
              💡 Try: "What are the main topics covered?"
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
              🔍 Try: "Summarize the key findings"
            </div>
          </div>
        </div>
      )}
      
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      
      {isLoading && <TypingIndicator />}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;