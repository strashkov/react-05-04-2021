import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sendMessage, loadMessages } from "../actions/messageActions";
import { loadChats } from '../actions/chatActions';
import MessageField from "../components/MessageField.jsx";

const mapStateToProps = (store) => {
  return {
    chats: store.chatReducer.chats,
    messages: store.messageReducer.messages,
    isLoading: store.messageReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      sendMessage,
      loadMessages,
      loadChats,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
