import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types.ts';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hello! Welcome to Webrandea. I can help you find the right digital services for your business, from Custom Web Dev to Social Media Marketing. What are you looking to build today?',
      timestamp: Date.now()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `You are an expert sales consultant for Webrandea, a premium Digital Agency. 
      Your goal is to understand the client's business needs and recommend the appropriate service (SaaS Prototype, Web Dev, Marketing, etc.).
      
      Services we offer:
      1. SaaS Prototype & Design System (Figma)
      2. Website Development (WordPress/WIX/Custom Code)
      3. UI/UX Design
      4. Functional SaaS App Dev (Bubble/No-code)
      5. Branding Identity
      6. Social Media Marketing
      7. Dedicated Account Management
      8. Email Marketing
      9. GoHighLevel Configuration
      
      Tone: Professional, knowledgeable, yet accessible. Avoid technical jargon unless the user uses it first.
      Goal: Get them to book a consultation or check out a specific service package.
      
      Keep answers concise (under 3 sentences usually).`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            ...messages.filter(m => m.id !== 'welcome').map(m => ({
                role: m.role,
                parts: [{ text: m.text }]
            })),
            { role: 'user', parts: [{ text: userMsg.text }]}
        ],
        config: {
            systemInstruction
        }
      });

      const aiText = response.text || "I apologize, I'm having trouble connecting to the server right now. Please try again later.";

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: aiText,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, aiMsg]);

    } catch (error) {
      console.error("AI Error:", error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm currently offline. Please contact human support via email.",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-600 hover:bg-brand-700 text-white p-4 rounded-full shadow-lg shadow-brand-500/30 transition-all duration-300 transform hover:scale-110 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-full max-w-[350px] bg-dark-card border border-dark-border rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`}
        style={{ height: '500px' }}
      >
        {/* Header */}
        <div className="bg-brand-700 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 p-1.5 rounded-full">
                <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
                <h3 className="font-bold text-white text-sm">Webrandea Support</h3>
                <p className="text-brand-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></span> Online
                </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0f1115]">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-br-none' 
                    : 'bg-[#1e222b] text-gray-200 border border-dark-border rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex justify-start">
               <div className="bg-[#1e222b] p-3 rounded-2xl rounded-bl-none border border-dark-border flex items-center space-x-1">
                 <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                 <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                 <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-dark-card border-t border-dark-border">
            <div className="relative">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about our services..."
                    className="w-full bg-[#0f1115] text-white border border-dark-border rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-brand-500 text-sm"
                />
                <button 
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;