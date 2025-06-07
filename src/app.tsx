import { useState } from "react";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { base } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { frameMetadata } from "./frame";

const config = createConfig({
  autoConnect: true,
  publicClient: configureChains([base], [publicProvider()]).publicClient,
});

function FlyingBirds({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const top = Math.random() * 80 + 10; // random top % position
        const delay = Math.random() * 3; // random animation delay
        return (
          <div
            key={i}
            className="absolute text-2xl animate-fly"
            style={{
              top: `${top}%`,
              left: "-50px",
              animationDelay: `${delay}s`,
            }}
          >
            🐥
          </div>
        );
      })}
    </>
  );
}

function FarbirdGame() {
  const [launchCount, setLaunchCount] = useState(0);

  const handleLaunch = () => {
    setLaunchCount((prev) => prev + 1);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-sky-100 text-center p-4 overflow-hidden">
      <FlyingBirds count={launchCount} />
      <h1 className="text-4xl font-bold mb-4">🐥 Farbird</h1>
      <p className="mb-2 text-lg">Birds launched: {launchCount}</p>
      <button
        onClick={handleLaunch}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg"
      >
        🚀 Launch Bird!
      </button>
      <p className="text-sm mt-6 text-gray-600">Send them flying!</p>
    </div>
  );
}

function App() {
  return (
    <>
      <WagmiConfig config={config}>
        <FarbirdGame />
      </WagmiConfig>
    </>
  );
}

export default App;
