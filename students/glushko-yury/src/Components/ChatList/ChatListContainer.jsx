import { connect } from 'react-redux';
import {
  updateAddChatInputValue,
  deleteChat,
  addChat,
} from '../../redux/chats-reducer';
import ChatList from './ChatList';

const mapStateToProps = state => ({
  chats: state.messenger.chats,
  addChatInputValue: state.messenger.addChatInputValue,
  currentChat: state.messenger.currentChat,
});

export default connect(mapStateToProps, {
  updateAddChatInputValue,
  deleteChat,
  addChat,
})(ChatList);
