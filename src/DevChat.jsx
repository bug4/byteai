// Create a new file: DevChat.jsx
import { useEffect, useState, useRef } from 'react';
import { database } from './firebase';
import { ref, onValue, query, limitToLast } from 'firebase/database';

const DevChat = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const messagesRef = ref(database, 'devMessages');
    const messagesQuery = query(messagesRef, limitToLast(10));

    const unsubscribe = onValue(messagesQuery, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setMessages(messageList);
        scrollToBottom();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute left-4 bottom-32 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <div className="bg-black/30 backdrop-blur-sm border-2 border-cyan-500/30 rounded-lg p-4
                    shadow-[0_0_15px_rgba(34,211,238,0.1)]
                    hover:border-cyan-400/50 transition-all duration-300">
        <div className="flex items-center gap-3 text-cyan-400 mb-4 font-orbitron">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="font-semibold text-lg">BYTE Dev Channel</span>
        </div>
        
        <div className="h-64 overflow-y-auto pr-2 space-y-2">
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className="bg-black/40 border border-cyan-500/20 rounded p-3"
            >
              <p className="text-cyan-300/90 font-orbitron text-sm">{msg.content}</p>
              <span className="text-cyan-500/50 text-xs">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};

export default DevChat;