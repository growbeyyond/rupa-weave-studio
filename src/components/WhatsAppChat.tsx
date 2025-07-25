import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const predefinedMessages = [
    "Hi! I need help with my order",
    "What are your delivery charges?",
    "Do you have this in different sizes?",
    "I want to return/exchange an item",
    "Custom sizing available?"
  ];

  const phoneNumber = "919876543210"; // Replace with actual WhatsApp number

  const sendMessage = (text: string) => {
    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 animate-bounce-gentle"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-2xl border z-50 animate-slide-in-right">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Rupa's Support</h3>
                <p className="text-xs text-green-100">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-80 overflow-y-auto bg-gray-50">
            {/* Welcome Message */}
            <div className="mb-4">
              <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-500">
                <p className="text-sm text-gray-700 mb-2">
                  👋 Hi there! Welcome to Rupa's!
                </p>
                <p className="text-sm text-gray-700">
                  How can we help you today? Choose from the options below or type your message:
                </p>
              </div>
            </div>

            {/* Quick Options */}
            <div className="space-y-2 mb-4">
              {predefinedMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(msg)}
                  className="w-full text-left p-2 bg-white rounded-lg border hover:bg-green-50 hover:border-green-200 transition-colors text-sm"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && message.trim()) {
                    sendMessage(message);
                  }
                }}
              />
              <button
                onClick={() => message.trim() && sendMessage(message)}
                disabled={!message.trim()}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              We'll respond via WhatsApp
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;