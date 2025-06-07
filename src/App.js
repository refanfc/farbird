
import React, { useEffect, useState } from "react";
import { Dynamic } from "@dynamic-labs/sdk";

export default function App() {
  const [dynamic, setDynamic] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const d = new Dynamic();
    setDynamic(d);

    d.connect()
      .then(() => setUser(d.user))
      .catch((e) => console.error("Login error", e));
  }, []);

  const handleLogin = () => {
    if (dynamic) {
      dynamic.connect().catch(console.error);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      {!user ? (
        <button onClick={handleLogin}>Login with Farcaster</button>
      ) : (
        <div>
          <p>Welcome, {user?.displayName || user?.username}</p>
          {/* UI lainnya */}
        </div>
      )}
    </div>
  );
}
