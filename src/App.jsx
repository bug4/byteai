import { useState } from 'react';
import DevChat from './DevChat';

// CyberButton Component
const CyberButton = ({ children, onClick, variant = 'default', className = '' }) => {
  const baseStyles = `
    group relative px-6 py-3 
    overflow-hidden rounded-lg 
    font-orbitron 
    transition-all duration-300
    backdrop-blur-sm
    shadow-[0_0_10px_rgba(34,211,238,0.2)]
    hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
  `;
  
  const variants = {
    default: `
      ${baseStyles}
      bg-black/40
      border-2 border-cyan-500/50 
      hover:border-cyan-400 
      hover:bg-cyan-950/30
    `,
    primary: `
      ${baseStyles}
      bg-gradient-to-r from-cyan-600/90 to-blue-600/90
      hover:from-cyan-500/90 hover:to-blue-500/90
      border-2 border-cyan-400/50
      hover:border-cyan-300
    `,
    outline: `
      ${baseStyles}
      bg-black/40 
      border-2 border-cyan-500/50
      hover:border-cyan-400
      hover:bg-cyan-950/30
    `
  };

  return (
    <button 
      onClick={onClick} 
      className={`${variants[variant]} ${className}`}
    >
      <div className="absolute inset-0 w-0 bg-cyan-400/10 transition-all duration-300 ease-out group-hover:w-full"/>
      <span className={`
        relative font-semibold
        ${variant === 'primary' ? 'text-white' : 'text-cyan-400 group-hover:text-cyan-300'}
      `}>
        {children}
      </span>
    </button>
  );
};

// Modal Component
const CyberModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-cyan-500/50 rounded-lg w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-orbitron text-2xl font-bold text-cyan-400">{title}</h2>
          <CyberButton 
            variant="outline" 
            onClick={onClose}
            className="!p-2"
          >
            ✕
          </CyberButton>
        </div>
        <div className="text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

// ComingSoon Modal Component
const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-cyan-500/50 rounded-lg p-6 text-center">
        <h2 className="font-orbitron text-3xl font-bold text-cyan-400 mb-4">Coming Soon</h2>
        <p className="text-cyan-300/70 mb-6">Live trading features will be available in the next update!</p>
        <CyberButton 
          variant="outline"
          onClick={onClose}
        >
          Close
        </CyberButton>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);
  const [showMicNotice, setShowMicNotice] = useState(true);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const features = [
    {
      title: "Neural Processing",
      icon: "🧠",
      description: "BYTE utilizes advanced neural networks to process real-time market data through its Binary Yield Trading Engine (BYTE). This system processes millions of data points to identify optimal trading opportunities."
    },
    {
      title: "Digital Sentiment Analysis",
      icon: "📊",
      description: "Advanced pattern recognition algorithms coupled with our Digital Sentiment Layer (DSL) decode market trends and social signals to predict potential price movements before they occur."
    },
    {
      title: "Quantum Risk Management",
      icon: "🛡️",
      description: "BYTE's Quantum Risk Assessment Protocol (QRAP) provides real-time portfolio protection. Using quantum-inspired algorithms to maintain optimal risk-reward ratios in volatile conditions."
    },
    {
      title: "BYTE Protocol",
      icon: "⚡",
      description: "Our proprietary Binary Interface Technology (BIT) enables seamless communication between users and BYTE's core systems, allowing for intuitive and immediate market responses."
    },
    {
      title: "Memory Optimization",
      icon: "💾",
      description: "BYTE's Memory Enhancement Layer (MEL) ensures lightning-fast processing of market data while maintaining perfect accuracy through our distributed memory architecture."
    },
    {
      title: "Binary Synthesis",
      icon: "🔄",
      description: "Advanced Binary Synthesis (ABS) combines market analysis, sentiment data, and user inputs into actionable trading strategies with microsecond precision."
    }
  ];

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Title Section */}
<div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">
  <h1 className="font-orbitron text-8xl font-bold mb-4
                 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text
                 animate-pulse
                 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]
                 hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]
                 transition-all duration-300"
  >
    AGENT BYTE
  </h1>
  <p className="font-orbitron text-lg text-cyan-300/90 max-w-3xl mx-auto
              backdrop-blur-sm py-2 px-4 rounded-lg
              bg-black/20 border-2 border-cyan-500/30
              animate-fadeIn
              drop-shadow-[0_0_12px_rgba(34,211,238,0.3)]"
  >
    Binary Yield Trading Engine - Your quantum-powered AI companion in the Solana ecosystem
  </p>
