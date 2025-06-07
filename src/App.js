import React, { useEffect, useState } from "react";
import { AuthClient } from "@farcaster/auth";

export default function App() {
  const [user, setUser] = useState(null);
  const [authUrl, setAuthUrl] = useState(null);

  useEffect(() => {
    const client = new AuthClient({
      rpcUrl: "https://mainnet.base.org", // atau Base RPC
      domain: "farbird.rho.vercel.app", // ubah ke domain kamu di Vercel
    });

    client.init().then(() => {
      if (client.isAuthenticated()) {
        const fid = client.getFid();
        setUser({ fid });
      } else {
        setAuthUrl(client.getSignInUrl());
      }
    });
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: "auto", paddingTop: 100 }}>
      {!user ? (
        <a href={authUrl}>
          <button>Login with Farcaster</button>
        </a>
      ) : (
        <div>
          <h2>Welcome!</h2>
          <p>Farcaster FID: {user.fid}</p>
        </div>
      )}
    </div>
  );
}
