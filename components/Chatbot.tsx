import React, { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, ChatBubbleOvalLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { getBotResponse } from '../logic/chatbotLogic';
import { INITIAL_MESSAGE } from '../data/chatbotKnowledgeBase';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        // Set initial message when chat opens for the first time
        if (isOpen && messages.length === 0) {
            setMessages([{ sender: 'bot', text: INITIAL_MESSAGE }]);
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        // Refocus the input when the chat opens or after the bot finishes responding.
        // This improves UX by allowing continuous typing.
        if (isOpen && !isLoading) {
            // A short delay ensures the input is focusable after any CSS transitions.
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, isLoading]);


    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setIsLoading(true);

        // Simulate bot thinking and get a rule-based response
        setTimeout(() => {
            const botResponseText = getBotResponse(currentInput);
            const botMessage: Message = { sender: 'bot', text: botResponseText };
            setMessages(prev => [...prev, botMessage]);
            setIsLoading(false);
        }, 1000); // 1-second delay for a more natural feel
    };
    
    return (
        <>
            {/* The chat window */}
            <div className={`fixed bottom-24 right-4 sm:right-6 md:right-8 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-theme-bg-dark rounded-lg shadow-2xl flex flex-col transform transition-all duration-300 ease-in-out z-[100] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}`}>
                <div className="flex justify-between items-center p-4 bg-theme-bg-med rounded-t-lg">
                    <h3 className="text-lg font-semibold text-theme-text-primary font-serif">Chat with us</h3>
                    <button onClick={() => setIsOpen(false)} className="text-theme-text-secondary hover:text-theme-text-primary">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="flex flex-col space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-theme-text-primary text-theme-bg-dark' : 'bg-theme-bg-med text-theme-text-secondary'}`}>
                                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="max-w-xs lg:max-w-sm px-4 py-2 rounded-lg bg-theme-bg-med text-theme-text-secondary">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-theme-text-secondary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                        <div className="w-2 h-2 bg-theme-text-secondary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                        <div className="w-2 h-2 bg-theme-text-secondary rounded-full animate-bounce"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                <div className="p-4 border-t border-theme-bg-light">
                    <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question..."
                            className="w-full p-2 bg-theme-bg-light text-theme-text-primary rounded-md placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            className="bg-theme-accent text-theme-text-primary p-2 rounded-md hover:bg-theme-accent-dark disabled:bg-theme-text-secondary disabled:cursor-not-allowed"
                            disabled={isLoading || !input.trim()}
                        >
                            <PaperAirplaneIcon className="h-5 w-5" />
                        </button>
                    </form>
                </div>
            </div>

            {/* The floating button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-4 right-4 sm:right-6 md:right-8 bg-theme-accent text-theme-text-primary p-4 rounded-full shadow-lg hover:bg-theme-accent-dark transform hover:scale-110 transition-all duration-300 z-[100] animate-fadeIn"
                    aria-label="Open Chat"
                >
                   <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />
                </button>
            )}
        </>
    );
};

export default Chatbot;