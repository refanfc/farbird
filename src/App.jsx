import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  async function handleLogin() {
    try {
      // Step 1: Request signer from Warpcast / Farcaster wallet
      const response = await window.navigator.credentials.get({
        publicKey: {
          challenge: new Uint8Array(32), // You should replace this with a real challenge from your backend
          timeout: 60000,
          userVerification: "preferred",
        },
      });

      console.log('Signer response:', response);

      // Step 2: Store user state (you can store `response.id`, etc.)
      setUser({ id: response.id });

    } catch (err) {
      console.error('Login failed:', err);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 24 }}>
      {!user ? (
        <button onClick={handleLogin}>Login with Farcaster</button>
      ) : (
        <div>
          <p>Logged in as: {user.id}</p>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
