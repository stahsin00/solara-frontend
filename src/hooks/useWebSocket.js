import { useEffect, useRef, useState } from 'react';

const useWebSocket = (url) => {
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

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
      socket.current?.close();
    };
  }, [url]);

  return { messages, isConnected };
};

export default useWebSocket;
