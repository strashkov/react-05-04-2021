import { connect } from 'react-redux';
import { loadMessages, sendMessage } from '../actions/messageActions';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import MessageField from '../components/MessageField'

const mapStateToProps = (store) => ({
  messages: store.messageReducer.messages,
  isLoading: store.messageReducer.isLoading,
  chats: store.chatReducer.chats
});
const mapDispatchToProps = dispatch => bindActionCreators({ 
  push,
  loadMessages,
  sendMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);