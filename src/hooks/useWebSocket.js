import { useEffect, useRef, useState, useCallback } from 'react';

// TODO
const useWebSocket = (url) => {
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const closeConnection = useCallback(() => {  // TODO: look into useCallback and memoization 
    if (socket.current) {
      socket.current.close();
      setIsConnected(false);
      console.log('WebSocket connection closed manually.');
    }
  }, []);

  useEffect(() => {
    socket.current = new WebSocket(url);

    socket.current.onopen = () => {
      console.log('WebSocket connection established.');
      setIsConnected(true);
    };

    socket.current.onmessage = (event) => {
      const data = event.data;
      console.log('WebSocket message received:', data);
      setMessages((prev) => [...prev, data]);
    };

    socket.current.onclose = () => {
      console.log('WebSocket connection closed.');
      setIsConnected(false);
    };

    socket.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      closeConnection();
    };
  }, [url, closeConnection]);

  return { messages, isConnected, closeConnection };
};

export default useWebSocket;
