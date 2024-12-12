import { useState } from 'react';

// Modal Component
const CyberModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-cyan-500/50 rounded-lg w-full max-w-4xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-orbitron text-2xl font-bold text-cyan-400">{title}</h2>
          <button 
            onClick={onClose}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-cyan-500/50 rounded-lg p-6 text-center">
        <h2 className="font-orbitron text-3xl font-bold text-cyan-400 mb-4">Coming Soon</h2>
        <p className="text-cyan-300/70 mb-6">Live trading features will be available in the next update!</p>
        <button 
          onClick={onClose}
          className="px-6 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg
                     text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};



function App() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);
  const [showMicNotice, setShowMicNotice] = useState(true);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Title Section */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">
        <h1 className="font-orbitron text-7xl font-bold text-cyan-400 mb-2
                     animate-pulse
                     drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]
                     hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]
                     transition-all duration-300"
        >
          S.O.L.O
        </h1>
        <p className="font-orbitron text-sm text-cyan-300/80 max-w-2xl mx-auto
                    animate-fadeIn
                    drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]"
        >
          Solana Overview & Learning Oracle - Your AI companion in the Solana memecoin market
        </p>
      </div>

      {/* Spline Scene */}
      <spline-viewer 
        url="https://prod.spline.design/XDB7SmWGeOQth8sz/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Social Links */}
      <div className="fixed right-4 top-1/4 flex flex-col gap-4 z-20">
        <a 
          href="https://x.com/SOLOagentAI" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-lg 
                   bg-black/20 border-2 border-cyan-500/30
                   hover:border-cyan-400/60 hover:bg-cyan-400/10
                   transition-all duration-300"
        >
          {/* X (Twitter) Logo */}
          <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a 
          href="https://t.me/SOLOagentAI" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-lg 
                   bg-black/20 border-2 border-cyan-500/30
                   hover:border-cyan-400/60 hover:bg-cyan-400/10
                   transition-all duration-300"
        >
          {/* Telegram Logo */}
          <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.219-.548.219l.18-2.935 5.36-4.82c.23-.23-.054-.349-.354-.14l-6.627 4.174-2.853-.892c-.62-.196-.632-.62.129-.913l11.447-4.407c.52-.196.97.126.766.742z"/>
          </svg>
        </a>
      </div>

      {/* Live Trading Button */}
      <div className="absolute top-4 right-4 z-20">
        <button 
          onClick={() => setShowComingSoon(true)}
          className="group relative px-6 py-2 overflow-hidden font-orbitron text-sm rounded-lg 
                   bg-black/20 border-2 border-cyan-500/30
                   hover:border-cyan-400/60 transition-all duration-300"
        >
          <div className="absolute inset-0 w-0 bg-cyan-400/10 transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative text-cyan-400 group-hover:text-cyan-300">Live Trading</span>
        </button>
      </div>

      {/* Main Action Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <button 
          onClick={() => window.open('https://pump.fun/coin/AdL3KhnVnw2JBhmDoPVDd44uXpJnmqNysP2MsxAypump', '_blank')}
          className="group relative px-8 py-3 overflow-hidden rounded-lg font-orbitron font-medium"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"></div>
          <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-400 to-blue-400"></div>
          <span className="relative text-black font-semibold">Buy $SOLO</span>
        </button>
        
        <button 
          onClick={() => setShowHowItWorks(true)}
          className="group relative px-6 py-3 overflow-hidden rounded-lg font-orbitron"
        >
          <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-lg group-hover:border-cyan-400/60 transition-colors"></div>
          <div className="absolute inset-0 w-0 bg-cyan-400/10 transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative text-cyan-400 group-hover:text-cyan-300">How It Works</span>
        </button>
        
        <button 
          onClick={() => setShowChangelog(true)}
          className="group relative px-6 py-3 overflow-hidden rounded-lg font-orbitron"
        >
          <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-lg group-hover:border-cyan-400/60 transition-colors"></div>
          <div className="absolute inset-0 w-0 bg-cyan-400/10 transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative text-cyan-400 group-hover:text-cyan-300">Changelog</span>
        </button>
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
            To interact with S.O.L.O using voice commands, please allow microphone access when prompted. This enables real-time voice interaction with your AI companion.
          </p>
        </div>
      </div>

      {/* How It Works Modal */}
