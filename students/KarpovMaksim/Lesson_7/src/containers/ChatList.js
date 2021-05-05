import { connect } from 'react-redux';
import { addChat, deleteChat, loadChats } from '../actions/chatActions';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import ChatList from '../components/ChatList'

const mapStateToProps = (store) => ({
  chats: store.chatReducer.chats,
  isLoading: store.chatReducer.isLoading
});
const mapDispatchToProps = dispatch => bindActionCreators({ 
  addChat,
  push,
  deleteChat,
  loadChats
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);