import React, { useState, useEffect } from "react";
import { Dynamic } from "@dynamic-labs/sdk";

export default function App() {
  const [dynamic, setDynamic] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const d = new Dynamic();
    setDynamic(d);
  }, []);

  const handleLogin = () => {
    if (dynamic) {
      dynamic.connect().then(() => {
        setUser(dynamic.user);
      }).catch(console.error);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      {!user ? (
        <button onClick={handleLogin}>Login with Farcaster</button>
      ) : (
        <div>Welcome, {user.displayName || user.username}</div>
      )}
    </div>
  );
}
