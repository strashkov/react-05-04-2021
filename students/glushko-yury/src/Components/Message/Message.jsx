const Messages = ({ messages }) => {
  const msgEl = messages.map(msg => <div key={msg.id}>{msg.text}</div>);
  return <div>{msgEl}</div>;
};

export default Messages;
