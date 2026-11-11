import { create } from 'zustand';
import { ChatMessage } from '../types';

interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  clearMessages: () => void;
  setLoading: (loading: boolean) => void;
  sendMessage: (content: string, userId: string) => Promise<void>;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  isLoading: false,

  addMessage: (message) => {
    const newMessage: ChatMessage = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    };
    set({ messages: [...get().messages, newMessage] });
  },

  clearMessages: () => set({ messages: [] }),

  setLoading: (loading) => set({ isLoading: loading }),

  sendMessage: async (content: string, userId: string) => {
    const { addMessage, setLoading } = get();
    
    // Add user message
    addMessage({
      user_id: userId,
      content,
      sender: 'user',
    });

    setLoading(true);

    try {
      // Simulate AI response (replace with actual AI API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock AI response
      const aiResponse = generateAIResponse(content);
      
      addMessage({
        user_id: userId,
        content: aiResponse,
        sender: 'aivi',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage({
        user_id: userId,
        content: 'I apologize, but I encountered an error. Please try again.',
        sender: 'aivi',
      });
    } finally {
      setLoading(false);
    }
  },
}));

// Mock AI response generator (replace with actual AI integration)
function generateAIResponse(userMessage: string): string {
  const responses = [
    "That's a great question! Let me help you understand this concept better.",
    "I'd be happy to explain that to you. Here's how you can think about it:",
    "Great observation! Let's break this down step by step.",
    "That's exactly the kind of thinking I love to see! Here's what you need to know:",
    "Perfect question for deepening your understanding. Let me guide you through this:",
  ];
  
  return responses[Math.floor(Math.random() * responses.length)] + " " + 
         "This is a mock response from Aivi. In a real implementation, this would be powered by GPT-4 or similar AI model.";
}