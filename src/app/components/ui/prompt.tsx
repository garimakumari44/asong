'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Arrow } from '../icon/arrow';
import toast from 'react-hot-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ApiResponse {
  success: boolean;
  data?: {
    role: 'assistant';
    content: string;
  };
  error?: string;
}

interface PromptBoxProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  prompts: Message[];
  setPrompts: (prompts: Message[]) => void;
}

const PromptBox = ({ 
  isLoading, 
  setIsLoading, 
  prompts, 
  setPrompts 
}: PromptBoxProps) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  }, [input]);

  // Scroll to bottom when prompts change
  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [prompts]);

  const sendMessages = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userPrompt: Message = {
      role: 'user', // Changed from 'assistant' to 'user'
      content: input.trim(),
    };

    // Optimistic update
    const newPrompts = [...prompts, userPrompt];
    setPrompts(newPrompts);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompts: newPrompts }), // Changed from 'prompt' to 'prompts'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();

      if (!data.success || !data.data?.content) {
        throw new Error(data.error || 'No content in AI response');
      }

      setPrompts(prev => [
        ...prev,
        { role: 'assistant', content: data.data.content  },
      ]);
    } catch (error) {
      console.error('API Error:', error);
      // Revert optimistic update on error
      setPrompts(prompts);
      toast.error(
        error instanceof Error 
          ? error.message 
          : 'Failed to get AI response'
      );
    } finally {
      setIsLoading(false);
      textareaRef.current?.focus();
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={sendMessages}
        className={`w-full ${prompts.length > 1 ? 'max-w-3xl' : 'max-w-2xl'} bg-white/10 backdrop-blur-md drop-shadow-lg border-white border-2 rounded-3xl mt-4 transition-all shadow-2xs p-4`}
      >
        <div className="flex items-end gap-2">
          <textarea
            ref={textareaRef}
            className="outline-none overflow-hidden resize-none bg-transparent break-words w-full max-h-[200px]"
            rows={1}
            placeholder="Type here your fav lyrics"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            disabled={isLoading}
            aria-label="Type your message"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessages(e);
              }
            }}
          />
          <button
            className={`flex-shrink-0 ${
              prompts.length > 1 
                ? 'bg-purple-800 text-white hover:bg-purple-700' 
                : 'bg-purple-200 text-purple-800 hover:bg-purple-300'
            } p-2 rounded-full transition-colors disabled:opacity-50`}
            type="submit"
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            <Arrow />
          </button>
        </div>
      </form>
      <div ref={containerRef} aria-hidden="true" />
    </div>
  );
};

export default PromptBox;