import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const RealTimeComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // Connexion au serveur WebSocket
    const socket = io();

    // Écoute des messages du serveur WebSocket
    socket.on("message", (data: string) => {
      setMessage(data);
    });

    // Nettoyage lors du démontage du composant
    return () => {
      socket.disconnect(); // Déconnexion du serveur WebSocket
    };
  }, []); // Dépendance vide pour exécuter useEffect une seule fois au montage

  return (
    <div>
      <h2>Real-Time Messages:</h2>
      <p>{message}</p>
    </div>
  );
};

export default RealTimeComponent;
