import { connect } from 'react-redux';
import { addChat, deleteChat } from '../actions/chatActions';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import ChatList from '../components/ChatList'

const mapStateToProps = (store) => ({
  chats: store.chatReducer.chats,
});
const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push, deleteChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);