</div>

      {/* Spline Scene */}
      <spline-viewer 
        url="https://prod.spline.design/6PY6W7n8ynjDRghk/scene.splinecode"
        className="w-full h-full"
      />

      {/* Header Buttons */}
<div className="absolute top-4 right-4 z-50 flex items-center gap-4">
  <a 
    href="https://x.com/AIAgentByte" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center justify-center px-6 py-3 rounded-lg 
             bg-black/40 border-2 border-cyan-500/50 
             hover:border-cyan-400 hover:bg-cyan-950/30
             transition-all duration-300
             backdrop-blur-sm
             shadow-[0_0_10px_rgba(34,211,238,0.2)]
             hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
             font-orbitron"
  >
    <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>
  
  <CyberButton 
    variant="outline"
    onClick={() => setShowComingSoon(true)}
  >
    Live Trading
  </CyberButton>
</div>

      {/* Main Action Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <CyberButton 
          variant="primary"
          onClick={() => window.open('https://pump.fun/coin/58XPiPU9JZF9Y27SPcX6pc2vjWmEm4xZ1L7GH6Lmpump', '_blank')}
        >
          Buy $BYTE
        </CyberButton>
        
        <CyberButton 
          onClick={() => setShowHowItWorks(true)}
        >
          How It Works
        </CyberButton>
        
        <CyberButton 
          onClick={() => setShowChangelog(true)}
        >
          Changelog
        </CyberButton>
      </div>

      {/* Microphone Permission Notice */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 max-w-md">
        <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6
                      shadow-[0_0_15px_rgba(34,211,238,0.1)]
                      hover:border-cyan-400/50 transition-all duration-300">
          <div className="flex items-center gap-3 text-cyan-400 mb-4 font-orbitron">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-lg">Enable Microphone Access</span>
          </div>
          <p className="text-cyan-300/70 text-base leading-relaxed">
            To interact with BYTE using voice commands, please allow microphone access when prompted. This enables real-time voice interaction with your AI companion.
          </p>
        </div>
      </div>

      <DevChat />

      {/* Modals */}
      <CyberModal 
        isOpen={showHowItWorks} 
        onClose={() => setShowHowItWorks(false)}
        title="How BYTE Works"
      >
        <div className="space-y-8">
          <p className="text-cyan-400 text-lg text-center mb-8 font-orbitron">
            BYTE (Binary Yield Trading Engine) harnesses the power of quantum computing principles through its proprietary Binary Protocol. This cutting-edge system enables microsecond-precise market analysis while processing multi-dimensional data across the Solana network.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-black/50 border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2 font-orbitron">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </CyberModal>

      <CyberModal 
        isOpen={showChangelog} 
        onClose={() => setShowChangelog(false)}
        title="BYTE Updates & Changelog"
      >
        <div className="space-y-6">
          <div className="border-l-2 border-cyan-500 pl-4">
            <h3 className="text-cyan-400 font-bold font-orbitron">Version 1.0.0 (Current)</h3>
            <ul className="text-gray-400 mt-2 space-y-2">
              <li>• Initial release of BYTE AI platform</li>
              <li>• Neural voice interaction system</li>
              <li>• $BYTE token deployment on Solana</li>
              <li>• Interactive quantum visualization interface</li>
              <li>• Real-time market pattern recognition</li>
              <li>• Social sentiment analysis integration</li>
              <li>• Binary command processing system</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-cyan-500/50 pl-4">
            <h3 className="text-cyan-400 font-bold font-orbitron">Coming Soon (Version 1.1.0)</h3>
            <ul className="text-gray-400 mt-2 space-y-2">
              <li>• Advanced neural chat interface</li>
              <li>• Enhanced quantum processing capabilities</li>
              <li>• Live trading integration</li>
              <li>• Real-time market analytics dashboard</li>
              <li>• Binary pattern recognition system</li>
              <li>• Automated trading protocols</li>
              <li>• Advanced risk management features</li>
              <li>• Decentralized governance integration</li>
              <li>• Mobile quantum interface</li>
            </ul>
          </div>
        </div>
      </CyberModal>

      <ComingSoonModal 
        isOpen={showComingSoon} 
        onClose={() => setShowComingSoon(false)} 
      />
    </div>
  );
}
export default App;