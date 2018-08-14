const configureSocket = () =>
  new WebSocket(
    process.env.REACT_APP_SOCKET_URL ||
      window.location.origin.replace('http', 'ws')
  );

export default configureSocket;
