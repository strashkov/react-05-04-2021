import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push, goBack, goForward } from "connected-react-router";
import {
  addChat,
  deleteChat,
  markChatUnread,
  markChatRead,
  loadChats,
} from "../actions/chatActions";
import ChatList from "../components/ChatList";

const mapStateToProps = (store) => {
  return {
    chats: store.chatReducer.chats,
    isLoading: store.chatReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addChat,
      deleteChat,
      push,
      goBack,
      goForward,
      markChatRead,
      markChatUnread,
      loadChats,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
