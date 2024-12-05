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

function App() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);
  const [showMicNotice, setShowMicNotice] = useState(true);

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
                style={{
                  animation: 'fadeIn 2s ease-in'
                }}
  >
    Solana Overview & Learning Oracle - Your AI companion in the Solana memecoin market
  </p>
</div>

      {/* Spline Scene */}
      <spline-viewer 
        url="https://prod.spline.design/6FbqRO0O-wdz4vYF/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Social Links */}
      <div className="absolute top-4 right-4 flex gap-3">
        <a 
          href="https://twitter.com/YourTwitter" 
          target="_blank" 
          className="group relative px-6 py-2 overflow-hidden font-orbitron text-sm rounded-lg 
                     border-2 border-cyan-500/30 hover:border-cyan-400/60
                     transition-all duration-300"
        >
          <div className="absolute inset-0 w-0 bg-cyan-400/10 transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative text-cyan-400 group-hover:text-cyan-300">Twitter</span>
        </a>
        <a 
          href="https://t.me/YourTelegram" 
          target="_blank" 
          className="group relative px-6 py-2 overflow-hidden font-orbitron text-sm rounded-lg 
                     border-2 border-cyan-500/30 hover:border-cyan-400/60
                     transition-all duration-300"
        >
          <div className="absolute inset-0 w-0 bg-cyan-400/10 transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative text-cyan-400 group-hover:text-cyan-300">Telegram</span>
        </a>
      </div>

      {/* Main Action Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <button 
          onClick={() => window.open('YOUR_BUY_LINK', '_blank')}
          className="group relative px-8 py-3 overflow-hidden rounded-lg font-orbitron font-medium"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"></div>
          <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-400 to-blue-400"></div>
          <span className="relative text-black font-semibold">Launch App</span>
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

      {showMicNotice && (
  <div className="absolute left-4 top-1/2 -translate-y-1/2 max-w-md
                  animate-fadeIn">
    <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6
                    shadow-[0_0_15px_rgba(34,211,238,0.1)]">
      <div className="flex items-center gap-3 text-cyan-400 mb-4 font-orbitron">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
        </svg>
        <span className="font-semibold text-lg">Enable Microphone Access</span>
      </div>
      <p className="text-cyan-300/70 text-base mb-6 leading-relaxed">
        To interact with S.O.L.O using voice commands, please allow microphone access when prompted. This enables real-time voice interaction with your AI companion.
      </p>
      <div className="flex justify-end">
        <button 
          onClick={() => setShowMicNotice(false)}
          className="group relative px-6 py-2 overflow-hidden rounded-lg font-orbitron text-sm
                     border-2 border-cyan-500/30 hover:border-cyan-400/60
                     transition-all duration-300"
        >
          <div className="absolute inset-0 w-0 bg-cyan-400/10 transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative text-cyan-400 group-hover:text-cyan-300">Got it</span>
        </button>
      </div>
    </div>
  </div>
)}

      {/* How It Works Modal */}
      <CyberModal 
        isOpen={showHowItWorks} 
        onClose={() => setShowHowItWorks(false)}
        title="How S.O.L.O Works"
      >
        <div className="space-y-8">
          <p className="text-cyan-400 text-lg text-center mb-8 font-orbitron">
            S.O.L.O (Solana Overview & Learning Oracle) is an advanced AI agent designed to navigate the Solana memecoin market. With its autonomous learning capabilities and real-time analysis, it continuously scans millions of data points across the Solana ecosystem.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Market Analysis",
                icon: "📊",
                description: "Processes massive amounts of market data through sophisticated neural networks, identifying profitable trading opportunities in real-time."
              },
              {
                title: "Social Sentiment",
                icon: "🌍",
                description: "Analyzes social media trends, community growth, and market sentiment to predict potential memecoin movements before they happen."
              },
              {
                title: "Risk Management",
                icon: "🛡️",
                description: "Implements advanced risk management strategies, protecting users while maximizing potential returns in the volatile memecoin market."
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
              <li>• Launch of S.O.L.O AI trading system</li>
              <li>• Advanced market sentiment analysis</li>
              <li>• Real-time memecoin trend detection</li>
              <li>• Social sentiment tracking system</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-cyan-500/50 pl-4">
            <h3 className="text-cyan-400 font-bold font-orbitron">Coming Soon</h3>
            <ul className="text-gray-400 mt-2 space-y-2">
              <li>• Enhanced social sentiment analysis</li>
              <li>• Expanded memecoin market coverage</li>
              <li>• Advanced risk management features</li>
              <li>• Community integration tools</li>
            </ul>
          </div>
        </div>
      </CyberModal>
    </div>
  );
}

export default App;