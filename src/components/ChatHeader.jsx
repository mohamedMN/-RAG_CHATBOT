import { MessageSquare, RotateCcw } from 'lucide-react';

const ChatHeader = ({ onClearChat }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">RAG Assistant</h1>
          <p className="text-xs text-gray-500">Ask me anything about your documents</p>
        </div>
      </div>
      
      <button
        onClick={onClearChat}
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        title="Clear chat"
      >
        <RotateCcw className="w-4 h-4" />
      </button>
    </header>
  );
};

export default ChatHeader;