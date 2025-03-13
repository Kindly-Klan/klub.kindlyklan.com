'use client';

import React, { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';

interface ServerStatusData {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
}

const ServerStatus = () => {
  const [status, setStatus] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        setLoading(true);
        // Using the Minecraft Server API to fetch status
        const response = await fetch('/api/server-status');
        const data = await response.json();
        setStatus(data);
      } catch (error) {
        console.error('Error fetching server status:', error);
        setStatus({ online: false, players: { online: 0, max: 0 } });
      } finally {
        setLoading(false);
      }
    };

    fetchServerStatus();
    // Refresh every 60 seconds
    const interval = setInterval(fetchServerStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-blue-300">
        <div className="animate-pulse h-2.5 w-2.5 rounded-full bg-blue-400"></div>
        Comprobando estado...
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      {status?.online ? (
        <>
          <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
          <span className="text-green-400">Servidor online</span>
          <span className="flex items-center gap-1 text-blue-200">
            <FaUsers className="text-blue-300" />
            {status.players.online}/{status.players.max} jugadores
          </span>
        </>
      ) : (
        <>
          <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
          <span className="text-red-400">Servidor offline</span>
        </>
      )}
    </div>
  );
};

export default ServerStatus;