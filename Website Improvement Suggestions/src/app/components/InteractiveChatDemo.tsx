import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: number;
  type: 'ai' | 'user';
  text: string;
  typing?: boolean;
}

export function InteractiveChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      text: '部下のAさんは「感情重視型」の特性が強く出ています。現在は業務負荷により、思考回路が防衛モードに入っている可能性があります。',
    },
  ]);
  const [currentTyping, setCurrentTyping] = useState<number | null>(null);

  const conversationFlow = [
    {
      type: 'user' as const,
      text: '感情的になって話が進まないのですが、どう対処すればいい？',
    },
    {
      type: 'ai' as const,
      text: 'まずは結論を急がず、プロセスへの共感を示してください。「大変だったね」という一言が、Aさんの思考回路を通常モードに戻す補助線になります。',
    },
  ];

  useEffect(() => {
    if (messages.length < 3) {
      const timer = setTimeout(() => {
        const nextIndex = messages.length - 1;
        if (nextIndex < conversationFlow.length) {
          const nextMessage = conversationFlow[nextIndex];
          setMessages((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              ...nextMessage,
              typing: nextMessage.type === 'ai',
            },
          ]);
          if (nextMessage.type === 'ai') {
            setCurrentTyping(messages.length + 1);
            setTimeout(() => {
              setCurrentTyping(null);
            }, 2000);
          }
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [messages.length]);

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] bg-[#f2f2f2] rounded-lg z-0" />
      
      <div className="relative bg-white rounded-lg shadow-sm border border-gray-200 p-6 z-[2]">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-50">
          <div className="w-10 h-10 bg-[#5a6470] rounded flex items-center justify-center text-white font-bold text-xs tracking-tighter">
            O2
          </div>
          <div className="flex-1">
            <h3 className="text-[10px] font-bold text-gray-800 tracking-wider">AIカウンセラー</h3>
            <p className="text-[9px] text-gray-400 tracking-widest uppercase">O2CONNECTIVE</p>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] text-[#c4967e] font-bold tracking-widest">
            <span className="w-1 h-1 bg-[#c4967e] rounded-full animate-pulse" />
            オンライン
          </div>
        </div>

        <div className="flex flex-col gap-4 min-h-[240px]">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`max-w-[90%] px-4 py-3 rounded-lg text-sm leading-relaxed ${
                  message.type === 'ai'
                    ? 'bg-[#faf5f3] text-gray-700 self-start rounded-bl-sm border border-[#faf5f3]'
                    : 'bg-[#5a6470] text-white self-end rounded-br-sm'
                }`}
              >
                {message.typing && currentTyping === message.id ? (
                  <TypingIndicator text={message.text} />
                ) : (
                  message.text
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function TypingIndicator({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-4 bg-gray-400 ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  );
}