<CyberModal 
  isOpen={showHowItWorks} 
  onClose={() => setShowHowItWorks(false)}
  title="How S.O.L.O Works"
>
  <div className="space-y-8">
    <p className="text-cyan-400 text-lg text-center mb-8 font-orbitron">
      S.O.L.O (Solana Overview & Learning Oracle) leverages advanced quantum-neural architectures through its proprietary S.O.L.O Protocol. This revolutionary system enables seamless AI-human interaction while processing multi-dimensional market data across the Solana ecosystem.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Market Analysis",
          icon: "📊",
          description: "Utilizes quantum-enhanced neural networks to process market data through our proprietary Quantum Market Analysis Protocol (QMAP). This system analyzes over 1 million data points per second to identify high-probability trading opportunities."
        },
        {
          title: "Social Sentiment",
          icon: "🌍",
          description: "Employs advanced Natural Language Understanding (NLU) coupled with our Sentiment Amplification Layer (SAL) to decode complex social patterns and predict memecoin movements before they manifest in the market."
        },
        {
          title: "Risk Management",
          icon: "🛡️",
          description: "Implements Dynamic Risk Optimization Protocol (DROP) with real-time portfolio rebalancing. This system uses advanced stochastic modeling to maintain optimal risk-reward ratios in volatile market conditions."
        },
        {
          title: "SOLO Protocol",
          icon: "🧠",
          description: "Our revolutionary Voice-Neural Interface (VNI) enables direct neural-level communication between users and S.O.L.O's AI core, allowing for intuitive interaction and real-time decision making."
        },
        {
          title: "Quantum Processing",
          icon: "⚡",
          description: "Leverages quantum-inspired algorithms through our Quantum State Optimization (QSO) system to process complex market patterns across multiple dimensional planes simultaneously."
        },
        {
          title: "Neural Synthesis",
          icon: "🔄",
          description: "Utilizes Advanced Neural Synthesis (ANS) to combine market analysis, social sentiment, and user interaction into coherent, actionable trading strategies."
        }
      ].map((feature, index) => (
        <div key={index} className="p-6 bg-black/50 border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 transition-colors">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold text-cyan-400 mb-2 font-orbitron">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</CyberModal>

      {/* Changelog Modal */}
<CyberModal 
  isOpen={showChangelog} 
  onClose={() => setShowChangelog(false)}
  title="Changelog & Updates"
>
  <div className="space-y-6">
    <div className="border-l-2 border-cyan-500 pl-4">
      <h3 className="text-cyan-400 font-bold font-orbitron">Version 1.0.0 (Current)</h3>
      <ul className="text-gray-400 mt-2 space-y-2">
        <li>• Initial launch of S.O.L.O AI platform</li>
        <li>• Voice interaction with S.O.L.O AI implemented</li>
        <li>• $SOLO token successfully deployed on Solana</li>
        <li>• Website launch with 3D interactive robot</li>
        <li>• Basic memecoin market sentiment analysis</li>
        <li>• Social media integration (Twitter/Telegram)</li>
        <li>• Voice command recognition system</li>
      </ul>
    </div>
    
    <div className="border-l-2 border-cyan-500/50 pl-4">
      <h3 className="text-cyan-400 font-bold font-orbitron">Coming Soon (Version 1.1.0)</h3>
      <ul className="text-gray-400 mt-2 space-y-2">
        <li>• Text-based chat interface with S.O.L.O</li>
        <li>• Enhanced voice interaction capabilities</li>
        <li>• Live trading integration</li>
        <li>• Real-time memecoin market analytics</li>
        <li>• In-depth token analysis dashboard</li>
        <li>• Automated trading strategies</li>
        <li>• Advanced social sentiment tracking</li>
        <li>• Community governance features</li>
        <li>• Mobile app integration</li>
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